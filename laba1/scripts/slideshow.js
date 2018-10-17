var backgrd = ['linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("img/books.jpg")',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("img/teacher.jpg")',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("img/back.png")'];
var i = 0;
var header = document.getElementsByTagName('header')[0];
console.log(backgrd.length);
carousel();

function carousel() {
    header.style.backgroundImage = backgrd[i];
    i++;
    if (i >= backgrd.length)
        i = 0;
    setTimeout(carousel, 4000); // Change image every 4 seconds
    //console.log(i);
}