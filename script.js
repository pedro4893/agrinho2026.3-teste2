/* ============================================
   AGRINHO - SCRIPT MELHORADO
   Tema: Do Campo à Cidade
   ============================================ */

// ============================================
// DADOS DAS CULTURAS
// ============================================
const listaCulturas = [
    {
        id: 1,
        nome: 'Soja',
        categoria: 'grao',
        emoji: '🌱',
        corGradiente: 'linear-gradient(135deg, #4a7c2a 0%, #7cb342 100%)',
        descricao: 'Principal commodity agricola do Brasil. A soja e a base da alimentacao animal e da industria de oleos.',
        producao: '150M',
        unidade: 'toneladas/ano',
        ranking: '1o lugar mundial'
    },
    {
        id: 2,
        nome: 'Milho',
        categoria: 'grao',
        emoji: '🌽',
        corGradiente: 'linear-gradient(135deg, #d4a017 0%, #f0d060 100%)',
        descricao: 'O milho e essencial para a alimentacao humana e animal, alem de ser materia-prima para diversos produtos.',
        producao: '120M',
        unidade: 'toneladas/ano',
        ranking: '3o lugar mundial'
    },
    {
        id: 3,
        nome: 'Cana-de-Acucar',
        categoria: 'industrial',
        emoji: '🎋',
        corGradiente: 'linear-gradient(135deg, #5a7d27 0%, #8cb34a 100%)',
        descricao: 'O Brasil e o maior produtor mundial de cana-de-acucar, base para acucar e etanol renovavel.',
        producao: '750M',
        unidade: 'toneladas/ano',
        ranking: '1o lugar mundial'
    },
    {
        id: 4,
        nome: 'Cafe',
        categoria: 'industrial',
        emoji: '☕',
        corGradiente: 'linear-gradient(135deg, #6b4226 0%, #a0522d 100%)',
        descricao: 'O cafe brasileiro e reconhecido mundialmente pela qualidade e variedade de seus graos.',
        producao: '3.5M',
        unidade: 'toneladas/ano',
        ranking: '1o lugar mundial'
    },
    {
        id: 5,
        nome: 'Laranja',
        categoria: 'fruta',
        emoji: '🍊',
        corGradiente: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
        descricao: 'O Brasil lidera a producao mundial de laranjas e suco de laranja, com destaque para Sao Paulo.',
        producao: '17M',
        unidade: 'toneladas/ano',
        ranking: '1o lugar mundial'
    },
    {
        id: 6,
        nome: 'Arroz',
        categoria: 'grao',
        emoji: '🍚',
        corGradiente: 'linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%)',
        descricao: 'O arroz e um dos alimentos mais consumidos no Brasil, essencial na alimentacao diaria.',
        producao: '11M',
        unidade: 'toneladas/ano',
        ranking: '10o lugar mundial'
    },
    {
        id: 7,
        nome: 'Banana',
        categoria: 'fruta',
        emoji: '🍌',
        corGradiente: 'linear-gradient(135deg, #d4ac0d 0%, #f7dc6f 100%)',
        descricao: 'A banana e a fruta mais consumida no Brasil, rica em potassio e vitaminas.',
        producao: '6.8M',
        unidade: 'toneladas/ano',
        ranking: '4o lugar mundial'
    },
    {
        id: 8,
        nome: 'Algodao',
        categoria: 'industrial',
        emoji: '☁️',
        corGradiente: 'linear-gradient(135deg, #7f8c8d 0%, #b0b0b0 100%)',
        descricao: 'O algodao brasileiro e referencia mundial em qualidade e sustentabilidade na producao.',
        producao: '2.5M',
        unidade: 'toneladas/ano',
        ranking: '5o lugar mundial'
    }
];

// ============================================
// DADOS DO GRAFICO
// ============================================
const dadosGrafico = [
    { regiao: 'Centro-Oeste', valor: 280, cor: '#2d5a27' },
    { regiao: 'Sul', valor: 180, cor: '#4a8c3f' },
    { regiao: 'Sudeste', valor: 120, cor: '#c4a35a' },
    { regiao: 'Nordeste', valor: 85, cor: '#8cb34a' },
    { regiao: 'Norte', valor: 45, cor: '#277d8c' }
];

