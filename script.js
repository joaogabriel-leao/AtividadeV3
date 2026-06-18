// =============================================
// MENU MOBILE
// Ao clicar no botão hambúrguer, exibe ou esconde o menu de navegação
// =============================================
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('active');
});

// Fecha o menu mobile ao clicar em qualquer link da navegação
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('active');
  });
});

// =============================================
// CARROSSEL DE AVALIAÇÕES
// Array com os depoimentos dos clientes que serão exibidos no carrossel
// =============================================
const depoimentos = [
  { texto: '"Comprei meu Civic na AutoElite e foi a melhor experiência. Atendimento impecável, carro impecável e com garantia. Super recomendo!"', autor: 'Ricardo, Engenheiro' },
  { texto: '"Financiamento rápido e sem burocracia. Em menos de uma semana já estava com meu carro novo. Equipe muito atenciosa."', autor: 'Patrícia, Jornalista' },
  { texto: '"Já é o segundo carro que compro aqui. Confiança total na procedência dos veículos. Nota 10 em tudo!"', autor: 'Carlos, Empresário' }
];

// Índice do depoimento atualmente exibido
let atual = 0;

// Referências aos elementos HTML onde o depoimento e autor são mostrados
const depoimentoEl = document.querySelector('.depoimento');
const autorEl = document.querySelector('.autor');

// Atualiza o texto e autor exibidos na tela conforme o índice recebido
function mostrarDepoimento(index) {
  depoimentoEl.textContent = depoimentos[index].texto;
  autorEl.textContent = depoimentos[index].autor;
}

// Botão "anterior": volta um depoimento (usa módulo para voltar ao último quando está no primeiro)
document.querySelector('.prev').addEventListener('click', () => {
  atual = (atual - 1 + depoimentos.length) % depoimentos.length;
  mostrarDepoimento(atual);
});

// Botão "próximo": avança um depoimento (usa módulo para voltar ao primeiro quando está no último)
document.querySelector('.next').addEventListener('click', () => {
  atual = (atual + 1) % depoimentos.length;
  mostrarDepoimento(atual);
});

// =============================================
// SCROLL SUAVE
// Ao clicar em links âncora (href="#..."), a página rola suavemente até a seção correspondente
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
