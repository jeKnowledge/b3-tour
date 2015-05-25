var main = function(){


    // BOTÃO DO MENU! 
    $('.icon-menu').click(function(){
        $('.menu').animate(
            {left: '0px'},
            200);
            
        $('body').animate(
        {left: '285px'}, 
        200);
    });
    
    $('.icon-close').click(function(){
        $('.menu').animate({left: '-285px'},
        200);
        $('body').animate({left: '0px'},
        200);
    });
    
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
    
    //POP UP DAS DIVS COM TEXTO
    // hides the slickbox as soon as the DOM is ready
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
    
    // DIV JEKNOWLEDGE ACADEMY
    /*
    $('#videotry').click(function(e) {
        e.preventDefault();
        $('#video_container').html('<iframe src="https://player.vimeo.com/video/121174221" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  
    });*/

    /*
    $("#popup2").click(function() {
        var type = $(this).data('type');
        var caption = $(this).data('caption');
        var value = $(this).data('value');
        var content = '';
 
        // Determine type
        if (type == 'vimeo'){
            content = '<h1>' + caption + '</h1><iframe src="//player.vimeo.com/video/121174221' + value + '" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><a class="b-close">Close</a>';
        }
 
        // Trigger overlay
        $('#div0').bPopup({
            modalColor: '#20293A',
            opacity: '0.9',
            onOpen: function() {
                $('#div0').html(content);
        },
            onClose: function() {
                $('#div0').html('');
        }
        });
    });
    */

    /*VIDEO*/
    $('.kappa').hide();
    $('#popup2').click(function() {
        $('.kappa').toggle(400);
        return false;
    }); 




    // ADICIONAR TOOLTIPS!! :D
}  

$(document).ready(main);

 ;(function($) {
        $(function() {
            $('#trybpopup').on('click', function(e) {
                e.preventDefault();
                $('#div2').bPopup();
            });
         });
     })(jQuery);










