var $ = require("jquery");

$(document).ready(()=>{
    console.log("hello\n");
    console.log($(".open_button").css("width"));

    $(".open_button").css("height", $(".open_button").css("width"));
});

$(window).resize(()=>{
    $(".open_button").css("height", $(".open_button").css("width"));
});