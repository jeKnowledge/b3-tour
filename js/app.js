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

//ADICIONAR FADES!
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
                app.changeRoom($('#jek-entrance'));
            }

            $(this).parent().hide();
        }
    });

    $('#hall-transition').click(function () {
        app.changeRoom($('#jek-hall'));
    });

    $('#innovation-transition').click(function () {
        app.changeRoom($('#jek-innovation'));
    });


    $('#technology-transition').click(function () {
        app.changeRoom($('#jek-technology'));
    });

    $('#popupdiv1tec').click(function () {
        app.changeRoom($('#jek-hall'));
    });


    $('#popupdiv1ino').click(function () {
        app.changeRoom($('#jek-hall'));
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

    /* POPUP NA ENTRADA */

    (function ($) {
        $(function () {
            $('#entrance-sign').on('click', function (e) {
                e.preventDefault();
                $('#div-entrance-info').bPopup();
            });
        });
    })(jQuery);

    /* POPUPS NO HALL */

    (function ($) {
        $(function () {
            $('#hall-contacts').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-contacts').bPopup();
            });
        });
    })(jQuery);

     (function ($) {
        $(function () {
            $('#hall-partners').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-partners').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-philosophy').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-philosophy').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-journey').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-journey').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-criativity').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-criativity').bPopup();
            });
        });
    })(jQuery);















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