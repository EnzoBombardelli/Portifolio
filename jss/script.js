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