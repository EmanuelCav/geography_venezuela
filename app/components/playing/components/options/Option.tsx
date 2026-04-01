import { memo } from 'react'
import { Text, Pressable } from 'react-native'
import i18n from '../../../../../i18n'

import { playingStyles } from '../../../../styles/playing.styles'

import { OptionPropsTypes } from '../../../../types/props.types'

const Option = memo(({ option, nextQuestion, disabled }: OptionPropsTypes) => {

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#641824' : `${disabled ? '#dddddd' : '#7A1E2D'}`
            },
            playingStyles.containerOption]} onPress={() => nextQuestion(option)} disabled={disabled}>
            <Text adjustsFontSizeToFit style={playingStyles.textOption}>
                {i18n.t(option, { defaultValue: option })}
            </Text>
        </Pressable>
    )
})

export default Option