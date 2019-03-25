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
let countSelected = 0;

// audio elements

let fanfare = document.createElement('audio');
    fanfare.setAttribute('src', '../assets/audio/fanfare.flac');

let buttonClick = document.createElement('audio');
    buttonClick.setAttribute('src', '../assets/audio/button.mp3');
    
let cardFlip = document.createElement('audio');
    cardFlip.setAttribute('src', '../assets/audio/card-flip.wav');
    
let correctBing = document.createElement('audio');
    correctBing.setAttribute('src', '../assets/audio/correct.wav');
    
let applause = document.createElement('audio');
    applause.setAttribute('src', '../assets/audio/applause.mp3');
    

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
    // only closes modal if both username and avatar have been chosen
	if (userName && userAvatar) {
		$('#userInfoModal').modal('hide');	
		//overrides submit part of button that was closing modal even when all input fields not included
		 e.preventDefault();
    }

});

//--- Win Modal

// checks for when player has won. Works for all card pack sizes.
function checkForWin() {
    let matchedNum = $('.matched').length;
    let visibleNum = $('.visible').length;
   // debugger;
    if (matchedNum == visibleNum) {
        $('#winModal').modal('show');
        fanfare.play();
    } else {
        return;
    }
}


//------------------ BUTTONS

//--- play button click audio
$('.btn').click(function() {
    buttonClick.play();
});

//--- style selection buttons
$('.cars-cover').click(function() {
    activeCardsArray = carsCardsArray;
    resetGame();
})

$('.frozen-cover').click(function() {
    activeCardsArray = frozenCardsArray;
    resetGame();
})

$('.toystory-cover').click(function() {
    activeCardsArray = toystoryCardsArray;
    resetGame();
})

//--- difficulty selection buttons

$('#easyButton').click(function() {
    $('.my-card-column-medium, .my-card-column-hard').addClass('invisible').removeClass('visible');
    resetGame();
})

$('#mediumButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('invisible').removeClass('visible');
    resetGame();
})

$('#hardButton').click(function() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('visible').removeClass('invisible');
    resetGame();
})

//--- Reset button

$('.reset-btn').click(function () {
    resetGame();
})

//--- Mute button

$('#muteButton').click(function() {
    muteAudio();
    //toggles between icons on mute button
    $('#muteButton i').toggleClass('fa-volume-off');
});

//--- Modal buttons

$('#win-modal-close-btn').click(function () {
    resetGame();
    $('#winModal').modal('hide');
})

// resets game, but not difficulty level or style selections
function resetGame() {
    // flips and face-up cards back over
    $('.face-up').addClass('face-down').removeClass('face-up disabled matched selected');
    // makes a new pack of cards, size depending on difficulty setting
    let num = howManyCards();
    let Cards = makeCardPack(activeCardsArray, num);
    // delays new cards being displayed until cards have flipped back over
    setTimeout(function() {
      displayCards(Cards);  
    },500);
    //resets counters
    flipCounter = 0;
    turnsCounter = 0;
    countSelected = 0;
    //displays turns counter on screen
    countTurns();
}


// mute audio function, original code from: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/
function muteAudio() {

    let allaudio = document.getElementsByTagName('audio'); // BUG: audio button no longer working since moving audio file links to js. 
    
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

// finds how many cards are visible, returns number of images needed for new pack
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

// cuts the deck for different difficulty levels
function cutDeck(arr, num) {
    let cards = arr.slice(0, num);
    return cards;
}

// returns an array with element elem repeated twice.
function duplicateCards(elem){
    let arr = [];

        for (let i = 0; i < 2; i++) {
            arr = arr.concat(elem);
        };
        return arr;
}

// turns counter

function countTurns() {
    
    let turnsCounted = ("Turns: " + turnsCounter);
    // counts flips, when 2 flips have been done the number of turns goes up by one.
    if ((flipCounter % 2) == 0 ) {
        turnsCounter++; 
    }
    $('.turns-counter').text(turnsCounted);
}

// flips cards over on click, only allows two clicks at a time. Fixes bug caused by clicking cards too fast. 
$('.flip-card').click(function() {
    
    if (checkCounter()) {
        cardFlip.play();
        if ($(this).hasClass('face-down')) {
            $(this).addClass('face-up disabled selected').removeClass('face-down');
        }
        checkMatch();
    } 
})

function checkCounter() {
    countSelected++;
    if (countSelected <= 2) {
        return true;
    } else {
        return false;
    }
}

// displays shuffled cards on the screen
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

// checks if two cards selected match: 
// leaves matched cards flipped over, and disables them, then checks for win.
// Flips unmatched cards back. 
function checkMatch() {

    if (document.getElementsByClassName('selected').length == 2) {
        let first = $('.selected').eq(0).find('.flip-card-back').attr('class');
        let second = $('.selected').eq(1).find('.flip-card-back').attr('class');

        //if cards match, leave them face up and disabled
        if (first == second) {
            $('.selected').each(function(x) {
                $(this).removeClass('selected').addClass('matched disabled');
                $('.not-matched').removeClass('disabled');
                countSelected = 0;
                flipCounter++;
                countTurns();
                // delays correct match sound
                setTimeout(function() {
                    correctBing.play();
                }, 800);
                // delays win modal from popping up too early.
                setTimeout(function() {
                    checkForWin();
                }, 1500);
            })
        } else {
            // turn cards back over if not matched 
            // delays flip so user can see what was on the card before it is turned over again.
            setTimeout(function() {
                $('.selected').each(function(x) {
                    $(this).removeClass('face-up selected disabled').addClass('face-down');
                    $('.not-matched').removeClass('disabled');
                    countSelected = 0;
                    flipCounter++;
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
countTurns();
})