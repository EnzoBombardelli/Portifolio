const menuNavegacao = document.getElementById('navContainer');
const botoes = document.querySelectorAll('.nav-btn');
const focoDeLuz = document.getElementById('holofoteWrapper'); // Voltei para spotlightWrapper que é o ID real no teu HTML
let indiceAtivo = 0;

function atualizarMenu(indice) {
    if (indiceAtivo === indice) return;
    
    indiceAtivo = indice;
    menuNavegacao.style.setProperty('--active-index', indice);

    focoDeLuz.style.transform = `translateX(calc(100% * var(--active-index))) skewX(${indice > indiceAtivo ? '3deg' : '-3deg'})`;
    setTimeout(() => {
        focoDeLuz.style.transform = `translateX(calc(100% * var(--active-index))) skewX(0deg)`;
    }, 150);

    botoes.forEach((botao, i) => {
        if (i === indice) {
            botao.classList.add('active');
        } else {
            botao.classList.remove('active');
        }
    });
}

botoes.forEach((botao) => {
    botao.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        
        const indice = parseInt(evento.currentTarget.getAttribute('data-index'));
        atualizarMenu(indice);

        const destinoId = evento.currentTarget.getAttribute('href');
        if (destinoId && destinoId.startsWith('#')) {
            const seccaoDestino = document.querySelector(destinoId);
            
            if (seccaoDestino) {
                const posicaoExata = seccaoDestino.getBoundingClientRect().top + window.scrollY - 100;
                
                window.scrollTo({
                    top: posicaoExata,
                    behavior: 'smooth'
                });
            }
        }
    });
});