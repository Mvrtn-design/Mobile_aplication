import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomBox from '../components/CustomBox';
import CustomText from '../components/CustomText';
import {Button, ButtonSpinner} from '@gluestack-ui/themed';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [clave, setClave] = useState('');

  return (
    <View style={styles.loginContainer}>
      <CustomBox style={loginBox}>
        <CustomText style={styles.heading}>
          Sección para inciar sesión
        </CustomText>
        <TextInput
          style={styles.input}
          placeholder="Introduzca nombre"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca contraseña"
          value={clave}
          onChangeText={texto => setClave(texto)}
          secureTextEntry
        />
      </CustomBox>
      <Button
        title="submitButton"
        onPress={() => Alert.alert('Login', 'Se ha presionado el botón')}>
        <CustomBox>
          <ButtonSpinner />
          <CustomText style={styles.heading}>Presione</CustomText>
        </CustomBox>
      </Button>
      <Button
        title="ir_a_registro"
        onPress={() => Alert.alert('Redirigiendo a registro')}>
        <CustomBox>
          <CustomText style={styles.heading}>Ir a registrarse</CustomText>
        </CustomBox>
      </Button>
    </View>
  );
};
const loginBox = {
  mainBox: {
    backgroundColor: '#ffff',
    borderColor: 'green',
    padding: 60,
  },
  shadowBox: {
    backgroundColor: 'gray',
  },
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'gray',
    margin: 10,
    color: 'lightblue',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
