$(function(){

    // $('a.galeria').on('click',function(){
    //     var img = $(this).find('img').attr('src');
    //     // console.log(img);
    //     $('.divBox .img').attr('src',img);

    //     $('.bgBox, .divBox').fadeIn('fast')

    // });

    // $('.bgBox, .divBox button').on('click',function(){
    //     $('.bgBox, .divBox').fadeOut('fast')
    // })

    $('a.galeria').on('click',function(){
        let imgSrc =$(this).find('img').attr('src');
        //limpa os styles 
        $('.divBox').removeAttr('style');
        $('.divBox img').removeAttr('style');
                
        /*
            Paisagem -> largura maior que a altura
            Retrato -> altura maior que largura
        */

        $('.bgBox, .divBox').fadeIn('fast');
        $('.divBox img').attr('src',imgSrc);       

        //tamanho real da imagem antes do width: 100% ou height: 100%
        let widthImg = $('.divBox img').width();
        let heightImg = $('.divBox img').height();
        //tamanho da divBox conforme a imagem (foto/paisagem) e após width:100% ou height:100% 
        let heightBox;
        let widthtBox;
        //Verifica se é foto ou paisagem
        if( widthImg/heightImg >= 1 ){//paisagem
            $('.divBox img').css('width','100%');
            heightBox = $('.divBox img').height();//altura da imagem após width:100%
            widthtBox = $('#imagem').width();//largura da imagem após width:100%
            if(heightBox < 400){
                $('.divBox').css('height',heightBox);
            }
        }else{//retrato
            $('.divBox img').css('height','100%');
            heightBox = $('.divBox img').height();//altura da imagem após height:100%
            widthtBox = $('.divBox img').width();//largura da imagem após height:100%
            if(widthtBox < 500){
                $('.divBox').css('width',widthtBox);
            }
        }
        //reposicina a imagem bo centro da tela
        $('.divBox').css('transform','translate(-50%,-50%)');
        //deixa o botão dentro da div
        $('.divBox').css('padding-bottom',30);
    });
    
    $('.bgbox, .divBox button').on('click',function(){
        $('.bgbox, .divBox').fadeOut('fast');
     })

});