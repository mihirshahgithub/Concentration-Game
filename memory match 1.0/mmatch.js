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
        console.log(attempts);


        if(first_card_clicked===second_card_clicked){
            matches+=1;
            accuracy=matches/attempts;
            console.log(accuracy);
            alert("You have " + matches + " matches");
            /* Flipping Card Element Back to Original State After Incorrect Match */
        } else{
            $(".back").show(200);
            matches=null;


        }
        first_card_clicked=null;
        second_card_clicked=null;

    }

    if(matches===total_possible_matches){
        alert("All hail the victor!")
    } else{
        var functionalityComplete="Click handler functionality is complete";
        return console.log(functionalityComplete);
    }

}