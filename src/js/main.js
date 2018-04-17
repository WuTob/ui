import * as UI from "./ui";
import "../css/index.css"
import "../css/animation.css"

var $ = require("jquery");

$(document).ready(()=>{
    UI.animate();
    //sync();
});

$(window).resize(()=>{
    //sync();
});