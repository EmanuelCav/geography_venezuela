import { memo } from 'react';
import { View, Text } from 'react-native'
import i18n from '../../../../i18n';

import { ICategory } from '../../../interface/Game'

import { statiscsStyles } from '../../../styles/statistics.styles'

const Statistic = memo(({ category }: { category: ICategory }) => {
    return (
        <View style={statiscsStyles.containerStatistic}>
            <Text style={statiscsStyles.categoryText}>{i18n.t(category.category, { defaultValue: category.category })}</Text>
            <Text style={statiscsStyles.statisticText}>{i18n.t("amountQuestionsStatistic")}: {category.questions}</Text>
            <Text style={statiscsStyles.statisticText}>
                {i18n.t("corrects")}: {category.corrects} ({category.questions > 0 ? ((100 * category.corrects) / category.questions).toFixed(2) : 0}%)
            </Text>
        </View>
    )
})

export default Statistic