// =======================================
// JAVASCRIPT: CÓDIGO COMPLETO BRISA CARIOCA
// (Com Compartilhamento de Imagem e Volume Ambiente)
// =======================================

// --- Constantes e Variáveis ---
const FRASES_EXEMPLO = [
    
    // ... [SUAS PRIMEIRAS 200 FRASES AQUI] ...
    
    // --- NOVO: 100 FRASES DE AMOR FAMOSAS ---
    
    "Amar não é olhar um para o outro, é olhar juntos na mesma direção. Papo reto! – Antoine de Saint-Exupéry.",
    "O amor é a única resposta sensata e satisfatória ao problema da existência humana. Sussa! – Erich Fromm.",
    "Se eu tivesse uma flor para cada vez que eu pensasse em você, eu poderia andar pelo meu jardim para sempre. Que irado! – Alfred Tennyson.",
    "O amor cabe no breve espaço de beijar. Curte a brisa! – Carlos Drummond de Andrade.",
    "Em cada pedaço de mim, sempre haverá um pedaço de você. Forte! – 'Diário de uma Paixão'.",
    "Eu te amo. Soube disso no minuto em que te conheci. Não é caô! – 'O Lado Bom da Vida'.",
    "O amor verdadeiro nunca se desgasta. Quanto mais se dá, mais se tem. Essa é a moral! – Antoine de Saint-Exupéry.",
    "Não é a ausência de amor, mas a ausência de amizade que torna os casamentos infelizes. Se liga! – Friedrich Nietzsche.",
    "A vida não precisa ser perfeita para ter um amor extraordinário. Faz o teu! – 'A Culpa é das Estrelas'.",
    "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Já é! – Fernando Pessoa.",
    "O amor é como o vento, você não pode ver, mas pode sentir. Vibe boa! – Nicholas Sparks.",
    "Você não ama alguém porque ele é perfeito, você o ama apesar dele não ser. É sinistro! – Jodi Picoult.",
    "Você me faz querer ser um homem melhor. Que moral! – 'Melhor É Impossível'.",
    "Os que de coração se querem, só com o coração se falam. Pode crer! – Luís Vaz de Camões.",
    "Prefiro um minuto ao seu lado do que uma vida inteira sem você. Mermão, é isso! – Autor Desconhecido.",
    "Se eu o amasse menos, eu poderia ser capaz de falar mais sobre isso. Fala sério! – Jane Austen.",
    "A maior coisa que você vai aprender é apenas amar, e ser amado em troca. 'Moulin Rouge'.",
    "O amor é uma batalha, o amor é uma guerra; o amor é crescimento contínuo. Rala que vale a pena! – James A. Baldwin.",
    "Amo você e estarei te esperando. Aquele papo reto! – 'Diário de uma Paixão'.",
    "Quando você percebe que quer passar o resto da vida com alguém, você quer que o resto da sua vida comece o mais rápido possível. Partiu! – 'Harry e Sally'.",
    "Não me ames como eu mereço, pois não seria o bastante – ama-me como te ordena o coração. Vai na fé! – Lord Byron.",
    "O amor não tem idade, não conhece limites nem acaba com a morte. É eterno! – Autor Desconhecido.",
    "Você é a minha maior aventura. Essa é braba! – 'Os Incríveis'.",
    "A melhor e mais bela coisa do mundo não pode ser vista nem tocada, deve ser sentida com o coração. Sente a vibe! – Helen Keller.",
    "Amar significa não ter que dizer nunca 'sinto muito'. Tamo junto! – 'Love Story'.",
    "Tudo o que sabemos do amor é que o amor é tudo o que há. Pura verdade! – Emily Dickinson.",
    "Para onde fores, irei. Essa é a parceria! – Rute 1:16-17 (Bíblia).",
    "O amor é paciente, o amor é bondoso. É a base de tudo. – 1 Coríntios 13:4-7 (Bíblia).",
    "Eu preferiria morrer amanhã do que viver cem anos sem conhecer você. Que sinistro! – 'Pocahontas'.",
    "Se o amor é a resposta, você poderia, por favor, reformular a pergunta? Faz a parada! – Lily Tomlin.",
    "O mais doloroso é perder-se no processo de amar demais alguém e esquecer que você é especial também. Não se perca! – Ernest Hemingway.",
    "O amor, por não ter geografia, não conhece limites. Voa longe! – Autor Desconhecido.",
    "O amor é como fogo: para que dure é preciso alimentá-lo. Dá um gás! – François La Rochefoucauld.",
    "Não posso viver sem você. Isso é que é dependência boa! – Autor Desconhecido.",
    "Se até as estações mudam, qual a razão de permanecer igual? Mude para amar mais! – Autor Desconhecido.",
    "O amor é o emblema da eternidade. Essa parada não tem fim. – Madame de Staël.",
    "Nós nos tornamos aquilo que amamos. Escolhe bem o teu amor! – Autor Desconhecido.",
    "Eu amei-a contra a razão, contra a promessa, contra a paz, contra a esperança. É a luta! – Charles Dickens.",
    "O amor não consiste em olhar um para o outro, mas em olhar para fora juntos na mesma direção. É o rolé a dois! – Antoine de Saint-Exupéry.",
    "Onde há amor, há vida. Viva a vida! – Mahatma Gandhi.",
    "Quando se ama, tudo passa a acontecer dentro de nós. Sente a brisa! – Autor Desconhecido.",
    "O amor é como uma montanha-russa, cheia de altos e baixos, mas sempre emocionante. Que aventura! – 'A Invenção de Hugo Cabret'.",
    "Eu te amarei para sempre, mesmo que o destino nos separe. Vai na fé! – Autor Desconhecido.",
    "O amor é a arte de criar algo com a ajuda da capacidade do outro. Tamo junto! – Bertolt Brecht.",
    "O amor é tão curto, o esquecimento é tão longo. Valoriza o agora! – Pablo Neruda.",
    "Você me deu uma eternidade dentro dos nossos dias numerados. Que maravilha! – 'A Culpa é das Estrelas'.",
    "O verdadeiro amor é o que não se atrofia. Quanto mais se dá, mais ele se torna. Dá com vontade! – Autor Desconhecido.",
    "Bésame, bésame como se fosse a última vez. Se joga! – Música 'Bésame Mucho'.",
    "O amor é a ausência de julgamento. Aceita a parada! – Dalai Lama.",
    "O amor é um grande mestre. Ele nos ensina a ser o que nunca fomos. Aprende, mermão! – Autor Desconhecido.",
    "Eu amo como ela me faz sentir que tudo é possível, ou que a vida vale a pena. '500 Dias Com Ela'.",
    "O amor não tem barreiras, ele sempre encontra uma maneira de florescer. Abre o caminho! – Autor Desconhecido.",
    "O amor é uma palavra muito fraca para definir o que eu sinto. É algo sinistro! – Autor Desconhecido.",
    "Se você lembra de mim, então eu não me importo se todo mundo esquece. Que moral! – Haruki Murakami.",
    "O amor não é um sentimento afetuoso, mas um desejo constante pelo bem final da pessoa amada. É a parceria! – C.S Lewis.",
    "Meu coração palpita de alegria toda vez que eu te vejo. Sente o gás! – Autor Desconhecido.",
    "A melhor forma de amar é simplesmente amar sem esperar nada em troca. Faz o teu! – Autor Desconhecido.",
    "O amor é como a lua: quando não cresce, mingua. Alimenta esse amor! – Autor Desconhecido.",
    "O mundo é grande e cabe nesta janela sobre o mar. O amor é grande e cabe no breve espaço de beijar. Que poesia! – Carlos Drummond de Andrade.",
    "O amor não consiste em presentes, mas em presença. Fica perto! – Autor Desconhecido.",
    "Eu nasci quando ela me beijou, morri quando ela me abandonou e vivi durante umas semanas enquanto me amou. Que intensidade! – 'Fúria de Viver'.",
    "O amor é um precipício, a gente se joga nele e torce para o chão nunca chegar. Se joga na brisa! – 'Lisbela e o Prisioneiro'.",
    "O amor é a alegria de viver. Deixa a vibe entrar! – Autor Desconhecido.",
    "Quem tem a luz do amor não precisa de mais nada para brilhar. Brilha, cria! – Autor Desconhecido.",
    "O amor é a condição na qual a felicidade de outra pessoa é essencial para a sua própria. Essa é a cumplicidade! – Robert Heinlein.",
    "A vida sem amor é um jardim sem sol, onde as flores estão mortas. Deixa florir! – Autor Desconhecido.",
    "Um grande amor vale anos de espera. Tenha fé! – Autor Desconhecido.",
    "O amor é a única força capaz de transformar um inimigo em amigo. Vira o jogo! – Martin Luther King Jr.",
    "O amor é uma força mais formidável do que qualquer outra. Vai com essa força! – Autor Desconhecido.",
    "O amor é o espaço e o tempo tornados sensíveis ao coração. Curte o momento! – Marcel Proust.",
    "Ame e faça o que quiser. Se calares, calarás com amor; se gritares, gritarás com amor. Vai no gás! – Santo Agostinho.",
    "O amor é a única coisa que cresce à medida que se reparte. Distribui essa brisa! – Autor Desconhecido.",
    "A alma que pode falar pelos olhos pode também beijar com o olhar. Que moral! – Gustav Klimt.",
    "O amor não faz o mundo girar. O amor é o que faz o passeio valer a pena. Curte o rolé! – Franklin P. Jones.",
    "Não ame para ser amado, ame para amar. Essa é a pureza! – Autor Desconhecido.",
    "O meu amor tem duas vidas para amar-te. Que loucura boa! – Fernando Pessoa.",
    "Se o amor fosse um grão de areia, o meu seria um universo de praias. É infinito! – Autor Desconhecido.",
    "Amar é, antes de tudo, amar a liberdade. Voe junto! – Autor Desconhecido.",
    "O amor é paciente, o amor é gentil... O amor é enlouquecer lentamente. 'Vestida para Casar'.",
    "Você é a estrela que ilumina meu coração nas noites mais escuras. Que luz! – 'A Culpa é das Estrelas'.",
    "Te quero não por quem tu és, mas por quem eu sou quando estou contigo. Isso que é parceria! – Gabriel García Márquez.",
    "O amor é o mestre. Ele nos ensina a ser o que nunca fomos. O aprendizado é eterno! – Autor Desconhecido.",
    "Eu serei seu anjo da guarda. Essa é a promessa! – Autor Desconhecido.",
    "Nascemos sozinhos, vivemos sozinhos, morremos sozinhos. Apenas através do amor e da amizade podemos criar a ilusão por um momento de que não estamos sozinhos. Se liga na brisa! – Orson Welles.",
    "O amor é a música da alma. Sente o som! – Autor Desconhecido.",
    "Não há remédio para o amor, a não ser amar mais. Dá mais amor! – Henry David Thoreau.",
    "Se o amor não é loucura, não é amor. Se joga na loucura! – Pedro Calderón de la Barca.",
    "Te amar é a única constante do universo. Pode crer! – Autor Desconhecido.",
    "O amor é a luz que não se apaga. Deixa ela acesa! – Autor Desconhecido.",
    "O amor, para ser autêntico, deve custar. Deve doer. Deve nos esvaziar. Pura entrega! – Madre Teresa de Calcutá.",
    "É melhor ter amado e perdido do que nunca ter amado. Faz parte do conto! – Alfred Lord Tennyson.",
    "A certeza de que te amo me dá força para lutar contra tudo o que nos separa. Vai na luta! – Autor Desconhecido.",
    "O amor é como um raio de sol que aquece nossos corações e ilumina nossos caminhos. Que calor! – 'O Rei Leão'.",
    "A melhor coisa da vida é o amor. O resto é detalhe. Prioriza! – Autor Desconhecido.",
    "Que a gente nunca se esqueça que o melhor lugar do mundo é dentro do abraço. Se liga no aconchego! – Autor Desconhecido.",
    "Para ser amado, ame. Essa é a lei da vida! – Autor Desconhecido.",
    "Onde quer que ela esteja, é lá onde meu lar está. Lar é onde o amor mora! – 'Diário de Uma Paixão'.",
    "O amor não tem que ser perfeito, tem que ser real. Essa é a verdade! – Autor Desconhecido.",
    "Meu coração é, e sempre será, seu. Fica a dica! – Jane Austen."
]

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




