const opcoesRastreador = {
    root: null,
    rootMargin: '-40% 0px -60% 0px',
    threshold: 0
};

const rastreador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = entrada.target.getAttribute('id');
            const botaoAtivo = document.querySelector(`.nav-btn[href="#${id}"]`);
            if (botaoAtivo) {
                const indice = parseInt(botaoAtivo.getAttribute('data-index'));
                atualizarMenu(indice);
            }
        }
    });
}, opcoesRastreador);

botoes.forEach(botao => {
    const href = botao.getAttribute('href');
    if (href && href.startsWith('#')) {
        const seccao = document.querySelector(href);
        if (seccao) {
            rastreador.observe(seccao);
        }
    }
});

/*Animação de entrada ao rolar a página*/
function animarSeccoesAoRolar() {
    const seccoes = document.querySelectorAll('#SobreMim, #LinguagensFerramentas, #Projetos');
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.1 });

    seccoes.forEach(seccao => {
        seccao.classList.add('revelar');
        observador.observe(seccao);
    });
}

animarSeccoesAoRolar();
