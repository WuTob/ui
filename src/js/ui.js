var $ = require("jquery");

export function sync(){
    $(".open_button").css("height", $(".open_button").css("width"));
    $(".manage_button").css("height", $(".manage_button").css("width"));
    $(".password_button").css("height", $(".password_button").css("width"));
}