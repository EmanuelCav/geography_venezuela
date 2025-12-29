import { Dimensions, StyleSheet } from "react-native";

export const optionStyle = StyleSheet.create({

    containerAmountQuestion: {
        height: '30%',
        padding: Dimensions.get("window").height / 46,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

    titleOption: {
        fontSize: Dimensions.get("window").height / 41,
        textAlign: 'center',
        color: '#3A7FB0',
        fontWeight: '600'
    },

    textAlertAmountQuestion: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '500',
        marginTop: Dimensions.get("window").height / 92,
        color: '#3A7FB0'
    },

    containerAmountOptions: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    buttonOption: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3A7FB0',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '66.66%',
        borderRadius: 12
    },

    textButtonOption: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    textButtonOptionNotSelected: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#3A7FB0',
        fontWeight: '500'
    }

})