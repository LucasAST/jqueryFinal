$(document).ready(function(){ 
  $('#upper').click(function(){
    $('body, .txtParticipe').addClass('acssOn');
   
    
  });

  $('#decrease').click(function(){
    $('body, .txtParticipe').removeClass('acssOn');
    
    
  });
    /* função jquery usando SlideToggle */ 
    $('.txtProjetos').css('display', 'none');
    $('#saibaMais').click(function(){
        $('.txtProjetos').slideToggle('slow');  /* uso do slideToggle */ 
    }) /* fim de slideToggle */ 
   
    /* função de animação na página */ 
    function animeScroll(){ 
        var tela = $(window).height() * 3/4;
        var disTopoScroll = $(document).scrollTop(); /* ultilização do scroll */ 
        console.log(disTopoScroll);
        $('.anime_inicial').each(function(){ 
            itemTopo = $(this).offset().top
            console.log(itemTopo); 
            if(disTopoScroll > itemTopo - tela){ 
                $(this).addClass('anime_final');
            } else { 
                $(this).removeClass('anime_final'); 
            }
        })
    }

    animeScroll(); 
    $(window).scroll(function(){
        animeScroll();
    })

    /* fim de animação da página */ 

/* carrossel */ 
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});
    
/*     */ 

}) 
