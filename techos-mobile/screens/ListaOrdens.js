import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { STATUS } from '../data/ordens';

export default function ListaOrdens({ ordens, onConcluir, onExcluir }) {
  return (
    <FlatList
      data={ordens}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isConcluido = item.status === STATUS.CONCLUIDO;

        return (
          <View style={[styles.card, isConcluido && styles.cardConcluido]}>
            <Text style={styles.cliente}>{item.cliente} — {item.aparelho}</Text>
            <Text style={styles.detalhe}>Problema: {item.problema}</Text>
            <Text style={styles.detalhe}>Status: <Text style={styles.status}>{item.status}</Text></Text>
            <Text style={styles.valor}>R$ {item.valor}</Text>

            <View style={styles.acoes}>
              {!isConcluido && (
                <Button 
                  title="Concluir" 
                  color="#070707" 
                  onPress={() => onConcluir(item.id)} 
                />
              )}
              <Button 
                title="Excluir" 
                color="#ff0000" 
                onPress={() => onExcluir(item.id)} 
              />
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  cardConcluido: {
    backgroundColor: '#84db8b',
  },
  cliente: {
    fontSize: 18,            // Tamanho da fonte
    fontWeight: 'bold',      // Peso da fonte (bold, normal, 600)
    color: '#1a237e',        // Cor (ex: Azul escuro)
    marginBottom: 4,
  },
  detalhe: {
    marginTop: 2,
    color: '#070707',
  },
  status: {
    fontWeight: 'bold',
  },
  valor: {
    marginTop: 4,
    fontWeight: 'bold',
    color: '#070707',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 8,
  },
});