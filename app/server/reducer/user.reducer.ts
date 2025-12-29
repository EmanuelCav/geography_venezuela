import { Reducer } from "react";

import { IUser } from "../../interface/User";
import { Action } from "../../types/props.types";

import { SELECT_CATEGORY, UPDATE_OPTIONS, INITIALIZE_STATE, ACTION_CATEGORY, CHANGE_HELPS, PAYMENT, CORRECT_CATEGORY, COUNT_CATEGORY } from "../constants/user.const";

import { initialState } from "../value/user.value";

const userReducer: Reducer<IUser, Action> = (state: IUser = initialState, action: Action): IUser | any => {

    switch (action.type) {
        case INITIALIZE_STATE:
            return action.payload;

        case UPDATE_OPTIONS:
            return {
                ...state,
                amountOptions: action.payload.amountOptions,
                amountQuestions: action.payload.amountQuestions
            }

        case SELECT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((c) => c.category === action.payload ? {
                    category: c.category,
                    corrects: c.corrects,
                    questions: c.questions,
                    isSelect: !c.isSelect,
                    isImage: c.isImage
                } : c)
            }

        case CORRECT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((c) => c.category === action.payload ? {
                    category: c.category,
                    isSelect: c.isSelect,
                    corrects: c.corrects + 1,
                    questions: c.questions,
                    isImage: c.isImage
                } : c)
            }

        case COUNT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((c) => c.category === action.payload ? {
                    category: c.category,
                    isSelect: c.isSelect,
                    corrects: c.corrects,
                    questions: c.questions + 1,
                    isImage: c.isImage
                } : c)
            }

        case ACTION_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((c) => c.isSelect !== action.payload ? {
                    category: c.category,
                    corrects: c.corrects,
                    questions: c.questions,
                    isSelect: action.payload,
                    isImage: c.isImage
                } : c)
            }

        case CHANGE_HELPS:
            return {
                ...state,
                helps: state.helps + action.payload
            }

        case PAYMENT:
            return {
                ...state,
                helps: state.helps + action.payload.quantity,
                isAdd: action.payload.isAdd
            }

        default:
            break;
    }

}

export default userReducer