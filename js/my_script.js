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
    
    
    // This would need to prevent the default behaviour (of reloading the page), 
    // read the values and manipulate the HTML content of the user info box to show them there.
    
    
    
    $('#user-info-submit-button').click(function(e) {
        e.preventDefault();
        var userName = $('#username').val();
        console.log(userName);
        var userAvatar = $('input[name=avatarRadios]').val();;
        console.log(userAvatar);
    });
    
    

    
})

