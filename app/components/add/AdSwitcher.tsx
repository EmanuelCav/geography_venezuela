import { useCallback, useEffect, useState } from "react";

import Banner from "./Banner";
import NativeAdComponent from "./NativeAd";

const RETRY_INTERVAL = 60000;

const AdSwitcher = () => {

  const [showBanner, setShowBanner] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleLoaded = useCallback(() => {
    setShowBanner(false);
  }, []);

  const handleFailed = useCallback(() => {
    setShowBanner(true);
  }, []);

  useEffect(() => {

    if (!showBanner) return;

    const timeout = setTimeout(() => {

      setShowBanner(false);
      setReloadKey((value) => value + 1);

    }, RETRY_INTERVAL);

    return () => clearTimeout(timeout);

  }, [showBanner]);

  if (showBanner) {
    return <Banner />
  }

  return (
    <NativeAdComponent
      key={reloadKey}
      onAdLoaded={handleLoaded}
      onAdFailed={handleFailed}
      onTimeout={handleFailed}
    />
  )

}

export default AdSwitcher;