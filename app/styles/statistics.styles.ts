import { Dimensions, StyleSheet } from "react-native";

export const statiscsStyles = StyleSheet.create({

    containerHeaderStatistics: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        padding: Dimensions.get("window").height / 106,
        backgroundColor: '#0052A5'
    },

    containerBodyStatistics: {
        flex: 1
    },

    containerStatistic: {
        padding: Dimensions.get("window").height / 106,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        backgroundColor: '#0052A5',
        borderWidth: 2,
        marginVertical: Dimensions.get("window").height / 148
    },

    categoryText: {
        fontSize: Dimensions.get("window").height / 57,
        color: '#ffffff',
        fontFamily: 'Inter-Bold',
        marginBottom: Dimensions.get("window").height / 187
    },

    statisticText: {
        fontSize: Dimensions.get("window").height / 62,
        color: '#ffffff'
    }

})