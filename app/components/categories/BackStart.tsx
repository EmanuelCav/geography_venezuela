import { Dimensions, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { categoriesStyle } from '../../styles/categories.styles'

const BackStart = ({ back }: { back: () => void }) => {
    return (
        <View style={categoriesStyle.backContainer}>
            <AntDesign
                name="caretleft"
                color='#3A7FB0'
                size={Dimensions.get("window").height / 34}
                style={{ marginLeft: Dimensions.get("window").width / 45 }}
                onPress={back}
            />
        </View>
    )
}

export default BackStart