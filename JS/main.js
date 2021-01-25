function clickBars(x) {
  x.classList.toggle("change-bar");
  document.querySelector('.side-nav').classList.toggle("change-side-nav");

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "index.html") {
    document.querySelector('.main-tag').classList.toggle("change-main-tag");
    document.querySelector('.widget').classList.toggle("change-widget");
  }
  else if (page == "employees.html") {
    document.querySelector('.tablink').classList.toggle("change-tablink");
    document.querySelector('.tabcontent').classList.toggle("change-tabcontent");
    document.querySelector('.tablink-1').classList.toggle
  }
}

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";  
}
  
// Get the element with tablink owners and click on it
document.getElementById("tablink-1-id").click();