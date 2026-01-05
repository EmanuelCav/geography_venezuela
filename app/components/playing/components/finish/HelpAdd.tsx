import { Pressable, View, Text, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { HelpType } from '../../../../types/key.props'

import { playingStyles } from '../../../../styles/playing.styles'

const HelpAdd = ({ changeHelp }: { changeHelp: (type: HelpType) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#641824' : '#7A1E2D'
            },
            playingStyles.containerHelpsAdd
        ]} onPress={() => changeHelp('add')}>
            <View style={playingStyles.containHelpText}>
                <Text style={playingStyles.textHelpGame}>Pistas</Text>
                <Text style={playingStyles.textStatisticGame}>x2</Text>
                <Entypo name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
            </View>
            <Entypo name='video' color={'#ffffff'} size={Dimensions.get("window").height / 37} />
        </Pressable>
    )
}

export default HelpAdd