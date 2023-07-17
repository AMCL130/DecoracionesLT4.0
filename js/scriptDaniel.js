document.addEventListener("DOMContentLoaded", function() {
    var options = document.querySelectorAll(".option");
  
    options.forEach(function(option) {
      option.addEventListener("click", function() {
        options.forEach(function(option) {
          option.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });

  





function guardarEdicion1() {
  // Obtener el valor del campo "precio"
  let precioInput = document.getElementById("precio").value;
  const soloN = /^[0-9]+$/;
  // Validar que el campo "precio" no esté vacío
  if (precioInput.trim() === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, complete el campo "precio".'
    });
    return;
  }
  
  if (!soloN.test(precioInput)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El campo "precio" solo puede contener números.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: 'Los campos se han completado correctamente.'
  });

  // Agrega aquí tu lógica para guardar los cambios del formulario

  // Cerrar el modal después de guardar
  $('#editarPrecioModal').modal('hide');
}

function guardarEdicion2() {
  // Obtener el valor del campo "pagado"

  let pagadoInput = document.getElementById("pagado").value;
  const soloN = /^[0-9]+$/;
  // Validar que el campo "pagado" no esté vacío

  
  if (pagadoInput.trim() === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, complete el campo "pagado".'
    });
    return;
  }

  // Validar que el campo "pagado" solo contenga números
  
  if (!soloN.test(pagadoInput)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El campo "pagado" solo puede contener números.'
    });
    return;
  }

  // Aquí puedes agregar más validaciones según tus necesidades

  // Si todas las validaciones son exitosas, se muestra un mensaje de éxito
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: 'Los campos se han completado correctamente.'
  });

  // Agrega aquí tu lógica para guardar los cambios del formulario

  // Cerrar el modal después de guardar
  $('#editarCampoModal').modal('hide');
}

function guardarEdicion3() {
  // Obtener el valor del campo "porCobrar"

  let porCobrarInput = document.getElementById("porCobrar").value;
  const soloN = /^[0-9]+$/;
  // Validar que el campo "porCobrar" no esté vacío

  
  if (porCobrarInput.trim() === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, complete el campo "porCobrar".'
    });
    return;
  }

  // Validar que el campo "porCobrar" solo contenga números
  
  if (!soloN.test(porCobrarInput)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El campo "porCobrar" solo puede contener números.'
    });
    return;
  }

  // Aquí puedes agregar más validaciones según tus necesidades

  // Si todas las validaciones son exitosas, se muestra un mensaje de éxito
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: 'Los campos se han completado correctamente.'
  });

  // Agrega aquí tu lógica para guardar los cambios del formulario

  // Cerrar el modal después de guardar
  $('#editarCampoModal').modal('hide');
}
   

  
        
function mostrarConfirmacionCancelar() {
  Swal.fire({
    title: '¿Estás seguro de cancelar?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6222CC',
    cancelButtonColor: '#FBA504',
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Cancelado', 'El elemento ha sido cancelado', 'success');
    } else {
      Swal.fire('Cancelado', 'La accion ha sido cancelada', 'info');
    }
  });
}

function confirmacionEliminarProducto() {
  Swal.fire({
    title: '¿Estás seguro de eliminar producto?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6222CC',
    cancelButtonColor: '#FBA504',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Eliminado', 'El elemento ha sido Eliminado', 'success');
    } else {
      Swal.fire('Cancelado', 'La accion ha sido cancelada', 'info');
    }
  });
}