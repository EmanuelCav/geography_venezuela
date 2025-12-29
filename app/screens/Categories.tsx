import { useContext, useEffect, useState } from "react";
import { Text } from 'react-native'
import { fetch } from "@react-native-community/netinfo";

import Container from "../components/components/Container";
import ButtonAccept from '../components/components/ButtonAccept'
import ShowCategories from '../components/categories/ShowCategories'
import TitleCategories from '../components/categories/TitleCategories'
import ActionsCategories from "../components/categories/ActionsCategories";
import BackStart from "../components/categories/BackStart";

import { CategoriesType } from '../types/props.types'
import { IUser } from "../interface/User";
import { IGame } from "../interface/Game";

import allQuestions from '../../assets/questions.json'

import { categoriesStyle } from "../styles/categories.styles";

import { UserContext } from '../server/context/user.context'
import { GameContext } from "../server/context/game.context";
import { LOADING } from "../server/constants/game.const";

const Categories = ({ navigation, route }: CategoriesType) => {

    const { categories, categoryAction, amountOptions, amountQuestions, categoryAllAction } = useContext<IUser>(UserContext)
    const { gameAction, dispatch } = useContext<IGame>(GameContext)

    const [isConnection, setIsConnection] = useState<boolean>(true)
    const [isStart, setIsStart] = useState<boolean>(false)

    const accept = () => {
        if (route.params.isPlaying) {
            dispatch!({
                type: LOADING,
                payload: true
            })

            setIsStart(true)

            return
        }

        navigation.goBack()
    }

    useEffect(() => {
        fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
    }, [isConnection])

    useEffect(() => {
        if (isStart) {
            setIsStart(false)
            gameAction!(isConnection ? allQuestions : allQuestions.filter(aq => !aq.image), categories, amountQuestions, amountOptions, navigation, isConnection)
            return
        }

        dispatch!({
            type: LOADING,
            payload: false
        })
    }, [isStart])

    return (
        <Container>
            <BackStart back={route.params.isPlaying ? () => navigation.replace("Home") : () => navigation.goBack()} />
            <TitleCategories />
            <ActionsCategories categoryAllAction={categoryAllAction!} />
            {
                !isConnection && <Text style={categoriesStyle.textWithoutConnection}>Sin conexión no podrás seleccionar temas con imágenes</Text>
            }
            <ShowCategories categories={isConnection ? categories : categories.filter(c => !c.isImage)} categoryAction={categoryAction!} />
            <ButtonAccept text={route.params.isPlaying ? 'INICIAR' : 'ACEPTAR'}
                isCategory={route.params.isPlaying ? isConnection ? categories.filter(c => c.isSelect).length === 0 : categories.filter(c => !c.isImage).filter(c => c.isSelect).length === 0 : false} func={accept} />
        </Container>
    )
}

export default Categories