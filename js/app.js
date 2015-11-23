var app = {
    maxImages: 4,
    configuredImages: 0,

    changeRoom: function (image) {
        $('.mapper').parent().hide();
        $(image).show();
        $(image).parent().show();

        $('body').css('display', 'none');

        
        $('body').fadeIn(1500, function () {
            $('#hall-transition').pulse({opacity: 0.8}, {duration : 100, pulses : 5});
        });
 

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

    $('#hall-transition2').click(function () {
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
            $('#hall-team').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-team').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-integrity').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-integrity').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-profissionalism').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-profissionalism').bPopup();
            });
        });
    })(jQuery);

     (function ($) {
        $(function () {
            $('#hall-entrepreneurship').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-entrepreneurship').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#hall-recruitment').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-recruitment').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#hall-moda').on('click', function (e) {
                e.preventDefault();
                $('#div-hall-moda').bPopup();
            });
        });
    })(jQuery);


    /* POPUPS NA SALA DE TECNOLOGIA */


    (function ($) {
        $(function () {
            $('#technology-quality').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-quality').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-transparency').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-transparency').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-timelapse').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-timelapse').bPopup({
                    modalClose: true,
                    opacity: 0.6,
                    positionStyle: 'fixed', //'fixed' or 'absolute
                    onClose: function() {
                      var iframe = $('#iframe-timelapse'),
                          iframe_src = iframe.attr('src');

                      iframe.attr('src', '');
                      iframe.attr('src', iframe_src);
                    }

                });
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-results').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-results').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-teamwork').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-teamwork').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-ambition').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-ambition').bPopup();
            });
        });
    })(jQuery);



    (function ($) {
        $(function () {
            $('#technology-services').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-services').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#technology-sleepingbeauties').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-sleepingbeauties').bPopup();
            });
        });
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#technology-water').on('click', function (e) {
                e.preventDefault();
                $('#div-technology-water').bPopup();
            });
        });
    })(jQuery);

    /* POPUPS NA SALA DA INOVAÇÃO */

    (function ($) {
        $(function () {
            $('#innovation-people').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-people').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#innovation-blog').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-blog').bPopup();
            });
        });
    })(jQuery);


    (function ($) {
        $(function () {
            $('#innovation-shiftappens').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-shiftappens').bPopup();
            });
        });
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#innovation-everyoneisateacher').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-everyoneisateacher').bPopup();
            });
        });
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#innovation-walloffame').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-walloffame').bPopup();
            });
        });
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#innovation-teambuilding').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-teambuilding').bPopup();
            });
        });
    })(jQuery);
    



    (function ($) {
        $(function () {
            $('#innovation-praxe').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-praxe').bPopup();
            });
        });
    })(jQuery);
    

    (function ($) {
        $(function () {
            $('#innovation-membersstyle').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-membersstyle').bPopup();
                
            });
        });
         
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#innovation-jekacademy').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-jekacademy').bPopup({
                    modalClose: true,
                    opacity: 0.6,
                    positionStyle: 'fixed', //'fixed' or 'absolute
                    onClose: function() {
                      var iframe = $('#iframe-jekacademy'),
                          iframe_src = iframe.attr('src');

                      iframe.attr('src', '');
                      iframe.attr('src', iframe_src);
                    }

                });
            });
        });
    })(jQuery);
    
    (function ($) {
        $(function () {
            $('#innovation-socialife').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-socialife').bPopup();
            });
        });
    })(jQuery);

    (function ($) {
        $(function () {
            $('#innovation-sjm').on('click', function (e) {
                e.preventDefault();
                $('#div-innovation-sjm').bPopup({
                    modalClose: true,
                    opacity: 0.6,
                    positionStyle: 'fixed', //'fixed' or 'absolute
                    onClose: function() {
                      var iframe = $('#iframe-sjm'),
                          iframe_src = iframe.attr('src');

                      iframe.attr('src', '');
                      iframe.attr('src', iframe_src);
                    }
                });
            });
        });

    })(jQuery);
};

$(document).ready(main);

