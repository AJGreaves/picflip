$(document).ready(function() {
    
    // flips game card on click
    $('.flip-card').click(function() {
        $(this).toggleClass('active');
        $(this).find('audio')[0].play()
    });
})