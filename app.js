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
    "Deixa de ser mangarativa! O que não te desafia não te transforma. Bora!",
    "Papo reto: a persistência é o único 0800 que te leva ao topo.",
    "A vida é tipo a praia: se não souber mergulhar, leva caldo. Bora meter o pé na areia e aprender!",
    "Coé, mermão! O foco de hoje é maior que qualquer caô. Vai com tudo!",
    "Não dá mole pra tristeza. O dia tá irado e a vibe positiva é o papo reto.",
    "Para ser brabo, tem que ralar. A vitória não brota à toa, ela é construída.",
    "Se liga: a maior virada é sempre a que a gente dá por dentro. Transborda paz!",
    "Respeita a caminhada! Cada perrengue é só mais um conto que vai virar história de sucesso.",
    "É sinistro, mas é real: o melhor de hoje só depende do teu gás de agora.",
    "Bora dar um rolé na vida? Cada passo, mesmo incerto, é um novo horizonte.",
    "Quem tem fé não se abala. Deixa a onda passar e pega a próxima com mais moral ainda.",
    "Pode crer! O sucesso é 0800 pra quem tem atitude e corre atrás.",
    "A vida é um caixote: às vezes te derruba, mas te ensina a levantar mais rápido.",
    "Se liga na parada: o tempo não volta. Aproveita essa brisa!",
    "Mete o pé no medo e brota na sua melhor versão. Já é!",
    "Dá o papo: quem corre com a verdade, não cansa. Seja autêntico.",
    "A meta é clara: menos caô, mais atitude. Partiu vencer!",
    "Não deixa a maré te levar. Seja o surfista que domina a onda.",
    "Sussa! O que for pra ser teu, a vida te entrega. Mas tem que ir buscar.",
    "Aquele que duvidou de você? Vira o nome da sua próxima conquista.",
    "Tá ligado? O futuro é um rolé que se constrói hoje, no asfalto e na areia.",
    "O melhor lugar pra estar é onde a sua paz faz morada. Não se perca na correria.",
    "Faz a tua. Ninguém vive a tua brisa, então não se prenda ao que os outros pensam.",
    "O sol do Rio tá aí pra provar: depois da tempestade, a luz é braba.",
    "Tá bolado? Respira fundo e lembra do teu foco. A neura passa.",
    "Não aceite migalhas, mermão. Tua vida é um banquete de possibilidades!",
    "Vamo que vamo! A persistência transforma 'deu ruim' em 'quase lá'.",
    "Não crie limites para a sua mente, ela é o seu melhor 'bond' para o sucesso.",
    "Se joga na fé e no trabalho. Essa combinação é invencível, pode crer.",
    "Mantenha a calma e o ritmo. A pressa é inimiga da perfeição e da brisa boa.",
    "A felicidade não tem preço. Ela é de graça e tá na simplicidade do teu dia.",
    "Se a vida te der limões, faz uma caipirinha e segue em frente. Irado!",
    "A melhor gíria do Rio é 'eu consigo'. Use ela hoje!",
    "O caminho é longo, mas a vista lá de cima é mais sinistro que o Pão de Açúcar.",
    "Não atrase o teu rolé. O momento de começar é agora.",
    "Seja o sangue bom que inspira e transforma. Tua atitude contagia.",
    "Firmeza! A vida é uma escola e o aprendizado é diário. Absorva tudo.",
    "O erro faz parte do conto. Aprende e vaza pra próxima fase.",
    "A força de um carioca tá na capacidade de sorrir na adversidade. Sorria!",
    "Quem planta esforço, colhe sucesso. Essa colheita tá braba!",
    "Não espere por milagres, faça a sua parte. O milagre é o teu suor.",
    "Não existe 'tá caindo'. Existe 'tá aprendendo a voar'.",
    "A sua energia define o rolé do seu dia. Escolhe a vibe certa.",
    "Pensa bem: se fosse fácil, todo mundo faria. O difícil é que te faz especial.",
    "Acredita na braba que mora dentro de você. Ela é mais forte que qualquer medo.",
    "Se a gente não for atrás, a parada não anda. Bota o bloco na rua!",
    "Hoje o tempo está a seu favor. Não perca um minuto com o que não te eleva.",
    "Deixa a luz do teu propósito guiar a tua caminhada. Não tem erro.",
    "O segredo é simples: foco, fé e 'partiu' pra cima do problema.",
    "Você é mais forte do que pensa. Lembre-se de todas as ondas que já passou.",
    "Aproveita cada instante, porque a vida, meu irmão, é um piscar de olhos.",
    "Mantenha a mente sussa e o coração quente. Essa é a fórmula da vitória.",
    "Seja a mudança que você quer ver no seu bairro, na sua vida, no mundo.",
    "Agradecer é a chave que destranca mais portas. Seja grato, já é.",
    "Não confunda pressa com progresso. Devagar e sempre é a brisa do sucesso.",
    "Teu esforço de hoje é o motivo do teu sorriso de amanhã. Pensa nisso.",
    "Não se compare. Tua história é única e a tua vitória será singular.",
    "Abrace seus desafios. Eles são o tempero que a vida bota na tua luta.",
    "Pega essa: a zona de conforto é o lugar mais perigoso pra quem quer crescer.",
    "Levanta essa cabeça e mostra pra vida quem é que manda nessa parada.",
    "Simbora! A vida te espera com infinitas possibilidades. Não fique parado.",
    "A melhor vista é sempre depois da subida mais difícil. Sobe esse morro!",
    "Não se preocupe com a falha. Preocupe-se em não tentar a próxima vez.",
    "O teu valor não está no que você tem, mas no que você é e no que você faz.",
    "Acreditar é o primeiro passo para fazer o que parecia impossível virar realidade.",
    "Pode vir o que for: você tem a força da maré do mar, meu irmão.",
    "Não deixe que o 'ontem deu ruim' estrague o seu 'hoje vai ser irado'.",
    "Aprenda a valorizar o processo, não apenas o resultado. A jornada é braba.",
    "Faça do seu sonho o seu plano de ataque diário. Bota pra quebrar!",
    "A alegria de quem é do Rio: saber que todo dia tem um novo espetáculo da natureza.",
    "Não se sabote. Sua mente é seu campo de batalha e você tem que vencer nela.",
    "Hoje é dia de ser melhor do que ontem. Só isso. Sem pressão.",
    "Aquele papo reto que acalma: você está no caminho certo. Continua!",
    "Esquece o 'se'. O negócio é 'quando eu fizer'. Mentalidade de campeão.",
    "A vida é uma dança, não um ensaio. Não fique esperando, dance agora.",
    "Aprenda com o jacaré: pega a onda na manha, sem pressa de chegar.",
    "Mó onda! Onde há vontade, há um caminho novo e irado pra seguir.",
    "O medo é passageiro, mas o arrependimento de não ter tentado fica pra sempre.",
    "Se for pra se arrepender de algo, que seja do que você fez, e não do que deixou de fazer.",
    "A brisa muda. E se mudar, que seja pra te levar pra um lugar melhor.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Seja grato por ter a chance de tentar de novo. Essa é a maior riqueza.",
    "A paz começa no seu interior. Não procure fora o que já mora em você.",
    "Não viva de desculpa, viva de resultado. Faz acontecer!",
    "Muda a estratégia, mas não desiste do alvo. O prêmio é teu.",
    "O que te desafia é o que te transforma em alguém mais brabo.",
    "Lembra: a cada novo dia, a chance de zerar o jogo e começar com mais sabedoria.",
    "Você é a onda mais forte desse mar. Não se subestime jamais.",
    "Não se contente com o 'só tá bom'. Busque o 'tá sinistro de bom'!",
    "A fé não te livra da batalha, mas garante que você saia dela vitorioso.",
    "Seu passado não te define. Seu presente é a tela, pinte sua obra-prima!",
    "Vai na fé. O resto é detalhe. A força pra vencer tá aí, na moral.",
    "O melhor de ser carioca é saber que a alegria é uma filosofia de vida. Viva-a!",
    "Acredita no teu sonho, investe o teu tempo, e o resultado vem, já é!",
    "Para ser inesquecível, você não precisa ser perfeito, só precisa ser você."
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

