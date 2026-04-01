import { useContext, useMemo } from "react";
import { Text } from 'react-native'
import i18n from '../../i18n';

import ButtonAccept from '../components/components/ButtonAccept'
import ShowCategories from '../components/categories/ShowCategories'
import TitleCategories from '../components/categories/TitleCategories'
import ActionsCategories from "../components/categories/ActionsCategories";
import BackStart from "../components/categories/BackStart";
import Container from "../components/components/Container";

import { CategoriesType } from '../types/props.types'
import { IUser } from "../interface/User";
import { IGame } from "../interface/Game";

import { categoriesStyle } from "../styles/categories.styles";

import { UserContext } from '../server/context/user.context'
import { GameContext } from "../server/context/game.context";
import { useConnection } from "../hooks/useConnection";

const Categories = ({ navigation, route }: CategoriesType) => {

    const { categories, categoryAction, amountOptions, amountQuestions, categoryAllAction } = useContext<IUser>(UserContext)
    const { gameAction } = useContext<IGame>(GameContext)

    const isConnection = useConnection()

    const filteredCategories = useMemo(() => {
        return isConnection
            ? categories
            : categories.filter(c => !c.isImage)
    }, [categories, isConnection])

    const selectedCount = useMemo(() => {
        return filteredCategories.filter(c => c.isSelect).length
    }, [filteredCategories])

    const accept = () => {
        if (!route.params.isPlaying) {
            navigation.goBack()
            return
        }

        gameAction!(categories, amountQuestions, amountOptions, navigation, isConnection)
    }

    return (
        <Container>
            <BackStart back={route.params.isPlaying ? () => navigation.replace("Home") : () => navigation.goBack()} />
            <TitleCategories />
            <ActionsCategories categoryAllAction={categoryAllAction!} />
            {
                !isConnection && <Text style={categoriesStyle.textWithoutConnection}>{i18n.t("offline")}</Text>
            }
            <ShowCategories categories={filteredCategories} categoryAction={categoryAction!} />
            <ButtonAccept text={route.params.isPlaying ? `${i18n.t("start")}` : `${i18n.t("accept")}`}
                isCategory={route.params.isPlaying && selectedCount === 0} func={accept} />
        </Container>
    )
}

export default Categories