import { memo } from 'react'
import { Pressable, Text } from 'react-native'

import { ButtonOptionsPropsType } from '../../../types/props.types'

import { optionStyle } from '../../../styles/options.styles'

const ButtonOptions = memo(({ value, onPress, amountOptions }: ButtonOptionsPropsType) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#641824'
                        : value === amountOptions
                            ? '#7A1E2D'
                            : '#ffffff',
                },
                optionStyle.buttonOption
            ]}
            onPress={() => onPress(value)}
        >
            <Text style={value === amountOptions
                ? optionStyle.textButtonOption
                : optionStyle.textButtonOptionNotSelected}>
                {value}
            </Text>
        </Pressable>
    )
})

export default ButtonOptions