import { Pressable, Text, View } from 'react-native'

import { ElementTentPropsType } from '../../../types/props.types'

import { tentStyle } from '../../../styles/tent.styles'

const ElementTent = ({ element, handleBuy }: ElementTentPropsType) => {
    return (
        <View style={tentStyle.containElement}>
            <Text style={tentStyle.titleElement}>{element.displayName}</Text>
            <Text style={tentStyle.priceElement}>{element.displayPrice}</Text>
            <Pressable onPress={() => handleBuy(element)} style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#641824' : '#7A1E2D',
                },
                tentStyle.buttonMenu]}>
                <Text style={tentStyle.buttonMenuText}>Comprar</Text>
            </Pressable>
        </View>
    )
}

export default ElementTent