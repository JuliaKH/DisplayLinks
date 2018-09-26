function Button(id){
    document.getElementById('n1').value+=document.getElementById('but_'+id).value;
}
function Light(id){
    var menu = document.getElementById('but_'+id);
    var rand= Math.floor(Math.random() * (4 - 1) ) + 1;
        // menu.style.color = '#fff';
        switch(rand){
            case 1:
            menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px dodgerblue, 0px 0px 30px dodgerblue, 0px 0px 40px dodgerblue, 0px 0px 55px blue, 0px 0px 75px dodgerblue";
            menu.style.color = '#fff';
            break;
            case 2:
            menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #ff0080, 0px 0px 30px #ff0080, 0px 0px 40px #ff0080, 0px 0px 55px #ff0080, 0px 0px 75px #ff0080";
            menu.style.color = '#fff';
            break;
            case 3:
            menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #5bf700, 0px 0px 30px #5bf700, 0px 0px 40px #5bf700, 0px 0px 55px #5bf700, 0px 0px 75px #5bf700";
            menu.style.color = '#fff';
            break;
            case 4:
            menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #f0fc00, 0px 0px 30px #f0fc00, 0px 0px 40px #f0fc00, 0px 0px 55px #f0fc00, 0px 0px 75px #f0fc00";
            menu.style.color = '#fff';
            break;
        }
        
}
function Nohover(id){
    var menu = document.getElementById('but_'+id);
            menu.style.color = 'black';
            menu.style.boxShadow='0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em rgb(52, 0, 136)';

}
function LightCmp(){
    var menu = document.getElementById('cmp');
    // return randomInteger(1,4);
    var rand= Math.floor(Math.random() * (4 - 1) ) + 1;
    // menu.style.color = '#fff';
    switch(rand){
        case 1:
        menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px dodgerblue, 0px 0px 30px dodgerblue, 0px 0px 40px dodgerblue, 0px 0px 55px blue, 0px 0px 75px dodgerblue";
        break;
        case 2:
        menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #ff0080, 0px 0px 30px #ff0080, 0px 0px 40px #ff0080, 0px 0px 55px #ff0080, 0px 0px 75px #ff0080";
        break;
        case 3:
        menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #5bf700, 0px 0px 30px #5bf700, 0px 0px 40px #5bf700, 0px 0px 55px #5bf700, 0px 0px 75px #5bf700";
        break;
        case 4:
        menu.style.boxShadow=" 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 20px #f0fc00, 0px 0px 30px #f0fc00, 0px 0px 40px #f0fc00, 0px 0px 55px #f0fc00, 0px 0px 75px #f0fc00";
        break;
    }
}
function NohoverCmp(){
    var menu = document.getElementById('cmp');
    menu.style.color = 'white';
    menu.style.background='dodgerblue';
    menu.style.boxShadow='0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em rgb(52, 0, 136)';
}