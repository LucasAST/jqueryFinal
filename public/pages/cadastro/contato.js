

$(document).ready(function () { 
   

    $('#upper').click(function(){
        $('label').addClass('acssOn');
       
      });
    
      $('#decrease').click(function(){
        $('label').removeClass('acssOn');
      });
        

        /*Validação do Nome */        
       function verificaNome() {
            let nome = $("#nome").val()        
            if ( nome.indexOf(" ") == -1 || nome.length < 3 || nome.includes("  ")) {

              $("#nome").css({ background: "red" });
                alert("Digite o Nome Completo!")
            } else{
                $("#nome").css({ background: "white" });
                return true;
            }
       }

       $("#nome").blur(() =>{        
            verificaNome();

        })
        
        $("#nome").keyup(function (e) {
            let teste = $(e.target).val();
            
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 186 || e.keyCode == 32) {
              $("#resultadoDoInput").text("Digitou numero");
              $(e.target).val(teste);
            } else {
              teste = teste.slice(0, -1);
              $(e.target).val(teste);
            }            
          });

    /*Validação Data de Nascimento (Calendário) */
    $(function () {
        $("#nascimento").datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: "-130y",
            maxDate: 0
        });
    });

    /*Validação do Telefone */
    function verificaTelefone() {
        let rg = /[0-9]/ig;
        let telefone = $("#tel").val();
        if (!telefone.match(rg)) {
            $("#tel").css({ background: "red" });
            alert("Digite Apenas Números!")
        } else if (telefone.length < 11) {
            $("#tel").css({ background: "red" });
            alert("Digite o Número com DDD!")
        } else {
            $("#tel").css({ background: "white" });
            return true;
        }
    }

    $("#tel").blur(function () {
        verificaTelefone();
    })

    /*Validação do Sexo/Gestante */
    function verificaSexo() {
        let opt = sexo.options[sexo.selectedIndex];
        if (opt.value == "Feminino") {
            $("#gestante, #labelGest").removeClass("gestante");
            $("#gestante").addClass("gestanteAlternativa");
            $("#gestante").removeAttr("disabled");
            return true;
        }
        else if (opt.value == "Masculino") {
            $("#gestante, #labelGest").prop("disabled", true)
            $("#gestante, #labelGest").addClass("gestante");
            $("#gestante").removeClass("gestanteAlternativa");
            return true;
        }
        else {
            $("#gestante, #labelGest").prop("disabled", true)
            $("#gestante, #labelGest").addClass("gestante");
            $("#gestante").removeClass("gestanteAlternativa");
            return true;
        }
    }
    $("#sexo").blur(() => {
        
    })

    /*Validação do Profissão (Outros) */
    function verificaProfissao() {
        let opt = profissao.options[profissao.selectedIndex];
        if (opt.value == "Outros") {
            $("#outrosProf, #labelOut").removeClass("outraProf");
            $("#outrosProf").addClass("outraProfAlternativa");
            $("#outrosProf").removeAttr("disabled");
            return true;
        }
        else {
            $("#outrosProf, #labelOut").prop("disabled", true)
            $("#outrosProf, #labelOut").addClass("outraProf");
            $("#outrosProf").removeClass("outraProfAlternativa");
            return true;
        }
    }
    $("#profissao").blur(() => {
        verificaProfissao();
    })

    $("#outrosProf").blur(() => {
        let rg = /[a-z\s]/ig;
        let outraProf = $("#outrosProf").val()
        if (!outraProf.match(rg)) {
            $("#outrosProf").css({ background: "red" });
            alert("Apenas Letras!")
        } if (outraProf.length < 5) {
            $("#outrosProf").css({ background: "red" });
            alert("[ERROR] Tente Novamente!")
        }
    })

    /*Validação do Peso */
    function verificaPeso() {
        let rg = /[0-9]/ig;
        let peso = $("#peso").val();

        if (!peso.match(rg)) {
            $("#peso").css({ background: "red" });
            alert("Digite Apenas Números!")
        } else if (peso.length < 2 || peso < 0) {
            $("#peso").css({ background: "red" });
            alert("[ERROR] Tente Novamente!")
        } else {
            $("#peso").css({ background: "white" });
            return true;
        }
    }

    $("#peso").blur(function () {
        verificaPeso();
    })

    function verificaAltura() {
        let altura = $("#altura").val();
        if(altura < 0) {
            $('#altura').css("background-color", "red");
            alert("[ERROR] Tente Novamente!")
        } else{
            $('#altura').css("background-color", "white");
            return true;
        }
    }

    $('#altura').blur(() => {
        verificaAltura();
    })

     /*Validação e Cálculo do IMC*/
     $("#button").click(function () {   
         console.log("button aper")   
        let peso = $("#peso").val();
        let altura = $("#altura").val();
        const imc = peso / (altura * altura);
        let text =  "Categoria de Comorbidade: "
        let txtNome = "Nome: "
        let txtProf = "Profissão: "
        let txtFase = "Vacinação: "
        let txtIdade = "Idade: "
        let nome = $("#nome").val();        
        let prof = profissao.options[profissao.selectedIndex];
        let comorb= comorbidade.options[comorbidade.selectedIndex];
        let etni= etnia.options[etnia.selectedIndex];
        let nasc = $("#nascimento").val();
        let nascSplit = nasc.split("/")
        idade = 2021 - nascSplit[2] ;
       

        $("#divNome").text( txtNome + nome);
        $("#divProf").text(txtProf + prof.value);
        $("#divIdade").text(txtIdade + idade);

        if (imc < 18.5) {
           $("#divComor").text( text + "Abaixo do Peso Normal!");            
        }
        else if (imc > 18.5 && imc < 25) {
            $("#divComor").text(text + "Normal!");
        }
        else if (imc > 25 && imc < 30) {
            $("#divComor").text(text + " Pré-Obeso.");
        }
        else if (imc > 30 && imc < 35) {
            $("#divComor").text(text + "Obesidade Classe I.");
        }
        else if (imc > 35 && imc < 40) {
            $("#divComor").text(text + "Obesidade Classe II.");
        }
        else {
            $("#divComor").text(text + "Obesidade Classe III.");
        }
        

        /*Validação da Fase */
            if(idade  > 75 || prof.value == "Saúde" || (idade > 18 && comorb.value == "Deficiência Permanente Severa") || (etni.value == "Indígena")){
                $("#divFase").text(txtFase +"Fase I")
            }
            else if(idade > 60 || idade < 75){
                $("#divFase").text(txtFase +"Fase II")
            }
            else if(!comorb.value == "Nenhuma" || imc >= 40 ){
                $("#divFase").text(txtFase +"Fase III")
            }
            else{
                $("#divFase").text(txtFase +"Fase IV")
            }
    })

   function verificaSUS() {
        let rg = /[0-9]/ig;
        let carteirinha = $("#sus").val();
        if (!carteirinha.match(rg)) {
            $("#sus").css({ background: "red" });
            alert("Digite Apenas Números!")
        } else if (carteirinha.length < 15) {
            $("#sus").css({ background: "red" });
            alert("Número Incompleto. Tente Novamente!")
        } else {
            $("#sus").css({ background: "white" });
            return true;
        }
   }

    /*Validação da Carteirinha SUS*/
    $("#sus").blur(function () {
        verificaSUS();
    })

    
    $( function() {
        var progressbar = $( "#progressbar" ),
          progressLabel = $( ".progress-label" );
     
        progressbar.progressbar({
          value: false,
          change: function() {
            progressLabel.text( progressbar.progressbar( "value" ) + "%" );
          },
          complete: function() {
            progressLabel.text( "Completo!" );
            some();
          }
        });
     
        function some() {
            $("#progressbar").fadeOut(2000, function() {
                aparece();
            });
        }

        function aparece() {
            $('#button').fadeIn(2000);
        }

        function progress() {
          var val = progressbar.progressbar( "value" ) || 0;
     
          progressbar.progressbar( "value", val + 2 );
     
         /* if ( val < 99 ) {
            setTimeout( progress, 80 );
          }*/
        }

        let sus = 0;
        let peso = 0;
        $('#sus').blur(() =>{
            
            if(verificaSUS() == true && sus == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                sus++;
            }
        })

        $('#peso').blur(() =>{
            
            if(verificaPeso() == true && peso == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                peso++;
            }
        })

        let prof = 0;
        $('#profissao').blur(() =>{
            
            if(verificaProfissao() == true && prof == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                prof++;
            }
        })

        let sexo = 0;
        $('#sexo').blur(() => {
            if(verificaSexo() == true && sexo == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                sexo++; 
            }
        })

        let tel = 0;
        $('#tel').blur(() => {
            if(verificaTelefone() == true && tel == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                tel++; 
            }
        })

        let cpf = 0;
        $('#cpf').blur(() => {
            if(VerificaCPF() == true && cpf == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                cpf++; 
            }
        })

        let nome = 0;
        $('#nome').blur(() => {
            if(verificaNome() == true && nome == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                nome++; 
            }
        })

        let nascimento = 0;
        $('#nascimento').blur(() => {
            if(nascimento == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                nascimento++; 
            }
        })
        
        let altura = 0;
        $('#altura').blur(() => {
            if(altura == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                altura++; 
            }
        })

        let comorbidade = 0;
        $('#comorbidade').blur(() => {
            if(comorbidade == 0) {
                var val = progressbar.progressbar( "value" );
                progressbar.progressbar( "value", val + 10 ); 
                comorbidade++; 
            }
        })
               
      } );
   
   $('#button').hide();

}) //ready


