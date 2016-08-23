/*
Daniel Cobb
4-13-2016
Project 2
*/


$(document).ready(function(){

// ---------- MODAL FUNCTIONS ---------- //

    // Set the Modal To open on click
    $('.modalOpen').on('click', function(e){
        e.preventDefault();
        $('#overlay').fadeIn().find('#modal').fadeIn();
    });

    // Close Modal when clicking 'X' or overlay div
    $('.close, #overlay').on('click',function(e){
        e.preventDefault();
        $('#overlay').fadeOut().find('#modal').fadeOut();
    });

    //Prevents closing of modal when clicking within modal div, stops click from travelling up DOM to overlay div
    $('#modal').on('click', function(e){
        e.stopPropagation();
    });

// ---------- Drop Down ---------- //

    //Function to add hover event
    function addHov(){
        $('.navbar li').hover(function(e){
            //Fade in the children of hover li element
            $(this).children('ul').fadeIn();},
            function(){
                //This stops the menu from adding too many hover events in the queue if someone hovers on/off rapidly
                $('ul',this).stop(true,true).fadeOut();
        });
    }

    //Function to add Click event
    function addClick(){
        //Add click event to smallNav, which replaces the main nav on screens less than 750px
        $('#smallNav li').on('click', function(e) {
            //Use stopPropagation to prevent click from traveling up the DOM and closing entire menu
            e.stopPropagation();
            //Slide toggle children of li item
            $(this).children('ul').slideToggle('slow');
        });
    }

    // Check initial window width and add event handler for Nav
    if($(window).width()>750){
        addHov();
    }
    else{
        addClick();
    }

    // Check window width on resize,remove previous events, and add new event
    $(window).resize(function(e) {
        //Window greater than 750px: remove event and call addHov
        if($(window).width() > 750){
            $('.navbar li').off();
            addHov();
        }
        //Under 750px: remove event and call addClick
        else{
            $('.navbar li').off();
            addClick();
        }
    });
    //Close small Nav if click outside of menu
    $('.cta, .container').on('click',function(e){
        e.preventDefault();
        //Slide up menu
        $('.small ul').slideUp();
    });

// ---------- Tooltip ---------- //

    $('.masterTooltip').hover(function(){
        // Sets var to get title value
        var title = $(this).attr('title');
        // Adds data-tipText = title to hovered item and removes title attribute
        $(this).data('tipText', title).removeAttr('title');
        // Append title to tooltip body and fadein
        $('<p class="tooltip"></p>').text(title).appendTo('body').delay('2000').fadeIn('slow');
    }, function() {
        // Re apply title attribute
        $(this).attr('title', $(this).data('tipText'));
        // Remove tooltip
        $('.tooltip').remove();
        //Set position from mouse pointer for tooltip
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip').css({ top: mousey, left: mousex })
    });

// ---------- Value Image Toggle ---------- //

    $('.valueImg').on('click', function(e){
        e.preventDefault();
        // Gets the data-info value and sets to var
        var div = $(this).attr('data-info');
        $('.valueInfo').each(function(){
            // Hides all divs in the Value Info section and then opens the one with an id matching the div var
            $(this).hide();
            if($(this).attr('id') == div) {
                $(this).slideToggle('slow');
            }
        });
    });

// ---------- Tabs ---------- //
    //Hides the tab divs and shows the first tab
    $('#tabs div').hide().eq(0).show();
    //Tab nav event
    $('.tabsNav li').click(function(e){
        e.preventDefault();
        //Hides all tabs
        $('#tabs div').hide();
        //Removes the class current from the previously displayed nav tab
        $('.tabsNav .current').removeClass('current');
        //Adds current to nav item that was clicked
        $(this).addClass('current');
        //Assigns the first link from tab nav to var active
        var active = $(this).find('a:first').attr('href');
        //Fades In the selected tab
        $('#tabs '+active).fadeIn('fast');
        //Adds the class current to link
        $(this).find('a:first').addClass('current');
    }).eq(0).addClass('current');

// ---------- Image Slider ---------- //
    // Set needed variables
    var currentIndex = 0, imgs = $('.imgList li').find('img'), totImg = imgs.length;
    // Shows image with class .activeImg
    $('.activeImg').show();

    //Function to Change displayed image
    function changeImg(){
        //Set currentImg to <img>[currentIndex]
        var currentImg = imgs.eq(currentIndex);
        //Hide all Images
        imgs.hide();
        //Display currentImg
        currentImg.css('display', 'inline-block');
    }
    //Event for Next Arrow
    $('.next').on('click', function(){
        //Set currentIndex to currentIndex +1
        currentIndex +=1;
        //If index is greater than totImg set index to 0
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        //Call changeImg
        changeImg()
    });
    //Event for Previous Arrow
    $('.prev').on('click',function() {
        //Set currentIndex to currentIndex -1
        currentIndex -= 1;
        //If index is less than 0 set index to totImg - 1
        if (currentIndex < 0) {
            currentIndex = totImg - 1;
        }
        //Call changeImg
        changeImg();
    });
});
