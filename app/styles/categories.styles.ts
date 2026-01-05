import { Dimensions, StyleSheet } from "react-native";

export const categoriesStyle = StyleSheet.create({

    containerTitleCategories: {
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerShowCategories: {
        flex: 1
    },

    containerCategories: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    containShowCategories: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1
    },

    containerActionCategories: {
        height: '16%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerCategory: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get("window").width / 36,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff'
    },

    categoryText: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 52
    },

    categoryTextAction: {
        color: '#7A1E2D',
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600'
    },

    textTitleCategories: {
        color: '#7A1E2D',
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '500',
        textAlign: 'center'
    },

    containerActionsCategories: {
        height: '10%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },

    buttonActionCategory: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 106,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '40%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonActionCategory: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: Dimensions.get("window").height / 52
    },

    textWithoutConnection: {
        color: '#f00',
        fontSize: Dimensions.get("window").height / 49,
        textAlign: 'center',
        marginVertical: Dimensions.get("window").height / 140
    },

    backContainer: {
        height: '7%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }

})