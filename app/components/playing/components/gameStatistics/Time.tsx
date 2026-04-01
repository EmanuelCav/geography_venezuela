import { memo, useEffect, useMemo } from 'react'
import { Text } from 'react-native'

import { TimePropsType } from '../../../../types/props.types'
import { playingStyles } from '../../../../styles/playing.styles'

import { RUN_TIME } from '../../../../server/constants/playing.const'

import { formatTime } from '../../../../helper/playing'

const Time = memo(({ seconds, dispatch, realSeconds, isCorrect, isIncorrect, isFinish, isPreFinish }: TimePropsType) => {

    useEffect(() => {
        if (isFinish || isPreFinish || isCorrect || isIncorrect) return

        const interval = setInterval(() => {
            dispatch({ type: RUN_TIME })
        }, 1000)

        return () => clearInterval(interval)
    }, [dispatch, isFinish, isPreFinish, isCorrect, isIncorrect])

    const formattedTime = useMemo(() => {
        const total = realSeconds > 0 ? realSeconds : seconds

        return formatTime(total)
    }, [seconds, realSeconds])

    return (
        <Text style={playingStyles.textGameStatistics}>
            {formattedTime}
        </Text>
    )
})

export default Time