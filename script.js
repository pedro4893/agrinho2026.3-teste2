/* ============================================
   AGRINHO - SCRIPT PRINCIPAL
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
        descricao: 'Principal commodity agrícola do Brasil. A soja é a base da alimentação animal e da indústria de óleos.',
        producao: '150M',
        unidade: 'toneladas/ano',
        ranking: '1º lugar mundial'
    },
    {
        id: 2,
        nome: 'Milho',
        categoria: 'grao',
        emoji: '🌽',
        corGradiente: 'linear-gradient(135deg, #d4a017 0%, #f0d060 100%)',
        descricao: 'O milho é essencial para a alimentação humana e animal, além de ser matéria-prima para diversos produtos.',
        producao: '120M',
        unidade: 'toneladas/ano',
        ranking: '3º lugar mundial'
    },
    {
        id: 3,
        nome: 'Cana-de-Açúcar',
        categoria: 'industrial',
        emoji: '🎋',
        corGradiente: 'linear-gradient(135deg, #5a7d27 0%, #8cb34a 100%)',
        descricao: 'O Brasil é o maior produtor mundial de cana-de-açúcar, base para açúcar e etanol renovável.',
        producao: '750M',
        unidade: 'toneladas/ano',
        ranking: '1º lugar mundial'
    },
    {
        id: 4,
        nome: 'Café',
        categoria: 'industrial',
        emoji: '☕',
        corGradiente: 'linear-gradient(135deg, #6b4226 0%, #a0522d 100%)',
        descricao: 'O café brasileiro é reconhecido mundialmente pela qualidade e variedade de seus grãos.',
        producao: '3.5M',
        unidade: 'toneladas/ano',
        ranking: '1º lugar mundial'
    },
    {
        id: 5,
        nome: 'Laranja',
        categoria: 'fruta',
        emoji: '🍊',
        corGradiente: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
        descricao: 'O Brasil lidera a produção mundial de laranjas e suco de laranja, com destaque para São Paulo.',
        producao: '17M',
        unidade: 'toneladas/ano',
        ranking: '1º lugar mundial'
    },
    {
        id: 6,
        nome: 'Arroz',
        categoria: 'grao',
        emoji: '🍚',
        corGradiente: 'linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%)',
        descricao: 'O arroz é um dos alimentos mais consumidos no Brasil, essencial na alimentação diária.',
        producao: '11M',
        unidade: 'toneladas/ano',
        ranking: '10º lugar mundial'
    },
    {
        id: 7,
        nome: 'Banana',
        categoria: 'fruta',
        emoji: '🍌',
        corGradiente: 'linear-gradient(135deg, #d4ac0d 0%, #f7dc6f 100%)',
        descricao: 'A banana é a fruta mais consumida no Brasil, rica em potássio e vitaminas.',
        producao: '6.8M',
        unidade: 'toneladas/ano',
        ranking: '4º lugar mundial'
    },
    {
        id: 8,
        nome: 'Algodão',
        categoria: 'industrial',
        emoji: '☁️',
        corGradiente: 'linear-gradient(135deg, #7f8c8d 0%, #b0b0b0 100%)',
        descricao: 'O algodão brasileiro é referência mundial em qualidade e sustentabilidade na produção.',
        producao: '2.5M',
        unidade: 'toneladas/ano',
        ranking: '5º lugar mundial'
    }
];

// ============================================
// DADOS DO QUIZ
// ============================================
const perguntasQuiz = [
    {
        pergunta: 'Qual é a principal commodity agrícola exportada pelo Brasil?',
        opcoes: ['Milho', 'Soja', 'Café', 'Açúcar'],
        correta: 1, // índice da resposta correta
        explicacao: 'A soja é a principal commodity agrícola do Brasil, representando a maior parte das exportações do agronegócio brasileiro.'
    },
    {
        pergunta: 'Qual prática agrícola combina árvores, culturas e animais no mesmo espaço?',
        opcoes: ['Monocultura', 'Sistema Agroflorestal', 'Agricultura de Precisão', 'Hidroponia'],
        correta: 1,
        explicacao: 'Os sistemas agroflorestais integram árvores, culturas agrícolas e animais, imitando ecossistemas naturais.'
    },
    {
        pergunta: 'O Brasil é o maior produtor mundial de qual dessas culturas?',
        opcoes: ['Trigo', 'Cana-de-açúcar', 'Arroz', 'Cevada'],
        correta: 1,
        explicacao: 'O Brasil é o maior produtor mundial de cana-de-açúcar, produzindo aproximadamente 750 milhões de toneladas por ano.'
    },
    {
        pergunta: 'Qual é o objetivo principal da rotação de culturas?',
        opcoes: ['Aumentar a área plantada', 'Manter a fertilidade do solo', 'Reduzir mão de obra', 'Aumentar o uso de pesticidas'],
        correta: 1,
        explicacao: 'A rotação de culturas alterna diferentes plantas para evitar o esgotamento de nutrientes do solo.'
    },
    {
        pergunta: 'Qual tecnologia ajuda a reduzir o desperdício de água na irrigação?',
        opcoes: ['Irrigação por inundação', 'Irrigação de precisão', 'Aspersão convencional', 'Irrigação manual'],
        correta: 1,
        explicacao: 'A irrigação de precisão utiliza sensores e tecnologia para aplicar a quantidade exata de água necessária.'
    }
];

// ============================================
// VARIÁVEIS DE ESTADO
// ============================================
let indicePerguntaAtual = 0;
let pontuacaoQuiz = 0;
let acertosQuiz = 0;
let modoEscuroAtivo = false;
let tamanhoFonteAtual = 16;

// ============================================
// FUNÇÃO: Renderizar Cards de Culturas
// ============================================
function renderizarCulturas(filtro = 'todos') {
    const container = document.getElementById('gridCulturas');

    // Limpa o container
    container.innerHTML = '';

    // Filtra as culturas
    const culturasFiltradas = filtro === 'todos' 
        ? listaCulturas 
        : listaCulturas.filter(c => c.categoria === filtro);

    // Cria os cards
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
// FUNÇÃO: Filtrar Culturas
// ============================================
function configurarFiltrosCulturas() {
    const botoesFiltro = document.querySelectorAll('.botao-filtro');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remove classe ativa de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            // Adiciona classe ativa ao botão clicado
            this.classList.add('ativo');

            // Obtém o filtro selecionado
            const filtro = this.getAttribute('data-filtro');

            // Renderiza as culturas filtradas
            renderizarCulturas(filtro);
        });
    });
}

// ============================================
// FUNÇÃO: Configurar Práticas Sustentáveis
// ============================================
function configurarPraticasSustentaveis() {
    const itensPratica = document.querySelectorAll('.item-pratica');
    const detalhes = document.querySelectorAll('.conteudo-detalhe');

    itensPratica.forEach(item => {
        item.addEventListener('click', function() {
            // Remove classe ativa de todos os itens
            itensPratica.forEach(i => i.classList.remove('ativo'));
            // Adiciona classe ativa ao item clicado
            this.classList.add('ativo');

            // Obtém a prática selecionada
            const pratica = this.getAttribute('data-pratica');

            // Esconde todos os detalhes
            detalhes.forEach(d => d.classList.remove('ativo'));

            // Mostra o detalhe correspondente
            const detalheAtivo = document.getElementById(`detalhe-${pratica}`);
            if (detalheAtivo) {
                detalheAtivo.classList.add('ativo');
            }
        });
    });

    // Ativa o primeiro item por padrão
    if (itensPratica.length > 0) {
        itensPratica[0].classList.add('ativo');
    }
}

// ============================================
// FUNÇÃO: Iniciar Quiz
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
// FUNÇÃO: Mostrar Pergunta Atual
// ============================================
function mostrarPergunta() {
    const pergunta = perguntasQuiz[indicePerguntaAtual];

    // Atualiza progresso
    const progresso = ((indicePerguntaAtual + 1) / perguntasQuiz.length) * 100;
    document.getElementById('progressoPreenchido').style.width = `${progresso}%`;

    // Atualiza informações da pergunta
    document.getElementById('numeroPergunta').textContent = 
        `${indicePerguntaAtual + 1}/${perguntasQuiz.length}`;
    document.getElementById('pontuacaoAtual').textContent = `Pontos: ${pontuacaoQuiz}`;

    // Mostra o texto da pergunta
    document.getElementById('textoPergunta').textContent = pergunta.pergunta;

    // Renderiza as opções
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
// FUNÇÃO: Verificar Resposta
// ============================================
function verificarResposta(indiceResposta, botaoClicado) {
    const pergunta = perguntasQuiz[indicePerguntaAtual];
    const todasOpcoes = document.querySelectorAll('.botao-opcao');

    // Desabilita todos os botões
    todasOpcoes.forEach(botao => botao.classList.add('desabilitada'));

    // Verifica se a resposta está correta
    if (indiceResposta === pergunta.correta) {
        botaoClicado.classList.add('certa');
        pontuacaoQuiz += 100;
        acertosQuiz++;
    } else {
        botaoClicado.classList.add('errada');
        // Destaca a resposta correta
        todasOpcoes[pergunta.correta].classList.add('certa');
    }

    // Atualiza pontuação na tela
    document.getElementById('pontuacaoAtual').textContent = `Pontos: ${pontuacaoQuiz}`;

    // Avança para próxima pergunta após 1.5 segundos
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
// FUNÇÃO: Mostrar Resultado do Quiz
// ============================================
function mostrarResultado() {
    document.getElementById('telaPerguntaQuiz').style.display = 'none';
    document.getElementById('telaResultadoQuiz').style.display = 'block';

    const percentual = (acertosQuiz / perguntasQuiz.length) * 100;

    // Define mensagem baseada no desempenho
    let titulo, texto, icone;

    if (percentual === 100) {
        titulo = '🏆 Excelente!';
        texto = 'Você acertou todas as perguntas! É um verdadeiro especialista em agricultura brasileira.';
        icone = '🏆';
    } else if (percentual >= 60) {
        titulo = '👏 Muito Bem!';
        texto = 'Você demonstrou bom conhecimento sobre agricultura e sustentabilidade. Continue aprendendo!';
        icone = '👏';
    } else {
        titulo = '💪 Continue Estudando!';
        texto = 'Agricultura é um tema vasto. Explore mais o site e tente novamente!';
        icone = '💪';
    }

    document.getElementById('iconeResultado').textContent = icone;
    document.getElementById('tituloResultado').textContent = titulo;
    document.getElementById('textoResultado').textContent = texto;
    document.getElementById('valorAcertos').textContent = `${acertosQuiz}/${perguntasQuiz.length}`;
    document.getElementById('valorPontos').textContent = pontuacaoQuiz;
}

// ============================================
// FUNÇÃO: Reiniciar Quiz
// ============================================
function reiniciarQuiz() {
    iniciarQuiz();
}

// ============================================
// FUNÇÃO: Alternar Modo Escuro
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

    // Salva preferência no localStorage
    localStorage.setItem('modoEscuro', modoEscuroAtivo);
}

// ============================================
// FUNÇÃO: Alternar Tamanho da Fonte
// ============================================
function alternarTamanhoFonte() {
    const tamanhos = [16, 18, 20];
    const indiceAtual = tamanhos.indexOf(tamanhoFonteAtual);
    const proximoIndice = (indiceAtual + 1) % tamanhos.length;
    tamanhoFonteAtual = tamanhos[proximoIndice];

    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;

    // Atualiza ícone
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
// FUNÇÃO: Menu Mobile
// ============================================
function alternarMenuMobile() {
    const menu = document.getElementById('navegacao').querySelector('.menu-principal');
    const botao = document.getElementById('botaoMenuMobile');

    menu.classList.toggle('ativo');
    botao.classList.toggle('ativo');
}

// ============================================
// FUNÇÃO: Botão Voltar ao Topo
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
// FUNÇÃO: Modal de Instruções
// ============================================
function configurarModalInstrucoes() {
    const overlay = document.getElementById('modalOverlay');
    const botaoFechar = document.getElementById('botaoFecharModal');
    const linkInstrucoes = document.getElementById('linkInstrucoes');

    // Abrir modal
    linkInstrucoes.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    });

    // Fechar modal
    botaoFechar.addEventListener('click', fecharModal);

    // Fechar ao clicar no overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            fecharModal();
        }
    });

    // Fechar com ESC
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
// FUNÇÃO: Formulário de Contato
// ============================================
function configurarFormularioContato() {
    const formulario = document.getElementById('formularioContato');
    const feedback = document.getElementById('mensagemFeedback');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtém os valores dos campos
        const nome = document.getElementById('nomeUsuario').value.trim();
        const email = document.getElementById('emailUsuario').value.trim();
        const assunto = document.getElementById('assuntoMensagem').value;
        const mensagem = document.getElementById('textoMensagem').value.trim();

        // Validação básica
        if (!nome || !email || !assunto || !mensagem) {
            mostrarFeedback('Por favor, preencha todos os campos.', 'erro');
            return;
        }

        // Validação de e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostrarFeedback('Por favor, digite um e-mail válido.', 'erro');
            return;
        }

        // Simula envio bem-sucedido
        mostrarFeedback(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`, 'sucesso');

        // Limpa o formulário
        formulario.reset();

        // Limpa a mensagem após 5 segundos
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
// FUNÇÃO: Navegação Suave
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
                // Fecha menu mobile se estiver aberto
                const menu = document.querySelector('.menu-principal');
                const botaoMenu = document.getElementById('botaoMenuMobile');
                if (menu.classList.contains('ativo')) {
                    menu.classList.remove('ativo');
                    botaoMenu.classList.remove('ativo');
                }

                // Scroll suave até o alvo
                const offsetTop = alvo.offsetTop - 70; // compensa o cabeçalho fixo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// FUNÇÃO: Animação de Scroll (Intersection Observer)
// ============================================
function configurarAnimacoesScroll() {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observa elementos que devem animar
    const elementos = document.querySelectorAll('.card-sobre, .card-cultura, .item-pratica');
    elementos.forEach(el => observador.observe(el));
}

// ============================================
// FUNÇÃO: Cabeçalho com scroll
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
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza culturas iniciais
    renderizarCulturas();

    // Configura filtros
    configurarFiltrosCulturas();

    // Configura práticas sustentáveis
    configurarPraticasSustentaveis();

    // Configura quiz
    document.getElementById('botaoIniciarQuiz').addEventListener('click', iniciarQuiz);
    document.getElementById('botaoReiniciarQuiz').addEventListener('click', reiniciarQuiz);

    // Configura controles do cabeçalho
    document.getElementById('botaoModoEscuro').addEventListener('click', alternarModoEscuro);
    document.getElementById('botaoTamanhoFonte').addEventListener('click', alternarTamanhoFonte);

    // Configura menu mobile
    document.getElementById('botaoMenuMobile').addEventListener('click', alternarMenuMobile);

    // Configura botão voltar ao topo
    configurarBotaoTopo();

    // Configura modal de instruções
    configurarModalInstrucoes();

    // Configura formulário de contato
    configurarFormularioContato();

    // Configura navegação suave
    configurarNavegacaoSuave();

    // Configura animações de scroll
    configurarAnimacoesScroll();

    // Configura cabeçalho com scroll
    configurarCabecalhoScroll();

    // Verifica preferência de modo escuro salva
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'true') {
        alternarModoEscuro();
    }

    console.log('🌱 Site Agrinho inicializado com sucesso!');
});