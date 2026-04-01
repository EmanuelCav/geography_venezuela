import { Pressable, Text } from "react-native"

import i18n from '../../../../../i18n';

import { playingStyles } from "../../../../styles/playing.styles"

const Back = ({ exit }: { exit: (isExit: boolean) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#641824' : '#7A1E2D',
            },
            playingStyles.buttonHelp
        ]} onPress={() => exit(true)}>
            <Text style={playingStyles.helpText}>{i18n.t("exit")}</Text>
        </Pressable>
    )
}

export default Back