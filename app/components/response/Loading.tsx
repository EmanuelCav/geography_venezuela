import { useContext } from "react"
import { View, Image, Dimensions } from "react-native"

import { IGame } from "../../interface/Game"

import { responseStyle } from "../../styles/response.styles"

import { GameContext } from "../../server/context/game.context"

const Loading = () => {

    const { loading } = useContext<IGame>(GameContext)

    return (
        <>
            {
                loading &&
                <View style={responseStyle.containerLoading}>
                    <Image source={require('../../../assets/icon.gif')} alt="icon" width={Dimensions.get("window").width / 2} height={Dimensions.get("window").height / 2} resizeMode="center" />
                </View>
            }
        </>
    )
}

export default Loading