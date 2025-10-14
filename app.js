// =======================================
// JAVASCRIPT: CÓDIGO COMPLETO BRISA CARIOCA
// (Com Compartilhamento de Imagem e Volume Ambiente)
// =======================================

// --- Constantes e Variáveis ---
const FRASES_EXEMPLO = [
    "Não desiste, mermão! Segue em frente que a vitória é tua! 💪",
    "Partiu dar um gás! O dia tá irado e a meta é ser feliz.",
    "Malandro é quem se organiza! Tamo junto nessa jornada.",
    "Na moral, o foco de hoje é maior que qualquer problema. Vai com tudo!",
    "Ih, caraca! O sucesso mora logo ali. Bora correr atrás!",
    "Se o dia tá nublado, faz o teu sol. Essa é a brisa certa.",
    "Deixa de ser mangarativa! O que não te desafia não te transforma. Bora!"
];

// Elementos da UI (do index.html)
const fraseElement = document.getElementById('frase-motivacional');
const dataElement = document.getElementById('data-hoje');
const btnRecarregar = document.getElementById('btn-recarregar');
const btnCompartilhar = document.getElementById('btn-compartilhar');
const btnFavoritar = document.getElementById('btn-favoritar');
const iconeFavoritar = document.getElementById('icone-favoritar');

// Elemento que será transformado em imagem
const appContainer = document.querySelector('.app-container');

// Player de Áudio (Referência ao elemento no HTML)
const audioPlayer = document.getElementById('musica-fundo');

// Variável de controle de estado do áudio
let audioIniciado = false; 


// --- Funções de Lógica Básica ---

/**
 * Simula a busca de uma frase (sorteia uma localmente).
 */
async function fetchNovaFrase() {
    // Simula o tempo de busca
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    const index = Math.floor(Math.random() * FRASES_EXEMPLO.length);
    return FRASES_EXEMPLO[index];
}

/**
 * Formata e exibe a data atual.
 */
function mostrarData() {
    const hoje = new Date();
    const formatacao = { weekday: 'long', day: '2-digit', month: 'long' };
    
    const dataFormatada = hoje.toLocaleDateString('pt-BR', formatacao)
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');
                            
    dataElement.textContent = `HOJE: ${dataFormatada.replace('-feira', '').toUpperCase()}`;
}


// --- Lógica de Áudio (Volume Ambiente + Inicia no Primeiro Clique) ---

/**
 * Tenta iniciar a música na primeira interação do usuário.
 */
function iniciarMusicaNoClique() {
    if (!audioIniciado) {
        
        // DEFINE O VOLUME PARA 30% (AMBIENTE)
        audioPlayer.volume = 0.3; 

        audioPlayer.play().then(() => {
            audioIniciado = true;
            console.log("Música iniciada após interação. Volume: 30%");
        }).catch(error => {
            console.warn("Autoplay bloqueado. A música só iniciará com a próxima interação.");
        });
    }
}


// --- Lógica de Curtida e Persistência ---

/**
 * Alterna o estado de curtida e salva no localStorage.
 */
function toggleFavorito() {
    btnFavoritar.classList.toggle('is-favorited');

    const isFavorited = btnFavoritar.classList.contains('is-favorited');

    if (isFavorited) {
        iconeFavoritar.classList.remove('far'); 
        iconeFavoritar.classList.add('fas');   
        localStorage.setItem('fraseCurtiu', 'true');
    } else {
        iconeFavoritar.classList.remove('fas');
        iconeFavoritar.classList.add('far');
        localStorage.setItem('fraseCurtiu', 'false');
    }
}

/**
 * Carrega o estado de curtida do localStorage ao iniciar a página.
 */
function carregarEstadoFavorito() {
    const curtiu = localStorage.getItem('fraseCurtiu') === 'true';

    if (curtiu) {
        btnFavoritar.classList.add('is-favorited');
        iconeFavoritar.classList.remove('far');
        iconeFavoritar.classList.add('fas');
    } else {
        btnFavoritar.classList.remove('is-favorited');
        iconeFavoritar.classList.remove('fas');
        iconeFavoritar.classList.add('far');
    }
}


// --- Lógica de Compartilhamento com Imagem (HTML2Canvas) ---

/**
 * Converte um Data URI (Base64) em Blob/File. Necessário para o navigator.share com arquivos.
 */
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].match(/:(.*?);/)[1];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
}

