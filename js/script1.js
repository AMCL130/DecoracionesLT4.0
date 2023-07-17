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
  

  if(document.getElementById('btn2')){
    document.getElementById('btn2').addEventListener('click', function() {
      var nombreServicio = document.getElementById('nombreServicio2').value;
      if(document.getElementById('precioUnitario2')){
        var precioUnitario = document.getElementById('precioUnitario2').value
      }
      var descripcion = document.getElementById('descripcion2').value
    
      if (nombreServicio === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese el nombre',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      } else if (!isNaN(nombreServicio)) {
        Swal.fire({
          title: 'Error',
          text: 'El campo Nombre no puede ser un número',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        
      }
      else if (descripcion === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese la descripcion',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        
      }else if (precioUnitario === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese el precio',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      
      }else if (precioUnitario <= 0) {
        Swal.fire({
          title: 'Error',
          text: 'Ingreso un valor negativo',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      
      }else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Creacion exitosa',
          showConfirmButton: true,
        });
      
        $('#editarServicioModal').modal('hide');
      }
    });
  }
  
  if(document.getElementById('btn1')){
    document.getElementById('btn1').addEventListener('click', function() {
      var nombreServicio = document.getElementById('nombreServicio1').value;
      if(document.getElementById('precioUnitario1')){
        var precioUnitario = document.getElementById('precioUnitario1').value
      }
      var descripcion = document.getElementById('descripcion1').value
    
      if (nombreServicio === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese el nombre',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      } else if (!isNaN(nombreServicio)) {
        Swal.fire({
          title: 'Error',
          text: 'El campo Nombre no puede ser un número',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        
      }
      else if (descripcion === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese la descripcion',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        
      }else if (precioUnitario === '') {
        Swal.fire({
          title: 'Error',
          text: 'Ingrese el precio',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      
      }else if (precioUnitario <= 0) {
        Swal.fire({
          title: 'Error',
          text: 'Ingreso un valor negativo',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      
      }else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Creacion exitosa',
          showConfirmButton: true,
        });
      
        $('#editarServicioModal').modal('hide');
      }
    });
  }


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
  
  
  var botonEliminar = document.getElementById('botonEliminar');
  botonEliminar.addEventListener('click', mostrarConfirmacionEliminar);




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
  
