import { View } from 'react-native'
import i18n from '../../../../../i18n';

import ButtonFinish from './ButtonFinish'

import { playingStyles } from '../../../../styles/playing.styles'

import { ActionsFinishPropsType } from '../../../../types/props.types'

const ActionsFinish = ({ areErrors, continueHome, showErrors, isConnectionPlaying, isConnection }: ActionsFinishPropsType) => {
  return (
    <View style={[playingStyles.containerActionsFinish, {
      justifyContent: areErrors ? 'space-evenly' : 'center'
    }]}>
      {
        areErrors && (isConnectionPlaying || !isConnection) &&
        <ButtonFinish text={i18n.t("reviewErrors")} func={showErrors} disabled={false} />
      }
      <ButtonFinish text={i18n.t("continue")} func={continueHome} disabled={false} />
    </View>
  )
}

export default ActionsFinish