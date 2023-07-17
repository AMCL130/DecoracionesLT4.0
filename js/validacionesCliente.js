const formulario = document.getElementById('formCrearCliente')
const formulario1= document.getElementById('formEditarCliente')

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const exNombre = /^[a-zA-Z\s]+$/;
  const exDoc = /^\d{5,11}$/;
  const exCelular = /^3\d{9}$/;
  const exCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let tipo = document.getElementById('tipo').value
  let doc = document.getElementById('doc').value
  let nombre = document.getElementById('nombre').value
  let celular = document.getElementById('celular').value
  let direccion = document.getElementById('direccion').value
  let correo = document.getElementById('correo').value
  let estado = document.getElementById('estado').value
  let contrasena = document.getElementById('contrasena').value
  let confirmarContrasena = document.getElementById('confirmarContrasena').value

  try {

    if (nombre.trim() === '' || tipo.trim() === '' || doc.trim() === '' || celular.trim() === '' || direccion.trim() === '' ||
      correo.trim === '' || estado.trim() === '' || contrasena.trim() === '' || confirmarContrasena.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exNombre.test(nombre)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre Solo permite letras',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exCelular.test(celular)) {
      Swal.fire({
        title: 'Error',
        text: 'Celular: solo se permiten números que comiencen en 3',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exCorreo.test(correo)) {
      Swal.fire({
        title: 'Error',
        text: 'Correo: formato de correo invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (contrasena !== confirmarContrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Contraseña: las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exDoc.test(doc)) {
      Swal.fire({
        title: 'Error',
        text: 'Número de Documento: Solo se permiten números de 5 a 11 dÍgitos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Cliente creado con exito',
        icon: 'sucess'
      }).then(() => {
        window.location.href = 'clientes.html'
      })
    }

  } catch (e) {
    swal.fire({
      icon: 'error',
      title: 'No se puede crear el cliente',
      text: e
    });
  }



})



formulario1.addEventListener('submit', e => {
  e.preventDefault();

  const exNombre = /^[a-zA-Z\s]+$/;
  const exDoc = /^\d{5,11}$/;
  const exCelular = /^3\d{9}$/;
  const exCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let tipo = document.getElementById('tipo').value
  let doc = document.getElementById('doc').value
  let nombre = document.getElementById('nombre').value
  let celular = document.getElementById('celular').value
  let direccion = document.getElementById('direccion').value
  let correo = document.getElementById('correo').value
  let estado = document.getElementById('estado').value
  let contrasena = document.getElementById('contrasena').value
  let confirmarContrasena = document.getElementById('confirmarContrasena').value

  try {

    if (nombre.trim() === '' || tipo.trim() === '' || doc.trim() === '' || celular.trim() === '' || direccion.trim() === '' ||
      correo.trim === '' || estado.trim() === '' || contrasena.trim() === '' || confirmarContrasena.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exNombre.test(nombre)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre Solo permite letras',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exCelular.test(celular)) {
      Swal.fire({
        title: 'Error',
        text: 'Celular: solo se permiten números que comiencen en 3',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exCorreo.test(correo)) {
      Swal.fire({
        title: 'Error',
        text: 'Correo: formato de correo invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (contrasena !== confirmarContrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Contraseña: las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!exDoc.test(doc)) {
      Swal.fire({
        title: 'Error',
        text: 'Número de Documento: Solo se permiten números de 5 a 11 dÍgitos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Cliente creado con exito',
        icon: 'sucess'
      }).then(() => {
        window.location.href = 'clientes.html'
      })
    }

  } catch (e) {
    swal.fire({
      icon: 'error',
      title: 'No se puede crear el cliente',
      text: e
    });
  }



})


function mostrarConfirmacionEliminar() {
  Swal.fire({
    title: '¿Estás seguro de eliminar?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6222CC',
    cancelButtonColor: '#FBA504',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
    } else {
      Swal.fire('Cancelado', 'La eliminación ha sido cancelada', 'info');
    }
  });
}



var botonEliminar = document.getElementById('btnEliminar');
botonEliminar.addEventListener('click', mostrarConfirmacionEliminar);