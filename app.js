// =======================================
// JAVASCRIPT: CÓDIGO COMPLETO BRISA CARIOCA
// (Com Compartilhamento de Imagem e Volume Ambiente)
// =======================================

// --- Constantes e Variáveis ---
const FRASES_EXEMPLO = [
    // ... [SUAS PRIMEIRAS 100 FRASES AQUI] ...
    
    // --- NOVO: 100 FRASES FAMOSAS E CLÁSSICAS ---
    
    "O único modo de fazer um ótimo trabalho é amar o que você faz. Dá esse gás! – Steve Jobs.",
    "Acredite que você pode, e você está no meio do caminho. É o papo reto! – Theodore Roosevelt.",
    "Não espere por oportunidades extraordinárias. Agarre as ocasiões comuns e as torne grandes. Já é! – Orison Swett Marden.",
    "A persistência realiza o impossível. Não dá mole pra desistência, mermão! – Provérbio Chinês.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. Que sinistro! – Winston Churchill.",
    "A vida é 10% o que acontece com você e 90% como você reage. Manda a braba! – Charles R. Swindoll.",
    "Se você não está disposto a arriscar, esteja disposto a viver uma vida comum. Não fica no caô, arrisca! – Jim Rohn.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos. Pega essa! – Eleanor Roosevelt.",
    "A mudança não virá se esperarmos por outra pessoa ou por outro momento. A hora é agora! – Barack Obama.",
    "O fracasso é apenas a oportunidade de começar de novo, só que de forma mais inteligente. É a chance de dar um novo rolé! – Henry Ford.",
    "Em vez de desejar que fosse mais fácil, deseje que você fosse melhor. Seja brabo! – Jim Rohn.",
    "O destino não é uma questão de sorte, é uma questão de escolha. Faz a tua! – William Jennings Bryan.",
    "A imaginação é mais importante que o conhecimento. Deixa a criatividade brotar! – Albert Einstein.",
    "A única limitação é aquela que você impõe à sua própria mente. Mete o pé no limite! – Napoleon Hill.",
    "Eu não falhei no teste. Eu só encontrei 100 maneiras de fazer errado. Isso é maneiro! – Benjamin Franklin.",
    "Não conte os dias, faça os dias contarem. Vai com tudo hoje! – Muhammad Ali.",
    "Onde há vontade, há um caminho. Essa é a parada! – Provérbio.",
    "A ação é a chave fundamental para todo o sucesso. Não fica na teoria, age! – Pablo Picasso.",
    "Felicidade não é algo pronto. Ela vem de suas próprias ações. Corre atrás! – Dalai Lama.",
    "Não importa o quão devagar você vá, desde que você não pare. Continua na brisa! – Confúcio.",
    "Ser feliz é não ter medo dos próprios sentimentos. Solta essa! – Martha Medeiros.",
    "A melhor maneira de prever o futuro é criá-lo. Manda a ver, cria! – Peter Drucker.",
    "Tudo que você pode imaginar é real. Bota essa mente pra funcionar! – Pablo Picasso.",
    "Não julgue cada dia pela colheita que você tem, mas pelas sementes que você planta. Planta o bem! – Robert Louis Stevenson.",
    "Coragem não é a ausência do medo, mas a decisão de que algo é mais importante que o medo. Vai na fé! – Ambrose Redmoon.",
    "Acredite em milagres, mas não dependa deles. Faz a sua parte! – Laurence J. Peter.",
    "O preço do sucesso é trabalho duro. É ralar, mermão! – Vince Lombardi.",
    "Se a oportunidade não bater, construa uma porta. Isso que é atitude braba! – Milton Berle.",
    "O que te desafia te transforma. Abraça o perrengue! – Autor Desconhecido.",
    "Comece onde você está. Use o que você tem. Faça o que você pode. Já é! – Arthur Ashe.",
    "Sua vida não melhora por acaso, melhora por mudança. Se liga na parada! – Jim Rohn.",
    "A inspiração existe, mas tem que te encontrar trabalhando. Vai pro gás! – Pablo Picasso.",
    "Eu sou grato por todos aqueles que me disseram 'Não'. Por causa deles, eu fiz eu mesmo. Irado! – Albert Einstein.",
    "A arte de viver é a arte de mudar. A vida te espera! – Carl Jung.",
    "Não se preocupe com falhas, se preocupe com as chances que você perde quando nem tenta. Se joga! – Jack Canfield.",
    "A diferença entre o impossível e o possível reside na determinação. Bota a força pra jogo! – Tommy Lasorda.",
    "A mente é tudo. O que você pensa, você se torna. Pense grande, cria! – Buda.",
    "A força não vem da capacidade física, e sim de uma vontade indomável. Essa é a brisa! – Mahatma Gandhi.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. Vai no gás! – Robert Collier.",
    "Nunca é tarde para ser o que você poderia ter sido. Partiu começar de novo! – George Eliot.",
    "O pessimista vê dificuldade em toda oportunidade. O otimista vê oportunidade em toda dificuldade. Escolhe a vibe! – Winston Churchill.",
    "A beleza da vida está em suas falhas. Você aprende a lidar com os problemas. Maneiro! – Autor Desconhecido.",
    "Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas. Foque no que importa, mermão! – Eleanor Roosevelt.",
    "A vida encolhe ou expande em proporção à sua coragem. Seja ousado! – Anais Nin.",
    "A forma mais garantida de não conseguir algo é não tentar. Não fica no caô! – Will Smith.",
    "Não é a mais forte das espécies que sobrevive, nem a mais inteligente, é a que melhor se adapta à mudança. Se transforma! – Charles Darwin.",
    "Se a sua vida está no chão, levanta essa poeira e sacode a roupa. A luta continua! – Autor Desconhecido.",
    "O que não te mata, te fortalece. Bota na conta da experiência! – Friedrich Nietzsche.",
    "Aja como se o que você faz fizesse a diferença. Porque faz. Pode crer! – William James.",
    "A melhor forma de começar é parar de falar e começar a fazer. Vaza e faz! – Walt Disney.",
    "A felicidade não é um destino, é uma viagem. Curte o rolé! – Zig Ziglar.",
    "O segredo de progredir é começar. O segredo de começar é quebrar suas tarefas. Partiu! – Mark Twain.",
    "A cada dia, faça algo que te aproxime do seu objetivo. Foco! – Autor Desconhecido.",
    "Se você não construir o seu sonho, alguém vai te contratar para construir o dele. Se liga na parada! – Tony Gaskins.",
    "A gratidão transforma o que temos em suficiente. Seja grato, já é! – Melodie Beattie.",
    "O tempo é o recurso mais valioso. Invista ele na sua felicidade. Isso é 0800! – Autor Desconhecido.",
    "Quando tudo parecer ir contra, lembre-se que o avião decola contra o vento. Voa alto! – Henry Ford.",
    "As grandes realizações não são alcançadas pela força, mas pela persistência. Continua no gás! – Samuel Johnson.",
    "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original. Pensa fora da caixa! – Albert Einstein.",
    "O único limite para a sua realização é o seu reconhecimento da realidade. Seja ambicioso! – Autor Desconhecido.",
    "Seja a mudança que você deseja ver no mundo. Começa em você! – Mahatma Gandhi.",
    "A única maneira de ter um bom dia é ter uma boa atitude. Manda essa vibe! – Autor Desconhecido.",
    "A inspiração é para amadores. Nós, profissionais, apenas aparecemos e trabalhamos. Rala, mermão! – Chuck Close.",
    "Não se preocupe em ser um sucesso, se preocupe em ser valioso. Isso é ser sinistro! – Albert Einstein.",
    "Sua vida é sua mensagem para o mundo. Certifique-se de que é inspiradora. Que moral! – Autor Desconhecido.",
    "A disciplina é a ponte entre metas e realizações. Constrói essa ponte! – Jim Rohn.",
    "A alegria reside na alegria da conquista e na emoção do esforço criativo. Bota emoção! – Franklin D. Roosevelt.",
    "Acredite em si mesmo e em tudo o que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo. Essa é a força! – Christian D. Larson.",
    "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve se manter em movimento. Não para, continua o rolé! – Albert Einstein.",
    "Pessoas que são loucas o suficiente para pensar que podem mudar o mundo, são aquelas que o fazem. Seja 'maluco' no bom sentido! – Rob Siltanen.",
    "Se não desafiar a si mesmo, você nunca saberá quem pode ser. Vai pra cima! – Autor Desconhecido.",
    "Sua atitude, não sua aptidão, determinará sua altitude. Levanta a cabeça! – Zig Ziglar.",
    "A chave para a felicidade é ter sonhos; a chave para o sucesso é torná-los realidade. Faz acontecer, paizão! – Autor Desconhecido.",
    "A qualidade de vida não depende da duração, mas da profundidade. Mergulha nessa brisa! – Ralph Waldo Emerson.",
    "Para ser bem-sucedido, primeiro acredite que pode. A fé é o primeiro passo. – Michael Jordan.",
    "A falha não significa que você falhou. Significa que você ainda não conseguiu. Tenta de novo! – Robert H. Schuller.",
    "Não há atalhos para qualquer lugar que valha a pena ir. O caminho é ralar! – Beverly Sills.",
    "O que quer que você seja, seja bom. Seja o melhor na sua parada! – Abraham Lincoln.",
    "Não se desespere. O amanhã é uma nova chance de fazer diferente. Aproveita! – Autor Desconhecido.",
    "A sabedoria não vem do acaso, mas de uma busca apaixonada pela verdade. Busque! – Heráclito.",
    "Se você quer levantar-se, levante alguém. Ajuda a galera na brisa! – Booker T. Washington.",
    "A força da sua vontade é o seu maior trunfo. Usa ela! – Autor Desconhecido.",
    "O momento que você quer desistir é o momento em que você precisa persistir. Não caia no caixote! – Autor Desconhecido.",
    "É nas decisões que o seu destino é traçado. Decida vencer! – Tony Robbins.",
    "A verdadeira glória é encontrar alegria no trabalho, mermão. Isso é vida! – Autor Desconhecido.",
    "A cada nascer do sol, renasça. A oportunidade de ser melhor é diária. Já é! – Autor Desconhecido.",
    "O crescimento começa onde a sua zona de conforto termina. Vaza dessa zona! – Autor Desconhecido.",
    "Não é o quanto você tem, mas o quanto você aproveita que faz a felicidade. Curte a vibe! – Charles Spurgeon.",
    "A sua melhor versão está esperando você atravessar o medo. Vai sem medo! – Autor Desconhecido.",
    "A vida só pode ser compreendida olhando para trás, mas só pode ser vivida olhando para frente. Olhar para a frente! – Søren Kierkegaard.",
    "A persistência é o combustível da realização. Bota mais gasolina! – Autor Desconhecido.",
    "Seja forte o suficiente para deixar ir o que te machuca e paciente o suficiente para esperar o que você merece. Sussa! – Autor Desconhecido.",
    "Se você não está falhando ocasionalmente, não está fazendo nada inovador. Arrisca! – Woody Allen.",
    "Acredite no seu potencial. É maior do que qualquer dúvida. Vamo que vamo! – Autor Desconhecido.",
    "As grandes mudanças vêm em pequenos passos. Vai no teu ritmo! – Autor Desconhecido.",
    "A jornada de mil milhas começa com um único passo. Dá o start! – Lao Tzu.",
    "A chave para a imortalidade é viver uma vida que vale a pena ser lembrada. Faça história! – Bruce Lee.",
    "O passado serve apenas como referência, não como residência. Vaza do passado! – Autor Desconhecido.",
    "Você não falha quando perde. Falha quando para. Continua na luta! – Autor Desconhecido.",
    "A sua melhor vingança é um sucesso maciço. Vence na vida, cria! – Frank Sinatra.",
    "Não deixe o medo de perder ser maior do que a empolgação de vencer. Se joga! – Robert Kiyosaki.",
    "O maior erro que você pode cometer é o de ficar paralisado pelo medo. Mete o pé! – Autor Desconhecido.",
    "Lembre-se: quando você pensa em desistir, pense no porquê você começou. Teu motivo é brabo! – Autor Desconhecido.",
    "O sucesso é determinado pela forma como você lida com os contratempos. Seja sinistro na reação! – Autor Desconhecido."
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





