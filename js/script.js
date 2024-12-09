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
  var instances = M.Collapsible.init(elems);
})

M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'left'});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

