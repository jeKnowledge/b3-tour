var app = {
    changeRoom: function (image) {
        $('.mapper').hide();
        $('.mapper-wrapper').hide();
        $(image).show();
        $(image).parent().show();

        // HIGHLIGHT E RESIZE DAS COORDENADAS
        $(image).mapster({
            singleSelect: true,
            fill: true,
            fillOpacity: 0.6,
            fillColor: '008FC5',
            stroke: true,
            strokeColor: '000000',
            strokeOpacity: 1,
            strokeWidth: 2,

            onMouseover: function (e) {
                $(this).mapster('set', false).mapster('set', true);
            },

            onMouseout: function (e) {
                $(this).mapster('set', false);
            }
        });

        $(image).mapster('resize', 0, $(window).height(), 0);

        $(window).bind('resize', function () {
            $(image).mapster('resize', 0, $(window).height(), 0);
        });
    }
};

var main = function () {
    app.changeRoom($('#myimage'));

    $('#popupdiv1entrance').click(function() {
        app.changeRoom($('#myimagehall'));
    });
    
    $('#popupdiv2hall').click(function() {
        app.changeRoom($('#myimage123'));
    });

    $('#mapster_wrap_0').css({
        'margin-left': 'auto',
        'margin-right': 'auto'
    });

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    /* FUNÇÕES DE POPUP */
    (function ($) {
        $(function () {
            $('#popupdiv1').on('click', function (e) {
                e.preventDefault();
                $('#div1').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#popupdiv2').on('click', function (e) {
                e.preventDefault();
                $('#div2').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#popupdiv3').on('click', function (e) {
                e.preventDefault();
                $('#div3').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#popupdiv4').on('click', function (e) {
                e.preventDefault();
                $('#div4').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#popupdiv5').on('click', function (e) {
                e.preventDefault();
                $('#div5').bPopup();
            });
        });

    })(jQuery);
};

$(document).ready(main);