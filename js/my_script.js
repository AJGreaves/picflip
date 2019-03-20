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
    var silence = false;

    function muteAudio() {
    
        var allaudio = document.getElementsByTagName('audio');
        
        if (silence) {
            for (var j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
            }
            silence = false;
        } else {
            for (var j = 0; j < allaudio.length; j++) {
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
    
    //------------------ GAME CARDS
    
    // flips game card and plays audio on click
    $('.flip-card').click(function() {
        $(this).toggleClass('active');
        $(this).find('audio')[0].play();
    });
    
    //------------------ USER DATA
    
    // TO DO: read the values and manipulate the HTML content of the user info box to show them there.
    
    $('#user-info-submit-button').click(function(e) {
        
        // prevents browser from reloading on click
        e.preventDefault();
        
        // collects data from form and assigns to variables
        var userName = $('#username').val();
        var userAvatar = $('input[name=avatarRadios]:checked').val();
        
        $('.username').children('h3').text(userName); 
        
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
        /*if (userAvatar) == 'strawberry') {
            $('.avatar-default').addClass('strawberry-cover').removeClass('avatar-default');
        } else if (userAvatar == 'car') {
            $('.avatar-default').addClass('car-cover').removeClass('avatar-default');
        } else if (userAvatar == 'plant') {
            $('.avatar-default').addClass('plant-cover').removeClass('avatar-default');
        } */
        
    });
    
})

