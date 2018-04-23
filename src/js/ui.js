var $ = require("jquery");

export function animate(){
    $(".manage_button").addClass("bounceIn");

    setTimeout(()=>{
        $(".open_button").addClass("moveToLeft");
        $(".password_button").addClass("moveToRight");
    }, 1000);

    setTimeout(()=>{
        $(".open_button").addClass("init");
        $(".password_button").addClass("init");
    }, 2000)
}