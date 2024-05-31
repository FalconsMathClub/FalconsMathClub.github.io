// var elements = document.querySelectorAll('.tabs');
// var instance = M.Tabs.init(elements);

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems);
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//    var options = {
//      padding: 200,
//      indicators: true
//    }
//     var instances = M.Carousel.init(elems, options);
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var options = {
//     inDuration: 500
//     }
//     var instances = M.Collapsible.init(elems, options);})
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var options = {
    inDuration: 500,
    accordion: false
  }
  var instances = M.Collapsible.init(elems, options);
})

M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'left'});

document.getElementById("submit").addEventListener("click", () => {
  let pass = document.getElementById("password").value
  let password = "FalconsMC"
  if (pass == password){
    document.getElementById("lesson-plans").classList.remove("hide")
    document.getElementById("initial").classList.add("hide")
  }
})




document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});