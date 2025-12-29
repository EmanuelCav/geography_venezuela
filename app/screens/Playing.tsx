import { useContext, useEffect, useState } from 'react'
import { BackHandler, Platform, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { EXPO_INTERSTITIAL, EXPO_RECOMPESADO } from '@env';
import { fetch } from "@react-native-community/netinfo";

import allQuestions from '../../assets/questions.json'

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

import { LOADING } from '../server/constants/game.const';

import { IGame, IQuestion } from '../interface/Game'
import { IUser } from '../interface/User'
import { PlayingType } from '../types/props.types'
import { HelpType } from '../types/key.props';

import Container from '../components/components/Container';
import Question from '../components/playing/Question'
import GameStatistics from '../components/playing/GameStatistics'
import Options from '../components/playing/Options'
import Answer from '../components/playing/Answer'
import PreFinish from '../components/playing/PreFinish'
import Finish from '../components/playing/Finish'
import ShowExit from '../components/playing/ShowExit';

import { helpsOptions } from '../helper/playing'
import { emptyOptions } from '../helper/game'

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${EXPO_INTERSTITIAL}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const adUnitIdReward = __DEV__ ? TestIds.REWARDED : `${EXPO_RECOMPESADO}`;

const rewarded = RewardedAd.createForAdRequest(adUnitIdReward, {
    keywords: ['fashion', 'clothing'],
});

const Playing = ({ navigation, route }: PlayingType) => {

    const { amountOptions, helpsAction, helps, isAdd, countAction, correctAction, setIsReviewed } = useContext<IUser>(UserContext)
    const { questions, dispatch } = useContext<IGame>(GameContext)

    const [seconds, setSeconds] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [realSeconds, setRealSeconds] = useState<number>(0)
    const [realMinutes, setRealMinutes] = useState<number>(0)

    const [numberQuestion, setNumberQuestion] = useState<number>(0)
    const [corrects, setCorrects] = useState<number>(0)

    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
    const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
    const [isFinish, setIsFinish] = useState<boolean>(false)
    const [isGameError, setIsGameError] = useState<boolean>(false)
    const [isHelped, setIsHelped] = useState<boolean>(false)
    const [isAdds, setIsAdds] = useState<boolean>(false)
    const [isIntersitialLoaded, setIsIntersitialLoaded] = useState<boolean>(false)
    const [isRecompensadoLoaded, setIsRecompensadoLoaded] = useState<boolean>(false)
    const [isExit, setIsExit] = useState<boolean>(false)
    const [isConnectionPlaying, setIsConnectionPlaying] = useState<boolean>(true)

    const [errors, setErrors] = useState<IQuestion[]>([])
    const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

    const [helpType, setHelpType] = useState<HelpType>('help')
    const [optionsHelped, setOptionsHelped] = useState<string[]>(helpsOptions(questions[numberQuestion], amountOptions))

    const nextQuestion = (value: string) => {

        if (value === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
            setIsCorrect(true)
            setCorrects(corrects + 1)
        } else {
            if (!isGameError) {
                setErrors([...errors, questions[numberQuestion]])
            } else {
                setErrors([...errors, gameErrors[numberQuestion]])
            }

            setIsIncorrect(true)
        }

        setRealSeconds(seconds)
        setRealMinutes(minutes)

        if (numberQuestion === questions.length - 1 || numberQuestion === gameErrors.length - 1) {
            setIsPreFinish(true)
        }

        setIsHelped(false)

    }

    const continueGame = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setRealSeconds(0)
        setRealMinutes(0)

        if (isPreFinish) return

        setNumberQuestion(numberQuestion + 1)
    }

    const preFinish = () => {
        setIsFinish(true)
    }

    const showErrors = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setIsPreFinish(false)
        setIsFinish(false)
        setIsGameError(true)
        setNumberQuestion(0)
        setCorrects(0)
        setIsHelped(false)
        setGameErrors(errors)
        setErrors([])
        setOptionsHelped([])
    }

    const continueHome = async () => {

        const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        setNumberQuestion(0)
        setIsReviewed!(false)

        try {

            const storedCount = await AsyncStorage.getItem('reviewCount')
            const count = storedCount ? parseInt(storedCount, 10) : 0

            if (isConnectionPlaying) {
                if ((interstitial.loaded || isIntersitialLoaded) && isAdd && count !== 0) {
                    interstitial.show()
                }
            }

            navigation.navigate('Home')

        } catch (error) {
            console.error("Error showing interstitial ad or navigate:", error);
            navigation.navigate('Home')
        }
    }

    const changeHelp = async (type: HelpType) => {

        try {

            setIsHelped(true)
            setHelpType(type)

            if (type === 'add') {
                if (isConnectionPlaying) {
                    if (rewarded.loaded || isRecompensadoLoaded) {
                        rewarded.show()
                        setIsAdds(true)
                    } else {
                        navigation.navigate('Home')
                    }
                }
            }

        } catch (error) {
            console.error("Error showing rewarded ad:", error);
            navigation.navigate('Home')
        }
    }

    const handleHelp = (type: HelpType) => {
        helpsAction!(type)
    }

    useEffect(() => {
        dispatch!({
            type: LOADING,
            payload: false
        })
    }, [])

    useEffect(() => {

        fetch().then(conn => conn).then(state => setIsConnectionPlaying(state.isConnected!));

        if (!isGameError) {
            countAction!(questions[numberQuestion].category)
            setOptionsHelped(helpsOptions(questions[numberQuestion], amountOptions))
            return
        }

        setOptionsHelped(helpsOptions(gameErrors[numberQuestion], amountOptions))

    }, [numberQuestion])

    useEffect(() => {
        if (isCorrect && !isGameError) {
            correctAction!(questions[numberQuestion].category)
        }
    }, [corrects])

    useEffect(() => {
        if (isHelped && route.params.isConnection) {
            handleHelp(helpType)
        }
    }, [isHelped])

    useEffect(() => {

        const loadInterstitialAd = () => {
            try {
                interstitial.load();
            } catch (error) {
                console.error("Error loading interstitial ad:", error);
            }
        };

        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setIsIntersitialLoaded(true)
        });

        const unsubscribeOpened = interstitial.addAdEventListener(AdEventType.OPENED, () => {
            if (Platform.OS === 'ios') {
                StatusBar.setHidden(true);
            }
        });

        const unsubscribedClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
            if (Platform.OS === 'ios') {
                StatusBar.setHidden(false);
            }

            setIsIntersitialLoaded(false)
            loadInterstitialAd();
        });

        loadInterstitialAd();

        return () => {
            unsubscribeLoaded()
            unsubscribeOpened()
            unsubscribedClosed()
        };
    }, []);

    useEffect(() => {

        const loadRewardedAd = () => {
            try {
                rewarded.load();
            } catch (error) {
                console.error("Error loading rewarded ad:", error);
            }
        };

        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setIsRecompensadoLoaded(true)
        });

        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            () => {
                setIsRecompensadoLoaded(false)
            },
        );

        loadRewardedAd()

        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    useEffect(() => {
        if (route.params.isConnection) {
            if (!isConnectionPlaying) {
                if (numberQuestion === 0) {
                    const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
                    emptyOptions(optionsAllQuestions)
                    navigation.replace("Categories", {
                        isPlaying: true
                    })
                } else {
                    setIsPreFinish(true)
                }
            }
        }
    }, [isConnectionPlaying])

    return (
        <Container>
            <Question question={!isGameError ? questions[numberQuestion] : gameErrors[numberQuestion]} />
            <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
                questions={!isGameError ? questions.length : gameErrors.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes} isGameError={isGameError}
                isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish} isHelped={isHelped} helps={helps} changeHelp={changeHelp} exit={setIsExit}
            />
            {
                isExit && <ShowExit continueHome={continueHome} setIsExit={setIsExit} />
            }
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
                    :
                    <Options options={!isGameError ? questions[numberQuestion].options : gameErrors[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={amountOptions} isHelped={isHelped} optionsHelped={optionsHelped} />
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? questions.length : gameErrors.length} isRecompensadoLoaded={isRecompensadoLoaded || rewarded.loaded}
                    showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} isAdd={isAdds} changeHelp={changeHelp} isConnection={route.params.isConnection} isConnectionPlaying={isConnectionPlaying} />
            }
        </Container>
    )
}

export default Playing