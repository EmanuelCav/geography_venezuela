import { HelpType } from "../types/key.props";
import { StackNavigation } from "../types/props.types";

import { ICategory } from "./Game";

export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    helps: number;
    categories: ICategory[];
    isAdd: boolean;
    optionsAction?: (optionData: IOptionUser, navigation: StackNavigation) => void;
    categoryAction?: (category: string) => void;
    countAction?: (category: string) => void;
    correctAction?: (category: string) => void;
    categoryAllAction?: (isSelect: boolean) => void;
    helpsAction?: (type: HelpType) => void;
    paymentAction?: (data: IPayment) => void;
    isFirstStart?: boolean;
    setIsFirstStart?: (isFirstStart: boolean) => void;
    isReviewed?: boolean;
    setIsReviewed?: (isReviewed: boolean) => void;
}

export interface IOptionUser {
    amountOptions: number;
    amountQuestions: number;
}

export interface ITent {
    title: string;
    description: string;
    price: number;
    quantity: number;
    isAdd: boolean;
}

export interface IPayment {
    isAdd: boolean;
    quantity: number;
}