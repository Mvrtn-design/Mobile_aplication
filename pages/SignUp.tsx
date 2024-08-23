import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomBox from '../components/CustomBox';
import CustomText from '../components/CustomText';
import {Button, ButtonSpinner} from '@gluestack-ui/themed';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [clave, setClave] = useState('');
  const [claveRepetida, setClaveRepetida] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const goToLogin = () => {
    navigation.navigate('Inicio', {name: 'Login'});
  };

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
          onChangeText={texto => setEmail(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca numero de telefono"
          value={telefono}
          onChangeText={text => setTelefono(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca una nueva contraseña"
          value={clave}
          onChangeText={clave_temp => setClave(clave_temp)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repita su contraseña"
          value={claveRepetida}
          onChangeText={claveRepetida_temp =>
            setClaveRepetida(claveRepetida_temp)
          }
          secureTextEntry
        />
      </CustomBox>
      <Button onPress={() => Alert.alert('Login', 'Se ha presionado el botón')}>
        <CustomBox>
          <ButtonSpinner />
          <CustomText style={styles.heading}>Presione</CustomText>
        </CustomBox>
      </Button>
      <Button onPressIn={() => goToLogin()}>
        <CustomBox>
          <ButtonSpinner />
          <CustomText style={undefined}>Ir a iniciar Sesión</CustomText>
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

export default SignUp;
