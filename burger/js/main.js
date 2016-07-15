/*window.onload = function(){
    if(Modernizr.canvas){
        var canvas = document.getElementById("cta");
    	var ctx = canvas.getContext("2d");
        ctx.font = "12pt Arial Black";
        ctx.fillStyle="black";
        ctx.fillText("The Flying Burger", 100, 100);
    }
    else{

    }
}*/

$(document).ready(function(){
    $('#logo').fadeIn(2000);
    //$('ul').fadeIn(5000);
    $('#test').animate({
        left: "+=150%",
    }, 9000);
    $('#test3').animate({
        left: "+=90%",
    }, 6000);
    $('#test2').animate({
        left: "-500px",
    }, 10000);
})
