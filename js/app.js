var app = {
    currentRoomImage: 'images/door.jpg',


    changeRoom: function (newRoom) {
        this.currentRoomImage = newRoom;

        

        $('#myimage').attr('src', this.currentRoomImage);



        // HIGHLIGHT E RESIZE DAS COORDENADAS
        $('#myimage').mapster({
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

    }
};

var main = function () {



    app.changeRoom('images/door.jpg');


    $('#mapster_wrap_0').css({
        'margin-left': 'auto',
        'margin-right': 'auto'
    });

    $("body").css("display", "none");

    $("body").fadeIn(2000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    $('img').mapster('resize', 0, $(window).height(), 0);

    $(window).bind('resize', function () {
        $('img').mapster('resize', 0, $(window).height(), 0);
    });


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
























