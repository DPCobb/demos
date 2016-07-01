$(document).ready(function(){
    $('h1').on('click', function(){
        window.location = '#/home';
    });
    // ---------- Drop Down ---------- //

   //Function to add hover event
   function addHov(){
       $('.large li').hover(function(e){
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
       $('.mobile li').on('click', function(e) {
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
           $('.mobile li').off();
           $('.large li').off();
           addHov();
       }
       //Under 750px: remove event and call addClick
       else{
           $('.mobile li').off();
           $('.large li').off();
           addClick();
       }
   });
   //Close small Nav if click outside of menu
   $('.mobile a').on('click',function(e){

       //Slide up menu
       $('.mobile ul').slideUp();
   });
   $('main').find('a').on('click', function(e){
       // Stops "discover how you can be a part" click from traveling up DOM to cta event and blocking
       // page direct to join.html
       e.stopPropagation();
   });

});
