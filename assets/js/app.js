// llamando el alert a travez de una etiqueta <a>
// $( () => {
//   $('a').click(function(e){
//     alert("Hola");
//   });
//
//   $('.popup-close')
// });

$( () => { //function() {}
  $(".popup-link").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').show();
    //$('.brand-popup').removeClass('hide');
    //$('.brand-popup').addClass('show');

  });

  $(".brand-popup .popup-close").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').hide();
    //$('.brand-popup').removeClass('show');
    //$('.brand-popup').addClass('hide');
  })
});
