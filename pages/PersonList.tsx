import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CustomTouchable from '../components/CustomTouchable';
import {Button} from '@gluestack-ui/themed';

const PersonList = ({navigation}) => {
  const API_URL = 'http://10.0.2.2:8080/api/person';
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log('personas: ', response.data);
      setPersonas(response.data);
    } catch (error) {
      console.error('Da error que es: ', error);
    }
  };

  const goToPerson = id => {
    navigation.navigate('Persona', {name: 'Persona'});
  };

  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <View>
      <Text>PersonList</Text>
      <CustomTouchable onPress={getPersonas}>Get Personas</CustomTouchable>
      <Text>LISTADO:</Text>
      {personas.map((persona, index) => (
        <Button key={persona.id} onPress={() => goToPerson(persona.id)}>
          <Text>- {persona.nombreUsuario}</Text>
        </Button>
      ))}
    </View>
  );
};

export default PersonList;
