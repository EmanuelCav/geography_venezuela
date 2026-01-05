import { Dimensions, StyleSheet } from "react-native";

export const statiscsStyles = StyleSheet.create({

    containerHeaderStatistics: {
        height: '10%',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        padding: Dimensions.get("window").height / 106,
        backgroundColor: '#7A1E2D'
    },

    containerBodyStatistics: {
        flex: 1
    },

    containerStatistic: {
        padding: Dimensions.get("window").height / 106,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        backgroundColor: '#7A1E2D',
        borderWidth: 2,
        marginVertical: Dimensions.get("window").height / 148
    },

    categoryText: {
        fontSize: Dimensions.get("window").height / 43,
        color: '#ffffff',
        fontWeight: '500'
    },

    statisticText: {
        fontSize: Dimensions.get("window").height / 51,
        color: '#ffffff'
    }

})