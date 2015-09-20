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

 
    // ADICIONAR TOOLTIPS!! :D




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
