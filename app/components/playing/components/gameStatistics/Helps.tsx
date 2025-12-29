import { Pressable, Text, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { HelpsPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const Helps = ({ isAnswered, helps, changeHelp }: HelpsPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#4997D0' : `${isAnswered ? '#828282' : '#3A7FB0'}`
            },
            playingStyles.buttonHelp
        ]}
            disabled={isAnswered} onPress={() => changeHelp('help')}>
            <Text style={[playingStyles.helpText, {
                marginRight: Dimensions.get("window").width / 72
            }]}>{helps}</Text>
            <Entypo name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
        </Pressable>
    )
}

export default Helps