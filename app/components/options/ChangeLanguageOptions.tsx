import { View, Text, Pressable } from "react-native"
import i18n from "../../../i18n"

import { optionStyle } from "../../styles/options.styles"

const ChangeLanguageOptions = ({ handleSelectLanguage }: { handleSelectLanguage: () => void }) => {

    return (
        <View style={optionStyle.containerChangeLanguageOptions}>
            <Text style={optionStyle.titleLanguage}>
                {i18n.t("language")}:
            </Text>

            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#dddddd' : '#ffffff'
                },
                optionStyle.buttonOptionLanguage
            ]} onPress={handleSelectLanguage}>
                <Text style={optionStyle.textButtonOptionLanguage}>
                    {i18n.locale.toUpperCase()}
                </Text>
            </Pressable>
        </View>
    )
}

export default ChangeLanguageOptions