import { ReactNode, createContext, useReducer, useRef } from 'react'
import allQuestions from '../../../assets/questions.json';

import { StackNavigation } from '../../types/props.types'
import { ICategory, IGame, IQuestion } from '../../interface/Game'

import gameReducer from '../reducer/game.reducer'
import { initialGameState } from '../value/game.value'
import { GENERATE_GAME, LOADING } from '../constants/game.const'

import { generateGame, generateQuestions } from '../../helper/game'

export const GameContext = createContext<IGame>(initialGameState)

const GameGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(gameReducer, initialGameState)
    const questionsRef = useRef<IQuestion[]>(allQuestions)

    const gameAction = (categories: ICategory[], amountQuestions: number, amountOptions: number, navigation: StackNavigation, isConnection: boolean) => {

        dispatch({ type: LOADING, payload: true })

        const questionsConnection = isConnection ? questionsRef.current : questionsRef.current.filter(q => !q.image)

        const questions = generateQuestions(questionsConnection, categories, amountQuestions)

        const game = generateGame(questions, questionsConnection, amountOptions)

        dispatch({ type: GENERATE_GAME, payload: game })
        dispatch({ type: LOADING, payload: false })

        navigation.replace('Playing', { isConnection })
    }

    return (
        <GameContext.Provider value={{ ...state, gameAction, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameGlobalContext