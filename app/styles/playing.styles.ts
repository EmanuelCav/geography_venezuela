import { Dimensions, StyleSheet } from "react-native";

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '50%',
        backgroundColor: '#7A1E2D',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#ffffff',
        paddingHorizontal: Dimensions.get("window").width / 60,
        paddingVertical: Dimensions.get("window").height / 123,
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

    containerMainQuestion: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textQuestion: {
        fontSize: Dimensions.get("window").height / 47,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    textQuestionText: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerImageQuestion: {
        width: '100%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageQuestion: {
        height: '100%',
        width: '100%'
    },

    containerGameStatistics: {
        height: '8%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    textGameStatistics: {
        fontSize: Dimensions.get("window").height / 47,
        color: '#7A1E2D',
        fontWeight: '500'
    },

    containerOptions: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },

    containerSectionOptions: {
        width: '50%',
        height: '100%',
        padding: Dimensions.get("window").height / 106
    },

    containerOption: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: Dimensions.get("window").height / 61.66,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textOption: {
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerAnswer: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ffffff',
        padding: Dimensions.get("window").height / 74
    },

    textAnswer: {
        fontSize: Dimensions.get("window").height / 46,
        textAlign: 'center'
    },

    containerResponseAnswer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerPreFinish: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(58, 127, 176, 0.5)'
    },

    containPreFinish: {
        width: '66.66%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#7A1E2D',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    textPreFinish: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        color: '#7A1E2D',
        textAlign: 'center',
        marginTop: Dimensions.get("window").height / 92
    },

    containFinish: {
        width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#7A1E2D',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    buttonFinish: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '100%',
        marginTop: Dimensions.get("window").height / 92,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonFinish: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerStatisticsFinish: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    containerActionsFinish: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    containerHelpsAdd: {
        width: '100%',
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        marginTop: Dimensions.get("window").height / 92,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    containHelpText: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: Dimensions.get("window").width / 210
    },

    textStatisticGame: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 48,
        fontWeight: '500'
    },

    textHelpGame: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        marginRight: Dimensions.get("window").width / 66
    },

    buttonHelp: {
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        marginTop: Dimensions.get("window").height / 92,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    helpText: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 48,
        fontWeight: '500'
    },

    containStatisticGame: {
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})