var $ = require("jquery");

var totalVotes = 0;
var votes = new Array();
votes["teamBtn1"] = {score: 0, leaderScore: 0};
votes["teamBtn2"] = {score: 0, leaderScore: 0};
votes["teamBtn3"] = {score: 0, leaderScore: 0};

function insertStr(soure, start, newStr) {

    return soure.slice(0, start) + newStr + soure.slice(start);
}

function initAnimates() {
    $(".team2_button").addClass("bounceIn");

    setTimeout(() => {
        $(".team1_button").addClass("moveToLeft");
        $(".team3_button").addClass("moveToRight");
    }, 1000);

    setTimeout(() => {
        $(".title_box").addClass("show");
    }, 2000)

    setTimeout(() => {
        $(".input").addClass("show");
    }, 3000)
}

function setEvents() {

    $(".input__field").focus(function () {
        $(this).parent().addClass("input--filled");
    })

    $(".input__field").blur(function () {

        var teamBtnName = $(this).attr("id");
        var reg = new RegExp("_input")
        teamBtnName = teamBtnName.replace(reg, "")
        teamBtnName = insertStr(teamBtnName, teamBtnName.length - 1, "Btn");

        if ($(this).val() === "") {
            $(this).parent().removeClass("input--filled");
            votes[teamBtnName].leaderScore = 0;
        } else {
            votes[teamBtnName].leaderScore = Number($(this).val());
        }
    })

    $(".buttons").on("click", ".button", function () {

        var leaderScoreFlag = true;

        for (var x in votes) {
            if (votes[x].leaderScore === 0) {
                showPlusMessage($(this), "😑");
                leaderScoreFlag = false;
                break;
            }
        }

        if (leaderScoreFlag) vote($(this));
    });
}

function account() {
    var top = "teamBtn1";

    for (var x in votes) {
        if (x === "teamBtn1") continue;

        if (votes[x].score > votes[top].score) {
            top = x;
            continue;
        } else if (votes[x].score === votes[top].score) {
            if (votes[x].leaderScore > votes[top].leaderScore) {
                top = x;
                continue;
            }
        }
    }

    console.log(top);
}

function showPlusMessage(currentButton, messgage) {
    var top = currentButton.css("top"),
        left = currentButton.css("left"),
        right = currentButton.css("right");

    $(".plus_box").css("top", "calc( " + top + " + 13vw - 10% )");
    $(".plus_box").css("left", "calc( " + left + " + 13vw - 10% )");
    $(".plus_box").css("right", "calc( " + right + " + 13vw - 10% )");

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
    votes[currentTeam.attr("id")].score++;
    showPlusMessage(currentTeam, votes[currentTeam.attr("id")].score + " 票 🥳");

    if (totalVotes == 7) {
        account();
    }
}

export function init(){
    setEvents();
    initAnimates();
}
