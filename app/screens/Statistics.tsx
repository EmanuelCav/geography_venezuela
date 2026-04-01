import { useContext } from "react";
import i18n from '../../i18n';

import Container from "../components/components/Container";
import ButtonAccept from '../components/components/ButtonAccept'
import HeaderStatistics from "../components/statistics/HeaderStatistics";
import BodyStatistics from "../components/statistics/BodyStatistics";

import { StackNavigation } from '../types/props.types'
import { IUser } from "../interface/User";

import { UserContext } from '../server/context/user.context'

const Statistics = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories } = useContext<IUser>(UserContext)

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <HeaderStatistics categories={categories} />
            <BodyStatistics categories={categories} />
            <ButtonAccept text={i18n.t("return")} func={goBack} isCategory={false} />
        </Container>
    )
}

export default Statistics