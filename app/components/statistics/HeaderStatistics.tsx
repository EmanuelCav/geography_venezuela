import { View, Text } from 'react-native'
import i18n from '../../../i18n';

import { ICategory } from '../../interface/Game'

import { statiscsStyles } from '../../styles/statistics.styles'

import { totalCorrects, totalQuestions } from '../../helper/statistics'

const HeaderStatistics = ({ categories }: { categories: ICategory[] }) => {
    return (
        <View style={statiscsStyles.containerHeaderStatistics}>
            <Text style={statiscsStyles.categoryText}>{i18n.t("total")}</Text>
            <Text style={statiscsStyles.statisticText}>{i18n.t("amountQuestionsStatistic")}: {totalQuestions(categories)}</Text>
            <Text style={statiscsStyles.statisticText}>
                {i18n.t("corrects")}: {totalCorrects(categories)} ({totalQuestions(categories) > 0 ? ((100 * totalCorrects(categories)) / totalQuestions(categories)).toFixed(2) : 0}%)
            </Text>
        </View>
    )
}

export default HeaderStatistics