import { useContext, useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import * as RNIap from "expo-iap";
import i18n from "../../i18n";

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

const PRODUCT_CONFIG = {
    geo_ve_10ayudas: {
        quantity: 10,
        consumable: true,
    },
    geo_ve_50ayudas: {
        quantity: 50,
        consumable: true,
    },
    geo_ve_quitadds: {
        quantity: 0,
        consumable: false,
    },
};

const PRODUCT_ORDER = Object.keys(PRODUCT_CONFIG);

const productIds = PRODUCT_ORDER;

const getProductId = (product: RNIap.Product) => product.id;

const Tent = ({ navigation }: { navigation: StackNavigation }) => {

    const { paymentAction, isAdd } = useContext<IUser>(UserContext);
    const { dispatch } = useContext<IGame>(GameContext);

    const [buyStatus, setBuyStatus] = useState("");
    const [products, setProducts] = useState<RNIap.Product[]>([]);

    useEffect(() => {

        const initIAP = async () => {

            dispatch?.({
                type: LOADING,
                payload: true,
            });

            try {

                await RNIap.initConnection();

                const items = await RNIap.fetchProducts({
                    skus: productIds,
                    type: "in-app"
                });

                const products =
                    (items ?? []).filter(
                        (item): item is RNIap.Product =>
                            item.type === "in-app"
                    );

                products.sort(
                    (a, b) =>
                        PRODUCT_ORDER.indexOf(getProductId(a)) -
                        PRODUCT_ORDER.indexOf(getProductId(b))
                );

                setProducts(products);

            } catch (error) {

                console.log(error);

            } finally {

                dispatch?.({
                    type: LOADING,
                    payload: false,
                });

            }
        };

        initIAP();

        return () => {
            RNIap.endConnection();
        };

    }, []);

    const handleBuy = async (product: RNIap.Product) => {

        const productId = getProductId(product);

        const config = PRODUCT_CONFIG[
            productId as keyof typeof PRODUCT_CONFIG
        ];

        if (!config) {
            Alert.alert("Error", "Unknown product.");
            return;
        }

        try {

            const purchase = await RNIap.requestPurchase({
                request: {
                    google: {
                        skus: [productId],
                    },
                    apple: {
                        sku: productId,
                    },
                },
                type: "in-app"
            });

            if (!purchase) return;

            const finalPurchase = Array.isArray(purchase)
                ? purchase[0]
                : purchase;

            await RNIap.finishTransaction({
                purchase: finalPurchase,
                isConsumable: config.consumable,
            });

            if (config.consumable) {

                setBuyStatus(
                    `${i18n.t("received")} ${config.quantity} ${i18n.t("aidsCorrectly")}`
                );

            } else {

                setBuyStatus(i18n.t("advertisingRemoved"));

            }

            paymentAction?.({
                isAdd: config.consumable ? isAdd : false,
                quantity: config.quantity,
            });

            Alert.alert(
                i18n.t("successfulPurchase"),
                i18n.t("messageSuccessfulPurchase")
            );

        } catch (error: any) {

            if (error.code === "E_ALREADY_OWNED") {

                paymentAction?.({
                    isAdd: false,
                    quantity: 0,
                });

            } else {

                console.log(error);

                Alert.alert(
                    i18n.t("purchaseError"),
                    i18n.t("purchaseNotCompleted")
                );

            }
        }
    };

    return (
        <Container>

            <HeaderTent />

            {!!buyStatus && (
                <Text style={tentStyle.buyStatus}>
                    {buyStatus}
                </Text>
            )}

            <MenuTent
                elements={products}
                handleBuy={handleBuy}
                isAdd={isAdd}
            />

            <ButtonAccept
                func={() => {
                    setBuyStatus("");
                    navigation.goBack();
                }}
                text={i18n.t("return")}
                isCategory={false}
            />

        </Container>
    );
};

export default Tent;