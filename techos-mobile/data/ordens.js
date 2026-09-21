// Estrutura de uma Ordem de Serviço, baseada no techos-java
export const STATUS = {
  AGUARDANDO: 'Aguardando',
  EM_ANDAMENTO: 'Em andamento',
  CONCLUIDO: 'Concluído',
  ENTREGUE: 'Entregue',
};

export function criarOrdem({ cliente, cpf, telefone, aparelho, problema, valor }) {
  return {
    id: Date.now().toString(),
    cliente,
    cpf,
    telefone,
    aparelho,
    problema,
    valor,
    status: STATUS.AGUARDANDO,
    criadoEm: new Date().toISOString(),
  };
}