# 🔧 TechOS

Sistema de Ordem de Serviço para assistência técnica — com duas versões: **Java** (terminal) e **Mobile** (React Native/Expo).

O projeto nasceu da minha experiência real como técnica de informática, organizando o fluxo de aparelhos recebidos para reparo (cliente, aparelho, problema, valor e status).

---

## 📁 Estrutura do repositório
techos-java/      → versão original, feita em Java (terminal)
techos-mobile/    → versão mobile, feita em React Native (Expo)

---

## ☕ Versão Java (`techos-java`)

Sistema interativo executado no terminal, feito como Projeto de Extensão Universitária em Ciência da Computação.

**O que faz:**
- Cria ordens de serviço com numeração automática
- Registra cliente, aparelho, problema e valor
- Atualiza o status do reparo (Aguardando / Em andamento / Concluído)
- Lista ordens abertas ou todas as ordens

**Como rodar:**
cd techos-java
javac OrdemDeServico.java
java OrdemDeServico

---

## 📱 Versão Mobile (`techos-mobile`)

Adaptação do mesmo sistema para aplicativo mobile, usando **React Native** com **Expo**. Mesma lógica de ordens de serviço, agora com interface de toque, pensada para uso rápido no dia a dia de uma assistência técnica.

**O que faz:**
- Cadastro de novas ordens de serviço por formulário
- Listagem visual das ordens com status
- Mesma estrutura de dados da versão Java, reescrita em JavaScript

**Como rodar:**
cd techos-mobile
npm install
npx expo start

Depois, escaneie o QR code com o app **Expo Go** (Android ou iOS).

---

## 🧠 Por que duas versões?

A versão Java foi o primeiro passo, focado em lógica de programação e estruturas de dados. A versão mobile é a evolução natural: pegar um problema real (gestão de ordens de serviço) e levar para o formato que faz mais sentido no dia a dia — o celular.

---

## 👩‍💻 Desenvolvido por

Larissa Santos — Estudante de Ciência da Computação, foco em desenvolvimento mobile.
