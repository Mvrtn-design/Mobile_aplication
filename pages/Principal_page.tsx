import {Text, View} from 'react-native';
import React from 'react';
import CustomTouchable from '../components/CustomTouchable';

const Principal_page = ({navigation}) => {
  return (
    <View>
      <Text>BIENVENIDO A LA PLATAFORMA DE MONITORIZACIÓN DE LA CONSULTA</Text>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('InicioSesion', {
            name: 'Ir al apartado de Inicio de Sesión',
          })
        }>
        Acceder a iniciar sesion
      </CustomTouchable>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('Registro', {name: 'Ir al apartado de Registro'})
        }>
        Acceder a registrarse
      </CustomTouchable>
    </View>
  );
};

export default Principal_page;
