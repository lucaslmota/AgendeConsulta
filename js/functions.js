(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function validarEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    }
    else {
        alert("E-mail inválido!");
    }
}

// var password = document.getElementById("senha")
// var confirm_password = document.getElementById("confirmarSenha");

// function validarSenha() {
//     if (senha.value != confirmarSenha.value) {
//         confirmarSenha.setCustomValidity("Senhas diferentes!");
//     } else {
//         confirmarSenha.setCustomValidity('');
//     }
// }

// senha.onchange = validarSenha;
// confirmarSenha.onkeyup = validarSenha;

// function validar(){
//     let email = document.getElementById('email')
//     let senha = document.getElementById('senha')
//     let link = document.getElementById('linkDesabilitado')

//     if(email.value.length == 0 && senha.value.length == 0){
//         window.alert('[ERRO] Os campos tem que estar preenchidos.')
//         link.href = ''
//     }else{
//         link.href = "pgInicial.html"
//     }

// }