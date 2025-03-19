document.addEventListener("DOMContentLoaded", function() {
    const cajas = document.querySelectorAll('.caja');
    let moveRight = true;

    setInterval(() => {
        cajas.forEach(caja => {
            if (moveRight) {
                caja.classList.add('move-right');
                caja.classList.remove('move-left');
            } else {
                caja.classList.add('move-left');
                caja.classList.remove('move-right');
            }
        });
        moveRight = !moveRight;
    }, 3000); // Cambia el intervalo de tiempo según sea necesario
});