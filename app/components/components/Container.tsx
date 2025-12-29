import { ReactNode } from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { generalStyles } from '../../styles/general.styles';

const dimensionsSpace = Dimensions.get("window").height / 74

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaWrapper>{children}</SafeAreaWrapper>
    </SafeAreaProvider>
  )
}

const SafeAreaWrapper = ({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[
      generalStyles.containerGeneral,
      {
        paddingTop: insets.top + dimensionsSpace,
        paddingBottom: insets.bottom + dimensionsSpace,
        paddingLeft: insets.left + dimensionsSpace,
        paddingRight: insets.right + dimensionsSpace,
      }
    ]}>
      {children}
    </View>
  );
}

export default Container;