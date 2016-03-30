$(document).ready(function(){
    $('#butnotforme-img').click(function(){
        $('#butnotforme').slideToggle(function(){
            if ($('#goldendream').is(':hidden')){
                $('html, body').animate({
                        scrollTop: $('#butnotforme').offset().top-300
                    }, 1000);
            }
            else{
                $('#goldendream').hide()
                $('#butnotforme').show()
            }
        })
    });
    $('#goldendream-img').click(function(){
        $('#goldendream').slideToggle(function(){
            if ($('#butnotforme').is(':hidden')){
                $('html, body').animate({
                        scrollTop: $('#goldendream').offset().top-300
                    }, 1000);
            }
            else{
                $('#butnotforme').hide()
                $('#goldendream').show()
            }
        })
    });
})
