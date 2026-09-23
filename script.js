document.addEventListener('DOMContentLoaded', () => {
  const favoritos = document.querySelectorAll('.favorito');

  favoritos.forEach((botao) => {
    botao.addEventListener('click', () => {
      const isFavoritado = botao.classList.toggle('favoritado');
      botao.textContent = isFavoritado ? '♥' : '♡';
      botao.setAttribute(
        'aria-label',
        isFavoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
      );
    });
  });
});
