import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

    containerTitle: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    containerMenu: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '66.66%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    imageTitle: {
        height: '100%',
        width: '100%'
    },

    textTitle: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#7A1E2D',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerEventTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 37,
        width: '50%',
        height: '100%'
    },

    textWithoutConnection: {
        color: '#f00',
        fontSize: Dimensions.get("window").height / 49,
        textAlign: 'center'
    }

})