// ============================================
// DADOS DO QUIZ
// ============================================
const perguntasQuiz = [
    {
        pergunta: 'Qual e a principal commodity agricola exportada pelo Brasil?',
        opcoes: ['Milho', 'Soja', 'Cafe', 'Acucar'],
        correta: 1,
        explicacao: 'A soja e a principal commodity agricola do Brasil, representando a maior parte das exportacoes do agronegocio brasileiro.'
    },
    {
        pergunta: 'Qual pratica agricola combina arvores, culturas e animais no mesmo espaco?',
        opcoes: ['Monocultura', 'Sistema Agroflorestal', 'Agricultura de Precisao', 'Hidroponia'],
        correta: 1,
        explicacao: 'Os sistemas agroflorestais integram arvores, culturas agricolas e animais, imitando ecossistemas naturais.'
    },
    {
        pergunta: 'O Brasil e o maior produtor mundial de qual dessas culturas?',
        opcoes: ['Trigo', 'Cana-de-acucar', 'Arroz', 'Cevada'],
        correta: 1,
        explicacao: 'O Brasil e o maior produtor mundial de cana-de-acucar, produzindo aproximadamente 750 milhoes de toneladas por ano.'
    },
    {
        pergunta: 'Qual e o objetivo principal da rotacao de culturas?',
        opcoes: ['Aumentar a area plantada', 'Manter a fertilidade do solo', 'Reduzir mao de obra', 'Aumentar o uso de pesticidas'],
        correta: 1,
        explicacao: 'A rotacao de culturas alterna diferentes plantas para evitar o esgotamento de nutrientes do solo.'
    },
    {
        pergunta: 'Qual tecnologia ajuda a reduzir o desperdicio de agua na irrigacao?',
        opcoes: ['Irrigacao por inundacao', 'Irrigacao de precisao', 'Aspersao convencional', 'Irrigacao manual'],
        correta: 1,
        explicacao: 'A irrigacao de precisao utiliza sensores e tecnologia para aplicar a quantidade exata de agua necessaria.'
    }
];

// ============================================
// VARIAVEIS DE ESTADO
// ============================================
let indicePerguntaAtual = 0;
let pontuacaoQuiz = 0;
let acertosQuiz = 0;
let modoEscuroAtivo = false;
let tamanhoFonteAtual = 16;
let slideAtual = 0;
let totalSlides = 5;
let carrosselInterval;

