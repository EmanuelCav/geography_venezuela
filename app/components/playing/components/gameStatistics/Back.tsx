import { Pressable, Text } from "react-native"

import { playingStyles } from "../../../../styles/playing.styles"

const Back = ({ exit }: { exit: (isExit: boolean) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#4997D0' : '#3A7FB0',
            },
            playingStyles.buttonHelp
        ]} onPress={() => exit(true)}>
            <Text style={playingStyles.helpText}>Salir</Text>
        </Pressable>
    )
}

export default Back