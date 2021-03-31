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
})

  $('.title-5').click(function(){
    $('#bing').slideToggle()
})

})