// ============================================
// FUNCAO: Renderizar Cards de Culturas
// ============================================
function renderizarCulturas(filtro = 'todos') {
    const container = document.getElementById('gridCulturas');
    container.innerHTML = '';

    const culturasFiltradas = filtro === 'todos' 
        ? listaCulturas 
        : listaCulturas.filter(c => c.categoria === filtro);

    culturasFiltradas.forEach((cultura, indice) => {
        const card = document.createElement('div');
        card.className = 'card-cultura';
        card.style.animationDelay = `${indice * 0.1}s`;
        card.innerHTML = `
            <div class="imagem-cultura" style="background: ${cultura.corGradiente};">
                <span class="overlay-cultura"></span>
                <span class="icone-cultura">${cultura.emoji}</span>
            </div>
            <div class="info-cultura">
                <span class="categoria-cultura">${cultura.categoria}</span>
                <h3 class="titulo-cultura">${cultura.nome}</h3>
                <p class="descricao-cultura">${cultura.descricao}</p>
                <div class="dados-cultura">
                    <div class="dado-cultura">
                        <span class="valor-dado">${cultura.producao}</span>
                        <span class="label-dado">${cultura.unidade}</span>
                    </div>
                    <div class="dado-cultura">
                        <span class="valor-dado">${cultura.ranking}</span>
                        <span class="label-dado">Ranking</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================
// FUNCAO: Filtrar Culturas
// ============================================
function configurarFiltrosCulturas() {
    const botoesFiltro = document.querySelectorAll('.botao-filtro');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');
            const filtro = this.getAttribute('data-filtro');
            renderizarCulturas(filtro);
        });
    });
}

// ============================================
// FUNCAO: Configurar Praticas Sustentaveis
// ============================================
function configurarPraticasSustentaveis() {
    const itensPratica = document.querySelectorAll('.item-pratica');
    const detalhes = document.querySelectorAll('.conteudo-detalhe');

    itensPratica.forEach(item => {
        item.addEventListener('click', function() {
            itensPratica.forEach(i => i.classList.remove('ativo'));
            this.classList.add('ativo');

            const pratica = this.getAttribute('data-pratica');
            detalhes.forEach(d => d.classList.remove('ativo'));

            const detalheAtivo = document.getElementById(`detalhe-${pratica}`);
            if (detalheAtivo) {
                detalheAtivo.classList.add('ativo');
            }
        });
    });
}

// ============================================
// FUNCAO: Animar Estatisticas (Contador)
// ============================================
function animarContadores() {
    const contadores = document.querySelectorAll('.numero-estatistica');

    contadores.forEach(contador => {
        const valorFinal = parseFloat(contador.getAttribute('data-valor'));
        const duracao = 2000; // 2 segundos
        const incremento = valorFinal / (duracao / 16); // 60fps
        let valorAtual = 0;

        const atualizarContador = () => {
            valorAtual += incremento;
            if (valorAtual >= valorFinal) {
                contador.textContent = valorFinal;
            } else {
                contador.textContent = Number.isInteger(valorFinal) 
                    ? Math.floor(valorAtual) 
                    : valorAtual.toFixed(1);
                requestAnimationFrame(atualizarContador);
            }
        };

        atualizarContador();
    });
}

// ============================================
// FUNCAO: Renderizar Grafico de Barras
// ============================================
function renderizarGrafico() {
    const container = document.getElementById('barrasGrafico');
    const maxValor = Math.max(...dadosGrafico.map(d => d.valor));

    dadosGrafico.forEach(dado => {
        const altura = (dado.valor / maxValor) * 100;
        const barra = document.createElement('div');
        barra.className = 'barra-grafico';
        barra.innerHTML = `
            <div class="barra-preenchida" style="background: ${dado.cor}; height: 0%;" data-valor="${dado.valor}M"></div>
            <span class="label-barra">${dado.regiao}</span>
        `;
        container.appendChild(barra);
    });
}

// ============================================
// FUNCAO: Animar Grafico
// ============================================
function animarGrafico() {
    const barras = document.querySelectorAll('.barra-preenchida');
    const maxValor = Math.max(...dadosGrafico.map(d => d.valor));

    barras.forEach((barra, indice) => {
        const altura = (dadosGrafico[indice].valor / maxValor) * 100;
        setTimeout(() => {
            barra.style.height = `${altura}%`;
        }, indice * 200);
    });
}

// ============================================
// FUNCAO: Carrossel de Curiosidades
// ============================================
function configurarCarrossel() {
    const track = document.getElementById('carrosselTrack');
    const indicadoresContainer = document.getElementById('indicadoresCarrossel');
    const botaoAnterior = document.getElementById('botaoAnterior');
    const botaoProximo = document.getElementById('botaoProximo');

    // Criar indicadores
    for (let i = 0; i < totalSlides; i++) {
        const indicador = document.createElement('button');
        indicador.className = 'indicador-carrossel' + (i === 0 ? ' ativo' : '');
        indicador.addEventListener('click', () => irParaSlide(i));
        indicadoresContainer.appendChild(indicador);
    }

    // Botoes de navegacao
    botaoAnterior.addEventListener('click', () => {
        slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
        atualizarCarrossel();
        resetarIntervaloCarrossel();
    });

    botaoProximo.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % totalSlides;
        atualizarCarrossel();
        resetarIntervaloCarrossel();
    });

    // Auto-play
    iniciarIntervaloCarrossel();

    // Pausar ao hover
    const container = document.querySelector('.carrossel-container');
    container.addEventListener('mouseenter', () => clearInterval(carrosselInterval));
    container.addEventListener('mouseleave', iniciarIntervaloCarrossel);
}

function irParaSlide(indice) {
    slideAtual = indice;
    atualizarCarrossel();
    resetarIntervaloCarrossel();
}

function atualizarCarrossel() {
    const track = document.getElementById('carrosselTrack');
    const indicadores = document.querySelectorAll('.indicador-carrossel');

    track.style.transform = `translateX(-${slideAtual * 100}%)`;

    indicadores.forEach((ind, i) => {
        ind.classList.toggle('ativo', i === slideAtual);
    });
}

function iniciarIntervaloCarrossel() {
    carrosselInterval = setInterval(() => {
        slideAtual = (slideAtual + 1) % totalSlides;
        atualizarCarrossel();
    }, 5000);
}

function resetarIntervaloCarrossel() {
    clearInterval(carrosselInterval);
    iniciarIntervaloCarrossel();
}

// ============================================
// FUNCAO: Iniciar Quiz
// ============================================
function iniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacaoQuiz = 0;
    acertosQuiz = 0;

    document.getElementById('telaInicialQuiz').style.display = 'none';
    document.getElementById('telaResultadoQuiz').style.display = 'none';
    document.getElementById('telaPerguntaQuiz').style.display = 'block';

    mostrarPergunta();
}

// ============================================
// FUNCAO: Mostrar Pergunta Atual
// ============================================
function mostrarPergunta() {
    const pergunta = perguntasQuiz[indicePerguntaAtual];

    const progresso = ((indicePerguntaAtual + 1) / perguntasQuiz.length) * 100;
    document.getElementById('progressoPreenchido').style.width = `${progresso}%`;

    document.getElementById('numeroPergunta').textContent = 
        `${indicePerguntaAtual + 1}/${perguntasQuiz.length}`;
    document.getElementById('pontuacaoAtual').textContent = `Pontos: ${pontuacaoQuiz}`;

    document.getElementById('textoPergunta').textContent = pergunta.pergunta;

    const containerOpcoes = document.getElementById('opcoesResposta');
    containerOpcoes.innerHTML = '';

    pergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement('button');
        botao.className = 'botao-opcao';
        botao.textContent = opcao;
        botao.addEventListener('click', () => verificarResposta(indice, botao));
        containerOpcoes.appendChild(botao);
    });
}

// ============================================
// FUNCAO: Verificar Resposta
// ============================================
function verificarResposta(indiceResposta, botaoClicado) {
    const pergunta = perguntasQuiz[indicePerguntaAtual];
    const todasOpcoes = document.querySelectorAll('.botao-opcao');

    todasOpcoes.forEach(botao => botao.classList.add('desabilitada'));

    if (indiceResposta === pergunta.correta) {
        botaoClicado.classList.add('certa');
        pontuacaoQuiz += 100;
        acertosQuiz++;
    } else {
        botaoClicado.classList.add('errada');
        todasOpcoes[pergunta.correta].classList.add('certa');
    }

    document.getElementById('pontuacaoAtual').textContent = `Pontos: ${pontuacaoQuiz}`;

    setTimeout(() => {
        indicePerguntaAtual++;

        if (indicePerguntaAtual < perguntasQuiz.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }, 1500);
}

// ============================================
// FUNCAO: Mostrar Resultado do Quiz
// ============================================
function mostrarResultado() {
    document.getElementById('telaPerguntaQuiz').style.display = 'none';
    document.getElementById('telaResultadoQuiz').style.display = 'block';

    const percentual = (acertosQuiz / perguntasQuiz.length) * 100;

    let titulo, texto, icone;

    if (percentual === 100) {
        titulo = 'Excelente!';
        texto = 'Voce acertou todas as perguntas! E um verdadeiro especialista em agricultura brasileira.';
        icone = '🏆';
    } else if (percentual >= 60) {
        titulo = 'Muito Bem!';
        texto = 'Voce demonstrou bom conhecimento sobre agricultura e sustentabilidade. Continue aprendendo!';
        icone = '👏';
    } else {
        titulo = 'Continue Estudando!';
        texto = 'Agricultura e um tema vasto. Explore mais o site e tente novamente!';
        icone = '💪';
    }

    document.getElementById('iconeResultado').textContent = icone;
    document.getElementById('tituloResultado').textContent = titulo;
    document.getElementById('textoResultado').textContent = texto;
    document.getElementById('valorAcertos').textContent = `${acertosQuiz}/${perguntasQuiz.length}`;
    document.getElementById('valorPontos').textContent = pontuacaoQuiz;
}

// ============================================
// FUNCAO: Reiniciar Quiz
// ============================================
function reiniciarQuiz() {
    iniciarQuiz();
}

// ============================================
// FUNCAO: Alternar Modo Escuro
// ============================================
function alternarModoEscuro() {
    modoEscuroAtivo = !modoEscuroAtivo;

    if (modoEscuroAtivo) {
        document.documentElement.setAttribute('data-tema', 'escuro');
        document.querySelector('.icone-modo').textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-tema');
        document.querySelector('.icone-modo').textContent = '🌙';
    }

    localStorage.setItem('modoEscuro', modoEscuroAtivo);
}

// ============================================
// FUNCAO: Alternar Tamanho da Fonte
// ============================================
function alternarTamanhoFonte() {
    const tamanhos = [16, 18, 20];
    const indiceAtual = tamanhos.indexOf(tamanhoFonteAtual);
    const proximoIndice = (indiceAtual + 1) % tamanhos.length;
    tamanhoFonteAtual = tamanhos[proximoIndice];

    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;

    const icone = document.querySelector('.icone-fonte');
    if (tamanhoFonteAtual === 16) {
        icone.textContent = 'A+';
    } else if (tamanhoFonteAtual === 18) {
        icone.textContent = 'A++';
    } else {
        icone.textContent = 'A+++';
    }
}

// ============================================
// FUNCAO: Menu Mobile
// ============================================
function alternarMenuMobile() {
    const menu = document.getElementById('navegacao').querySelector('.menu-principal');
    const botao = document.getElementById('botaoMenuMobile');

    menu.classList.toggle('ativo');
    botao.classList.toggle('ativo');
}

// ============================================
// FUNCAO: Botao Voltar ao Topo
// ============================================
function configurarBotaoTopo() {
    const botao = document.getElementById('botaoVoltarTopo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            botao.classList.add('visivel');
        } else {
            botao.classList.remove('visivel');
        }
    });

    botao.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// FUNCAO: Modal de Instrucoes
// ============================================
function configurarModalInstrucoes() {
    const overlay = document.getElementById('modalOverlay');
    const botaoFechar = document.getElementById('botaoFecharModal');
    const linkInstrucoes = document.getElementById('linkInstrucoes');

    linkInstrucoes.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    });

    botaoFechar.addEventListener('click', fecharModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            fecharModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('ativo')) {
            fecharModal();
        }
    });

    function fecharModal() {
        overlay.classList.remove('ativo');
        document.body.style.overflow = '';
    }
}

// ============================================
// FUNCAO: Formulario de Contato
// ============================================
function configurarFormularioContato() {
    const formulario = document.getElementById('formularioContato');
    const feedback = document.getElementById('mensagemFeedback');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nomeUsuario').value.trim();
        const email = document.getElementById('emailUsuario').value.trim();
        const assunto = document.getElementById('assuntoMensagem').value;
        const mensagem = document.getElementById('textoMensagem').value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            mostrarFeedback('Por favor, preencha todos os campos.', 'erro');
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostrarFeedback('Por favor, digite um e-mail valido.', 'erro');
            return;
        }

        mostrarFeedback(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`, 'sucesso');
        formulario.reset();

        setTimeout(() => {
            feedback.className = 'mensagem-feedback';
            feedback.textContent = '';
        }, 5000);
    });

    function mostrarFeedback(texto, tipo) {
        feedback.textContent = texto;
        feedback.className = `mensagem-feedback ${tipo}`;
    }
}

