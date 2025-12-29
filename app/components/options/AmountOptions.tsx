import { View, Text } from 'react-native'

import ButtonOptions from './components/ButtonOptions'

import { AmountOptionsPropsType } from '../../types/props.types'

import { IOptionUser } from '../../interface/User'
import { optionStyle } from '../../styles/options.styles'

const AmountOptions = ({ amountOptions, setOptionsUser }: AmountOptionsPropsType) => {

    const selectAmountOptions = (number: number) => {
        setOptionsUser((optionData: IOptionUser) => ({
            ...optionData, amountOptions: number
        }))
    }

    return (
        <View style={optionStyle.containerAmountOptions}>
            <Text style={optionStyle.titleOption}>Selecciona la cantidad de opciones</Text>
            <ButtonOptions text='2' func={() => selectAmountOptions(2)} amountOptions={amountOptions} />
            <ButtonOptions text='4' func={() => selectAmountOptions(4)} amountOptions={amountOptions} />
            <ButtonOptions text='6' func={() => selectAmountOptions(6)} amountOptions={amountOptions} />
            <ButtonOptions text='8' func={() => selectAmountOptions(8)} amountOptions={amountOptions} />
        </View>
    )
}

export default AmountOptions