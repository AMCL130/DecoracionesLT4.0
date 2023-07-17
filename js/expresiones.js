function mostrarServicio() {
  var nombre = document.getElementById('nombreServicio').value;
  var descripcion = document.getElementById('descripcion').value;
  var precio = document.getElementById('precioUnitario').value;
  console.log (mostrarServicio)

  if (nombre.trim() === '') {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese el nombre',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else if (!isNaN(nombre)) {
    Swal.fire({
      title: 'Error',
      text: 'El campo Nombre no puede ser un número',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else if (descripcion.trim() === '') {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese la descripción',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else if (precio <= 0) {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un valor válido para el precio',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Edición exitosa',
      showConfirmButton: true,
    }).then(() => {
      $('#editarServicioModal').modal('hide');
    });
  }
}
