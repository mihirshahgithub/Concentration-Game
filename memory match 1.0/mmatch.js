var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var card_array = ['images/texaschainsawmassacre.jpg', 'images/bates.jpg', 'images/chucky.jpg',
    'images/frankenstein.jpeg', 'images/freddy.jpg', 'images/it.jpeg', 'images/jason.jpg', 'images/michael_myers.jpg', 'images/scream.jpg'];
var canClickCards = true;

$(document).ready(function () {
    displayStats();
    calculateCountdown();
});

function card_clicked(element) {
    if (canClickCards == true) {
        $(element).prev().find('img').attr('src');
    } else {
        return;
    }


    /*First Card Clicked */
    if (first_card_clicked == null) {
        first_card_clicked = $(element).prev().find('img').attr('src');
        $(element).addClass('select');
    } else {
        second_card_clicked = $(element).prev().find('img').attr('src');
        attempts += 1;
        $("#attemptnumber").text(attempts).css("text-align", "center");
        $(element).addClass('select');


        if (first_card_clicked == second_card_clicked) {
            $(".select").removeClass('select').addClass('matchMade');
            match_counter += 1;
            matches += 1;
            accuracy = parseFloat((match_counter / attempts) * 100).toFixed(0) + "%";
            $("#accuracynumber").text(accuracy).css("text-align", "center");
            console.log("You have " + matches + " matches");
            first_card_clicked = null;
            second_card_clicked = null;
            canClickCards = false;
            setTimeout(function () {
                canClickCards = true;
            }, 800);
            /* Flipping Card Element Back to Original State After Incorrect Match */
        } else {
            canClickCards = false;
            accuracy = parseFloat((match_counter / attempts) * 100).toFixed(0) + "%";
            ;
            $("#accuracynumber").text(accuracy).css("text-align", "center");

            setTimeout(function () {
                $(".select").removeClass("select");
                canClickCards = true;
            }, 800);
            first_card_clicked = null;
            second_card_clicked = null;

        }


    }

    if (matches === total_possible_matches) {
        games_played += 1;
        $('#gamenumber').text(games_played).css("text-align", "center");
        matches = null;
        match_counter = null;
        attempts = null;


        alert("All hail the victor!");
        //$("#game-area").empty();

        $('.back').removeClass('matchMade');

    }

}

function displayStats() {
    // accuracy = match_counter / attempts;
    $('#gamenumber').text(games_played).css("text-align", "center");
    $('#attemptnumber').text(attempts).css("text-align", "center");
    //  $('#accuracynumber').text(0 + '%').css("text-align", "center");


}

function reset_stats() {

    $('.back').removeClass('matchMade');
    $('#attemptnumber').text(attempts).css("text align", "center");
    games_played += 1;
    attempts = 0;
    matches = 0;
    match_counter = 0;
    displayStats();
    calculateCountdown();



}
/*
 Building a Timer
 */
var startingTime = new Date().getTime();
var countDown = 60;

function calculateCountdown() {
    var currentTime = new Date().getTime();
    var timeDifference = currentTime - startingTime;
    var timeInSeconds = countDown - Math.floor(timeDifference / 1000);
    if (timeInSeconds >= 0) {
        var minutes = Math.floor(timeInSeconds / 60);
        timeInSeconds -= minutes * 60;
        $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $("#timeInSeconds").text(timeInSeconds < 10 ? "0" + timeInSeconds : timeInSeconds);
    } else {
        $("#countdown").hide();
        $("#aftercount").show();
        clearInterval(counter);
    }
}
calculateCountdown();
var counter = setInterval(calculateCountdown, 500);

function audioDelay() {

    setTimeout("audio()", 60000);
}


function audio() {
    document.getElementById('audio').play();
}

