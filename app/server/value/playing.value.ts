import { PlayingState } from "../../types/playing.types";

export const initialPlayingState: PlayingState = {
    time: {
        seconds: 0,
        realSeconds: 0
    },
    progress: {
        numberQuestion: 0,
        corrects: 0,
    },
    flags: {
        isCorrect: false,
        isIncorrect: false,
        isPreFinish: false,
        isFinish: false,
        isGameError: false,
        isHelped: false,
        isAdds: false
    },
    errors: [],
    gameErrors: []
}