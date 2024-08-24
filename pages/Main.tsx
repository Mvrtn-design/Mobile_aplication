import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@gluestack-ui/themed';
import CustomBox from '../components/CustomBox';
import CustomTouchable from '../components/CustomTouchable';
import CustomText from '../components/CustomText';

const Main = ({navigation}) => {
  return (
    <View>
      <CustomText style={{color: 'darkblue', fontSize: 40}}>
        Página principal
      </CustomText>
      <CustomText style={{color: 'darkblue'}}>
        Seleccione hacia donde quiere acceder
      </CustomText>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('Registro', {name: 'Pagina de Registro'})
        }>
        Registro
      </CustomTouchable>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('Inicio', {name: 'Ir a inicio sesión'})
        }>
        Inicio Sesión
      </CustomTouchable>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('ListaPersonas', {
            name: 'Ir al listado de personas',
          })
        }>
        Listado de personas
      </CustomTouchable>
      <CustomTouchable
        onPress={() =>
          navigation.navigate('Todo', {name: 'Ir al apartado To Do'})
        }>
        To Do
      </CustomTouchable>
    </View>
  );
};

export default Main;
