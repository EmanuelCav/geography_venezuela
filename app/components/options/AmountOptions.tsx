import { useCallback } from 'react';
import { View, Text } from 'react-native'
import i18n from '../../../i18n';

import ButtonOptions from './components/ButtonOptions'

import { AmountOptionsPropsType } from '../../types/props.types'

import { optionStyle } from '../../styles/options.styles'

const AmountOptions = ({ amountOptions, setOptionsUser }: AmountOptionsPropsType) => {

    const selectAmountOptions = useCallback((number: number) => {
        setOptionsUser(optionData => ({
            ...optionData,
            amountOptions: number
        }))
    }, [setOptionsUser])

    return (
        <View style={optionStyle.containerAmountOptions}>
            <Text style={optionStyle.titleOption}>
                {i18n.t("titleOptions")}
            </Text>

            <View style={optionStyle.gridButtons}>
                <ButtonOptions value={2} onPress={selectAmountOptions} amountOptions={amountOptions} />
                <ButtonOptions value={4} onPress={selectAmountOptions} amountOptions={amountOptions} />
                <ButtonOptions value={6} onPress={selectAmountOptions} amountOptions={amountOptions} />
                <ButtonOptions value={8} onPress={selectAmountOptions} amountOptions={amountOptions} />
            </View>
        </View>
    )
}

export default AmountOptions