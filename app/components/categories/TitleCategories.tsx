import { View, Text } from 'react-native'
import i18n from '../../../i18n';

import { categoriesStyle } from '../../styles/categories.styles'

const TitleCategories = () => {
  return (
    <View style={categoriesStyle.containerTitleCategories}>
        <Text style={categoriesStyle.textTitleCategories}>{i18n.t("titleCategories")}</Text>
    </View>
  )
}

export default TitleCategories