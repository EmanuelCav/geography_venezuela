import { useState } from "react";
import { Dimensions, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { categoriesStyle } from '../../styles/categories.styles'

import { ICategory } from '../../interface/Game'
import { ShowCategoriesPropsType } from "../../types/props.types";

import Category from './components/Category'

const ShowCategories = ({ categories, categoryAction }: ShowCategoriesPropsType) => {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(6)

    const left = () => {
        if (min < 6) {
            return
        }

        setMin(min - 6)
        setMax(max - 6)
    }

    const rigth = () => {
        if (max >= categories.length) {
            return
        }
        
        setMin(min + 6)
        setMax(max + 6)
    }

    return (
        <View style={categoriesStyle.containerShowCategories}>
            <View style={categoriesStyle.containShowCategories}>
                {
                    categories.map((category: ICategory, index: number) => {
                        return <Category category={category} categoryAction={categoryAction} key={index} />
                    }).slice(min, max)
                }
            </View>
            <View style={categoriesStyle.containerActionCategories}>
                <AntDesign name="caretleft" color={min < 6 ? '#da8b98' : '#7A1E2D'} size={Dimensions.get("window").height / 28} onPress={left} />
                <Text style={categoriesStyle.categoryTextAction}>{max / 6}/{Math.ceil(categories.length / (max - min))}</Text>
                <AntDesign name="caretright" color={max >= categories.length ? '#da8b98' : '#7A1E2D'} size={Dimensions.get("window").height / 28} onPress={rigth} />
            </View>
        </View>
    )
}

export default ShowCategories