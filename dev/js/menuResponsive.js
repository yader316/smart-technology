  // menu
  function myFunction(x) {
    x.classList.toggle("change");
    showMenu()  
  }
  
  function showMenu() {
    var doc = document;
   
    doc.querySelector('.menu').classList.toggle('active-menu')
  }
  