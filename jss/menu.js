const botaoMenu = document.querySelector('.menu-toggle');
const navegacaoPrincipal = document.getElementById('navContainer');

function alternarMenu(fechar = false) {
    const abrir = fechar ? false : !navegacaoPrincipal.classList.contains('aberto');
    navegacaoPrincipal.classList.toggle('aberto', abrir);
    botaoMenu.setAttribute('aria-expanded', abrir);
    botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
}

if (botaoMenu && navegacaoPrincipal) {
    botaoMenu.addEventListener('click', () => alternarMenu());
    navegacaoPrincipal.addEventListener('click', (evento) => {
        if (evento.target.closest('.nav-btn')) alternarMenu(true);
    });
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') alternarMenu(true);
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', () => alternarMenu(true));
}
