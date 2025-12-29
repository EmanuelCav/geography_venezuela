import { Pressable, Text, View } from "react-native"

import { ShowExitPropsType } from "../../types/props.types"

import { playingStyles } from "../../styles/playing.styles"

const ShowExit = ({ continueHome, setIsExit }: ShowExitPropsType) => {
    return (
        <View style={playingStyles.containerPreFinish}>
            <View style={playingStyles.containFinish}>
                <Text style={playingStyles.textPreFinish}>¿Estás seguro de que deseas salir?</Text>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#4997D0' : '#3A7FB0',
                    },
                    playingStyles.containerHelpsAdd
                ]} onPress={continueHome}>
                    <Text style={playingStyles.textHelpGame}>SALIR</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#4997D0' : '#3A7FB0',
                    },
                    playingStyles.containerHelpsAdd
                ]} onPress={() => setIsExit(false)}>
                    <Text style={playingStyles.textHelpGame}>CANCELAR</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ShowExit