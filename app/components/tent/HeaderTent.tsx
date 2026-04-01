import { Text, View, Image } from 'react-native'
import i18n from '../../../i18n';

import { tentStyle } from '../../styles/tent.styles'

const HeaderTent = () => {
    return (
        <View style={tentStyle.containerHeaderTent}>
            <View style={tentStyle.containerEventTitle}>
                <Image alt='Icon' source={require('../../../assets/imagen.png')} resizeMode='contain' style={tentStyle.imageTitleTent} />
            </View>
            <View style={tentStyle.containerEventTitle}>
                <Text style={tentStyle.textTitleTent}>{i18n.t("tent")}</Text>
            </View>
        </View>
    )
}

export default HeaderTent