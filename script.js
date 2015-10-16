first_card_clicked=null;
second_card_clicked=null;
total_possible_matches=2;
match_counter=0;

$(document).ready(function(){});

function card_clicked(card_clicked){

    $(card_clicked).hide();
/*First Card Clicked */
    if(first_card_clicked==null){
        first_card_clicked=$(card_clicked).prev().find('img').attr('src');
    } else{
        second_card_clicked=$(card_clicked).prev().find('img').attr('src');

        if(first_card_clicked===second_card_clicked){
            match_counter+=1;
            alert("You have " + match_counter + " matches");
            /* Flipping Card Element Back to Original State After Incorrect Match */
        } else{
            $(".back").show(200);

        }
        first_card_clicked=null;
        second_card_clicked=null;

    }

    if(match_counter===total_possible_matches){
        alert("All hail the victor!")
    } else{
        var functionalityComplete="Click handler functionality is complete";
        return console.log(functionalityComplete);
    }

       }