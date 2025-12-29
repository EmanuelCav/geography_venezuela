import { Reducer } from "react";

import { IGame } from "../../interface/Game";
import { Action } from "../../types/props.types";

import { GENERATE_GAME, LOADING } from "../constants/game.const";

import { initialState } from "../value/game.value";

const gameReducer: Reducer<IGame, Action> = (state: IGame = initialState, action: Action): IGame | any => {

    switch (action.type) {
        case GENERATE_GAME:
            return {
                ...state,
                questions: action.payload
            }

        case LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            break;
    }

}

export default gameReducer