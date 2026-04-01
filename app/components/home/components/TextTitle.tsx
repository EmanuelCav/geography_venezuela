import { View, Text } from 'react-native'
import i18n from '../../../../i18n';

import { homeStyles } from '../../../styles/home.styles'

const TextTitle = () => {
    return (
        <View style={homeStyles.containerEventTitle}>
            <Text style={homeStyles.textTitle}>{i18n.t("title")}</Text>
        </View>
    )
}

export default TextTitle