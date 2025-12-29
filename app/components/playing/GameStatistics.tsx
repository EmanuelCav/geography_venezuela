import { View } from 'react-native'

import Time from './components/gameStatistics/Time'
import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'
import Helps from './components/gameStatistics/Helps'
import Back from './components/gameStatistics/Back'

import { playingStyles } from '../../styles/playing.styles'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ seconds, minutes, setSeconds, setMinutes, numberQuestion, questions, realSeconds, realMinutes, isCorrect, isIncorrect, isFinish, isPreFinish, helps, changeHelp, isHelped, isGameError, exit }: GameStatisticsPropsType) => {
    return (
        <>
            {
                isGameError ?
                    <View style={playingStyles.containerGameStatistics}>
                        {
                            (isCorrect || isIncorrect) ? <Back exit={exit} /> :
                                <Helps isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} helps={helps} changeHelp={changeHelp} />
                        }
                    </View> :
                    <View style={playingStyles.containerGameStatistics}>
                        <Time minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} realSeconds={realSeconds} realMinutes={realMinutes}
                            isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
                        />
                        {
                            (isCorrect || isIncorrect) ? <Back exit={exit} /> :
                                <Helps isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} helps={helps} changeHelp={changeHelp} />
                        }
                        <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
                    </View>
            }
        </>
    )
}

export default GameStatistics