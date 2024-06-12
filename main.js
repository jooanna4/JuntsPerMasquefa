// BARRA LATERAL
const menuIcon = document.getElementById("icono_barra_lateral");
const barraLateral = document.getElementById("barra_lateral");

// IMPORTAR NOTÍCIES
import {noticies} from './noticiesArr.js';


menuIcon.addEventListener('click', function () {
  if (barraLateral.style.opacity == "1") {
    barraLateral.style.opacity = '0';
    barraLateral.style.pointerEvents = 'none';
  } else {
    barraLateral.style.opacity = '1';
    barraLateral.style.pointerEvents = 'auto';
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const contenedorNoticias = document.getElementById('noticies');
  const templateCard = document.querySelector('.card-template');

  if (templateCard) {
    noticies.forEach((noticia) => {
      // Crea una copia de la plantilla de la tarjeta
      const card = templateCard.cloneNode(true);
      card.classList.remove('card-template'); // Remove the template class

      // Obte els elements dins la tarjeta
      const cardDate = card.querySelector('.data');
      const cardTitle = card.querySelector('h3');
      const cardSummary = card.querySelector('.resumNoticia');

      // Actualitza informació
      cardDate.textContent = noticia.data;
      cardTitle.textContent = noticia.titol;
      cardSummary.textContent = noticia.resum;

      // Añade la tarjeta al contenedor
      contenedorNoticias.appendChild(card);
    });
  }
});