import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const image = require('./src/bg.jpg');
  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: 'minha tarefa 1'
    },
    {
      id: 2,
      tarefa: 'minha tarefa 1'
    }
  ]);

  const [modal, setarModal] = useState(true);

  let [fontsLoaded] = useFonts({
    Lato_400Regular
  });

  function deletarTarefa(id){
    alert('Tarefa com id: '+id+ ' foi deletado com sucesso!');
    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });
    setarTarefas(newTarefas);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.textHeader}>Aplicativo de Tarefas</Text>
        </ImageBackground>
        
      {
        tarefas.map(function(val){
          return(
            <View style={styles.tarefaSingle}>
            <View style={{flex: 1}}>
              <Text>
                {val.tarefa}
              </Text>
            </View>

            <View>
              <TouchableOpacity onPress={()=> deletarTarefa(val.id)}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            </View>
          );
        })
      }
    
      </ScrollView>
    );
  

  
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  },
  textHeader: {
    fontSize: 30,
    padding: 30,
    fontFamily: 'Lato_400Regular',
    textAlign: 'center'
  },
  tarefaSingle:{
    width: '100%',
    borderBottomColor: '#ddd',
    borderTopColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 20
  }
});
