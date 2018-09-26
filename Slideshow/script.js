// Slidshow

var indexSlides=1;
var slides;
showSlides(indexSlides);

function showSlides(n){
    slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if(n < 1)
        indexSlides=slides.length;
    if(n > slides.length)
    indexSlides=1;
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexSlides-1].style.display="block";
    dots[indexSlides-1].className += " active";
}

function plusSlides(n){
    showSlides(indexSlides += n);
}
function currentSlide(n){
    showSlides(indexSlides=n);
}

//drop-down menu

function Submenu(number){
    var menu=document.getElementsByClassName("sub");

    var disp = menu[number].style;
    if(disp.display=="none")
    disp.display="block";
    else disp.display = "none";

    for(var i =0;i<menu.length;i++){
        if(i != number)
        menu[i].style.display="none"
    }
    // displ="block";
}

function disableMenu(){
    var li = document.getElementsByClassName("menuElement");
    for (var i=0;i<li.length; i++){
        li[i].style["pointer-events"] = "none";
    }
    
    for (var i = 0; i < slides.length; i++) {
        if(slides[i].style.display != "none"){
            li[i+i].style["pointer-events"] = "auto";
            li[i+i+1].style["pointer-events"] = "auto";
        }
    }
}

disableMenu();

console.log(moment().format('dddd'));