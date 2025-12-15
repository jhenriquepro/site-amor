/* OBJETIVO: Adicionar interatividade emocional.
  1. Calcular dias de namoro automaticamente.
  2. Mostrar mensagens aleatórias de carinho.
*/

// --- CONFIGURAÇÃO ---
// Data de início do namoro (Ano, Mês-1, Dia). Ex: Fevereiro é mês 1.
// Mude para a data real de vocês!
const dataInicio = new Date(2025, 1, 15); // Exemplo: 15 de Fevereiro de 2025

// Lista de motivos/mensagens para o botão surpresa
const mensagens = [
    "😁Seu sorriso é perfeito!!",
    "⚖️O jeito que a gente se entende (até quando discordamos kkkk).",
    "🫂Seu abraço é o melhor do mundo!",
    "😹Sua risada é minha melhor música.",
    "🧑‍🤝‍🧑Ao seu lado, tudo fica muito mais leve.",
    "🗣️Adoro nossas conversas sobre nada e tudo!",
    "💏Seu beijo é incrível!",
    "💓Eu te amo por simplesmente te amar!!",
    "🌏Você é tudo pra mim!"
];

// --- SELEÇÃO DE ELEMENTOS DO DOM ---
const contadorElemento = document.getElementById('days-counter');
const botaoSurpresa = document.getElementById('btn-surprise');
const textoSurpresa = document.getElementById('surprise-text');

// --- FUNÇÕES ---

function calcularDiasJuntos() {
    const hoje = new Date();
    
    // Cálculo da diferença em milissegundos
    const diferencaTempo = hoje - dataInicio;
    
    // Converter de milissegundos para dias (1000ms * 60s * 60m * 24h)
    const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    
    // Atualizar o HTML
    contadorElemento.innerText = dias;
}

function mostrarMensagemAleatoria() {
    // Escolher um índice aleatório do array de mensagens
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    const mensagemEscolhida = mensagens[indiceAleatorio];
    
    // Colocar a mensagem no HTML
    textoSurpresa.innerText = mensagemEscolhida;
    
    // Adicionar classe para animação de fade-in
    textoSurpresa.classList.add('show');
    
    // Efeito visual no botão (opcional: mudar texto temporariamente)
    const textoOriginal = botaoSurpresa.innerText;
    botaoSurpresa.innerText = "Outro motivo? ❤️";
}

// --- EVENTOS ---

// Quando a página carregar, calcula os dias
window.addEventListener('load', calcularDiasJuntos);

// Quando clicar no botão, mostra a mensagem
botaoSurpresa.addEventListener('click', mostrarMensagemAleatoria);