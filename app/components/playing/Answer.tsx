import { memo } from 'react';
import { Text, Pressable, View } from 'react-native'
import i18n from '../../../i18n';

import { playingStyles } from '../../styles/playing.styles'

import ResponseAnswer from './components/answer/ResponseAnswer'

import { AnswerPropsType } from '../../types/props.types'

const Answer = memo(({ answer, correctAnswer, continueGame }: AnswerPropsType) => {
    return (
        <Pressable style={[playingStyles.containerAnswer, {
            borderColor: answer ? '#02c028' : '#ff0000',
            borderWidth: 2,
            borderStyle: 'solid'
        }]} onPress={continueGame}>
            <ResponseAnswer answer={answer} />
            <Text style={[playingStyles.textAnswer, {
                color: answer ? '#02c028' : '#ff0000',
                fontFamily: 'Inter-Bold'
            }]}>{i18n.t("touchToContinue")}</Text>
            {
                !answer &&
                <View>
                    <Text style={[playingStyles.textAnswer, {
                        color: answer ? '#02c028' : '#ff0000',
                    }]}>
                        {i18n.t("correctAnswer")}:
                    </Text>
                    <Text style={[playingStyles.textAnswer, {
                        color: answer ? '#02c028' : '#ff0000',
                    }]}>
                        {correctAnswer}
                    </Text>
                </View>
            }
        </Pressable>
    )
})

export default Answer