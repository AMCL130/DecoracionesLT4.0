document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.querySelectorAll('#toggleButton');
    toggleButtons.forEach(function(toggleButton) {
      toggleButton.addEventListener('click', function() {
        if (toggleButton.innerText === 'Activo') {
          toggleButton.innerText = 'Inactivo';
          toggleButton.classList.remove('btn-danger');
          toggleButton.classList.add('btn-secondary');
        } else {
          toggleButton.innerText = 'Activo';
          toggleButton.classList.remove('btn-secondary');
          toggleButton.classList.add('btn-danger');
        }
      });
    });
  });


//VALIDACION REGISTRAR
const formularioRegistroUsuario = document.getElementById('msformRegistrar');
formularioRegistroUsuario.addEventListener('submit', e => {
    e.preventDefault();

    const DocumentoRegistrar = /^[0-9\s]+$/;
    const NombreRegistrar = /^[a-zA-Z]+$/;
    const TelefonoRegistrar = /^\d{10}$/;
    const CorreoRegistrar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const documentoRegistrar = document.getElementById('documentoRegistrar').value;
    const nombreRegistrar = document.getElementById('nombreRegistrar').value;
    const telefonoRegistrar = document.getElementById('telefonoRegistrar').value;
    const correoRegistrar = document.getElementById('correoRegistrar').value;

    try {
        if (documentoRegistrar === '' || nombreRegistrar === '' || telefonoRegistrar === '' || correoRegistrar === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!DocumentoRegistrar.test(documentoRegistrar)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Documento incorrecto. ¡Solo se permiten numeros!',
            });
        } else if (!NombreRegistrar.test(nombreRegistrar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre incorrecta. ¡Ingrese un Nombre valido!',
            });
        } else if (!TelefonoRegistrar.test(telefonoRegistrar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Telefono incorrecto. ¡Minimo debe contener 10 numeros!',
            });    
        } else if (!CorreoRegistrar.test(correoRegistrar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo incorrecta. ¡Ingrese porfavor un correo valido!',
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

//VALIDACIONES EDITAR
const formularioRegistro = document.getElementById('msformEditar');
formularioRegistro.addEventListener('submit', e => {
    e.preventDefault();

    const expDocumentoEditar = /^[0-9\s]+$/;
    const expNombreEditar = /^[a-zA-Z]+$/;
    const expTelefonoEditar = /^\d{10}$/;
    const expCorreoEditar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const documentoEditar = document.getElementById('documentoEditar').value;
    const nombreEditar = document.getElementById('nombreEditar').value;
    const telefonoEditar = document.getElementById('telefonoEditar').value;
    const correoEditar = document.getElementById('correoEditar').value;

    try {
        if (documentoEditar === '' || nombreEditar === '' || telefonoEditar === '' || correoEditar === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expDocumentoEditar.test(documentoEditar)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Documento incorrecto. ¡Solo se permiten numeros!',
            });
        } else if (!expNombreEditar.test(nombreEditar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre incorrecta. ¡Ingrese un Nombre valido!',
            });
        } else if (!expTelefonoEditar.test(telefonoEditar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Telefono incorrecto. ¡Minimo debe contener 10 numeros!',
            });    
        } else if (!expCorreoEditar.test(correoEditar)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo incorrecta. ¡Ingrese porfavor un correo valido!',
            }); 
        } else {
            Swal.fire({
                title: '¡Has Editado Correctamente al Usuario!',
                icon: 'success',
            }).then(() => {
                window.location.href = 'usuarios.html';
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

  //VALIDACIONES ELIMINAR
  var btnEliminar = document.querySelectorAll('.btneliminar');

  // Agrega un evento de clic al botón
  btnEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        // Muestra la confirmación de eliminación utilizando SweetAlert2
        Swal.fire({
          title: 'Confirmación',
          text: '¿Estás seguro de que deseas eliminar este Usuario?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Eliminado', 'El Usuario ha sido eliminado correctamente', 'success');
            // Redirige al usuario a una página web después de la eliminación
          }
        });
      });
  })

