Guidelines:

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly 
useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

----

# PicFlip! - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://ajgreaves.github.io/picflip/)

## Table of Contents

[**Automated Testing**](#automated-testing)<br>
[**Client Stories Testing**](#client-stories-testing)<br>
[**Manual Testing**](#manual-testing)<br>
[**Further Testing**](#further-testing)<br>

## Automated Testing

### Validation services
The following validation services and linter were used to check the validity of the website code.
- [W3C Markup Validation]( https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

### Jasmine

Around 60% of PicFlip! functions have been tested with [Jasmine 3.1](https://jasmine.github.io/index.html) after the majority of the game javaScript code 
was completed. The reason for this is that I was completely new to JavaScript and Jasmine at the start of this project, and so writing TTD Jasmine tests alongside
while struglling to understand how my JavaScript was/wasn't working would have been impossible. Therefore I chose to test my code manually while getting to grips with 
JavaScript, and then tackle learning Jasmine afterwards.

[Jasmine-Jquery CDN](https://github.com/velesin/jasmine-jquery) has been imported into the jasmine testing to allow for jQuery within the JavaScript functions.

My approach to using Jasmine was to test each function, a small part of it at a time, and slowly building up to more complex expectations. Now that I have a
better understanding of JavaScript and Jasmine, my approach going forward is to use the TTD model and build my tests incrementally as I build my functions.

The files for jasmine testing picFlip can be found here:
- HTML page to run jasmine tests from: [jasmine-testing.html](assets/jasmine-testing/jasmine-testing.html)
- JavaScript specifications (tests): [picflipSpec.js](assets/jasmine-testing/spec/picflipSpec.js)
- PicFlip! javascript functions to be tested: [game.js](assets/js/game.js)

#### How to run jasmine tests

Before going further please make sure you have already cloned this project from the [PicFlip GitHub repository](https://github.com/AJGreaves/picflip) 
by following the steps in the [README.md](readme.md) under "How to run this project locally" and that you have the entire project running on your own IDE.

To run the jasmine tests: 
1. Open the [jasmine-testing.html](assets/jasmine-testing/jasmine-testing.html).
2. Run the html file and view it in your browser to see the test results. 

#### How to create jasmine tests

To create jasmine tests: 
1. Open the [picflipSpec.js](assets/jasmine-testing/spec/picflipSpec.js) file.
2. Write your own tests using the jasmine 3.1 framework.
3. Save [picflipSpec.js](assets/jasmine-testing/spec/picflipSpec.js), and then run/refresh [jasmine-testing.html](assets/jasmine-testing/jasmine-testing.html).

## Client stories testing

The following section goes through each of the user stories from the UX section of [README.md](README.md)

**As a player, I want:**
**1. The ability to easily find and understand the controls for the game, so that I can operate them easily. **
    - All the controls are in the dashboard, which is on the left side of the screen on medium to large devices, and at the top of the screen on mobiles. 
    - All the controls rely on symbols and colours before any words to communicate their purpose. 
    - Easy mode is green, medium mode is orange, hard is red. Like colours on a traffic light. 
    - The info, mute and reset buttons use conventional icons to signify their meaning.
**2. Large easy to press buttons and controls, so that my young fingers can use them easily on all devices.**
    - All buttons are large enough for young fingers to operate, on mobile the cards are stacked in columns of three to allow them more space. 
**3. Audio and/or visual feedback when I play the game, so that I know when I have clicked or not clicked something.**
    - When each button on the game is pressed there is a visial queue that it has been clicked as well as a clicking audio file that plays too. 
    - When a card is clicked first it is slightly indented, to give the impression of being pressed down, then it flips over with a satisfying animation and card flipping sound.
**4. The ability to choose from cards with my favourite childrens characters on, so that I am even more engaged in finding them in the game.**
    - 3 popular disney & pixar movie characters were chosen for the memory card.
    - The character choice buttons use the most recognised character from their disney movie, so a child can choose which cards they want easily.
**5. Postitive audio feedback when I complete a step in the game (for example when I find a matching pair of cards), because this increases my enjoyment from playing.**
    - A bing sound is played when a correct match is found, applause and cheering is heard when a game has been completed.
**6. Visual icons and images that I recoginise, so that I understand when I have achiveved something in the game. For example stars out of five, and a trophy for high score.**
    - Win modals display the players score out of 5 stars. A trophy is also shown if the player also achieves a new high score.
**7. The ability to see my old scores when I return to the game, so I can try to beat them.**
    - PicFlip! stores user name using localStorage, The users name, avatar choice and high scores for easy, medium and hard mode are loaded when the player returns to the game.
**8. A game that won't break as I use it**
    - PicFlip! Has been programmed with the way a child would use it in mind. 
        - when selecting cards to match, no more than 2 cards can be selected at one time. 
        - The game cannot be broken by clicking cards very fast to flip more than 2 over at a time.
        - PicFlip will not create weird displays if the game is reset at unexpected times. For example when an odd number of cards are flipped over.
        - The game was extensively tested by the developers children (4 and 9 years old).

**As a parent of a player, I want:**
**1. Levels of difficulty for my child to choose from, so that they are engaged for longer and the game is useable for a wider age range.**
    - The game includes 3 levels of difficlty, from 8, 12 or 16 cards to search though and find matching pairs. 
**2. A visually and operationally appealing game, so that I also have a positive expeience when using it with my child.**
    - Much thought and time has been put into designing a clean and attractive game that brings a positive user experience to both kids and adults alike. 
**3. The ability to delete a stored profile, so that I can reset the game for another go, or for another child.** 
    - This functionality has been incorperated into the game through the parental contol modal.
**4. The option to delete a profile to be easy for me to find, but not easy for a child who is randomly pressing buttons to access, so that a profile is not deleted by accident.**
    - For an a user who can read and do simple maths, the steps to find and complete deletion of a user profile is easy to find. A toddler who is randomly pressing buttons has a very low probability of stumbling on the correct order of buttons to delete their profile by accident.
**5. A mute button to be included, so that the sounds can be switched off when they become annoying. (If only the actual child came with one of those too!).**
    - A mute button has been included on the dashboard. 
**6. To know who made the game and how I can contact them.**
    - A discreet footer tab is included at the bottom of the game, with the developers name and a link to her github page. 


## Manual testing

1. Player info modal
2. Dashboard
    1. Player info display
    2. Difficulty selection buttons
        - Easy Button
        - Medium Button
        - Hard Button
    3. Character selection buttons
        - Cars
        - Frozen
        - Toy Story
    4. Mute button
    5. Reset button
    6. Info button
3. Turns counter
4. Playing the game
5. Info modal
6. Parental check modal
7. New High Score modal
8. Standard win modal
9. Footer tab


## Further testing: 

1. Asked fellow students, friends and family to look at the site on their devices and report any issues they find.
2. PicFlip! viewed on all devices and orientations available in Chrome DevTools, as well at a local tech store, no further issues found.

### Bugs discovered: 
#### Solved bugs
1. Bug one 
    - how it was solved
2. bug two
    - how it was solved 

#### Unsolved bugs
1. On firefox browser class `visible` effects do not appear immediately when clicking through difficulty selection buttons, despite the class name being added
successfully to the html. If window is resized, then the cards appear.