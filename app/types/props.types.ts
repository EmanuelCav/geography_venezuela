import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActionDispatch, SetStateAction } from "react";
import { RouteProp } from "@react-navigation/native";
import { Product } from "expo-iap";

import { IOptionUser } from "../interface/User";
import { ICategory } from "../interface/Game";
import { HelpType } from "./key.props";

export type RouteType = {
    Home: undefined;
    Playing: {
        isConnection: boolean;
    };
    Categories: {
        isPlaying: boolean
    };
    Options: undefined;
    Statistics: undefined;
    Tent: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteType>;

export type PlayingType = {
    route: RouteProp<RouteType, 'Playing'>;
    navigation: StackNavigation;
}

export type CategoriesType = {
    route: RouteProp<RouteType, 'Categories'>;
    navigation: StackNavigation;
}

export type Action = {
    type: string;
    payload?: any;
}

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
    disabled: boolean;
}


export type ButtonAcceptPropsType = {
    text: string;
    func: () => void;
    isCategory: boolean;
}

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type ButtonOptionsPropsType = {
    value: number
    onPress: (value: number) => void
    amountOptions: number
}

export type ShowCategoriesPropsType = {
    categoryAction: (category: string) => void;
    categories: ICategory[];
}

export type CategoryPropsType = {
    categoryAction: (category: string) => void;
    category: ICategory;
}

export type MenuPropsType = {
    categories: ICategory[];
    navigation: StackNavigation;
    amountOptions: number;
    amountQuestions: number;
    gameAction: (categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation, isConnection: boolean) => void;
    isConnection: boolean;
    categoryAllAction: (isSelect: boolean) => void;
}

export type GameStatisticsPropsType = {
    seconds: number;
    dispatch: ActionDispatch<[action: Action]>;
    questions: number;
    numberQuestion: number;
    realSeconds: number;
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
    helps: number;
    changeHelp: (type: HelpType) => void;
    exit: (isExit: boolean) => void;
    isHelped: boolean;
    isGameError: boolean;
}

export type TimePropsType = {
    seconds: number;
    dispatch: ActionDispatch<[action: Action]>;
    realSeconds: number;
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
}

export type QuestionGameStatisticsPropsType = {
    questions: number,
    numberQuestion: number
}

export type OptionPropsTypes = {
    option: string;
    nextQuestion: (value: string) => void;
    disabled: boolean;
}

export type SectionOptionsPropsTypes = {
    options: string[]
    nextQuestion: (value: string) => void;
    optionsHelped: string[];
    isHelped: boolean;
}

export type AnswerPropsType = {
    answer: boolean;
    correctAnswer: string;
    continueGame: () => void;
}

export type FinishPropsType = {
    seconds: number;
    corrects: number;
    questions: number;
    showErrors: () => void;
    continueHome: () => void;
    isGameError: boolean;
    isAdd: boolean;
    changeHelp: (type: HelpType) => void;
    isConnection: boolean;
    isRecompensadoLoaded: boolean;
    isConnectionPlaying: boolean;
}

export type StatisticsFinishPropsType = {
    seconds: number;
    corrects: number;
    questions: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean;
    showErrors: () => void;
    continueHome: () => void;
    isConnectionPlaying: boolean;
    isConnection: boolean;
}

export type ActionCategoryPropsType = {
    text: string;
    changeAllCategory: (isSelect: boolean) => void;
    isSelect: boolean;
}

export type HelpsPropsType = {
    isAnswered: boolean;
    helps: number;
    changeHelp: (type: HelpType) => void;
}

export type MenuTentPropsType = {
    handleBuy: (productId: Product) => void;
    elements: Product[];
    isAdd: boolean;
}

export type ElementTentPropsType = {
    handleBuy: (productId: Product) => void;
    element: Product;
    index: number;
    isAdd: boolean;
}

export type ShowExitPropsType = {
    continueHome: () => void;
    setIsExit: (isExit: boolean) => void;
}

export type SelectLanguagePropsType = {
    setIsSelectLanguage: (isSelectLanguage: boolean) => void;
    languageSelected: string;
    setLanguageSelected: (languageSelected: string) => void;
}

export type NativeAdComponentPropsType = {
    visible: boolean;
    onAdLoaded: () => void;
    onAdFailed: () => void;
    onTimeout: () => void;
}