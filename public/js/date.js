

$(document).ready(function () {


    dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    now = new Date

    let date =  ( now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +  now.getFullYear ())

    $("#data").text(date)

})

  