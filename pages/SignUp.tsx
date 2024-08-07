import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomBox from '../components/CustomBox';
import CustomText from '../components/CustomText';
import {Button, ButtonSpinner} from '@gluestack-ui/themed';

export default function SignUp() {
  const [name, setName] = useState('');
  const [clave, setClave] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.loginContainer}>
      <CustomBox style={loginBox}>
        <CustomText style={styles.heading}>Sección para registrarse</CustomText>
        <TextInput
          style={styles.input}
          placeholder="Introduzca un nombre"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="correo electronico"
          value={email}
          onChangeText={texto => setClave(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca numero de telefono"
          value={telefono}
          onChangeText={text => setClave(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca una nueva contraseña"
          value={clave}
          onChangeText={clave => setClave(clave)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repita su contraseña"
          value={clave}
          onChangeText={clave => setClave(clave)}
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
        title="loginPointer"
        onPress={() => Alert.alert('Redirigiendo al login')}>
        <CustomBox>
          <ButtonSpinner />
          <CustomText style={undefined}>Ir a iniciar Sesión</CustomText>
        </CustomBox>
      </Button>
    </View>
  );
}

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
