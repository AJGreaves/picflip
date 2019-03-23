$(document).ready(function() {
    
// variables 

let displayCardsArray = [];

let carsCardsArray = ["cruz","lightning","mater","jackson-storm", "doc", "mac", "fillmore", "sally"];
let frozenCardsArray = ["elsa","anna", "olaf", "kristoff", "hans", "sven", "elsa-anna", "olaf-sven"];
let toystoryCardsArray = ["woody","buzz","rex","alien","jessie","potato","lotso","bullseye"];


//------------------ MODALS



// background on user info modal can't be clicked away, input must be given first
$(".show-modal").click(function(){
    $("#userInfoModal").modal({
        backdrop: 'static',
        keyboard: false
    });
});


//------------------ BUTTONS

$('.btn').click(function() {
    $(this).children('audio')[0].play();
});


// MUTE BUTTON

// mute audio function, original code from: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/
let silence = false;

function muteAudio() {

    let allaudio = document.getElementsByTagName('audio');
    
    if (silence) {
        for (let j = 0; j < allaudio.length; j++) {
        allaudio[j].muted = false;
        }
        silence = false;
    } else {
        for (let j = 0; j < allaudio.length; j++) {
        allaudio[j].muted = true;
        }
        silence = true;
    }
}

$('#muteButton').click(function() {
    muteAudio();
    //toggles between icons on mute button
    $('#muteButton i').toggleClass('fa-volume-off');
});

// DIFFICULTY SELECT BUTTONS

$('#easyButton').click(function() {
    $('.my-card-column-medium, .my-card-column-hard').addClass('invisible').removeClass('visible');
})

$('#mediumButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('invisible').removeClass('visible');
})

$('#hardButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('visible').removeClass('invisible');
})

// RESET BUTTON

$('.reset-btn').click(function () {
     displayCardsArray = shuffle(displayCardsArray);
     displayCards(displayCardsArray);
})

//------------------ USER DATA

$('#user-info-submit-button').click(function(e) {
	
    // collects data from form and assigns to variables
    let userName = $('#username').val();
    let userAvatar = $('input[name=avatarRadios]:checked').val();
    
    $('.username').text(userName); 
    
    // checks for which avatar choice was made and changes html to display it in avatar box
    switch (userAvatar) {
        case 'strawberry':
            $('.avatar-default').addClass('strawberry-cover').removeClass('avatar-default');
            break;
        case 'car':
            $('.avatar-default').addClass('toycar-cover').removeClass('avatar-default');
            break;
        case 'plant':
            $('.avatar-default').addClass('plant-cover').removeClass('avatar-default');
            break;
        default:
            break;
    }

	if (userName && userAvatar) {
		$('#userInfoModal').modal('hide');	
		 e.preventDefault();
    }

});
// ------ GAME


// loops through first cards in card array and adds them to singleCardsArray. 
function makeCardPack(arr, num) {
    	
    let doubleCardsArray = duplicateCards(arr);

	// loop to randomize doubleCardsArray and push to displayCardsArray.
	for (i = 0; i < num*2; i++) {
	    let randIndex = Math.floor(Math.random() * doubleCardsArray.length);
        let rand = doubleCardsArray[randIndex];
        doubleCardsArray.splice(randIndex, 1);
        displayCardsArray.push(rand);
	}
}

function duplicateCards(elem){
    // returns an array with element elem repeated twice.
    let arr = [];

        for (let i = 0; i < 2; i++) {
            arr = arr.concat(elem);
        };
        return arr;
}

// shuffles cards
function shuffle(arr) {
    let len = arr.length;
    let arr2 = [];
    for (i = 0; i < len; i++) {
    	    let randIndex = Math.floor(Math.random() * arr.length);
            let rand = arr[randIndex];
            arr.splice(randIndex, 1);
            arr2.push(rand);
    }
    return arr2;
}

// turns counter
let flipCounter = 0;    
let turnsCounter = 0;

$('.flip-card').click(function() {
    
	// if game card is face down, on click: flips game card face up and plays audio.
	if ($(this).hasClass('face-down')) {
	    $(this).addClass('face-up').removeClass('face-down').find('audio')[0].play();
    }
    
	// counts flips, when 2 flips have been done the number of turns goes up by one.
    flipCounter++;
    
    if ((flipCounter % 2) == 0 ) {
        turnsCounter++; 
            
        let turnsCounted = ("Turns: " + turnsCounter);
    
        $('.turns-counter').text(turnsCounted);
    } 
});


function displayCards(cards){
    $('.flip-card-back').each(function(ind, val){
        //removes the last class from the html element
        let lastClass = $(this).attr('class').split(' ').pop();
        $(this).removeClass(lastClass);
        // adds the class from the shuffled cards array
        $(this).addClass(displayCardsArray[ind]);
    })
}

makeCardPack(carsCardsArray, 8);
displayCards(displayCardsArray);
})