//PRINCIPAL
  //Tabs
  $( function() {
    $( "#tabs" ).tabs();
  } );
  //Accordion
  $( function() {
    $( "#accordion" ).accordion();
  } );
  //Carrosel
  $(document).ready(function() {
    $("#content-slider").lightSlider({
           loop:true,
           keyPress:true
       });
       $('#image-gallery').lightSlider({
           gallery:true,
           item:1,
           thumbItem:9,
           slideMargin: 0,
           speed:500,
           auto:true,
           loop:true,
           onSliderLoad: function() {
               $('#image-gallery').removeClass('cS-hidden');
           }  
       });
 });
//Toggle
$(document).ready(function(){
  $('#parag-4 p').hide();
  $('#bing').hide();

  $('.title-4').click(function(){
    $('#parag-4 p').slideToggle()
});

  $('.title-5').click(function(){
    $('#bing').slideToggle()
});

//Acessibilidade
$('#upper').click(function(){
  $('.describ, #tabs, #accordion, #content-4, .title-5, #parag-4 p').addClass('acssOn');
})
$('#decrease').click(function(){
  $('.describ, #tabs, #accordion, #content-4, .title-5, #parag-4 p').removeClass('acssOn');
})
});


