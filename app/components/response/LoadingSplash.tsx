import { View, Image, Modal } from "react-native"

import { responseStyle } from "../../styles/response.styles"

const LoadingSplash = () => {

    return (
        <Modal
            visible
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

export default LoadingSplash