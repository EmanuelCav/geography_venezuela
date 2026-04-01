import { Text, Pressable, View, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../../../i18n";

import { SelectLanguagePropsType } from "../../types/props.types";

import { optionStyle } from "../../styles/options.styles";

const LANGUAGES = [
  { key: "en", label: "English" },
  { key: "es", label: "Español" },
  { key: "pt", label: "Português" }
]

const SelectLanguage = ({ setIsSelectLanguage, languageSelected, setLanguageSelected }: SelectLanguagePropsType) => {

  const handleSelectLanguage = async () => {

    try {

      i18n.locale = languageSelected
      await AsyncStorage.setItem('language', languageSelected)
      setIsSelectLanguage(false)


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal
      visible
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={optionStyle.containerSelectLanguage}>
        <View style={optionStyle.containSelectLanguage}>

          <Text style={optionStyle.selectLanguageTitle}>{i18n.t("selectLanguage")}</Text>

          {LANGUAGES.map((lang) => (
            <Pressable key={lang.key} style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#641824' : lang.key === languageSelected ? '#7A1E2D' : "#ffffff"
              },
              optionStyle.buttonLanguage
            ]} onPress={() => {
              setLanguageSelected(lang.key)
            }}>
              <Text style={[optionStyle.textButtonSelectLanguage, { color: lang.key === languageSelected ? '#ffffff' : "#7A1E2D" }]}>
                {lang.label}
              </Text>
            </Pressable>
          ))}

          <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#641824' : '#7A1E2D'
            },
            optionStyle.buttonSelectLanguage
          ]} onPress={handleSelectLanguage}>
            <Text style={optionStyle.textButtonSelectLanguage}>{i18n.t("select")}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default SelectLanguage