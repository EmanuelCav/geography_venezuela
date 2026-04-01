import { Reducer } from "react";

import { IGame } from "../../interface/Game";
import { Action } from "../../types/props.types";

import { GENERATE_GAME, LOADING } from "../constants/game.const";

const gameReducer: Reducer<IGame, Action> = (state: IGame, action: Action) => {

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
            return state;
    }

}

export default gameReducer