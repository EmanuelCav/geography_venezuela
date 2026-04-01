import { memo } from 'react'
import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import Option from './Option'

import { SectionOptionsPropsTypes } from '../../../../types/props.types'

const SectionOptions = memo(({ options, nextQuestion, isHelped, optionsHelped }: SectionOptionsPropsTypes) => {
    return (
        <View style={playingStyles.containerSectionOptions}>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} disabled={isHelped ? optionsHelped.includes(option) : false}
                    nextQuestion={nextQuestion} key={index} />
                })
            }
        </View>
    )
})

export default SectionOptions