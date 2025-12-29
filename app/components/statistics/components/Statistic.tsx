import { View, Text } from 'react-native'

import { ICategory } from '../../../interface/Game'

import { statiscsStyles } from '../../../styles/statistics.styles'

const Statistic = ({ category }: { category: ICategory }) => {
    return (
        <View style={statiscsStyles.containerStatistic}>
            <Text style={statiscsStyles.categoryText}>{category.category}</Text>
            <Text style={statiscsStyles.statisticText}>Cantidad de preguntas: {category.questions}</Text>
            <Text style={statiscsStyles.statisticText}>
                Correctas: {category.corrects} ({category.questions > 0 ? ((100 * category.corrects) / category.questions).toFixed(2) : 0}%)
            </Text>
        </View>
    )
}

export default Statistic