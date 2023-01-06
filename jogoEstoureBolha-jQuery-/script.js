function addBola(){
    var x = Math.floor(Math.random()*1000);
    var y = Math.floor(Math.random()*600);
    var cor = Math.floor(Math.random()*5)
    //duas maneiras de criar elementos com jQuery
    // $('<div class="bola"></div>').appendTo(document.body); //maneira 1;

    var bola= $('<div class="bola"></div>');
    bola.css('left', x+'px');
    bola.css('top', y+'px');

    switch(cor){
        case 0:
            bola.css('background-color','blue');
            break;
        case 1:
            bola.css('background-color','red');
            break;
        case 2:
            bola.css('background-color','green');
            break;
        case 3:
            bola.css('background-color','yellow');
            break;
        case 4:
            bola.css('background-color','purple');
            break;
        case 5:
            bola.css('background-color','black');
            break;
    }


    bola.on('click',function(){
        $(this).fadeOut();
        placar++;
        updatePlacar();
    })

    $(document.body).append(bola); //maneira 2;

}

function updatePlacar(){
    $('#placar').html(placar);
}

var placar = 0;


$(function(){

    $('#play').on('click',function(){
        setInterval(addBola,1000);
    })


});
