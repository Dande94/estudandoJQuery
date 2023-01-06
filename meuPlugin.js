(function($){//abertura de construção de plugin

    $.fn.mostrarLinkReal=function(){//criando a funcionalidade(plugin)
        //o this irá acessar o elemento que foi setado lá no aruivo de aplicação nesse caso a tag <a> ;
        this.each(function(){//o each fará com que ele aplique essa função em cada um dos elemento;
            var link = $(this).attr('href');
            $(this).append('('+link+')');// o append irá aplicar o link no final do elemento como uma extensão, a var link foi colocada dentro de dois parenteses(()) o de fora é parametro pro append e o de dentro é o texto a ser aplicado com o conteudo da variável link;
        });
        return this;
    };


}(jQuery))//fechamento de construção de plugin

(function($){

   $.fn.mudarCor = function(cor){//pega a cor setada lá no arquivo de aplicação de jQuery
    this.each(function(){
        //parametro 'cor' pega a cor como refencia pra lançar na página;
        $(this).css('color',cor).css('text-decoration','none');// é possível anexar comando na mesma linha ou começar um novo um em baixo do outro
        $(this).css('text-decoration','none');// aqui é o mesmo comando que estava na mesma linha do comando anterior(apenas exemplificando);

        $(this).hover(function(){//hover anexa função mouseover e mouseout em uma função só
            $(this).css('background-color','#F00');//1º parametro mouseover
        },function(){
            $(this).css('background-color','#FFF');//2º parametro mouseout
        })
    });
    return this;//para retorna o próprio objeto;
   }


}(jQuery))