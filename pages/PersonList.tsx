import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CustomTouchable from '../components/CustomTouchable';

const PersonList = () => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8080/api/person');
      console.log('personas: ', response.data);
      setPersonas(response.data);
    } catch (error) {
      console.error('Da error que es: ', error);
    }
  };

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8080/api/person')
      .then(response => {
        console.log('Personas: ', response.data);

        setPersonas(response.data);
      })
      .catch(error => {
        console.log('errorrrrrr:', error);
      });
  }, []);

  return (
    <View>
      <Text>PersonList</Text>
      <CustomTouchable
        onPress={() => {
          getPersonas();
        }}>
        Get Personas
      </CustomTouchable>
      <Text>LISTADO:</Text>
      {personas.map((persona, index) => (
        <Text key={index}>- {persona.nombreUsuario}</Text>
      ))}
    </View>
  );
};

export default PersonList;

const styles = StyleSheet.create({});
