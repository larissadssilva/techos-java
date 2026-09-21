# 🔧 TechOS

Sistema de Ordem de Serviço para assistência técnica, desenvolvido em Java.

---

## 📋 Sobre o projeto

O **TechOS** é um sistema interativo executado no terminal que permite gerenciar ordens de serviço de uma loja de assistência técnica, organizando o fluxo de aparelhos recebidos para reparo.

Projeto desenvolvido como **Projeto de Extensão Universitária** no curso de **Ciência da Computação**, alinhado ao **ODS 8 — Trabalho Decente e Crescimento Econômico**.

---

## ⚙️ Funcionalidades

- ✅ Criação de ordens de serviço com numeração automática
- ✅ Registro de cliente, aparelho, problema e valor
- ✅ Atualização de status do reparo
- ✅ Listagem de ordens em aberto
- ✅ Listagem de todas as ordens

---

## 📊 Status disponíveis

| Status | Descrição |
|---|---|
| Aguardando | Aparelho recebido, aguardando reparo |
| Em andamento | Reparo em execução |
| Concluído | Reparo finalizado, pronto para retirada |

---

## 🧠 Conceitos aplicados

- Tipos de dados primitivos e compostos
- Constantes e variáveis
- Entrada e saída de dados (Scanner / System.out)
- Estruturas condicionais (switch)
- Estruturas de repetição (do-while, for-each)
- Manipulação de listas dinâmicas (ArrayList)
- Organização em métodos reutilizáveis

---

## 🌍 Conexão com ODS

| ODS | Contribuição |
|---|---|
| ODS 8 — Trabalho Decente | Organiza e profissionaliza pequenos negócios locais |
| ODS 9 — Inovação | Aplica tecnologia acessível a negócios tradicionais |

---

## ▶️ Como executar

### Pré-requisitos
- Java JDK 8 ou superior instalado

### Passos
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/techos-java.git

# Acesse a pasta
cd techos-java

# Compile
javac OrdemDeServico.java

# Execute
java OrdemDeServico
```

---

## 📸 Exemplo de uso

```
===== MENU PRINCIPAL =====
1 - Nova Ordem de Serviço
2 - Listar Ordens Abertas
3 - Atualizar Status
4 - Listar Todas as Ordens
0 - Sair
Escolha uma opção: 1

Nome do cliente: Maria Souza
Telefone: (11) 99999-9999
Aparelho: iPhone 11
Problema relatado: Tela quebrada
Valor do serviço (R$): 350.00

✓ Ordem de Serviço Nº 1 criada com sucesso!
```

---

## 👨‍💻 Desenvolvido por

Projeto de Extensão Universitária — Ciência da Computação
