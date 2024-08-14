import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio de sesión" component={Login} />
        <Stack.Screen name="Registro de usuario" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
