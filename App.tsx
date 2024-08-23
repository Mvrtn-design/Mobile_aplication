import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import To_do from './pages/To_do';
import Main from './pages/Main';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Todo" component={To_do} />
        <Stack.Screen name="Inicio" component={Login} />
        <Stack.Screen name="Registro" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
