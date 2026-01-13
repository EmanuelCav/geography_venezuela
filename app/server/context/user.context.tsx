import { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_STORAGE } from '@env';
import * as RNIap from "expo-iap";

import { IOptionUser, IPayment, IUser } from '../../interface/User'
import { StackNavigation } from '../../types/props.types'

import { initialState } from '../value/user.value'
import { ACTION_CATEGORY, CHANGE_HELPS, CORRECT_CATEGORY, COUNT_CATEGORY, INITIALIZE_STATE, PAYMENT, SELECT_CATEGORY, UPDATE_OPTIONS } from '../constants/user.const'
import userReducer from '../reducer/user.reducer'

import { HelpType } from '../../types/key.props'

export const UserContext = createContext<IUser>(initialState)

const UserGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(userReducer, initialState)
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [isFirstStart, setIsFirstStart] = useState<boolean>(false)
    const [isReviewed, setIsReviewed] = useState<boolean>(true)

    useEffect(() => {
        const initializeState = async () => {
            const storedState = await AsyncStorage.getItem(`${EXPO_STORAGE}`);
            if (storedState) {
                dispatch({ type: INITIALIZE_STATE, payload: JSON.parse(storedState) });
            }
            setIsInitialized(true);
        };

        initializeState();
    }, []);

    useEffect(() => {
        if (isInitialized) {
            const persistState = async () => {
                await AsyncStorage.setItem(`${EXPO_STORAGE}`, JSON.stringify(state));
            };
            persistState();
        }
    }, [state, isInitialized]);

    useEffect(() => {

        if (!isInitialized) return;

        const restorePurchases = async () => {

            try {

                await RNIap.initConnection();

                const purchases = await RNIap.getAvailablePurchases();

                const hasRemoveAds = purchases.some(
                    p => p.productId === "geo_ve_quitadds"
                );

                if (hasRemoveAds && state.isAdd) {
                    dispatch({
                        type: PAYMENT,
                        payload: {
                            isAdd: false,
                            quantity: 0
                        }
                    });
                }

            } catch (error) {
                console.log("Restore purchases error:", error);
            }
        }

        restorePurchases()

    }, [isInitialized])

    const optionsAction = (optionData: IOptionUser, navigation: StackNavigation) => {

        try {

            dispatch({
                type: UPDATE_OPTIONS,
                payload: {
                    amountQuestions: optionData.amountQuestions,
                    amountOptions: optionData.amountOptions,
                }
            })

            navigation.goBack()

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAction = (category: string) => {

        try {

            dispatch({
                type: SELECT_CATEGORY,
                payload: category
            })

        } catch (error) {
            console.log(error);
        }

    }

    const countAction = (category: string) => {

        try {

            dispatch({
                type: COUNT_CATEGORY,
                payload: category
            })

        } catch (error) {
            console.log(error);
        }

    }

    const correctAction = (category: string) => {

        try {

            dispatch({
                type: CORRECT_CATEGORY,
                payload: category
            })

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAllAction = (isSelect: boolean) => {

        try {

            dispatch({
                type: ACTION_CATEGORY,
                payload: isSelect
            })

        } catch (error) {
            console.log(error);
        }

    }

    const helpsAction = (type: HelpType) => {

        if (type === 'help') {
            dispatch({
                type: CHANGE_HELPS,
                payload: -1
            })
        } else {
            dispatch({
                type: CHANGE_HELPS,
                payload: 2
            })
        }

    }

    const paymentAction = (data: IPayment) => {

        dispatch({
            type: PAYMENT,
            payload: data
        })

    }

    return (
        <UserContext.Provider value={{ ...state, optionsAction, categoryAction, categoryAllAction, helpsAction, paymentAction, correctAction, countAction, isFirstStart, setIsFirstStart, isReviewed, setIsReviewed }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext