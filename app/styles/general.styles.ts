import { Dimensions, StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        flex: 1,
        backgroundColor: '#B3DAF1'
    },

    containerBanner: {
        height: '10%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    containerButtonAccept: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3A7FB0',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '100%',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonAccept: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})