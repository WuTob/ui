var $ = require("jquery");

var totalVotes = 0;
var votes = new Array();
votes["teamBtn1"] = 0;
votes["teamBtn2"] = 0;
votes["teamBtn3"] = 0;

function account() {
    
}

function showPlusMessage(currentButton, messgage) {
    var top = currentButton.css("top"),
        left = currentButton.css("left"),
        right = currentButton.css("right");

    $(".plus_box").css("top", "calc( " + top + " + 13vw - 7.5% )");
    $(".plus_box").css("left","calc( " + left + " + 13vw - 7.5% )");
    $(".plus_box").css("right","calc( " + right + " + 13vw - 7.5% )");

    $(".plus_box").text(messgage);

    $(".plus_box").css("display", "block");
    $(".plus_box").addClass("up");

    setTimeout(()=>{
        $(".plus_box").removeClass("up");
        $(".plus_box").css("display", "none");
    }, 1000);
}

function vote(currentTeam) {
    totalVotes++;
    console.log(currentTeam.attr("id"));
    votes[currentTeam.attr("id")]++;
    showPlusMessage(currentTeam, votes[currentTeam.attr("id")] + " 票");
}

export function init(){
    $(".team2_button").addClass("bounceIn");

    $(".input__field").focus(function () {
        $(this).parent().addClass("input--filled");
    })
    $(".input__field").blur(function () {
        console.log($(this).val());
        if($(this).val() == ""){$(this).parent().removeClass("input--filled")}
    })

    $(".buttons").on("click", ".button", function () {
        vote($(this));
    });

    setTimeout(()=>{
        $(".team1_button").addClass("moveToLeft");
        $(".team3_button").addClass("moveToRight");
    }, 1000);

    setTimeout(()=>{
        $(".title_box").addClass("show");
    }, 2000)

    setTimeout(()=>{
        $(".input").addClass("show");
    }, 3000)

}
