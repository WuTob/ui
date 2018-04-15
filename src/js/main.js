import {sync} from "./ui";
import "../css/index.css"

var $ = require("jquery");

$(document).ready(()=>{
    sync();
});

$(window).resize(()=>{
    sync();
});