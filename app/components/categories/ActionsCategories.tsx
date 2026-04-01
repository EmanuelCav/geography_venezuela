import { View } from 'react-native'
import i18n from '../../../i18n';

import { categoriesStyle } from '../../styles/categories.styles'

import ActionCategory from './components/ActionCategory'

const ActionsCategories = ({ categoryAllAction }: { categoryAllAction: (isSelect: boolean) => void }) => {

  const changeAllCategory = (isSelect: boolean) => {
    categoryAllAction(isSelect)
  }

  return (
    <View style={categoriesStyle.containerActionsCategories}>
      <ActionCategory text={i18n.t("selectAll")} changeAllCategory={changeAllCategory} isSelect={true} />
      <ActionCategory text={i18n.t("removeAll")} changeAllCategory={changeAllCategory} isSelect={false} />
    </View>
  )
}

export default ActionsCategories