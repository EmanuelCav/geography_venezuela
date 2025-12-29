import { ScrollView, View } from 'react-native'

import { ICategory } from '../../interface/Game'

import { statiscsStyles } from '../../styles/statistics.styles'

import Statistic from './components/Statistic'

const BodyStatistics = ({ categories }: { categories: ICategory[] }) => {
    return (
        <View style={statiscsStyles.containerBodyStatistics}>
            <ScrollView>
                {
                    categories.map((category: ICategory, index: number) => {
                        return <Statistic category={category} key={index} />
                    })
                }
            </ScrollView>
        </View>
    )
}

export default BodyStatistics