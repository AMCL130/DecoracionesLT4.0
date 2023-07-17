const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const btnRecuperar = document.getElementById("btnRecuperar");
const btnRecuperarIniciar = document.getElementById("recuperar-iniciar");
function redirectToHome() {
    window.location.href = "index.html";
  }
  

const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");
const formRecuperar = document.querySelector(".recuperar");

btnSignIn.addEventListener("click", () => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", () => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

btnRecuperar.addEventListener("click", () => {
    formLogin.classList.add("hide");
    formRecuperar.classList.remove("hide");
});

btnRecuperarIniciar.addEventListener("click", () => {
    formRecuperar.classList.add("hide");
    formLogin.classList.remove("hide");
});


//VALIDACIONES INICIAR SESIÓN
const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expDocumento = /^[0-9\s]+$/;
    const expContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//Al menos 8 caracteres de longitud.
// Al menos una letra mayúscula.
// Al menos una letra minúscula.
// Al menos un dígito numérico.
// Puede contener caracteres especiales.

    const documento = document.getElementById('documento').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(documento + contrasena);

    try {
        if (documento === '' || contrasena === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expDocumento.test(documento)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Documento incorrecto. ¡Solo se permiten numeros!',
            });
        } else if (!expContrasena.test(contrasena)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Minimo 8 caracteres,Una mayúscula,Una minúscula y Un numéro!',
            });
        } else {
            Swal.fire({
                title: 'Bien Hecho Bienvenido a LT!',
                icon: 'success',
            }).then(() => {
                window.location.href = 'index.html';
            });
        }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});


//VALIDACION REGISTRAR
const formularioRegistro = document.getElementById('msformRegistro');
formularioRegistro.addEventListener('submit', e => {
    e.preventDefault();

    const expDocumentoRegistro = /^[0-9\s]+$/;
    const expNombreRegistro = /^[a-zA-Z]+$/;
    const expTelefonoRegistro = /^\d{10}$/;
    const expCorreoRegistro = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const expContrasenaRegistro = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const expConfirmarRegistro = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//Al menos 8 caracteres de longitud.
// Al menos una letra mayúscula.
// Al menos una letra minúscula.
// Al menos un dígito numérico.
// Puede contener caracteres especiales.

    const documentoRegistro = document.getElementById('documentoRegistro').value;
    const nombreRegistro = document.getElementById('nombreRegistro').value;
    const telefonoRegistro = document.getElementById('telefonoRegistro').value;
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    const confirmarRegistro = document.getElementById('confirmarRegistro').value;


    try {
        if (documentoRegistro === '' || nombreRegistro === '' || telefonoRegistro === '' || correoRegistro === '' || contrasenaRegistro === '' || confirmarRegistro === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expDocumentoRegistro.test(documentoRegistro)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Documento incorrecto. ¡Solo se permiten numeros!',
            });
        } else if (!expNombreRegistro.test(nombreRegistro)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre incorrecta. ¡Ingrese un Nombre valido!',
            });
        } else if (!expTelefonoRegistro.test(telefonoRegistro)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Telefono incorrecto. ¡Minimo debe contener 10 numeros!',
            });    
        } else if (!expCorreoRegistro.test(correoRegistro)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo incorrecta. ¡Ingrese porfavor un correo valido!',
            }); 
        } else if (!expContrasenaRegistro.test(contrasenaRegistro)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Minimo 8 caracteres,Una mayúscula,Una minúscula y Un numéro!',
            }); 
        } else if (!expConfirmarRegistro.test(confirmarRegistro)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Minimo 8 caracteres,Una mayúscula,Una minúscula y Un numéro!',
            }); 
        } else {
            Swal.fire({
                title: 'Te has Registrado, Bienvenido a LT!',
                icon: 'success',
            }).then(() => {
                window.location.href = 'index.html';
            });
        }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});

//VALIDACIONES RECUPERAR CONTRASEÑA
const formularioRecuperar = document.getElementById('msformRecuperar');
formularioRecuperar.addEventListener('submit', e => {
    e.preventDefault();

    const expDocumentoRecuperar = /^[0-9\s]+$/

    const documentoRecuperar = document.getElementById('documentoRecuperar').value;

    try {
        if (documentoRecuperar === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expDocumentoRecuperar.test(documentoRecuperar)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Documento incorrecto. ¡Solo se permiten numeros!',
            });
        } else {
            Swal.fire({
                title: 'Se Envio un Correo de Recuperación!',
                icon: 'success',
            }).then(() => {
                window.location.href = 'index.html';
            });
        }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});