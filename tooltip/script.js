$(function(){
    $("li").hover(function(){
        $("body").append('<div id="tooltip"><p></p></div>');

        $("#tooltip p").html($(this).children().attr("alt"));

        $("#tooltip").hide();

        $("#tooltip").css(
            "top",
            $(this).offset().top - $("#tooltip").height() - 18
        );

        $("#tooltip").css(
            "left",
            $(this).offset().left - ($("#tooltip").width())/2
        );

        $("#tooltip").fadeIn();
    },function(){
        $("#tooltip").remove();
    });
});