var app = {
    maxImages: 4,
    configuredImages: 0,

    changeRoom: function (image) {
        $('.mapper').parent().hide();
        $(image).show();
        $(image).parent().show();

        // HIGHLIGHT E RESIZE DAS COORDENADAS

        console.log($(image).parent());

        $(image).mapster('resize', 0, $(window).height(), 0);

        $(window).bind('resize', function () {
            $(image).mapster('resize', 0, $(window).height(), 0);
        });
    }
};

var main = function () {
    $('.mapper').mapster({
        singleSelect: true,
        fill: true,
        fillOpacity: 0.6,
        fillColor: '008FC5',
        stroke: true,
        strokeColor: '000000',
        strokeOpacity: 1,
        strokeWidth: 2,
        wrapClass: 'mapster-wrapper',

        onMouseover: function (e) {
            $(this).mapster('set', false).mapster('set', true);
        },

        onMouseout: function (e) {
            $(this).mapster('set', false);
        },

        onConfigured: function (e) {
            app.configuredImages++;

            if (app.configuredImages == app.maxImages) {
                app.changeRoom($('#myimage'));
            }

            $(this).parent().hide();
        }
    });

    $('#popupdiv1entrance').click(function () {
        app.changeRoom($('#myimagehall'));
    });

    $('#popupdiv2hall').click(function () {
        app.changeRoom($('#myimage123'));
    });


    $('#popupdiv1hall').click(function () {
        app.changeRoom($('#myimagetec'));
    });

    $('#popupdiv1tec').click(function () {
        app.changeRoom($('#myimagehall'));
    });


    $('#popupdiv1ino').click(function () {
        app.changeRoom($('#myimagehall'));
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