import { Dimensions, StyleSheet } from "react-native";

export const responseStyle = StyleSheet.create({

    containerLoading: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#3A7FB0',
        zIndex: 12,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center'
    }

})