/*Validação do CPF */

$("#cpf").keyup(function (e) {
    let teste = $(e.target).val();
    
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >=96 && e.keyCode <= 105) {
      $("#resultadoDoInput").text("Digitou numero");
      $(e.target).val(teste);
    } else {
      teste = teste.slice(0, -1);
      $(e.target).val(teste);
    }            
  });
function VerificaCPF() {

    strCpf = document.getElementById('cpf').value;
    /* if (isNaN(parseInt(strCpf))) {
         alert("Apenas Números!")
     }*/
    var soma = 0;
    var resto;

    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("CPF Válido");
        return false;
    }
    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        return false;
    }
    return true;
}





/*Inicio da Caixa de Texto*/
/*function capturando() {
    var nome = window.document.getElementById("nome").value;
    var email = window.document.getElementById("email").value;
    var sexo = window.document.getElementById("sexo").value;
    var cpf = window.document.getElementById("cpf").value;
    var mes = window.document.getElementById("mes").value;

    var idade = window.document.getElementById("ano").value;
    var resIdade = 2021 - parseInt(idade)
    if (mes > 3) {
        resIdade--
    } else {
        resIdade = resIdade;
    }

    var frase = window.document.getElementById("frase");

    frase.innerHTML = `Nome:  <strong>${nome.toUpperCase()}</strong> <br/> seu login é <strong>${email}</strong>, você tem <strong>${resIdade}</strong>
    anos de idade, se define como uma pessoa  do sexo <strong>${sexo}</strong> e pode usar <strong>${cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")} </strong > como senha.`

}*/



