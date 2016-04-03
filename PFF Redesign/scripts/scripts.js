$(document).ready(function(){
    $('#butnotforme-img').click(function(){
        $('#butnotforme').slideToggle(function(){
            if ($('#goldendream').is(':hidden')){
                $('html, body').animate({
                        scrollTop: $('#butnotforme').offset().top-200
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
                        scrollTop: $('#goldendream').offset().top-200
                    }, 1000);
            }
            else{
                $('#butnotforme').hide()
                $('#goldendream').show()
            }
        })
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{enabled:true}
    });
    $('.paramount').magnificPopup({
        items: {
            src: '<div class="white-popup">Location Specific Sched. and Info Shown here. With Link to full info page.</div>',
            type: 'inline'
        },
        closeBtnInside: true
    });
    $('.field').magnificPopup({
        items: {
            src: '<div class="white-popup">Location Specific Sched. and Info Shown here. With Link to full info page.</div>',
            type: 'inline'
        },
        closeBtnInside: true
    });
    $('.hvcca').magnificPopup({
        items: {
            src: '<div class="white-popup">Location Specific Sched. and Info Shown here. With Link to full info page.</div>',
            type: 'inline'
        },
        closeBtnInside: true
    });
})
