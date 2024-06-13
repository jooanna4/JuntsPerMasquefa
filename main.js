// BARRA LATERAL
const menuIcon = document.getElementById("icono_barra_lateral");
const barraLateral = document.getElementById("barra_lateral");

menuIcon.addEventListener('click', function () {
  if (barraLateral.style.opacity == "1") {
    barraLateral.style.opacity = '0';
    barraLateral.style.pointerEvents = 'none';
  } else {
    barraLateral.style.opacity = '1';
    barraLateral.style.pointerEvents = 'auto';
  }
})