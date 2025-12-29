import { View, Text } from 'react-native'

import { categoriesStyle } from '../../styles/categories.styles'

const TitleCategories = () => {
  return (
    <View style={categoriesStyle.containerTitleCategories}>
        <Text style={categoriesStyle.textTitleCategories}>Selecciona los temas para iniciar</Text>
    </View>
  )
}

export default TitleCategories