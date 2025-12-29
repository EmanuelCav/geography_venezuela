import { useState } from "react";
import { Dimensions, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { categoriesStyle } from '../../styles/categories.styles'

import { ICategory } from '../../interface/Game'
import { ShowCategoriesPropsType } from "../../types/props.types";

import Category from './components/Category'

const ShowCategories = ({ categories, categoryAction }: ShowCategoriesPropsType) => {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(7)

    const left = () => {
        if (min < 7) {
            return
        }

        setMin(min - 7)
        setMax(max - 7)
    }

    const rigth = () => {
        if (max >= categories.length) {
            return
        }
        
        setMin(min + 7)
        setMax(max + 7)
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
                <AntDesign name="caretleft" color={min < 7 ? '#83c0eb' : '#3A7FB0'} size={Dimensions.get("window").height / 28} onPress={left} />
                <Text style={categoriesStyle.categoryTextAction}>{max / 7}/{Math.ceil(categories.length / (max - min))}</Text>
                <AntDesign name="caretright" color={max >= categories.length ? '#83c0eb' : '#3A7FB0'} size={Dimensions.get("window").height / 28} onPress={rigth} />
            </View>
        </View>
    )
}

export default ShowCategories