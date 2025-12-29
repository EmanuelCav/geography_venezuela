import { ICategory } from "../interface/Game";

export const totalQuestions = (categories: ICategory[]): number => {

    let total: number = 0

    for (let i = 0; i < categories.length; i++) {
        total += categories[i].questions
    }

    return total

}

export const totalCorrects = (categories: ICategory[]): number => {

    let corrects: number = 0

    for (let i = 0; i < categories.length; i++) {
        corrects += categories[i].corrects
    }

    return corrects

}