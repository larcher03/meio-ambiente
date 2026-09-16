// Objeto que representa a árvore do fluxograma
const fluxograma = {
    inicio: {
        etapa: "Etapa 1 de 3",
        emoji: "🌳",
        titulo: "Desafio Ecológico Inicial",
        descricao: "Qual área do meio ambiente você deseja priorizar para aplicar soluções com Inteligência Artificial?",
        opcoes: [
            { texto: "🪵 Monitoramento e Proteção de Florestas", proximo: "florestas" },
            { texto: "⚡ Eficiência Energética e Consumo Humano", proximo: "energia" }
        ]
    },

    // --- RAMO DE FLORESTAS ---
    florestas: {
        etapa: "Etapa 2 de 3",
        emoji: "🔥",
        titulo: "Combate aos Incêndios e Desmatamento",
        descricao: "Florestas nativas estão sofrendo com queimadas e desmatamento ilegal. Como a IA deve atuar?",
        opcoes: [
            { texto: "🛰️ Sensores IoT + Drones com IA para detectar focos de fogo em tempo real.", proximo: "foco_fogo" },
            { texto: "📸 Análise de imagens de satélite para prever rotas de desmatamento ilegal.", proximo: "desmatamento" }
        ]
    },

    foco_fogo: {
        etapa: "Resultado Final 🎉",
        emoji: "🚁",
        titulo: "Impacto: Resposta Ultra-Rápida!",
        descricao: "Com a IA detectando calor e fumaça instantaneamente, brigadistas e drones autônomos contêm o fogo antes que ele se alastre! **Você salvou milhares de hectares de mata e preservou a fauna local.** 🦊🐾",
        opcoes: []
    },

    desmatamento: {
        etapa: "Resultado Final 🎉",
        emoji: "🛡️",
        titulo: "Impacto: Proteção Preventiva!",
        descricao: "Algoritmos preditivos alertam as autoridades *antes* que as árvores sejam derrubadas. **A fiscalização aumenta e o desmatamento cai significativamente com ação baseada em dados.** 🌳📜",
        opcoes: []
    },

    // --- RAMO DE ENERGIA ---
    energia: {
        etapa: "Etapa 2 de 3",
        emoji: "🏙️",
        titulo: "Cidades e Consumo de Energia",
        descricao: "O consumo desordenado de recursos nas cidades gera altos níveis de poluição. Qual solução adotar?",
        opcoes: [
            { texto: "💡 Redes elétricas inteligentes (Smart Grids) gerenciadas por IA nas cidades.", proximo: "smart_grids" },
            { texto: "🌾 Agricultura de precisão com IA para evitar desperdício de água e insumos.", proximo: "agricultura" }
        ]
    },

    smart_grids: {
        etapa: "Resultado Final 🎉",
        emoji: "🔋",
        titulo: "Impacto: Redução da Pegada de Carbono!",
        descricao: "A IA redistribui a energia limpa (solar/eólica) conforme a demanda em tempo real, evitando o uso de usinas poluidoras. **Cidades mais verdes e economia sustentável garantida!** ⚡🏙️",
        opcoes: []
    },

    agricultura: {
        etapa: "Resultado Final 🎉",
        emoji: "🚜",
        titulo: "Impacto: Alimentos Sustentáveis!",
        descricao: "Sensores analisam o solo e aplicam água e nutrientes no ponto exato. **Economiza-se até 40% de água e reduz o uso de agrotóxicos nos alimentos e rios.** 💧🌾",
        opcoes: []
    }
};

// Seleção de elementos do HTML
const stepIndicator = document.getElementById("step-indicator");
const nodeEmoji = document.getElementById("node-emoji");
const nodeTitle = document.getElementById("node-title");
const nodeDescription = document.getElementById("node-description");
const optionsContainer = document.getElementById("options-container");
const btnRestart = document.getElementById("btn-restart");
const cardFlow = document.getElementById("card-flow");

// Função para renderizar uma etapa do fluxograma
function carregarEtapa(chave) {
    const no = fluxograma[chave];

    // Adiciona uma pequena animação ao mudar de card
    cardFlow.style.animation = 'none';
    cardFlow.offsetHeight; /* Trigger reflow */
    cardFlow.style.animation = 'fadeIn 0.4s ease-in-out';

    // Atualiza os dados do card
    stepIndicator.innerText = no.etapa;
    nodeEmoji.innerText = no.emoji;
    nodeTitle.innerText = no.titulo;
    nodeDescription.innerHTML = no.descricao;

    // Limpa botões antigos
    optionsContainer.innerHTML = "";

    // Se houver opções, cria os botões
    if (no.opcoes.length > 0) {
        btnRestart.classList.add("hidden"); // Esconde o botão reiniciar durante o percurso
        
        no.opcoes.forEach(opcao => {
            const btn = document.createElement("button");
            btn.className = "btn-option";
            btn.innerHTML = opcao.texto;
            btn.onclick = () => carregarEtapa(opcao.proximo);
            optionsContainer.appendChild(btn);
        });
    } else {
        // Se não houver opções (Resultado Final), exibe o botão de reiniciar
        btnRestart.classList.remove("hidden");
    }
}

// Função para iniciar ou reiniciar o jogo
function iniciarFluxo() {
    carregarEtapa("inicio");
}

// Inicializa a aplicação ao carregar a página
window.onload = iniciarFluxo;
