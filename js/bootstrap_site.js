$(function() {
    // Setup variables
    $window = $(window);
    $slide = $('.page');
    $slideMentira = $('.page-mentira');
    $slideVerdade = $('.page-verdade');
    $body = $('body');
    adjustWindow();
    function adjustWindow(){

        winH = $window.height();
        /*if(winH <= 850) {
            winH = 850;
        }*/

        // Resize our slides
        $slideVerdade.height(winH);
        $slideMentira.height(winH-(winH*0.15));

    }


     // The default axis is 'y', but in this demo, I want to scroll both
    // You can modify any default like this
    $.localScroll.defaults.axis = 'y';

    // Scroll initially if there's a hash (#something) in the url 
    $.localScroll.hash({
        target: 'body', // Could be a selector or a jQuery object too.
        queue:true,
        duration:400
    });

    /**
     * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
     * also affect the >> and << links. I want every link in the page to scroll.
     */
     $('.navegacao, .pula').localScroll({
        target: 'body', // could be a selector or a jQuery object too.
        queue:true,
        duration:400,
        hash:true,
        //filter: {'.panel-group'},
        onBefore:function( e, anchor, $target ){
            // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
            // The 'this' contains the scrolled element (#content)
        }
    });

});