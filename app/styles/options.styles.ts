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
        fontSize: Dimensions.get("window").height / 47,
        textAlign: 'center',
        color: '#0052A5',
        fontFamily: 'Inter-SemiBold'
    },

    textAlertAmountQuestion: {
        fontSize: Dimensions.get("window").height / 41,
        fontFamily: 'Inter-Medium',
        marginTop: Dimensions.get("window").height / 92,
        color: '#0052A5'
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
        borderColor: '#0052A5',
        marginBottom: Dimensions.get("window").height / 47,
        borderStyle: 'solid',
        borderWidth: 2,
        width: '46%',
        borderRadius: 12
    },

    buttonOptionLanguage: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0052A5',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 12,
        marginLeft: Dimensions.get("window").width / 37
    },

    textButtonOptionLanguage: {
        color: "#0052A5",
        fontFamily: 'Inter-SemiBold'
    },

    containerChangeLanguageOptions: {
        height: '7%',
        alignItems: "center",
        flexDirection: 'row'
    },

    titleLanguage: {
        fontSize: Dimensions.get("window").height / 47,
        color: "#0052A5",
        fontFamily: 'Inter-SemiBold'
    },

    textButtonOption: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontFamily: 'Inter-Medium'
    },

    textButtonOptionNotSelected: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#0052A5',
        fontFamily: 'Inter-Medium'
    },

    gridButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    buttonSelectLanguage: {
        width: '100%',
        marginTop: Dimensions.get("window").height / 47,
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#0052A5'
    },

    buttonLanguage: {
        width: '100%',
        marginTop: Dimensions.get("window").height / 106,
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#0052A5"
    },

    textButtonSelectLanguage: {
        fontSize: Dimensions.get("window").height / 41,
        fontFamily: 'Inter-Medium',
        color: "#ffffff"
    },

    selectLanguageTitle: {
        marginBottom: Dimensions.get("window").height / 47,
        fontSize: Dimensions.get("window").height / 41,
        color: "#0052A5",
        fontFamily: 'Inter-Medium'
    },

    containerSelectLanguage: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(122, 30, 45, 0.5)'
    },

    containSelectLanguage: {
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#0052A5',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    }

})