import { useCallback, useEffect, useState } from "react";

import Banner from "./Banner";
import NativeAdComponent from "./NativeAd";

const RETRY_INTERVAL = 60000;

const AdSwitcher = () => {

  const [nativeLoaded, setNativeLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleLoaded = useCallback(() => {
    setNativeLoaded(true);
    setShowBanner(false);
  }, []);

  const handleTimeout = useCallback(() => {
    if (!nativeLoaded) {
      setShowBanner(true);
    }
  }, [nativeLoaded]);

  const handleFailed = useCallback(() => {
    setNativeLoaded(false);
    setShowBanner(true);
  }, []);

  useEffect(() => {

    if (!showBanner) return;

    const interval = setInterval(() => {
      setReloadKey((v) => v + 1);
    }, RETRY_INTERVAL);

    return () => clearInterval(interval);

  }, [showBanner]);

  return (
    <>
      {showBanner && !nativeLoaded && <Banner />}

      <NativeAdComponent
        key={reloadKey}
        visible={nativeLoaded}
        onAdLoaded={handleLoaded}
        onAdFailed={handleFailed}
        onTimeout={handleTimeout}
      />
    </>
  );

};

export default AdSwitcher;