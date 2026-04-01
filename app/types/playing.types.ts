import { IQuestion } from "../interface/Game"

export type PlayingState = {
    time: {
        seconds: number;
        realSeconds: number;
    };
    progress: {
        numberQuestion: number;
        corrects: number;
    };
    flags: {
        isCorrect: boolean;
        isIncorrect: boolean;
        isPreFinish: boolean;
        isFinish: boolean;
        isGameError: boolean;
        isHelped: boolean;
        isAdds: boolean;
    };
    errors: IQuestion[];
    gameErrors: IQuestion[];
}