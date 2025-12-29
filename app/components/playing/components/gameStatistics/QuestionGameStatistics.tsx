import { Text } from 'react-native'

import { QuestionGameStatisticsPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const QuestionGameStatistics = ({ questions, numberQuestion }: QuestionGameStatisticsPropsType) => {
    return (
        <Text style={playingStyles.textGameStatistics}>{numberQuestion}/{questions}</Text>
    )
}

export default QuestionGameStatistics