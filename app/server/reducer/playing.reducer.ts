import { Reducer } from "react"

import * as PlayingConstants from "../constants/playing.const"

import { PlayingState } from "../../types/playing.types"
import { Action } from "../../types/props.types"

const playingReducer: Reducer<PlayingState, Action> = (state: PlayingState, action: Action): PlayingState => {

    switch (action.type) {

        case PlayingConstants.ANSWER_CORRECT:
            return {
                ...state,
                progress: {
                    ...state.progress,
                    corrects: state.progress.corrects + 1
                },
                flags: {
                    ...state.flags,
                    isCorrect: true
                }
            }

        case PlayingConstants.ANSWER_INCORRECT:
            return {
                ...state,
                errors: [...state.errors, action.payload],
                flags: {
                    ...state.flags,
                    isIncorrect: true
                }
            }

        case PlayingConstants.RESTART_ACTIONS_QUESTION:
            return {
                ...state,
                time: {
                    ...state.time,
                    realSeconds: state.time.seconds,
                },
                flags: {
                    ...state.flags,
                    isHelped: false
                }
            }

        case PlayingConstants.PRE_FINISH:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isPreFinish: action.payload
                }
            }

        case PlayingConstants.FINISH:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isFinish: action.payload
                }
            }

        case PlayingConstants.CONTINUE_GAME:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isCorrect: false,
                    isIncorrect: false
                },
                time: {
                    ...state.time,
                    realSeconds: 0
                },
                progress: {
                    ...state.progress,
                    numberQuestion: state.progress.numberQuestion + 1
                }
            }

        case PlayingConstants.SHOW_ERRORS:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isCorrect: false,
                    isIncorrect: false,
                    isPreFinish: false,
                    isFinish: false,
                    isGameError: true,
                    isHelped: false
                },
                progress: {
                    ...state.progress,
                    corrects: 0,
                    numberQuestion: 0
                },
                gameErrors: [...state.errors],
                errors: []
            }

        case PlayingConstants.HELPED:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isHelped: action.payload
                }
            }

        case PlayingConstants.ADDS:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    isAdds: action.payload
                }
            }

        case PlayingConstants.RUN_TIME:
            return {
                ...state,
                time: {
                    ...state.time,
                    seconds: state.time.seconds + 1
                }
            }

        default:
            return state
    }
}

export default playingReducer