import { StyleSheet, StatusBar, Platform } from 'react-native';

export default GlobalStyles = StyleSheet.create({
    // console.log(Platform.OS);
  // console.log(StatusBar.currentHeight);
    safeAreaStyles: {
        flex: 1,
      // paddingTop: Platform.OS === "android" ? 25 : 0,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})