// ============================================
// FUNCAO: Navegacao Suave
// ============================================
function configurarNavegacaoSuave() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const alvo = document.querySelector(href);

            if (alvo) {
                const menu = document.querySelector('.menu-principal');
                const botaoMenu = document.getElementById('botaoMenuMobile');
                if (menu.classList.contains('ativo')) {
                    menu.classList.remove('ativo');
                    botaoMenu.classList.remove('ativo');
                }

                const offsetTop = alvo.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// FUNCAO: Intersection Observer para Animacoes
// ============================================
function configurarAnimacoesScroll() {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');

                // Se for a secao de estatisticas, animar contadores e grafico
                if (entrada.target.classList.contains('secao-estatisticas')) {
                    animarContadores();
                    animarGrafico();
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    const elementos = document.querySelectorAll('.card-sobre, .card-cultura, .card-estatistica, .secao-estatisticas');
    elementos.forEach(el => observador.observe(el));
}

// ============================================
// FUNCAO: Cabecalho com scroll
// ============================================
function configurarCabecalhoScroll() {
    const cabecalho = document.getElementById('cabecalho');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            cabecalho.style.boxShadow = '0 4px 20px var(--cor-sombra-forte)';
        } else {
            cabecalho.style.boxShadow = 'none';
        }
    });
}

