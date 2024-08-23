import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@gluestack-ui/themed';
import CustomBox from '../components/CustomBox';

const Main = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() =>
          navigation.navigate('Registro', {name: 'Pagina de Registro'})
        }>
        <CustomBox>
          <Text>Ir a registrarse</Text>
        </CustomBox>
      </Button>
      <CustomBox>
        <Button
          onPress={() =>
            navigation.navigate('Login', {name: 'Ir a inicio sesión'})
          }>
          <Text>Iniciar Sesion</Text>
        </Button>
      </CustomBox>
      <CustomBox>
        <Button
          onPress={() =>
            navigation.navigate('Todo', {name: 'Ir al apartado To Do'})
          }>
          <Text>SECCION TO DO</Text>
        </Button>
      </CustomBox>
    </View>
  );
};

export default Main;
