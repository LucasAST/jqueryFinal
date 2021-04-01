$(document).ready(() => {
    $('#btn-dados').click(() => {
        $("#ajuste").fadeToggle('ajuste');
    })

    $( "#accordion" ).accordion();
    
    $("#upper").click(() => {
        console.log("oi")
        $('.section5, button, .section1').addClass('grande');
    })

    $('#decrease').click(() =>{
        $('.section5').removeClass('grande');
    })
})