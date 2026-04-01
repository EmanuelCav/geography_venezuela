import { IQuestion } from "../interface/Game";

import { shuffle } from "./game";

export const helpsOptions = (question: IQuestion, amountOptions: number): string[] => {

    const optionsFiltered = shuffle(question.options!.filter(o => o !== question.answer)).slice(0, amountOptions / 2)

    return optionsFiltered

}

export const formatTime = (totalSeconds: number) => {

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}