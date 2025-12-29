import { View, Text, Image } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { IQuestion } from '../../interface/Game'

const Question = ({ question }: { question: IQuestion }) => {
    return (
        <View style={[playingStyles.containerQuestion, {
            backgroundColor:
                (question.question === "¿Qué bandera se encuentra en la imagen?" || question.question === "¿Qué escudo se encuentra en la imagen?" || question.question === "¿Dónde nos encontramos?") ? "#494949" : "#3A7FB0"
        }]}>
            <View style={playingStyles.containerMainQuestion}>
                <Text style={playingStyles.textQuestion}>{question.question}</Text>
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
                            {question.text}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default Question