import { useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NativeAd,
  NativeAdView,
  NativeAsset,
  NativeAssetType,
  TestIds,
} from "react-native-google-mobile-ads";
import { EXPO_NATIVE } from "@env";
import i18n from "../../../i18n";

import { NativeAdComponentPropsType } from "../../types/props.types";

import { generalStyles } from "../../styles/general.styles";

const adUnitId = __DEV__
  ? TestIds.NATIVE
  : EXPO_NATIVE;

const LOAD_TIMEOUT = 5000;

const NativeAdComponent = ({ onAdLoaded, onAdFailed, onTimeout }: NativeAdComponentPropsType) => {

  const [nativeAd, setNativeAd] = useState<NativeAd | null>(null);

  const adRef = useRef<NativeAd | null>(null);

  useEffect(() => {

    let mounted = true;

    const timeout = setTimeout(() => {

      if (!adRef.current && mounted) {
        onTimeout();
      }

    }, LOAD_TIMEOUT);

    const loadAd = async () => {

      try {

        const ad = await NativeAd.createForAdRequest(
          adUnitId
        );

        if (!mounted) {
          ad.destroy()
          return
        }

        clearTimeout(timeout)
        adRef.current = ad
        setNativeAd(ad)
        onAdLoaded()

      } catch (error) {

        clearTimeout(timeout)

        if (mounted) {
          onAdFailed()
        }

      }

    }

    loadAd()

    return () => {
      mounted = false;
      clearTimeout(timeout);
      adRef.current?.destroy();
      adRef.current = null;
    }

  }, [])


  if (!nativeAd) {

    return (
      <View
        style={{
          height: '10%'
        }}
      />
    );
  }

  return (
    <View style={generalStyles.containerNative}>

      <NativeAdView nativeAd={nativeAd}>

        <View
          style={{
            padding: 6,
            borderRadius: 7,
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
          }}
        >

          {nativeAd.icon && (

            <NativeAsset assetType={NativeAssetType.ICON}>

              <Image
                source={{ uri: nativeAd.icon.url }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  marginRight: 8,
                }}
              />

            </NativeAsset>

          )}


          <View style={{ flex: 1 }}>

            <Text
              style={{
                fontSize: 10,
                color: "#666",
              }}
            >
              {i18n.t("advertisement")}
            </Text>


            <NativeAsset assetType={NativeAssetType.HEADLINE}>

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter-Medium",
                  color: "#222",
                }}
              >
                {nativeAd.headline}
              </Text>

            </NativeAsset>


            {nativeAd.body && (

              <NativeAsset assetType={NativeAssetType.BODY}>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 11,
                    color: "#666",
                    marginRight: 8,
                  }}
                >
                  {nativeAd.body}
                </Text>

              </NativeAsset>

            )}

          </View>


          {nativeAd.callToAction && (

            <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>

              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: "#1976D2",
                  padding: 7,
                  borderRadius: 7,
                }}
              >
                <Text style={{ color: "#FFF" }}>
                  {nativeAd.callToAction}
                </Text>
              </TouchableOpacity>
            </NativeAsset>
          )}
        </View>
      </NativeAdView>
    </View>
  );

};

export default NativeAdComponent;