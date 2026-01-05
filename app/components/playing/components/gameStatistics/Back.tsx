import { Pressable, Text } from "react-native"

import { playingStyles } from "../../../../styles/playing.styles"

const Back = ({ exit }: { exit: (isExit: boolean) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#641824' : '#7A1E2D',
            },
            playingStyles.buttonHelp
        ]} onPress={() => exit(true)}>
            <Text style={playingStyles.helpText}>Salir</Text>
        </Pressable>
    )
}

export default Back