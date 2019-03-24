$(document).ready(function() {
    
// variables 

let carsCardsArray = ["cruz","lightning","mater","jackson-storm", "doc", "mac", "fillmore", "sally"];
let frozenCardsArray = ["elsa","anna", "olaf", "kristoff", "hans", "sven", "elsa-anna", "olaf-sven"];
let toystoryCardsArray = ["woody","buzz","rex","alien","jessie","potato","lotso","bullseye"];
let displayCardsArray = [];
let activeCardsArray = carsCardsArray;
let silence = false;
let flipCounter = 0;    
let turnsCounter = 0;

//------------------ MODALS

//--- User Data Modal

// background on user data modal can't be clicked away, input must be given first
$(".show-modal").click(function(){
    $("#userInfoModal").modal({
        backdrop: 'static',
        keyboard: false
    });
});

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


//------------------ BUTTONS

//--- play button click
$('.btn').click(function() {
    $(this).children('audio')[0].play();
});

//--- style selection buttons
$('.cars-cover').click(function() {
    activeCardsArray = carsCardsArray;
    let num = howManyCards();
    let Cards = makeCardPack(activeCardsArray, num);
    displayCards(Cards);
})

$('.frozen-cover').click(function() {
    activeCardsArray = frozenCardsArray;
    let num = howManyCards();
    let Cards = makeCardPack(activeCardsArray, num);
    displayCards(Cards);
})

$('.toystory-cover').click(function() {
    activeCardsArray = toystoryCardsArray;
    let num = howManyCards();
    let Cards = makeCardPack(activeCardsArray, num);
    displayCards(Cards);
})


//--- mute button

// mute audio function, original code from: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/

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

//--- difficulty selection buttons

$('#easyButton').click(function() {
    $('.my-card-column-medium, .my-card-column-hard').addClass('invisible').removeClass('visible');
    let num = howManyCards();
    let newCards = makeCardPack(activeCardsArray, num);
    displayCards(newCards);
})

$('#mediumButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('invisible').removeClass('visible');
    let num = howManyCards();
    let newCards = makeCardPack(activeCardsArray, num);
    displayCards(newCards);
})

$('#hardButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('visible').removeClass('invisible');
    let num = howManyCards();
    let newCards = makeCardPack(activeCardsArray, num);
    displayCards(newCards);
})

//--- Reset button

$('.reset-btn').click(function () {
    let num = howManyCards();
    let Cards = makeCardPack(activeCardsArray, num);
    displayCards(Cards);
})

function howManyCards () {
    let num = document.getElementsByClassName('visible').length;
    let halfNum = (num/2);
    return halfNum;
}


//------------------ GAME

// creates pack by cutting difficulty selection, then duplicating, shuffling then returning it. 
function makeCardPack(arr, num) {
    
    let cutArray = cutDeck(arr,num);
    	
    let doubleCardsArray = duplicateCards(cutArray);
    let shuffledCardsArray = [];

	// loop to randomize doubleCardsArray and push to displayCardsArray.
	for (i = 0; i < num*2; i++) {
	    let randIndex = Math.floor(Math.random() * doubleCardsArray.length);
        let rand = doubleCardsArray[randIndex];
        doubleCardsArray.splice(randIndex, 1);
        shuffledCardsArray.push(rand);
	}
	return shuffledCardsArray;
}

// returns an array with element elem repeated twice.
function duplicateCards(elem){
    let arr = [];

        for (let i = 0; i < 2; i++) {
            arr = arr.concat(elem);
        };
        return arr;
}

// cuts the deck for different difficulty levels
function cutDeck(arr, num) {
    let cards = arr.slice(0, num);
    return cards;
}



// turns counter

function countTurns() {
    // counts flips, when 2 flips have been done the number of turns goes up by one.
    flipCounter++;
    if ((flipCounter % 2) == 0 ) {
        turnsCounter++; 
            
        let turnsCounted = ("Turns: " + turnsCounter);
    
        $('.turns-counter').text(turnsCounted);
    }
}

let counter = 0;

// flips cards over on click, only allows two clicks at a time. 
$('.flip-card').click(function() {
    if (checkCounter()) {
        if ($(this).hasClass('face-down')) {
            $(this).addClass('face-up disabled selected').removeClass('face-down').find('audio')[0].play();
        }
        checkMatch();
    } 
})

function checkCounter() {
    counter++;
    if (counter <= 2) {
        return true;
    } else {
        return false;
    }
}

// displays cards
function displayCards(cards){ 
    $('.flip-card-back').each(function(i){
        //finds the last class in html element and assigns it to lastClass
        let lastClass = $(this).attr('class').split(' ').pop();
        // need to keep 'game-card' class, so add it back in and add card from suffled array 
        if (lastClass == 'game-card') {
            $(this).addClass('game-card').addClass(cards[i]);
        } else {
        // adds the class from the shuffled cards array
        $(this).removeClass(lastClass).addClass(cards[i]);
        }
    });
}

function checkMatch() {

    if (document.getElementsByClassName('selected').length == 2) {
        let first = $('.selected').eq(0).find('.flip-card-back').attr('class');
        let second = $('.selected').eq(1).find('.flip-card-back').attr('class');

        //if cards match, leave them face up and disabled
        if (first == second) {
            $('.selected').each(function(x) {
                $(this).removeClass('selected not-selected').addClass('matched disabled');
                $('.not-matched').removeClass('disabled');
                counter = 0;
                countTurns();
            })
        } else {
            // turn cards back over if not matched 
            setTimeout(function() {
                $('.selected').each(function(x) {
                    $(this).removeClass('face-up selected disabled').addClass('face-down not-selected');
                    $('.not-matched').removeClass('disabled');
                    counter = 0;
                    countTurns();
                })
            },1000);  
        }
    } else {
        return;
    }
}


//default setting for cards when page is first loaded
displayCardsArray = makeCardPack(carsCardsArray, 8);
displayCards(displayCardsArray);
})