import { View, Text, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { playingStyles } from '../../../../styles/playing.styles'

const ResponseAnswer = ({ answer }: { answer: boolean }) => {
    return (
        <View style={playingStyles.containerResponseAnswer}>
            <AntDesign name={answer ? 'checkcircle' : 'closecircle'} color={answer ? '#02c028' : '#ff0000'} size={Dimensions.get("window").height / 46} />
            <Text style={[playingStyles.textAnswer, {
                color: answer ? '#02c028' : '#ff0000',
                marginLeft: Dimensions.get("window").width / 60
            }]}>{answer ? 'Correcto' : 'Incorrecto'}</Text>
        </View>
    )
}

export default ResponseAnswer