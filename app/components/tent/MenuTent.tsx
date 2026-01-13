import { View } from 'react-native'

import ElementTent from './components/ElementTent'

import { MenuTentPropsType } from '../../types/props.types';

import { tentStyle } from '../../styles/tent.styles';

const MenuTent = ({ elements, handleBuy, isAdd }: MenuTentPropsType) => {

    return (
        <View style={tentStyle.containerMenuTent}>
            {
                elements.map((element, index) => {
                    return <ElementTent handleBuy={handleBuy} element={element} index={index} isAdd={isAdd} key={index} />
                })
            }
        </View>
    )
}

export default MenuTent