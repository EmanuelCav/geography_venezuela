import { useContext, useState } from 'react'

import Container from '../components/components/Container'
import AmountOptions from '../components/options/AmountOptions'
import AmountQuestions from '../components/options/AmountQuestions'
import ButtonAccept from '../components/components/ButtonAccept'

import { IOptionUser, IUser } from '../interface/User'
import { StackNavigation } from '../types/props.types'

import { UserContext } from '../server/context/user.context'

const Options = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountOptions, amountQuestions, optionsAction } = useContext<IUser>(UserContext)

    const initialState: IOptionUser = {
        amountOptions,
        amountQuestions
    }

    const [optionUser, setOptionUser] = useState<IOptionUser>(initialState)

    const goBack = () => {
        optionsAction!(optionUser, navigation)
    }

    return (
        <Container>
            <AmountOptions amountOptions={optionUser.amountOptions} setOptionsUser={setOptionUser} />
            <AmountQuestions amountQuestions={optionUser.amountQuestions} setOptionsUser={setOptionUser} />
            <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
        </Container>
    )
}

export default Options