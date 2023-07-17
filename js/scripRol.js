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

  //VALIDACIONES CREAR ROL
const formularioRegistrar = document.getElementById('msformRegistrar');
formularioRegistrar.addEventListener('submit', e => {
    e.preventDefault();

    const expNombreRegistrar = /^[a-zA-Z]+$/;

    const nombreRegistrar = document.getElementById('nombreRegistrar').value;
    const permisosCheckboxes = document.querySelectorAll('input[value="permisosRegistrar"]:checked');
    const funcionesCheckboxes = document.querySelectorAll('input[value="funcionesRegistrar"]:checked');

    try {
        if (nombreRegistrar === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expNombreRegistrar.test(nombreRegistrar)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nombres incorrectos. ¡Solo se permiten letras!',
            });
        }  else if (permisosCheckboxes.length === 0 || funcionesCheckboxes.length === 0) {
                throw 'Debe seleccionar al menos un permiso y una función';
        } else {
            Swal.fire({
                title: 'Has Registrado EL Rol, Bienvenido a LT!',
                icon: 'success',
            }).then(() => {
                window.location.href = 'roles.html';
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

  //VALIDACIONES EDITAR ROL

  const formularioEditar = document.getElementById('msformEditar');
  formularioEditar.addEventListener('submit', e => {
      e.preventDefault();
  
      const expNombreEditar = /^[a-zA-Z]+$/;
  
      const nombreEditar = document.getElementById('nombreEditar').value;
      const permisosCheckboxesEditar = document.querySelectorAll('input[value="permisosEditar"]:checked');
      const funcionesCheckboxesEditar = document.querySelectorAll('input[value="funcionesEditar"]:checked');
  
      try {
          if (nombreEditar === '') {
              throw 'Todos los campos son obligatorios';
          }
          if (!expNombreEditar.test(nombreEditar)) {
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'Nombres incorrectos. ¡Solo se permiten letras!',
              });
          }  else if (permisosCheckboxesEditar.length === 0 || funcionesCheckboxesEditar.length === 0) {
                  throw 'Debe seleccionar al menos un permiso y una función';
          } else {
              Swal.fire({
                  title: 'Has Registrado EL Rol, Bienvenido a LT!',
                  icon: 'success',
              }).then(() => {
                  window.location.href = 'roles.html';
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
          text: '¿Estás seguro de que deseas eliminar este Rol?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Eliminado', 'El Rol ha sido eliminado correctamente', 'success');
            // Redirige al usuario a una página web después de la eliminación
          }
        });
      });
  })

