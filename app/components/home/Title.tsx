import { View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import TextTitle from './components/TextTitle'
import ImageTitle from './components/ImageTitle'

const Title = () => {
  return (
    <View style={homeStyles.containerTitle}>
      <ImageTitle />
      <TextTitle />
    </View>
  )
}

export default Title