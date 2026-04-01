import { View, Text } from 'react-native'
import i18n from '../../../../../i18n'

import { StatisticsFinishPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

import { formatTime } from '../../../../helper/playing'

const StatisticsFinish = ({ seconds, questions, corrects }: StatisticsFinishPropsType) => {
    return (
        <View style={playingStyles.containerStatisticsFinish}>
            <Text style={playingStyles.textPreFinish}>
                {i18n.t("amountQuestionsStatistic")}: {questions}
            </Text>

            <Text style={playingStyles.textPreFinish}>
                {i18n.t("correctsAnswer")}: {corrects}
            </Text>

            <Text style={playingStyles.textPreFinish}>
                {i18n.t("time")}: {formatTime(seconds)}
            </Text>
        </View>
    )
}

export default StatisticsFinish