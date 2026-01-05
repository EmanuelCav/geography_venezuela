import { Text, Pressable } from 'react-native'

import { categoriesStyle } from '../../../styles/categories.styles'

import { ActionCategoryPropsType } from '../../../types/props.types'

const ActionCategory = ({ text, changeAllCategory, isSelect }: ActionCategoryPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
        {
            backgroundColor: pressed ? '#641824' : '#7A1E2D'
        },
        categoriesStyle.buttonActionCategory
    ]} onPress={() => changeAllCategory(isSelect)}>
        <Text style={categoriesStyle.textButtonActionCategory}>{text}</Text>
    </Pressable>
  )
}

export default ActionCategory