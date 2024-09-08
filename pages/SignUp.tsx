import {Alert, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomBox from '../components/CustomBox';
import CustomText from '../components/CustomText';
import CustomInputBox from '../components/CustomInputBox';
import CustomTouchable from '../components/CustomTouchable';

const SignUp = ({navigation}) => {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre_usuario: '',
    age: 0,
    email: '',
    clave: '',
  });
  const [claveRepetida, setClaveRepetida] = useState('');

  const goToLogin = () => {
    navigation.navigate('Inicio', {name: 'Login'});
  };
  const goToPersonList = () => {
    navigation.navigate('ListaPersonas', {name: 'PersonList'});
  };
  const cleanData = () => {
    setDatosUsuario({nombre_usuario: '', age: 0, email: '', clave: ''});
    setClaveRepetida('');
  };

  const handleSignUp = () => {
    if (!checkingValues()) {
      Alert.alert('Error rellenando los datos');
    } else if (datosUsuario.clave !== claveRepetida) {
      Alert.alert('Error en la coincidencia de las contraseñas');
    } else {
      console.log(datosUsuario);
      Alert.alert(`ok: ${datosUsuario.nombre_usuario}`);
      cleanData();
    }
  };

  function checkingValues() {
    return (
      datosUsuario.nombre_usuario !== '' &&
      datosUsuario.age > 0 &&
      datosUsuario.age < 200 &&
      datosUsuario.clave !== '' &&
      datosUsuario.email !== ''
    );
  }

  return (
    <ScrollView>
      <CustomBox>
        <CustomText style={styles.heading}>Sección para registrarse</CustomText>
        <CustomInputBox
          label="nombre usuario"
          placeholder="Introduzca un nombre"
          value={datosUsuario.nombre_usuario}
          onChangeText={textt =>
            setDatosUsuario({...datosUsuario, nombre_usuario: textt})
          }
        />
        <CustomInputBox
          label="email"
          placeholder="correo electronico"
          value={datosUsuario.email}
          onChangeText={textt =>
            setDatosUsuario({...datosUsuario, email: textt})
          }
        />
        <CustomInputBox
          label="edad"
          placeholder="Introduzca edad"
          value={datosUsuario.age}
          keyboardType="numeric"
          onChangeText={text =>
            setDatosUsuario({...datosUsuario, age: parseInt(text, 10)})
          }
        />
        <CustomInputBox
          label="contraseña"
          placeholder="Introduzca una nueva contraseña"
          value={datosUsuario.clave}
          onChangeText={text => setDatosUsuario({...datosUsuario, clave: text})}
          secureTextEntry
        />
        <CustomInputBox
          label="repeticion de contraseña"
          placeholder="Repita su contraseña"
          value={claveRepetida}
          onChangeText={claveRepetida_temp =>
            setClaveRepetida(claveRepetida_temp)
          }
          secureTextEntry
        />
      </CustomBox>

      <CustomTouchable
        onPress={() => {
          handleSignUp();
        }}
        style={{backgroundColor: 'darkgreen'}}>
        Registrar
      </CustomTouchable>
      <CustomTouchable
        onPress={() => {
          cleanData();
        }}
        style={{color: 'darkred'}}>
        Borrar Campos
      </CustomTouchable>
      <CustomTouchable
        onPress={() => {
          goToLogin();
        }}>
        Ir a inicio de sesión
      </CustomTouchable>
      <CustomTouchable
        onPress={() => {
          goToPersonList();
        }}>
        Ver listado de personas
      </CustomTouchable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 10,
  },
});

export default SignUp;
