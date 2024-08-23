/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {FlatList} from '@gluestack-ui/themed';

const To_do = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editando, setEditando] = useState('');
  const [nombreTarea, setNombreTarea] = useState('');
  const [datos, setDatos] = useState([
    {
      id: '1',
      task: 'Take some breakfast',
    },
    {
      id: '2',
      task: 'Take some lunch',
    },
    {
      id: '3',
      task: 'Take some dinner',
    },
    {
      id: '4',
      task: 'Take some snack',
    },
    {
      id: '5',
      task: 'Take some dessert',
    },
    {
      id: '6',
      task: 'Take some drink',
    },
  ]);

  const renderer = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'green',
            margin: 5,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 15, color: 'white', padding: 7, flex: 1}}>
            {item.task}
          </Text>
          <IconButton icon="pencil" iconColor="white" />
          <IconButton
            icon="trash-can"
            iconColor="red"
            onPress={() => eliminarTarea(item)}
          />
        </View>
        {openEdit === true ? (
          <View>
            <TextInput
              value={editando}
              onChangeText={nombreTarea_temp => setEditando(nombreTarea_temp)}
              style={{
                borderWidth: 2,
                borderColor: 'green',
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
              placeholder="Edite la tarea"
            />
            <IconButton
              icon="camera"
              iconColor="red"
              onPress={() => editarTarea(item.id)}
            />
          </View>
        ) : null}
      </View>
    );
  };
  const introducirTarea = () => {
    setDatos([...datos, {id: Date.now().toString(), task: nombreTarea}]);
    setNombreTarea('');
  };
  const eliminarTarea = idd => {
    setDatos(datos.filter(item => item.id !== idd));
  };
  const editarTarea = myID => {
    setDatos(
      datos.map(item => (item.id === myID ? {id: myID, task: editando} : myID)),
    );
  };

  return (
    <View style={{paddingHorizontal: 5}}>
      <TextInput
        value={nombreTarea}
        onChangeText={nombreTarea_temp => setNombreTarea(nombreTarea_temp)}
        style={{
          borderWidth: 2,
          borderColor: 'green',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
        placeholder="Introduzca una tarea"
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          paddingVertical: 10,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          introducirTarea();
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          Añadir
        </Text>
      </TouchableOpacity>
      <FlatList data={datos} renderItem={renderer} />
    </View>
  );
};

export default To_do;
