import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { criarOrdem } from '../data/ordens';

export default function NovaOrdem({ onSalvar }) {
  const [cliente, setCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [aparelho, setAparelho] = useState('');
  const [problema, setProblema] = useState('');
  const [valor, setValor] = useState('');

  function salvar() {
    if (!cliente.trim() || !aparelho.trim()) {
      alert('Por favor, preencha o nome do cliente e o aparelho!');
      return;
    }

    const ordem = criarOrdem({ cliente, telefone, aparelho, problema, valor });
    onSalvar(ordem);
    setCliente(''); setTelefone(''); setAparelho(''); setProblema(''); setValor('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do cliente</Text>
      <TextInput 
        value={cliente} 
        onChangeText={setCliente} 
        style={styles.input} 
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput 
        value={telefone} 
        onChangeText={setTelefone} 
        style={styles.input} 
      />

      <Text style={styles.label}>Aparelho</Text>
      <TextInput 
        value={aparelho} 
        onChangeText={setAparelho} 
        style={styles.input} 
      />

      <Text style={styles.label}>Problema relatado</Text>
      <TextInput 
        value={problema} 
        onChangeText={setProblema} 
        style={styles.input} 
      />

      <Text style={styles.label}>Valor do serviço (R$)</Text>
      <TextInput 
        value={valor} 
        onChangeText={setValor} 
        keyboardType="numeric" 
        style={styles.input} 
      />

      <View style={{ marginTop: 14 }}>
        <Button title="> Criar Ordem de Serviço <" 
        onPress={salvar} 
        color="#1a237e"
      
        />
      </View>
    </View>
  );
}

// AQUI É ONDE ENTRA O CÓDIGO DE ESTILOS NO FINAL DO ARQUIVO:
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a237e',         // Cor do rótulo
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',   // Cor da borda
    borderRadius: 6,          // Bordas arredondadas
    padding: 10,
    fontSize: 16,             // Tamanho da letra digitada
    color: '#000000',         // Cor do texto digitado
    backgroundColor: '#f9f9f9', // Cor de fundo da caixa
  },
});