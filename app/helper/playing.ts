import { IQuestion } from "../interface/Game";

import { shuffle } from "./game";

export const helpsOptions = (question: IQuestion, amountOptions: number): string[] => {

    const optionsFiltered = shuffle(question.options.filter(o => o !== question.answer)).slice(0, amountOptions / 2)

    return optionsFiltered

}