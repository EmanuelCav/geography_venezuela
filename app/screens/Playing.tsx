import { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

import { IGame } from '../interface/Game'
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

import * as PlayingConstants from '../server/constants/playing.const';
import playingReducer from '../server/reducer/playing.reducer';
import { initialPlayingState } from '../server/value/playing.value';

import { helpsOptions } from '../helper/playing'

import { useConnection } from '../hooks/useConnection';
import { useDisableBack } from '../hooks/useDisableBack';
import { useAdsPlaying } from '../hooks/useAdsPlaying';

const Playing = ({ navigation, route }: PlayingType) => {

    const { amountOptions, helpsAction, helps, isAdd, countAction, correctAction, setIsReviewed } = useContext<IUser>(UserContext)
    const { questions } = useContext<IGame>(GameContext)

    const [state, dispatch] = useReducer(playingReducer, initialPlayingState)

    const [isExit, setIsExit] = useState<boolean>(false)

    useDisableBack()
    const isConnectionPlaying = useConnection()
    const { interstitial, rewarded, isIntersitialLoaded, isRewardedLoaded } = useAdsPlaying()

    const [helpType, setHelpType] = useState<HelpType>('help')

    const optionsHelped = useMemo(() => {
        return helpsOptions(
            !state.flags.isGameError ? questions[state.progress.numberQuestion] : state.gameErrors[state.progress.numberQuestion],
            amountOptions
        )
    }, [state.progress.numberQuestion, state.flags.isGameError])

    const nextQuestion = useCallback((value: string) => {

        if (value === (!state.flags.isGameError ? questions[state.progress.numberQuestion].answer : state.gameErrors[state.progress.numberQuestion].answer)) {
            dispatch({
                type: PlayingConstants.ANSWER_CORRECT
            })
        } else {
            if (!state.flags.isGameError) {
                dispatch({
                    type: PlayingConstants.ANSWER_INCORRECT,
                    payload: questions[state.progress.numberQuestion]
                })
            } else {
                dispatch({
                    type: PlayingConstants.ANSWER_INCORRECT,
                    payload: state.gameErrors[state.progress.numberQuestion]
                })
            }
        }

        dispatch({
            type: PlayingConstants.RESTART_ACTIONS_QUESTION
        })

        if (state.progress.numberQuestion === questions.length - 1 || state.progress.numberQuestion === state.gameErrors.length - 1) {
            dispatch({
                type: PlayingConstants.PRE_FINISH,
                payload: true
            })
        }
    }, [state.flags.isGameError, state.progress.numberQuestion, state.gameErrors, questions])

    const continueGame = () => {
        if (state.flags.isPreFinish) return

        dispatch({
            type: PlayingConstants.CONTINUE_GAME
        })
    }

    const preFinish = () => {
        dispatch({
            type: PlayingConstants.FINISH,
            payload: true
        })
    }

    const showErrors = () => {
        dispatch({
            type: PlayingConstants.SHOW_ERRORS
        })
    }

    const continueHome = async () => {

        setIsReviewed!(false)

        try {

            const storedCount = await AsyncStorage.getItem('reviewCount')
            const count = storedCount ? parseInt(storedCount, 10) : 0

            if (isConnectionPlaying) {
                if ((interstitial.loaded || isIntersitialLoaded) && isAdd && count !== 0) {
                    interstitial.show()
                }
            }

            navigation.replace('Home')

        } catch (error) {
            console.error("Error showing interstitial ad or navigate:", error);
            navigation.replace('Home')
        }
    }

    const changeHelp = async (type: HelpType) => {

        try {

            dispatch({
                type: PlayingConstants.HELPED,
                payload: true
            })

            setHelpType(type)

            if (type === 'add') {
                if (isConnectionPlaying) {
                    if (rewarded.loaded || isRewardedLoaded) {
                        rewarded.show()
                        dispatch({
                            type: PlayingConstants.ADDS,
                            payload: true
                        })
                    } else {
                        navigation.replace('Home')
                    }
                }
            }

        } catch (error) {
            console.error("Error showing rewarded ad:", error);
            navigation.replace('Home')
        }
    }

    const handleHelp = (type: HelpType) => {
        helpsAction!(type)
    }

    useEffect(() => {
        if (!state.flags.isGameError) {
            countAction!(questions[state.progress.numberQuestion].category)
            return
        }
    }, [state.progress.numberQuestion])

    useEffect(() => {
        if (!state.flags.isCorrect || state.flags.isGameError) return

        correctAction!(questions[state.progress.numberQuestion].category)
    }, [state.flags.isCorrect])

    useEffect(() => {
        if (state.flags.isHelped) {
            handleHelp(helpType)
        }
    }, [state.flags.isHelped])

    useEffect(() => {
        if (route.params.isConnection) {
            if (!isConnectionPlaying) {
                if (state.progress.numberQuestion === 0) {
                    navigation.replace("Categories", {
                        isPlaying: true
                    })
                } else {
                    dispatch({
                        type: PlayingConstants.PRE_FINISH,
                        payload: true
                    })
                }
            }
        }
    }, [isConnectionPlaying])

    return (
        <Container>
            <Question question={!state.flags.isGameError ? questions[state.progress.numberQuestion] : state.gameErrors[state.progress.numberQuestion]} />
            <GameStatistics seconds={state.time.seconds} dispatch={dispatch} questions={!state.flags.isGameError ? questions.length : state.gameErrors.length}
                numberQuestion={state.progress.numberQuestion + 1} realSeconds={state.time.realSeconds} isGameError={state.flags.isGameError}
                isCorrect={state.flags.isCorrect} isIncorrect={state.flags.isIncorrect} isFinish={state.flags.isFinish} isPreFinish={state.flags.isPreFinish}
                isHelped={state.flags.isHelped} helps={helps} changeHelp={changeHelp} exit={setIsExit}
            />
            {
                isExit && <ShowExit continueHome={continueHome} setIsExit={setIsExit} />
            }
            {
                (state.flags.isCorrect || state.flags.isIncorrect) ?
                    <Answer answer={state.flags.isCorrect} correctAnswer={!state.flags.isGameError ? questions[state.progress.numberQuestion].answer : state.gameErrors[state.progress.numberQuestion].answer} continueGame={continueGame} />
                    :
                    <Options options={!state.flags.isGameError ? questions[state.progress.numberQuestion].options! : state.gameErrors[state.progress.numberQuestion].options!} nextQuestion={nextQuestion} isHelped={state.flags.isHelped} optionsHelped={optionsHelped} />
            }
            {
                state.flags.isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                state.flags.isFinish && <Finish seconds={state.time.realSeconds} corrects={state.progress.corrects} questions={!state.flags.isGameError ? questions.length : state.gameErrors.length} isRecompensadoLoaded={isRewardedLoaded || rewarded.loaded}
                    showErrors={showErrors} continueHome={continueHome} isGameError={state.flags.isGameError} isAdd={state.flags.isAdds} changeHelp={changeHelp} isConnection={route.params.isConnection} isConnectionPlaying={isConnectionPlaying} />
            }
        </Container>
    )
}

export default Playing