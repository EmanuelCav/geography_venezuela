import { View, Text } from 'react-native'

import { ICategory } from '../../interface/Game'

import { statiscsStyles } from '../../styles/statistics.styles'

import { totalCorrects, totalQuestions } from '../../helper/statistics'

const HeaderStatistics = ({ categories }: { categories: ICategory[] }) => {
    return (
        <View style={statiscsStyles.containerHeaderStatistics}>
            <Text style={statiscsStyles.statisticText}>Cantidad de preguntas: {totalQuestions(categories)}</Text>
            <Text style={statiscsStyles.statisticText}>
                Correctas: {totalCorrects(categories)} ({totalQuestions(categories) > 0 ? ((100 * totalCorrects(categories)) / totalQuestions(categories)).toFixed(2) : 0}%)
            </Text>
        </View>
    )
}

export default HeaderStatistics