/**
 * Captura a tela e compartilha a imagem + texto.
 */
async function compartilharFrase() {
    const frase = fraseElement.textContent;
    const textoCompartilhamento = `*Brisa Carioca do Dia:*\n"${frase}"\n\nTamo junto! #MotivaçãoCarioca`;
    
    // 1. Tenta criar uma imagem do app-container (requer html2canvas no HTML!)
    try {
        const canvas = await html2canvas(appContainer, {
            windowWidth: appContainer.scrollWidth,
            windowHeight: appContainer.scrollHeight,
            scale: 2, 
            useCORS: true
        });

        // 2. Converte o Canvas em um arquivo (Blob/File)
        const imgData = canvas.toDataURL('image/png', 1.0);
        const blob = dataURItoBlob(imgData);
        const filesArray = [new File([blob], "brisa-carioca.png", { type: "image/png" })];

        // 3. Tenta o Compartilhamento Nativo com Arquivo
        if (navigator.share && navigator.canShare({ files: filesArray, text: textoCompartilhamento })) {
            
            await navigator.share({
                files: filesArray,
                title: 'Brisa Carioca do Dia',
                text: textoCompartilhamento,
            });
            console.log('Compartilhado com sucesso!');

        } else if (navigator.share) {
            // Fallback se não suportar arquivos, compartilha só o texto
            await navigator.share({
                title: 'Brisa Carioca do Dia',
                text: textoCompartilhamento,
            });
        } else {
            // Fallback final: mostra um alerta para o usuário copiar o texto
            alert(`Para compartilhar, copie a frase:\n\n${textoCompartilhamento}`);
        }

    } catch (error) {
        console.error("Erro ao gerar ou compartilhar a imagem:", error);
        alert("Não foi possível gerar a imagem para compartilhamento. Tente copiar o texto.");
    }
}


// --- Funções de Controle de UI e Inicialização ---

/**
 * Atualiza o estado da UI durante a busca da frase.
 */
function setUIState(buscando) {
    btnRecarregar.disabled = buscando;
    btnCompartilhar.disabled = buscando;
    
    const recarregarIcone = btnRecarregar.querySelector('i');
    recarregarIcone.classList.toggle('is-spinning', buscando);

    fraseElement.classList.toggle('content-block__text--loading', buscando);

    if (buscando) {
        fraseElement.classList.add('content-block__text--fade-out');
        fraseElement.textContent = "Buscando a braba, segura a onda...";
    }
}

/**
 * Gerencia a lógica de recarregar a frase, com efeitos de transição.
 */
async function handleRecarregar() {
    setUIState(true);
    
    // Espera a frase sumir (tempo da transição CSS)
    await new Promise(resolve => setTimeout(resolve, 400)); 

    try {
        const novaFrase = await fetchNovaFrase();
        fraseElement.textContent = novaFrase;
        
    } catch (error) {
        console.error("Erro ao buscar a frase:", error);
        fraseElement.textContent = "Deu ruim na braba! Tenta de novo, galera.";
    } finally {
        // Aplica o fade-in
        fraseElement.classList.remove('content-block__text--fade-out');
        fraseElement.classList.add('content-block__text--fade-in'); 

        setUIState(false);
        
        // Remove a classe de fade-in após a transição
        setTimeout(() => {
            fraseElement.classList.remove('content-block__text--fade-in');
        }, 500); 
    }
}

/**
 * Função de inicialização do app.
 */
function initApp() {
    // 1. Configura a data
    mostrarData();
    
    // 2. Carrega o estado de curtida do localStorage
    carregarEstadoFavorito();

    // 3. Adiciona os Event Listeners principais
    btnRecarregar.addEventListener('click', handleRecarregar);
    btnCompartilhar.addEventListener('click', compartilharFrase);
    btnFavoritar.addEventListener('click', toggleFavorito); 
    
    // 4. LIGAÇÃO DO ÁUDIO: Adiciona a função de iniciar música em qualquer clique
    btnRecarregar.addEventListener('click', iniciarMusicaNoClique);
    btnFavoritar.addEventListener('click', iniciarMusicaNoClique);
    btnCompartilhar.addEventListener('click', iniciarMusicaNoClique);
    
    // 5. Carrega a primeira frase
    handleRecarregar();
}

// Inicia o app quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);
