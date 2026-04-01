import { View, Text, Pressable, Modal } from 'react-native'
import i18n from '../../../i18n';

import { playingStyles } from '../../styles/playing.styles'

const PreFinish = ({ preFinish }: { preFinish: () => void }) => {
    return (
        <Modal
            visible
            transparent
            statusBarTranslucent
        >
            <Pressable style={playingStyles.containerPreFinish} onPress={preFinish}>
                <View style={playingStyles.containPreFinish}>
                    <Text style={playingStyles.textPreFinish}>{i18n.t("gamefinished")}</Text>
                    <Text style={playingStyles.textPreFinish}>{i18n.t("touchToContinue")}</Text>
                </View>
            </Pressable>
        </Modal>
    )
}

export default PreFinish