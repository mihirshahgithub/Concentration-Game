var first_card_clicked=null;
var second_card_clicked=null;
var total_possible_matches=9;
var matches=0;
var attempts=0;
var accuracy=0;
var games_played=0;

$(document).ready(function(){});

function card_clicked(card_clicked){

    $(card_clicked).hide();
    /*First Card Clicked */
    if(first_card_clicked==null){
        first_card_clicked=$(card_clicked).prev().find('img').attr('src');
    } else{
        second_card_clicked=$(card_clicked).prev().find('img').attr('src');
        attempts+=1;
        $("#attemptnumber").text(attempts).css("text-align","center");


        if(first_card_clicked===second_card_clicked){
            matches+=1;
            accuracy=matches/attempts;
            $("#accuracynumber").text(accuracy * 100 + "%").css("text-align","center");
            console.log("You have " + matches + " matches");

            /* Flipping Card Element Back to Original State After Incorrect Match */
        } else {
            //matches=null (I need to set matches to null in order for my matches to reset after an incorrect answer, but that causes problems with my accuracy
            $(".back").show(200);
            accuracy=matches/attempts;
            $("#accuracynumber").text(accuracy * 100 + "%").css("text-align","center");

        }
            first_card_clicked = null;
            second_card_clicked = null;


    }

    if(matches===total_possible_matches){
        games_played+=1;
        matches=null;
        attempts=null;

        displayStats();
        alert("All hail the victor!");
        $(".back").show(200)
    }

}

function displayStats(){
    accuracy=matches/attempts;
    $('#gamenumber').text(games_played).css("text-align","center");
    $('#attemptnumber').text(attempts);
    $('#accuracystats').text(accuracy * 100 + '%');



}

function reset_stats(){
    $('.back').show(200);
    games_played+=1;
    attempts=0;
    matches=0;
    accuracy=0;
    displayStats();

}
