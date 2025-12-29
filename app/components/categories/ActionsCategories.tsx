import { View } from 'react-native'

import { categoriesStyle } from '../../styles/categories.styles'

import ActionCategory from './components/ActionCategory'

const ActionsCategories = ({ categoryAllAction }: { categoryAllAction: (isSelect: boolean) => void }) => {

  const changeAllCategory = (isSelect: boolean) => {
    categoryAllAction(isSelect)
  }

  return (
    <View style={categoriesStyle.containerActionsCategories}>
        <ActionCategory text='Elegir todo' changeAllCategory={changeAllCategory} isSelect={true} />
        <ActionCategory text='Quitar todo' changeAllCategory={changeAllCategory} isSelect={false}/>
    </View>
  )
}

export default ActionsCategories