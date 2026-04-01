import { View } from 'react-native'
import { useContext } from 'react'
import i18n from '../../../i18n';

import { homeStyles } from '../../styles/home.styles'

import { MenuPropsType } from '../../types/props.types'
import { IUser } from '../../interface/User';

import ButtonMenu from './components/ButtonMenu'

import { UserContext } from '../../server/context/user.context';

const Menu = ({ navigation, categories, amountOptions, amountQuestions, gameAction, isConnection, categoryAllAction }: MenuPropsType) => {

  const { setIsFirstStart, isFirstStart } = useContext<IUser>(UserContext)

  const start = () => {

    if (!isFirstStart) {
      categoryAllAction(false)
      setIsFirstStart!(true)

      navigation.replace('Categories', {
        isPlaying: true
      })

      return
    }

    if (isConnection) {
      if (categories.filter(c => c.isSelect).length === 0) {
        navigation.replace('Categories', {
          isPlaying: true
        })

        return
      }
    } else {
      if (categories.filter(c => !c.isImage).filter(c => c.isSelect).length === 0) {
        navigation.replace('Categories', {
          isPlaying: true
        })

        return
      }
    }

    gameAction!(isConnection ? categories : categories.filter(c => !c.isImage), amountQuestions, amountOptions, navigation, isConnection)
  }

  const category = () => {
    if (!isFirstStart) {
      categoryAllAction(false)
      setIsFirstStart!(true)
    }

    navigation.navigate('Categories', {
      isPlaying: false
    })
  }

  const options = () => {
    navigation.navigate('Options')
  }

  const statistics = () => {
    navigation.navigate('Statistics')
  }

  const tent = () => {
    navigation.navigate('Tent')
  }

  return (
    <View style={homeStyles.containerMenu}>
      <ButtonMenu text={i18n.t("start")} func={start} disabled={false} />
      <ButtonMenu text={i18n.t("categories")} func={category} disabled={false} />
      <ButtonMenu text={i18n.t("options")} func={options} disabled={false} />
      <ButtonMenu text={i18n.t("statistics")} func={statistics} disabled={false} />
      <ButtonMenu text={i18n.t("tent")} func={tent} disabled={false} />
    </View>
  )
}

export default Menu