import { Text, Pressable, Dimensions } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import { OptionPropsTypes } from '../../../../types/props.types'

const Option = ({ option, amountOptions, nextQuestion, disabled }: OptionPropsTypes) => {

    const usersOptions = (): number => {
        if (amountOptions === 2) {
            return 18
        }

        if (amountOptions === 4) {
            return 16
        }

        if (amountOptions === 6) {
            return 14
        }

        if (amountOptions === 8) {
            return 12
        }

        return 16
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#4997D0' : `${disabled ? '#dddddd' : '#3A7FB0' }` 
            },
            playingStyles.containerOption]} onPress={() => nextQuestion(option)} disabled={disabled}>
            <Text adjustsFontSizeToFit style={[playingStyles.textOption, {
                fontSize: usersOptions()
            }]}>{option}</Text>
        </Pressable>
    )
}

export default Option