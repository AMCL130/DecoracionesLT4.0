

var elements = document.querySelectorAll('.ripple-effect');

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function (e) { 
      
      e.preventDefault;
      var elm =  document.querySelector('.wrapper');
      
      if(elm.className  !== 'marked')
        elm.classList.add('marked');
         
      
      elm.classList.remove("active");
      void elm.offsetWidth;
      elm.classList.add("active");
    });
  }


 