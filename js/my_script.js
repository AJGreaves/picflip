$(document).ready(function() {
    
    //------------------ MODALS
    
    /*// code currently displays user info modal on first visit to site
    TO DO: Display only if it doesn't have user info yet
    if ($.cookie('pop') == null) {
        $('#userInfoModal').modal('show');
        $.cookie('pop', '7');
    }*/ 
    
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
    
    let displayCardsArray = [];
    let singleCardsArray = [];
    let doubleCardsArray = [];
    
    $.ajax({
        type: "Get",
        url: "../assets/data/cards.json",
        data: 'data',
        dataType: 'json',
        success: function(data) {
		    makeCardPack(data);
		    displayCards(data);
         //   $('.flip-card-back').each(function(ind, val){
         //       $(this).addClass(displayCardsArray[ind]['class']);
         //   })
        },
        error: function() {
            alert("json not found");
        }
    });
    
    // function called in ajax to access data
    // loops through first 8 cards in json and adds them to singleCardsArray. 
    function makeCardPack(cards) {
    	for (i = 0; i < 8; i++) {
    	    let obj = cards[i];
            singleCardsArray.push(obj);
    	}
    	
    	//takes singleCardsArray and doubles it
    	doubleCardsArray = duplicateCards(singleCardsArray) 
    	let length = doubleCardsArray.length;
    	
    	// loop to randomize doubleCardsArray and push to displayCardsArray.
    	for (i = 0; i < length; i++) {
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
            doubleCardsArray = arr;
            return doubleCardsArray;
    }
    
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
    
    //creates new shuffled deck on button click
    $('.reset-btn').click(function () {
       displayCardsArray = shuffle(displayCardsArray);
    }) 
    
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
    
    // function called in ajax to access data
    function displayCards(cards){
        $('.flip-card-back').each(function(ind, val){
            $(this).addClass(displayCardsArray[ind]['class']);
        })
    }

})

