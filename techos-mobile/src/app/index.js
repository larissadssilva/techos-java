import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import NovaOrdem from '../../screens/NovaOrdem';
import ListaOrdens from '../../screens/ListaOrdens';
import { STATUS } from '../../data/ordens';

export default function HomeScreen() {
  const [ordens, setOrdens] = useState([]);

  // 1. Adicionar nova ordem
  function adicionarOrdem(ordem) {
    setOrdens([...ordens, ordem]);
  }

  // 2. Concluir uma ordem existente
  function concluirOrdem(id) {
    const ordensAtualizadas = ordens.map((ordem) => {
      if (ordem.id === id) {
        return { ...ordem, status: STATUS.CONCLUIDO };
      }
      return ordem;
    });
    setOrdens(ordensAtualizadas);
  }

  // 3. Excluir uma ordem da lista
  function excluirOrdem(id) {
    const ordensFiltradas = ordens.filter((ordem) => ordem.id !== id);
    setOrdens(ordensFiltradas);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>TechOS - Ordens de Serviço</Text>
      </View>

      <NovaOrdem onSalvar={adicionarOrdem} />
      
      {/* Passamos as novas funções como propriedades para o ListaOrdens */}
      <ListaOrdens 
        ordens={ordens} 
        onConcluir={concluirOrdem} 
        onExcluir={excluirOrdem} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c489ba',
  },
  header: {
    padding: 16,
    backgroundColor: '#c489ba',
    borderBottomWidth: 1,
    borderColor: '#0a0a0a',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});