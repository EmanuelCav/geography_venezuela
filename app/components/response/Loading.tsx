import { useContext } from "react"
import { View, Image, Modal } from "react-native"

import { IGame } from "../../interface/Game"

import { responseStyle } from "../../styles/response.styles"

import { GameContext } from "../../server/context/game.context"

const Loading = () => {

    const { loading } = useContext<IGame>(GameContext)

    return (
        <Modal
            visible={loading}
            transparent
            animationType="fade"
            statusBarTranslucent
        >
            <View style={responseStyle.containerLoading}>
                <Image source={require('../../../assets/icon.gif')} alt="icon"
                    style={{ width: '40%', height: '40%' }} resizeMode="contain"
                />
            </View>
        </Modal>
    )
}

export default Loading