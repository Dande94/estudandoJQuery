$(function(){
    $('#senha').on('keyup',function(){
        var txt = $(this).val();//aqui captura o valor setado n input

        // if(e.keyCode==8){
        //     $('#senha').trigger('keyup');
        // }

        // $('#forca').html(txt);//aqui o valor de txt é anexado a div#forca;
        var forca =0;
        
        //tem que ter min de digitos(6)
            if(txt.length > 6){//se txt tiver mais que 6 digitos some 25 a forca
                forca+=25;
            }
        //tem que ter min de digitos(6)
        //
        //tem que ter letras
            var reg =  new RegExp(/[a-z]/i);//expressão regular que procura por letras e a letra 'i' para ser case insensitive(maiusculas e minusculas são a a mesma coisa);

            if(reg.test(txt)){//aqui será testado pra ser há letras no texto;
                forca+=25;
            }

        //tem que ter letras
        //
        //tem que ter numeros
            var reg =  new RegExp(/[0-9]/);

            if(reg.test(txt)){//aqui será testado pra ser há numeros no texto;
                forca+=25;
            }
        //tem que ter numeros
        //
        //tem que ter caracteres especiais
            var reg =  new RegExp(/[^a-z0-9]/i);// o simbolo '^' exclui a condição posterior, nesse caso é valido todos os caracteres que não sejam de 'a até z' ou '0 até 9';

            if(reg.test(txt)){//aqui será testado pra ser caracteres especiais no texto;
                forca+=25;
        }
        //tem que ter caracteres especiais
        //
        //aceitabilidade da senha
        if(forca >=75){
            var aceita =  "ACEITA";
        }else{
            var aceita =  "NÃO ACEITA";
        }
        //aceitabilidade da senha
        //
        //barra de intensidade da senha
        if(forca == 0 || forca >=0 && forca <=25){
            $('#intesidadeSenha').css('background-color','red')
        }else if(forca>25 && forca<=50){
            $('#intesidadeSenha').css('background-color','')
            $('#intesidadeSenha').css('transition','0.7')
            $('#intesidadeSenha').css('background-image','linear-gradient(to right, red , orange)')
        }else if(forca>50 && forca<=75){
            $('#intesidadeSenha').css('transition','0.7')
            $('#intesidadeSenha').css('background-image','linear-gradient(to right, red, orange, yellow)')
        }else if(forca>75 && forca<=100){
            $('#intesidadeSenha').css('transition','0.7')
            $('#intesidadeSenha').css('background-image','linear-gradient(to right, red, orange, yellow, green)')
        }
        //barra de intensidade da senha
        //
        //ver senha
        $('#verSenha').on('mousedown',function(){
            $('#senha').attr('type','text')
        })
        $('#verSenha').on('mouseup',function(){
            $('#senha').attr('type','password')
        })
        //ver senha
        
        $('#forca').html('Força: '+forca+' '+aceita);
    })
});
