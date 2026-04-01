import { Pressable, Text, View, Modal } from "react-native"

import i18n from '../../../i18n';

import { ShowExitPropsType } from "../../types/props.types"

import { playingStyles } from "../../styles/playing.styles"

const ShowExit = ({ continueHome, setIsExit }: ShowExitPropsType) => {
    return (
        <Modal
            visible
            transparent
            animationType="fade"
            statusBarTranslucent
        >
            <View style={playingStyles.containerPreFinish}>
                <View style={playingStyles.containFinish}>
                    <Text style={playingStyles.textPreFinish}>
                        {i18n.t("sureExit")}
                    </Text>

                    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#641824' : '#7A1E2D', },
                    playingStyles.containerHelpsAdd]} onPress={continueHome}>
                        <Text style={playingStyles.textHelpGame}>
                            {i18n.t("exit").toUpperCase()}
                        </Text>
                    </Pressable>

                    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#641824' : '#7A1E2D', },
                    playingStyles.containerHelpsAdd]} onPress={() => setIsExit(false)}>
                        <Text style={playingStyles.textHelpGame}>
                            {i18n.t("cancel")}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ShowExit