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
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected. 

### Testing undertaken on desktop
All steps on desktop were repeated in browsers: Firefox, Chrome and Internet Explorer and on two different desktop screen sizes.

1. Player info modal
    - Opened the game in a brand new browser, and verify that the player info modal is automatically launched.
    - Closed the page without inputting any information, the reopened the page and verified that the player info modal is launched. 
    - Closed the page with only one of the two fields filled out, confirmed that on reloading the player info modal is still launched.
    - Tried to close the player info modal without filling out either of the required inputs. 
    - Confirmed that the modal will not close and alerts are given to guide the player to fill out both fields. 
    - Tried to input a long string of letters into the username field, confirmed that it will take a maximum of 15 characters. 
    - Input a name and chose an avatar from the 3 choices, closed the modal without hitting submit, confirmed that the modal is launched again on relaoding the page. 
    - Input a name and chose an avatar, clicked the submit button and confirmed that the modal closes. 
    - Reset the player data using the [parental check modal](#parental-check-modal)
        - confirmed that the name on the dashbaord is reset to "Player", 
        - the default avatar is displayed,
        - any high scores are reset to 0.
        - and that the player info modal is relaunched, behaving as it had done before.
        - test that different avatar choices and name inputs always display correctly on the player dashboard.
    - Hovered my mouse over each aspect of the player info modal to check that all the relevant descriptions for screen readers were showing up. 
2. Dashboard
    1. Player info display
        - Confirmed that the input name and avatar choice collected from the player info modal are displayed correctly on the player dashboard.
        - Played the game and collected high scores, checked that they were displayed correctly under the user avatar.
    2. Difficulty selection buttons
        - Easy Button
            - Selected the easy button and confirmed that the game displayed 8 cards only. 
            - played the game to find 2 matches, then clicked the easy button again, confirmed that all cards were flipped back over and the game was reset.
            - Confirmed that when I played again that the images had been shuffled. 
            - Completed the game in easy mode, and confirmed that the high score was visible under the user avatar. 
            - Confirmed that when another difficult mode was clicked the high score for easy mode was replaced. 
            - Confirmed that on clicking the easy mode button again that the correct high score for easy mode is displayed. 
        - Medium Button & Hard Button
            - repeated all steps done on the Easy button on both the Medium and Hard buttons. 
            - Confirmed that correct scores were always displayed depending on the difficulty level chosen. 
            - Clicked the difficulty selection buttons repeatedly and very quickly to confirm that this does not break their operation. 
    3. Character selection buttons
        - Cars cards
            - Selected the Cars button and confirmed that the images displayed on the cards were correct for the disney movie chosen. 
            - played the game to find 2 matches, then clicked the Cars button again, confirmed that all cards were flipped over and the game was reset. 
            - Confirmed that clicking the Cars button reshuffles the cards. 
        - Frozen & Toy Story cards
            - Repeated all steps done on the Cars chacter selection button on the Frozen and Toy Story buttons.
            - Clicked the character selection buttons repeatedly and very quickly to confirm that this does not break the operation of the game. 
    4. Mute button
        - Confirmed that I could hear all audio elements when playing the game.
        - Clicked the mute button and confirmed that the icon displayed on it changed to represent muted mode.
        - Confirmed that none of the audio elements play while the mute button is active. 
        - Clicked the mute button again and confirmed that all audio elements play again. 
        - Clicked the mute button repeatedly and very quickly to confirm that this does not break the mute operation. 
    5. Reset button
        - Played the game so several cards were face up, then clicked the reset button to confirm that the face up cards were flipped back over. 
        - Confirmed that the turns counter in the game is also reset to 0.
        - Confirmed that even when an odd number of cards are face up, when the reset button is clicked the turns counter is reset to 0.
        - Played the game again to confirm that the cards had been shuffled. 
        - Played the game so I had some high scores, pressed the reset button and confirmed that the high scores were not effected. 
    6. Info button
        - Pressed the info button and confirmed that the info modal was launched correctly. 
3. Turns counter
    - Played the game and confirmed that the turns counter increases by one for over two cards flipped over. 
    - Confirmed that clicking the cards really fast does not break the turns counter.
    - Confirmed that the turns counter is reset to 0 every time the game is reset (using difficulty buttons, character choice buttons or reset button).
    - Confirmed that if the game is closed and reopened, the turns counter is also reset to 0. 
4. Playing the game
    - Confirmed that when two cards are flipped over, the game checks if they match.
    - If they match, confirmed that the correct match sound is played, and the cards remain face up and cannot be clicked again. 
    - If they don't match, confirmed that the game flips the cards back over after a delay, so that the player can see what was on the 2nd card. 
    - Confirmed that clicking the cards really fast does not cause errors with too many cards being face up at once.
    - Confirmed that clicking the cards really fast does not cause the card flipping audio sound to break.
    - Played the game to completion, confirmed that the game launches the correct win modal for the score achieved. 
5. Info modal
    - Confirmed that the info modal is displayed correctly. 
    - Confirmed that all text is readable.
    - Clicked the red hand icon to confirm that the parental check modal is launched from it correctly, and that this closes the info modal at the same time.
    - Reopened the info modal and confirmed that clicking the close button closes the modal. 
6. Parental check modal
    - Confirmed that the parental check modal is launched correctly. 
    - Confirmed that clicking anything except the correct answer to the maths question causes the modal to close without resetting the player data.
    - Confirmed that clicking the correct answer resets the player data, closes the parental check modal and launches the user data modal. 
7. New High Score modal
    - Played the game to get a new high score, confirmed that the high score modal (with the trophy on it) is displayed.
    - Confirmed that the high score modal displays the correct number of stars for the new score. 
    - Confirmed that the win audio file plays when the modal is launched. 
    - Confirmed that clicking the close button closes the modal and reset the game.
8. Standard win modal
    - Played the game to get a lower score than my high score, confirmed that the standard win modal is launched. 
    - Confirmed that the win modal displayes the correct number of stars for the score achieved in the current game.
    - Confirmed that the win audio file plays when the modal is launched. 
    - Confirmed that clicking the close button closes the modal and reset the game.
9. Footer tab
    - Clicked the footer tab at the bottom of the screen and confirmed that it lifts up without affecting the height of the browser window.
    - Clicked the footer tab again to confirm the animation back downwards. 
    - Hovered mouse over the github icon and confirmed that the hover effect is animated.
    - Clicked the github icon and confirmed that the link is opened in a new tab. 

### Testing undertaken on tablet and phone devices
All steps below were repeated to test mobile specific elements on the developers 2 Samsung phones and tablet. 
And also in the Chrome Developer Tools device simulators on all options and orientations.

1. Player info modal
    - Checked the player info modal fits on small and medium screens easily.
    - Confirmed that font sizes are responsive so screen size so it is displayed in a way that all users can use.
    - Confirmed fields and buttons are large enough to click easily, but small enough to fit comfortably on the screen.
2. Dashboard
    - Confirmed that on mobile phones the dashboard is displayed first at full width, and scrolling down the game board is underneeth it.
    1. Player info display
        - Checked that player info displays correctly on smaller screens, not too much space, and no squashing or overlapping of elements even on smallest screens.
    2. All dashboard buttons
        - Checked that all buttons are large enough for young fingers to click easily, but small enough to fit comfortably on small screens. 
3. Turns counter
    - Checked that turns counter is visible when playing. 
    - On a small mobile phone when in hard mode (16 cards) the turns counter cannot be seen, however making the cards smaller would hinder the gameplay. Player can easily scroll up to see the turns counter if they wish.
4. Playing the game
    - All cards can be seen at once in hard mode (16 cards), even on smallest mobile phone screens. 
    - Checked that game board is full width of the screen on mobile devices.
5. Modals for Info, parental check, win and high score:
    - Checked the info modals fit on small and medium screens easily.
    - Confirmed that font sizes are responsive so screen size so they are displayed in a way that all users can use.
    - Confirmed that all buttons are large enough to click easily, but small enough to fit comfortably on the screen.
9. Footer tab
    - Confirmed that footer tab is always at the bottom of the content on all screen sizes. 
    - Confirmed that footer tab operates as expected when tapped on mobile devices.
    - Confirmed that the footer element does not cause positioning problems with screens of different sizes and dimentions. 

### Bugs discovered: 
#### Solved bugs
**1. Clicking the cards really fast caused too may cards to be face up.**
Though my function to check a card match was set to activate when two cards were selected, 
clicking fast meant that 3 or more cards could be flipped over before the check for a match had been done. 
- Fix: The checkCounter function was created to limit the number of times a user can select cards in each turn. 

**2. Not all flipped back over if no match was found.**
This issue came with the one listed above, if three cards were flipped over (by clicking very fast) 
before the program checked if they matched, there were many errors with the 3rd card, including it not flipping back over again until the next turn was taken. 
- Fix: See above.

**3. Turns counter counted incorrectly when cards clicked too fast.**
The turns counter was also confused by fast clicking of cards. Fortunatly the fix above solved this as well! 
- Fix: See above.

**4. Turns counter did not reset correctly if the game was reset when an odd number of cards were face-up**
The turnsCounter relies on the flipCounter to tell it when to increase it's count by 1, I had forgotten to reset the flipCounter to 0 as well on resetting the game.
This caused the turns count to go up by 1 when only half a turn had been taken.
- Fix: I reset the flipCounter to 0 as well as the turnsCounter whenever the game was reset.  

**5. Audio of cards flipping over did not play the second flip if cards clicked too fast.**
The card flipping audio file is 1.5 seconds long, if the first card was clicked this would trigger the audio file to play, however if the second card was clicked before this
audio file was completed, it would not play for the second card. 
- Fix: An extra line of code was added to reset the audio file back to 0 seconds whenever it was clicked on to play. This means you can ge 0.5s of the file, click again and it starts from the beginning again.
This solution was also applied to button click audio files.

**6. On resetting the game, the new shuffled cards could be seen before cards finished flipping back over.**
The game was programmed to animate the cards flipping back over, which takes around half a second. The newly shuffled cards could be seen as the cards flipped back over.

- Fix: To fix this I used the setTimeout function to delay displaying the cards until after the animation is complete. 

**7. localStorage caused errors in display high score data if there was no data to load**
If a player created a profile, played one or two levels of diffculty and then reloaded the page, the remaining level of difficulty displayed one star as it's high score,
when there should have been no stars. The error here was caused when loading the data from localStorage and displaying it on the screen. 
- Fix: The checkForUserData had extra checks added to it and set the value of uninitialied data in localStorage to 0. Then the high score stars for unplayed levels displayed correctly. 

**8. The modal to collect user data could be closed without inputting all the fields**
It is important for the game to collect user name and avatar choice before it will start playing. 
The default setting for bootstrap modals is that they can be clicked away by clicking the close button or clicking on the modal background. 
- Fix: 
    - The default bootstrap modal functions were disabled in my own JavaScript to prevent this from happening. 
    - The modal was programmed to only close when a name was entered and an avatar was chosen. 
    - The modal was also programmed not to close if it had stored an empty string as the value for userName.

**9. document.ready in game.js when testing with Jasmine**
Jasmine tests could not see the code to check it because the game.js file was waiting for the document to be ready before loading.
- Fix: ```document.ready()``` was removed from the game.js file. As the file is called at the bottom of my index.html file it was not nessasary to use anyway. 

**10. checkForWin operations repeating themselves**
This bug was caused by including setTimeout on the function to call the win modal, all of which was originally inside the checkForWin function. 
The timeout caused elements of the checkForWin function to repeat themselves. 
- Fix: delayDisplayModal function was created, with the setTimeout to call the win modal inside it. 
This was then called from inside the checkForWin function and no longer conflicted with the rest of its operations.

**11. No limit to the number or characters that could be entered as a user name**
An unlimited size string could be added to the userName field, causing display issues (name going beyond the width of the area it is to be displayed in) and potential security risks.
- Fix: The input field had a maximum lenght of 15 characters set in the html. 

**12. Footer Tab displaying in odd places and cutting through game board on screens with a short height and wide width**
This bug was caused by the height properties of the dashboard and game board. 
Multiple solutions were tried before discovering the following code was provided by a fellow student to fix the footer to the bottom of the page successfully. 
```
#content-wrapper {
	display: flex;
	min-height: 100vh;
    flex-direction: column;
}

main {
	flex: 1;
}
```


#### Unsolved bugs
**1. On firefox browser class ```visible``` effects do not always appear immediately when clicking through difficulty selection buttons**
Despite the class name being added successfully to the html. If window is resized, then the cards appear. 
I have been unsuccessful in working out why this happens or how to to fix it, as it appears to be browser specific only to firefox and does not always happen. 

## Further testing: 

1. Asked fellow students, friends and family to look at the site on their devices and report any issues they find.
2. PicFlip! viewed on all devices and orientations available in Chrome DevTools, as well at a local tech store, no further issues found.