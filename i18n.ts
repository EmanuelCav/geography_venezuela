import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { I18n } from 'i18n-js';

import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const i18n = new I18n({ en, es, pt })

i18n.enableFallback = true
i18n.defaultLocale = 'es'

export const SUPPORTED_LANGUAGES = ['en', 'pt', 'es'] as const
type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

const normalizeLanguage = (lang?: string): SupportedLanguage => {
    if (!lang) return 'es'

    const code = lang.split(/[-_]/)[0]

    return SUPPORTED_LANGUAGES.includes(code as SupportedLanguage)
        ? (code as SupportedLanguage)
        : 'es'
}

const getDeviceLanguage = () => {
    const deviceLanguage =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages?.[0]
            : NativeModules.I18nManager.localeIdentifier

    return deviceLanguage?.split(/[-_]/)[0] || 'es'
}

export const initLanguage = async () => {
    const savedLanguage = await AsyncStorage.getItem('language')

    i18n.locale = normalizeLanguage(savedLanguage || getDeviceLanguage())
}

export default i18n