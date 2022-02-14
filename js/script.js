function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunc(){
   document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.catalog')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.shoping-cart')) {

    var dropdownss = document.getElementsByClassName("dropdown-content2");
    var s;
    for (s = 0; s < dropdownss.length; s++) {
      var openDropdown = dropdownss[s];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}