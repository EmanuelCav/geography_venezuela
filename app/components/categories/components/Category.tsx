import { Text, Pressable, Dimensions, View } from 'react-native'
import Checkbox from 'expo-checkbox'

import { categoriesStyle } from '../../../styles/categories.styles'

import { CategoryPropsType } from '../../../types/props.types'

const Category = ({ category, categoryAction }: CategoryPropsType) => {

  const changeCategory = () => {
    categoryAction!(category.category)
  }

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#4997D0' : '#3A7FB0',
      },
      categoriesStyle.containerCategory
    ]} onPress={changeCategory}>
      <View style={{ flex: 1 }}>
        <Text style={categoriesStyle.categoryText}>{category.category}</Text>
      </View>
      <Checkbox
        color={'#68b2e8'}
        value={category.isSelect}
        style={{ padding: Dimensions.get("window").height / 92.5 }}
        onValueChange={changeCategory}
      />
    </Pressable>
  )
}

export default Category