import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {FlatList} from '@gluestack-ui/themed';

const ToDo = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editando, setEditando] = useState('');
  const [nombreTarea, setNombreTarea] = useState('');
  const [datos, setDatos] = useState([
    {
      id: '1',
      task: 'planificar tareas para añadir',
    },
    {
      id: '2',
      task: 'hacer los ejercicios diarios',
    },
  ]);
  const [editingId, setEditingId] = useState(null);

  const introducirTarea = () => {
    setDatos([...datos, {id: Date.now().toString(), task: nombreTarea}]);
    setNombreTarea('');
  };

  const eliminarTarea = idd => {
    setDatos(datos.filter(item => item.id !== idd));
  };

  const editarTarea = () => {
    if (editingId) {
      setDatos(
        datos.map(item =>
          item.id === editingId ? {id: editingId, task: editando} : item,
        ),
      );
      setEditingId(null);
      setOpenEdit(false);
    }
  };

  const openTaskEditor = idd => {
    setEditingId(idd);
    setOpenEdit(true);
  };

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
          <IconButton
            icon="pencil"
            iconColor="white"
            onPress={() => {
              openTaskEditor(item.id);
            }}
          />
          <IconButton
            icon="trash-can"
            iconColor="red"
            onPress={() => eliminarTarea(item.id)}
          />
        </View>
        {openEdit && item.id === editingId ? (
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
            <IconButton icon="camera" iconColor="red" onPress={editarTarea} />
          </View>
        ) : null}
      </View>
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
      <FlatList
        data={datos}
        renderItem={renderer}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ToDo;
