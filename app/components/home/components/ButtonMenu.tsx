import { Text, Pressable } from 'react-native'

import { ButtonMenuPropsType } from '../../../types/props.types'

import { homeStyles } from '../../../styles/home.styles'

const ButtonMenu = ({ text, func, disabled }: ButtonMenuPropsType) => {
  return (
    <Pressable onPress={func} style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#641824' : disabled ? '#dddddd' : '#7A1E2D',
      },
      homeStyles.buttonMenu]} disabled={disabled}>
      <Text style={homeStyles.buttonMenuText}>{text}</Text>
    </Pressable >
  )
}

export default ButtonMenu