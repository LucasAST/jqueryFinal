$(document).ready(() => {

    function verificaFase() {
        if(utix >= 80) {
        $('body').css("background-color", "rgb(255, 218, 218)");
        $('.ui-accordion-content').css("height", "fit-content").css('line-height', '40px')
        $('.section2').css("background-color", "#fff");
        $('.section5 h1').append(" Vermelha");
        $('.section5').css("background-color", "rgb(193, 2, 0, 0.5)");
        $('.section5 h1').css("color", "#fff");
        $('#ac1').text("Atividade não permitida.");
        $('#ac2').text("Atividade não permitida.");
        $('#ac3').text("Venda de bebidas alcóolicas: Após as 6h e até as 20h.")
        $('#ac5').text("Atividade não permitida.");
        $('#ac6').text("Atividade não permitida.");
        $('#ac7').text("Atividade não permitida.");
        $('#ac8').text("Atividade não permitida.");
        $('#ac9').text("Atividade não permitida.");
        $('#ac10').text("Atividade não permitida.");
        $('#ac11').text("Não permitida.");      
        console.log("oi")
    }

    if(utix < 80 && parseInt(localStorage.getItem("uy")) >= 70) {
        $('body').css("background-color", "rgb(252, 228, 194)");
        $('.ui-accordion-content').css("height", "fit-content").css('line-height', '40px')
        $('.section2').css("background-color", "#fff");
        $('.section5 h1').append(" Laranja");
        $('.section5').css("background-color", "rgb(229, 87, 0, 0.5)");
        $('#aviso-fase p').text('Fase Laranja');
        $('#aviso-fase').css("background-color", "rgb(251, 114, 0, 0.8)");
        $('#ac1').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Praças de alimentação: funcionamento de acordo com a categoria do estabelecimento</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac2').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac3').html(`<ul><li>&#8226; Venda de bebidas alcóolicas: Após as 6h e até as 20h.</li></ul>`);
        $('#ac5').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac6').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Consumo local e atendimento exclusivo para clientes sentados</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac7').html(`<ul><li>&#8226; Atividade não permitida.</li></ul>`);
        $('#ac8').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac9').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Permissão apenas de aulas e práticas individuais, suspensas as aulas e práticas em grupo</li><li>&#8226; Agendamento prévio e hora marcada</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac10').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (8 horas): Após as 6h e antes das 20h</li><li>&#8226; Obrigação de controle de acesso, hora marcada e assentos marcados</li><li>&#8226; Assentos e filas respeitando distanciamento mínimo</li><li>&#8226; Proibição de atividades com público em pé</li><li>&#8226; Adoção dos protocolos geral e setorial específico</li></ul>`); 
        $('#ac11').html(`<ul><li><p>Não permitido</p></li></ul>`);      
        console.log("oi")
    }

    if(utix < 70 && parseInt(localStorage.getItem("uy")) > 60) {
        $('body').css("background-color", "rgb(243, 255, 181)");
        $('.ui-accordion-content').css("height", "fit-content").css('line-height', '40px')
        $('.section2').css("background-color", "#fff");
        $('.section5 h1').append(" Amarela");
        $('.section5 h1').css("color", "#fff");
        $('.section5').css("background-color", "rgb(247, 231, 0, 0.3)");
        $('#aviso-fase p').text('Fase Amarela');
        $('#aviso-fase').css("background-color", "rgb(rgb(255, 232, 0, 0.8)");
        $('#ac1').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (12 horas): Após as 6h e antes das 22h</li><li>&#8226; Praças de alimentação: funcionamento de acordo com a categoria do estabelecimento</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac2').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (12 horas): Após as 6h e antes das 22h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac3').html(`<ul><li>&#8226; Sem restrições.</li></ul>`);
        $('#ac5').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 20h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac6').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 22h</li><li>&#8226; Consumo local e atendimento exclusivo para clientes sentados</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac7').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 20h</li><li>&#8226; Consumo local e atendimento exclusivo para clientes sentados</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac8').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 22h</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac9').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 22h</li><li>&#8226; Permissão apenas de aulas e práticas individuais, suspensas as aulas e práticas em grupo</li><li>&#8226; Agendamento prévio e hora marcada</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac10').html(`<ul><li>&#8226; Capacidade 40% limitada</li><li>&#8226; Horário reduzido (10 horas): Após as 6h e antes das 22h</li><li>&#8226; Obrigação de controle de acesso, hora marcada e assentos marcados</li><li>&#8226; Assentos e filas respeitando distanciamento mínimo</li><li>&#8226; Proibição de atividades com público em pé</li><li>&#8226; Adoção dos protocolos geral e setorial específico</li></ul>`); 
        $('#ac11').html(`<ul><li><p>&#8226; Não permitido</p></li></ul>`);      
        console.log("oi")
    }

    if(utix <= 60) {
        $('body').css("background-color", "rgb(219, 253, 218)");
        $('.ui-accordion-content').css("height", "fit-content").css('line-height', '40px')
        $('.section2').css("background-color", "#fff");
        $('.section5 h1').append(" Verde");
        $('.section5').css("background-color", "rgb(0, 157, 0, 0.3)");
        $('#aviso-fase p').text('Fase Verde');
        $('.section5 h1').css("color", "#fff");
        $('#aviso-fase').css("background-color", "rgb(10, 182, 0, 0.8)");
        $('#ac1').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac2').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac3').html(`<ul><li>&#8226; Sem restrições.</li></ul>`);
        $('#ac5').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac6').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas): Após as 6h e antes das 22h</li><li>&#8226; Consumo local e atendimento exclusivo para clientes sentados</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac7').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas): Após as 6h e antes das 22h</li><li>&#8226; Consumo local e atendimento exclusivo para clientes sentados</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac8').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac9').html(`<ul><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Adoção dos protocolos geral e setorial específicos</li></ul>`);
        $('#ac10').html(`<ul><li>&#8226; Classificação na fase no período anterior de, pelo menos, 28 dias consecutivos</li><li>&#8226; Capacidade 60% limitada</li><li>&#8226; Horário reduzido (12 horas)</li><li>&#8226; Obrigação de controle de acesso e hora marcada</li><li>&#8226; Filas e espaços com demarcações, respeitando distanciamento mínimo</li><li>&#8226; Adoção dos protocolos geral e setorial específico</li></ul>`); 
        $('#ac11').html(`<ul><li><p>&#8226; Não permitido</p></li></ul>`);      
        console.log("oi")
    }
    }
    
    

    let utix;
    let utiy;

    let enferx;
    let enfery;

    if(localStorage.getItem("uy") != null && !(isNaN(localStorage.getItem("ey"))) && !(isNaN(localStorage.getItem("uy")))) {
        utix = parseInt(localStorage.getItem("uy"));
        enferx= parseInt(localStorage.getItem("ey"));

        utiy = 100 - localStorage.getItem("uy");
        enfery = 100 - parseInt(localStorage.getItem("ey"));

        console.log("ta ai")
        verificaFase();
    } else {
        utix = 80;
        enferx= 70;

        utiy = 20;
        enfery = 30;

        verificaFase();
        console.log("ausente")
    }
    //Better to construct options first and then pass it as a parameter
    var options = {
        animationEnabled: true,  	
        title:{
            text: "Leitos Covid-19 Estado de SP"
        },
        axisY: {
            suffix: "%"
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            reversed: true,
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [
        {
            type: "stackedColumn100",
            name: "Ocupado",
            showInLegend: true,
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { label: "UTI", y: utix},
                { label: "Enfermaria", y: enferx}
    
            ]
        },
        {
            type: "stackedColumn100",
            name: "Livre",
            showInLegend: true,
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { label: "UTI", y: utiy},
                { label: "Enfermaria", y: enfery}
    
            ]
        }
        ]

        
    };

    verificaFase();
    
    $("#chartContainer").CanvasJSChart(options);

    $('.slider1').jdSlider();
    $('.slider2').jdSlider({
        wrap: '.slide-inner',
        isAuto: true,
        isLoop: true
    });
    $('.slider3-2').jdSlider({
        wrap: '.slide-inner',
        slideShow: 2,
        slideToScroll: 1,
        isLoop: true,
        responsive: [{
            viewSize: 768,
            settings: {
                slideShow: 1
            }
        }]
    });

    $('.dialog').dialog({
                 autoOpen: false,
                 width: 600,
                 buttons: {
                 "Ok": function() {
                 $(this).dialog("close");
                 },
                 "Cancel": function() {
                 $(this).dialog("close");
                 }
                 }
             });
          
             // Dialog Link
             $('.dialog_link').dblclick(function(){
                
             $('.dialog').dialog('close');
          
             var id_link = $(this).attr('id');
             var index = id_link.split('_');
          
             $('#txt_'+index[1]).dialog('open');
          
             $('.ui-dialog-title').text("Atualização de Leitos e Enfermaria")
             return false;
          
             });
          
             //hover states on the static widgets
            
          
             $('.ui-button-text').click(() => {
                
                var val = parseInt($('#uti'). val());
                var val2 = parseInt($('#enfermaria'). val())
                console.log(val)
            
                localStorage.setItem("uy", val);
                localStorage.setItem("ey", val2);
            
                document.location.reload(true);
             })
    })
/*window.onload = function */


