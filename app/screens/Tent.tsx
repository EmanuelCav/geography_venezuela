import { useContext, useEffect, useState } from "react";
import { Text, Alert } from "react-native";
import * as RNIap from "expo-iap";

import Container from "../components/components/Container";
import HeaderTent from "../components/tent/HeaderTent";
import MenuTent from "../components/tent/MenuTent";
import ButtonAccept from "../components/components/ButtonAccept";

import { UserContext } from "../server/context/user.context";
import { GameContext } from "../server/context/game.context";
import { LOADING } from "../server/constants/game.const";

import { StackNavigation } from "../types/props.types";
import { IUser } from "../interface/User";
import { IGame } from "../interface/Game";

import { tentStyle } from "../styles/tent.styles";

const productIds: string[] = ["geo_ve_10ayudas", "geo_ve_50ayudas", "geo_ve_quitadds"];

const Tent = ({ navigation }: { navigation: StackNavigation }) => {

    const { paymentAction, isAdd } = useContext<IUser>(UserContext)
    const { dispatch } = useContext<IGame>(GameContext)

    const [buyStatus, setBuyStatus] = useState<string>("")
    const [products, setProducts] = useState<RNIap.Product[]>([]);

    useEffect(() => {

        const initIAP = async () => {

            dispatch!({
                type: LOADING,
                payload: true
            })

            try {

                await RNIap.initConnection()
                const items = await RNIap.fetchProducts({
                    skus: productIds
                })
                setProducts(items)

            } catch (error) {
                console.log("Error al inicializar IAP:", error);
            } finally {
                dispatch!({
                    type: LOADING,
                    payload: false
                })
            }
        }

        initIAP()

    }, [])

    const handleBuy = async (product: RNIap.Product) => {

        try {

            const purchase = await RNIap.requestPurchase({
                request: {
                    android: {
                        skus: [product.id],
                    }
                }
            })

            if (purchase) {
                const finalPurchase = Array.isArray(purchase) ? purchase[0] : purchase
                const isConsumable = product.id !== "geo_ve_quitadds"
                await RNIap.finishTransaction({ purchase: finalPurchase, isConsumable })

                if (product.id !== "geo_ve_quitadds") {
                    setBuyStatus(`¡Has recibido ${Number(product.title.split(" ")[0])} pistas correctamente!`)
                } else {
                    setBuyStatus("¡Se ha removido la publicidad correctamente!")
                }

                paymentAction!({
                    isAdd: !isAdd ? false : product.id !== "geo_ve_quitadds",
                    quantity: product.id !== "geo_ve_quitadds" ? Number(product.title.split(" ")[0]) : 0
                })

                Alert.alert("Compra Exitosa", "Tu compra ha sido realizada.")
            }

        } catch (error: any) {
            if (error.code === "E_ALREADY_OWNED") {
                paymentAction!({
                    isAdd: !isAdd ? false : product.id !== "geo_ve_quitadds",
                    quantity: product.id !== "geo_ve_quitadds" ? Number(product.title.split(" ")[0]) : 0
                })
            } else {
                console.log("Error en la compra:", error);
                Alert.alert("Error", "No se pudo completar la compra.");
            }
        }
    }

    const handleGoBack = () => {
        setBuyStatus("")
        navigation.goBack()
    }

    return (
        <Container>
            <HeaderTent />
            {
                buyStatus && <Text style={tentStyle.buyStatus}>{buyStatus}</Text>
            }
            <MenuTent elements={products} handleBuy={handleBuy} isAdd={isAdd} />
            <ButtonAccept func={handleGoBack} text="REGRESAR" isCategory={false} />
        </Container>
    );
};

export default Tent