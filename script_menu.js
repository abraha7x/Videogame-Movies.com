$(document).ready(function() {

    $("#open_menu").click(function() {

        $("#menu").animate({

            "right": "0"

        });

    });

    $("#close_menu").click(function() {

        $("#menu").animate({

            "right": "-100%"

        });

    });

});