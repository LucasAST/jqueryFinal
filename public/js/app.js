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
  $('.describ, #tabs').css("font-size", "40px");
  $('#tabs, #tabs p').css("font-size", "30px");
  $('#accordion').css("font-size", "30px");
  $('#parag-4').css("font-size", "30px");
  $('#content-4').css("font-size", "30px");
  $('.title-5').css("font-size", "30px");
})

});


