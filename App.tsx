import { NativeBaseProvider } from 'native-base';
import {LoginScreen} from './src/screens/auth';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { MainNavigation } from './src/navigation';
export default function App() {
  return (
    <>
    <Provider store={store}>
        <NativeBaseProvider>
            <MainNavigation />
        </NativeBaseProvider>
    </Provider>
 
    <Toast />   
    </>

  );
}


