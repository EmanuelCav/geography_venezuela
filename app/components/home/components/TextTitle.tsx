import { View, Text } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

const TextTitle = () => {
    return (
        <View style={homeStyles.containerEventTitle}>
            <Text style={homeStyles.textTitle}>Mapa de Venezuela Quiz</Text>
        </View>
    )
}

export default TextTitle