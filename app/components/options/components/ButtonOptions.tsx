import { Pressable, Text } from 'react-native'

import { ButtonOptionsPropsType } from '../../../types/props.types'

import { optionStyle } from '../../../styles/options.styles'

const ButtonOptions = ({ text, func, amountOptions }: ButtonOptionsPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#4997D0' : Number(text) === amountOptions ? '#3A7FB0' : "#ffffff",
            },
            optionStyle.buttonOption
        ]}
            onPress={() => func(Number(text))}>
            <Text style={amountOptions === Number(text) ? optionStyle.textButtonOption : optionStyle.textButtonOptionNotSelected}>{text}</Text>
        </Pressable >
    )
}

export default ButtonOptions