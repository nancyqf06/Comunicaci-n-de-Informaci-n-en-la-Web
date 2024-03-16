'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            showAlert('El campo email está vacío', 'error');
        } else if (expressionEmail.test(email) === false) {
            showAlert('Email inválido', 'error');
        } else {
            showCustomAlert();
            emailjs.sendForm('service_p7ux8td', 'template_uai0lzp', '#suscripcion', '5iMv1nfifXgJ39cat');
            cleanInputs();
        }
    }

    function showAlert(message, type) {
        Swal.fire({
            text: message,
            icon: type,
            timer: 3000,
            showConfirmButton: false
        });
    }

    function showCustomAlert() {
        Swal.fire({
            title: 'Gracias por suscribirte!',
            icon: 'success',
            html: '<iframe src="https://lottie.host/embed/55ce8017-7c28-47cf-b4dc-096bf9d0ada5/Ejd6a3WcJU.json"></iframe>',
            showConfirmButton: false
        });
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}
