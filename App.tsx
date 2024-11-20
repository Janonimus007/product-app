import { NativeBaseProvider } from 'native-base';
import {LoginScreen} from './src/screens/auth';
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <LoginScreen />
    </NativeBaseProvider> 
    <Toast />   
    </>

  );
}


