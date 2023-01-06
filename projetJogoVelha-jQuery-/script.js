var vez = 'o';//variável da vez(posteriormente vou randomizar isso aqui)
function atualizarPlacar(){//função placar para indicar quem começa ou de quem é a vez
    if(vez == 'o'){//condição"bolinha"
        $('.placar img').attr('src','bolinha.png');
    }else{//condição "xizinho"
        $('.placar img').attr('src','xizinho.png');
    }
};
function verificarcampeao(){
    //captura o valor atribuido ao data-marcado; 'o' ou 'x';
    var a1 = $('.a1').attr('data-marcado');
    var a2 = $('.a2').attr('data-marcado');
    var a3 = $('.a3').attr('data-marcado');

    var b1 = $('.b1').attr('data-marcado');
    var b2 = $('.b2').attr('data-marcado');
    var b3 = $('.b3').attr('data-marcado');

    var c1 = $('.c1').attr('data-marcado');
    var c2 = $('.c2').attr('data-marcado');
    var c3 = $('.c3').attr('data-marcado');

    var ganhador ='';
    //padrões a serem verificados vertical,horizontal e diagonal;

    for(var i = 0; i<=1;i++){//loop para verifiar as áreas combinadas se tem 'x'ou 'o';

        if(i==0){// aqui ele aplica a vez de verificação, o loop começa em 0(zero) ou seja primeiro verificará o 'o', depois o loop roda como 1(um) ai veirfica se é 'x';
            var op = 'o';
        }else{
            var op = 'x';
        }

        //agora irá comparar se o op(operador) é igual a atribuição do data marcado, pelo localizador da área;

        //começando pelas verticais
        if(a1 == op && b1 == op && c1 ==op){
            ganhador = op;
        }
        else if(a2 == op && b2 == op && c2 ==op){
            ganhador = op;
        }
        else if(a3 == op && b3 == op && c3 == op){
            ganhador = op;
        }
        //agora as horizontais
        else if(a1 == op && a2 == op && a3 == op){
            ganhador = op;
        }
        else if(b1 == op && b2 == op && b3 == op){
            ganhador = op;
        }
        else if(c1 == op && c2 == op && c3 == op){
            ganhador = op;
        }
        //e por ultimo as diagonais
        else if(a1 == op && b2 == op && c3 == op){
            ganhador = op;
        }
        else if(c1 == op && b2 == op && a3 == op ){
            ganhador = op;
        }
    }
    if(ganhador != ''){
        //resolvi tentar com operador ternário; só pela experiência mesmo;
        ganhador == 'o'?alert("O GANHADOR FOI: O"):alert("O GANHADOR FOI: X");        

        $('.area').html('');
        $('.area').attr('data-marcado','');

    }else if(a1!='' && a2!='' && a3!='' && b1!='' && b2!='' && b3!='' && c1!='' && c2!='' && c3!=''){ //verificando se todas as áreas estão vazias, e gerar a condição de empate;

        alert("EMPATE!")

        $('.area').html('');
        $('.area').attr('data-marcado','');
    }

}
$(function(){

    atualizarPlacar();

    $('.area').on('click',function(){

        if($(this).find('img').length==0){ //verificar se a área já está marcada para habilitar a ação de jogar;

            if(vez == 'o'){
                $(this).html('<img src="bolinha.png" border="0" height="50" alt=""></img>');

                $(this).attr('data-marcado','o');//atribuidor de identificação;
                vez='x';
                
            }else{
                $(this).html('<img src="xizinho.png" border="0" height="50" alt=""></img>');

                $(this).attr('data-marcado','x');//atribuidor de identificação;
                vez='o';
            }
            atualizarPlacar();//enviar a atulização da vez para a função atualizarPlacar();

            verificarcampeao();
            
        }
    });

});