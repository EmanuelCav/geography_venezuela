import { memo } from 'react'
import { View, Text, Image } from 'react-native'
import i18n from '../../../i18n'

import { playingStyles } from '../../styles/playing.styles'

import { IQuestion } from '../../interface/Game'

const Question = memo(({ question }: { question: IQuestion }) => {
    return (
        <View style={[playingStyles.containerQuestion, {
            backgroundColor:
                (question.question === "¿Qué bandera se encuentra en la imagen?" || question.question === "¿Qué escudo se encuentra en la imagen?") ? "#494949" : "#7A1E2D"
        }]}>
            <View style={playingStyles.containerMainQuestion}>
                <Text style={playingStyles.textQuestion}>{i18n.t(question.question, { defaultValue: question.question })}</Text>
            </View>
            {
                question.image ? (
                    <View style={playingStyles.containerImageQuestion}>
                        <Image source={{ uri: question.image }} alt='image' resizeMode='contain'
                            style={playingStyles.imageQuestion} />
                    </View>
                ) : (
                    <View style={playingStyles.containerImageQuestion}>
                        <Text style={playingStyles.textQuestionText}>
                            {i18n.t(question.text!, { defaultValue: question.text })}
                        </Text>
                    </View>
                )
            }
        </View>
    )
})

export default Question