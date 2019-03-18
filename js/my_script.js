$(document).ready(function() {
    
    // flips game card and plays audio on click
    $('.flip-card').click(function() {
        $(this).toggleClass('active');
        $(this).find('audio')[0].play();
    });
    
    $('.btn').click(function() {
        $(this).children('audio')[0].play();
    });
})