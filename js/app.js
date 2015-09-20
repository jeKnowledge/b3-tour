var main = function(){
    
    //HIGHLIGHT E RESIZE DAS COORDENADAS
    $('#myimage').mapster({
        singleSelect: true,
        fill : true,
        fillOpacity : 0.6,
        fillColor: '008FC5',
        stroke: true,
        strokeColor: '000000',
        strokeOpacity: 1,
        strokeWidth: 2,
        onMouseover: function(e) {
            $(this).mapster('set',false).mapster('set',true);
        },
        onMouseout: function(e) { 
            $(this).mapster('set',false);
        }
    });

    $("body").css("display", "none");

    $("body").fadeIn(2000);
    
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
        
    function redirectPage() {
        window.location = linkLocation;
    }


(function ($) {

    $.fn.photoResize = function (options) {

        var element = $(this), 
            defaults = {
                bottomSpacing: 10
            };
        
        $(element).load(function () {
            updatePhotoHeight();

            $(window).bind('resize', function () {
                updatePhotoHeight();
            });
        });

        options = $.extend(defaults, options);

        function updatePhotoHeight() {
            var o = options, 
                photoHeight = $(window).height();

            $(element).attr('height', photoHeight - o.bottomSpacing);
        }
    };

}(jQuery));
}  


$(document).ready(main);

$(document).ready(function() {
            $("img").photoResize({
                bottomSpacing: 0
            });
        });

    
    //POP UP DAS DIVS COM TEXTO

    /*
    //Hide the div
    $('#div1').hide();

    // shows the slickbox on clicking the noted link  
    $('#slick-show').click(function() {
        $('#div1').show('slow');
        return false;
    });

    // hides the slickbox on clicking the noted link  
    $('#slick-hide').click(function() {
        $('#div1').hide('fast');
        return false;
    });

     
    // toggles the slickbox on clicking the noted link  
    $('#slick-toggle').click(function() {
        $('#div1').toggle(400);
        return false;
    });           
    */
    

    /*VIDEO JEKNOWLEDGE ACADEMY*/
    /*
    $('.jekacademy').hide();
    $('#popup2').click(function() {
        $('.jekacademy').toggle(400);
        return false;
    });

    

    $('.sjm').hide();

    $('#sjmpopup').click(function(){
        $('.sjm').toggle(400);
        return false;
    });

    $('#shfta').click(function(){
        $('#div3').toggle(400);
        return false;
    });*/





    // ADICIONAR TOOLTIPS!! :D


    ;(function($) {
            $(function() {
                $('#popupdiv1').on('click', function(e) {
                    e.preventDefault();
                    $('#div1').bPopup();
                });
             });
         })(jQuery);


    
    ;(function($) {
            $(function() {
                $('#popupdiv2').on('click', function(e) {
                    e.preventDefault();
                    $('#div2').bPopup();
                });
             });
         })(jQuery);



    ;(function($) {
            $(function() {
                $('#popupdiv3').on('click', function(e) {
                    e.preventDefault();
                    $('#div3').bPopup();
                });
             });
         })(jQuery);



    ;(function($) {
            $(function() {
                $('#popupdiv4').on('click', function(e) {
                    e.preventDefault();
                    $('#div4').bPopup();
                });
             });
         })(jQuery);

    ;(function($) {
            $(function() {
                $('#popupdiv5').on('click', function(e) {
                    e.preventDefault();
                    $('#div5').bPopup();
             });
            });

         })(jQuery);



















