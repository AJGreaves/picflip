$(document).ready(function() {
    
//------------------ Variables 

let carsCardsArray = ["cruz","lightning","mater","jackson-storm", "doc", "mac", "fillmore", "sally"];
let frozenCardsArray = ["elsa","anna", "olaf", "kristoff", "hans", "sven", "elsa-anna", "olaf-sven"];
let toystoryCardsArray = ["woody","buzz","rex","alien","jessie","potato","lotso","bullseye"];
let displayCardsArray = [];
let activeCardsArray = carsCardsArray;

let silence = false;

let flipCounter = 0;    
let turnsCounter = 0;
let countSelected = 0;

let userName = localStorage.getItem("userName");
let userAvatar = localStorage.getItem("userAvatar");

let easyScore = 0;
let mediumScore = 0;
let hardScore = 0;
let activeScore = 0;

let easyHighScore = 0;
let mediumHighScore = 0;
let hardHighScore = 0;
let activeHighScore = hardHighScore;

let dashStar = 'dashboard-score-star';
let winStar = 'score-star';
let highWinStar = 'win-modal-score-star';


//------------------ User Data Modal

// checks for user data, if no data, or data has been deleted then launches modal to collect it
function checkForUserData() { 
    if ((userAvatar === "default")||(userName === null)) {
        setTimeout(function() {
            // background on user data modal can't be clicked away, input must be given first
            $("#userInfoModal").modal({
                backdrop: 'static',
                keyboard: false
            })
        },500)
    } else {
        // loads locally stored data for returning player
        userName = localStorage.getItem("userName");
        userAvatar = localStorage.getItem("userAvatar");
        
        // Bug fix: uninitialised high scores on reload of page caused high score stars to display incorrectly. 
        // these isNaN statments fixed it.
        if (isNaN(localStorage.getItem("easyHighScore"))) {
            easyHighScore = 0;
        } else {
            easyHighScore = localStorage.getItem("easyHighScore");
        }
        
        if (isNaN(localStorage.getItem("mediumHighScore"))) {
            mediumHighScore = 0;
        } else {
            mediumHighScore = localStorage.getItem("mediumHighScore");
        }
        
        if (isNaN(localStorage.getItem("hardHighScore"))) {
            hardHighScore = 0;
        } else {
            hardHighScore = localStorage.getItem("hardHighScore");
        }
        
        activeHighScore = hardHighScore;
        return;
    }
}

//------------------ on click events

//--- play button click audio on all button elements
$('.btn').click(function() {
    clickButton();
})

//--- style selection buttons
$('.cars-cover').click(function() {
    styleButton(carsCardsArray);
})

$('.frozen-cover').click(function() {
    styleButton(frozenCardsArray);
})

$('.toystory-cover').click(function() {
    styleButton(toystoryCardsArray);
})

//--- difficulty selection buttons

$('#easyButton').click(function() {
    easyButton();
    difficultyButton(easyHighScore);
})

$('#mediumButton').click(function() {
    mediumButton();
    difficultyButton(mediumHighScore);
})

$('#hardButton').click(function() {
    hardButton();
    difficultyButton(hardHighScore);
})

//--- Reset button
$('.reset-btn').click(function () {
    resetGame();
})

//--- Mute button

$('#muteButton').click(function() {
    muteAudio();
});

//--- Modal buttons

$('#win-modal-close-btn').click(function () {
    resetGame();
    $('#winModal').modal('hide');
})

$('#high-score-modal-close-btn').click(function () {
    resetGame();
})

//--- collect and submit user info
// This button is on the user info modal
$('#user-info-submit-button').click(function() {
    userInfoSubmitButton ();
});

//--- delete modal and button

$('#deleteDataModal').click(function() {
    launchParentModal();
})

$('#confirmDeleteData').click(function() {
    deleteData();
})


// ---------- on click event functions

function userInfoSubmitButton() {
    // collects data from form and assigns to variables
    userName = $('#username').val();
    userAvatar = $('input[name=avatarRadios]:checked').val();
    
    localStorage.setItem("userName", userName);
    localStorage.setItem("userAvatar", userAvatar);
    
    displayUserData()

    // only closes modal if both username and avatar have been chosen
	if (userName && userAvatar) {
		$('#userInfoModal').modal('hide');	
		//overrides submit part of button that was closing modal even when all input fields not included
		 e.preventDefault();
    }
}

function clickButton() {
    $('#buttonClickAudio')[0].currentTime=0;
    $('#buttonClickAudio')[0].play();
}

function styleButton(arr) {
    activeCardsArray = arr;
    resetGame();    
}

function launchParentModal() {
    $('#infoModal').modal('hide');
    $('#parentCheckModal').modal('show');
}

function deleteData() {
    // resets all user data
    localStorage.setItem("easyHighScore", 0);
    localStorage.setItem("mediumHighScore", 0);
    localStorage.setItem("hardHighScore", 0);
    localStorage.setItem("userName", "Player");
    localStorage.setItem("userAvatar", "default");

    // reinitialises all user data
    easyHighScore = localStorage.getItem("easyHighScore");
    mediumHighScore = localStorage.getItem("mediumHighScore");
    hardHighScore = localStorage.getItem("hardHighScore");
    userName = localStorage.getItem("userName");
    userAvatar = localStorage.getItem("userAvatar");
    
    // redisplays all user data
    activeHighScore = hardHighScore;
    displayUserData();
    displayScore(activeHighScore, dashStar);
    
    // hides modal
    $('#parentCheckModal').modal('hide');
    checkForUserData();
}

function easyButton() {
    $('.my-card-column-medium, .my-card-column-hard').addClass('invisible').removeClass('visible');
    $('#dashboard-high-score-text').text('Easy mode high score');
}

function mediumButton() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('invisible').removeClass('visible');
    $('#dashboard-high-score-text').text('Medium mode high score');
}

function hardButton() {
    $('.my-card-column-medium').addClass('visible').removeClass('invisible');
    $('.my-card-column-hard').addClass('visible').removeClass('invisible');
    $('#dashboard-high-score-text').text('Hard mode high score');
}

function difficultyButton(score) {
    activeHighScore = score;
    displayScore(activeHighScore, dashStar);
    resetGame();
}

// resets game, but not difficulty level or style selections
function resetGame() {
    // flips and face-up cards back over
    $('.face-up').addClass('face-down').removeClass('face-up disabled matched selected');
    // makes a new pack of cards, size depending on difficulty setting
    let num = howManyCards();
    let cards = makeCardPack(activeCardsArray, num);
    // delays new cards being displayed until cards have flipped back over
    setTimeout(function() {
      displayCards(cards);  
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
    $('#muteButton i').toggleClass('fa-volume-off');
}

// flips cards over on click, only allows two clicks at a time. Fixes bug caused by clicking cards too fast. 
// BUG FIX - has to remain inside a click-function for $(this) to work
$('.flip-card').click(function() {
    
    if (checkCounter()) {
        $('#cardFlipAudio')[0].currentTime=0;
        $('#cardFlipAudio')[0].play();
        if ($(this).hasClass('face-down')) {
            $(this).addClass('face-up disabled selected').removeClass('face-down');
        }
        checkMatch();
    } 
})

// ---------- Display functions

function displayUserData() {
    $('.username').text(userName); 
    
    // checks for which avatar choice was made and changes html to display it in avatar box
    switch (userAvatar) {
        case 'strawberry':
            $('.avatar').addClass('strawberry-cover').removeClass('avatar-default toycar-cover plant-cover');
            break;
        case 'car':
            $('.avatar').addClass('toycar-cover').removeClass('avatar-default strawberry-cover plant-cover');
            break;
        case 'plant':
            $('.avatar').addClass('plant-cover').removeClass('avatar-default strawberry-cover toycar-cover');
            break;
        case 'default':
            $('.avatar').addClass('avatar-default').removeClass('plant-cover strawberry-cover toycar-cover');
            break;
        default:
            break;
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

// displays score stars in selected place
function displayScore(numOfStars, className) {
    
    let StarElems = document.getElementsByClassName(className);
    
    for (i=0; i<numOfStars; i++) {
        if ($(StarElems[i]).hasClass('empty-star')) {
                $(StarElems[i]).addClass('win-star').removeClass('empty-star');
        }
    }
    for (i=numOfStars; i<5; i++) {
        if ($(StarElems[i]).hasClass('win-star')) {
                $(StarElems[i]).addClass('empty-star').removeClass('win-star');
        }
    }
}

// delays function so win modals do not pop up too early
// BUG fix: moved delay into it's own function to prevent functions repeating when they shouldn't
function delayDisplayModal(modalId) {
    setTimeout(function() {
        $(modalId).modal('show');
        $('#applauseAudio')[0].play();
    }, 1500);
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

// finds how many cards are visible, returns number of images needed for new pack
function howManyCards () {
    let num = document.getElementsByClassName('visible').length;
    let halfNum = (num/2);
    return halfNum;
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

function checkCounter() {
    countSelected++;
    if (countSelected <= 2) {
        return true;
    } else {
        return false;
    }
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
                countSelected = 0;
                flipCounter++;
                countTurns();
                delayedCorrectSound();
                checkForWin();
                return;
            })
        } else {
            // turn cards back over if not matched 
            // delays flip so user can see what was on the card before it is turned over again.
            setTimeout(function() {
                $('.selected').each(function(x) {
                    $(this).removeClass('face-up selected disabled').addClass('face-down');
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

// gets score out of 5 based on difficulty level selected and turns taken to win.
function checkScore() {
    
    let len = $('.visible').length;
    
    if (len === 8) {
        // score for easy mode
        if (turnsCounter <= 7) {
            easyScore = 5;
            return 5;
        } else if (turnsCounter <= 9) {
            easyScore = 4;
            return 4;
        } else if (turnsCounter <= 11) {
            easyScore = 3;
            return 3;
        } else if (turnsCounter <= 13) {
            easyScore = 2;
            return 2;
        } else if (turnsCounter >= 15) {
            easyScore = 1;
            return 1;
        } else {
            return console.log('checkScore function error easyScore if statement!');
        }
    } else if (len === 12) {
        // score for medium mode
        if (turnsCounter <= 13) {
            mediumScore = 5;
            return 5;
        } else if (turnsCounter <= 16) {
            mediumScore = 4;
            return 4;
        } else if (turnsCounter <= 19) {
            mediumScore = 3;
            return 3;
        } else if (turnsCounter <= 22) {
            mediumScore = 2;
            return 2;
        } else if (turnsCounter >= 24) {
            mediumScore = 1;
            return 1;
        } else {
            return console.log('checkScore function error mediumScore if statement!');
        }
        
    } else if (len === 16) {
        // score for hard mode
        if (turnsCounter <= 14) {
            hardScore = 5;
            return 5;
        } else if (turnsCounter <= 18) {
            hardScore = 4;
            return 4;
        } else if (turnsCounter <= 22) {
            hardScore = 3;
            return 3;
        } else if (turnsCounter <= 26) {
            hardScore = 2;
            return 2;
        } else if (turnsCounter >= 30) {
            hardScore = 1;
            return 1;
        } else {
            return console.log('checkScore function error HardScore if statement!');
        }
    } else {
        return console.log('checkScore function error!');
    }
}

// checks for when player has won. Works for all card pack sizes.
function checkForWin() {
    let matchedNum = $('.matched').length;
    let visibleNum = $('.visible').length;
    
    // checks if all visible cards have been turned over
    if (matchedNum == visibleNum) {
        activeScore = checkScore();
        if (checkIfHighScore()) {

            // launch new high score modal if beats old score
            delayDisplayModal('#newHighScoreModal');
            displayScore(activeHighScore, highWinStar);
            displayScore(activeHighScore, dashStar);
            return;
        } else {
            // launch win modal if doesn't beat old score
            displayScore(activeScore, winStar);
            delayDisplayModal('#winModal');
            return;
        };
    } else {
        return;
    }
}

// compares new score to highscore 
function checkIfHighScore(){
    if (easyScore > easyHighScore) {
        easyHighScore = easyScore;
        activeHighScore = easyHighScore;
        localStorage.setItem("easyHighScore", easyHighScore);
        return true;
    } else if (mediumScore > mediumHighScore) {
        mediumHighScore = mediumScore;
        activeHighScore = mediumHighScore;
        localStorage.setItem("mediumHighScore", mediumHighScore);
        return true;
    } else if (hardScore > hardHighScore) {
        hardHighScore = hardScore;
        activeHighScore = hardHighScore;
        localStorage.setItem("hardHighScore", hardHighScore);
        return true;
    } else {
        return false;
    }
}

//--- misc functions

function delayedCorrectSound() {
    // delays correct match sound
    setTimeout(function() {
        $('#correctBingAudio')[0].play();
    }, 600);    
}


//--- default setting for cards when page is first loaded
displayCardsArray = makeCardPack(carsCardsArray, 8);
displayCards(displayCardsArray);
countTurns();
checkForUserData();
displayUserData();
displayScore(activeHighScore, dashStar);
})