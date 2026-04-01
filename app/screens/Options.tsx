import { useContext, useState } from 'react'
import i18n from '../../i18n';

import Container from '../components/components/Container';
import AmountOptions from '../components/options/AmountOptions'
import AmountQuestions from '../components/options/AmountQuestions'
import ButtonAccept from '../components/components/ButtonAccept'
import SelectLanguage from '../components/options/SelectLanguage';
import ChangeLanguageOptions from '../components/options/ChangeLanguageOptions';

import { IOptionUser, IUser } from '../interface/User'
import { StackNavigation } from '../types/props.types'

import { UserContext } from '../server/context/user.context'

const Options = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountOptions, amountQuestions, optionsAction } = useContext<IUser>(UserContext)
    const [isSelectLanguage, setIsSelectLanguage] = useState<boolean>(false)
    const [languageSelected, setLanguageSelected] = useState<string>(i18n.locale)

    const [optionUser, setOptionUser] = useState<IOptionUser>(() => ({
        amountOptions,
        amountQuestions
    }))

    const goBack = () => {
        optionsAction!(optionUser, navigation)
    }

    return (
        <Container>
            {
                isSelectLanguage && <SelectLanguage setIsSelectLanguage={setIsSelectLanguage}
                    languageSelected={languageSelected} setLanguageSelected={setLanguageSelected} />
            }
            <ChangeLanguageOptions handleSelectLanguage={() => setIsSelectLanguage(true)} />
            <AmountOptions amountOptions={optionUser.amountOptions} setOptionsUser={setOptionUser} />
            <AmountQuestions amountQuestions={optionUser.amountQuestions} setOptionsUser={setOptionUser} />
            <ButtonAccept text={i18n.t("accept")} func={goBack} isCategory={false} />
        </Container>
    )
}

export default Options