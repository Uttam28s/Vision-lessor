import FlashMessage from "react-native-flash-message";
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator';

export default function App() {
  return (
    <>
      <Navigator />
      <FlashMessage position="top" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
