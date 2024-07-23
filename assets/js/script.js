const menuItens = document.querySelectorAll('.menu-item');

menuItens.forEach(item => {
    item.addEventListener('click', () => {
        //Remove a classe .active de todos os itens
        menuItens.forEach(i => i.classList.remove('active'));
        // Adiciona a classe .active apenas ao item clicado
        item.classList.add('active');
    });
});

function mostrarTela(id) {
    // Esconde todas as telas
  document.querySelectorAll('.display-disable').forEach(tela => {
    tela.style.display = 'none';
  });
  // Mostra a tela selecionada
  document.getElementById(id).style.display = 'block';
}