// ============================================
// INICIALIZACAO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza culturas iniciais
    renderizarCulturas();

    // Configura filtros
    configurarFiltrosCulturas();

    // Configura praticas sustentaveis
    configurarPraticasSustentaveis();

    // Renderiza grafico
    renderizarGrafico();

    // Configura carrossel
    configurarCarrossel();

    // Configura quiz
    document.getElementById('botaoIniciarQuiz').addEventListener('click', iniciarQuiz);
    document.getElementById('botaoReiniciarQuiz').addEventListener('click', reiniciarQuiz);

    // Configura controles do cabecalho
    document.getElementById('botaoModoEscuro').addEventListener('click', alternarModoEscuro);
    document.getElementById('botaoTamanhoFonte').addEventListener('click', alternarTamanhoFonte);

    // Configura menu mobile
    document.getElementById('botaoMenuMobile').addEventListener('click', alternarMenuMobile);

    // Configura botao voltar ao topo
    configurarBotaoTopo();

    // Configura modal de instrucoes
    configurarModalInstrucoes();

    // Configura formulario de contato
    configurarFormularioContato();

    // Configura navegacao suave
    configurarNavegacaoSuave();

    // Configura animacoes de scroll
    configurarAnimacoesScroll();

    // Configura cabecalho com scroll
    configurarCabecalhoScroll();

    // Verifica preferencia de modo escuro salva
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'true') {
        alternarModoEscuro();
    }

    console.log('🌱 Site Agrinho melhorado inicializado com sucesso!');
});