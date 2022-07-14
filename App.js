import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import axios from 'axios';
import {NativeRouter,Route, Router, Routes,} from 'react-router-native'
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NativeRouter>
          <Routes>
              <Route exact path='/' element={<LoginPage/>}></Route>
              <Route exact path='/home/*' element={<HomePage/>}></Route>
          </Routes>
        </NativeRouter>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});