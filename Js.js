document.addEventListener('DOMContentLoaded', function () {
    const mostrarBtn = document.querySelector('#mostrarBtn');
    const resultado = document.querySelector('#resultado');

    let miVariable = 'Hola, esta es mi variable!';

    mostrarBtn.addEventListener('click', function () {
        resultado.textContent = miVariable;
        console.log(miVariable)
    });
});
