Guidelines: 
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. 
Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, 
with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the 
test file(s) and explain how to run them.

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

**Validation services**
The following validation services and linter were used to check the validity of the website code.
- [W3C Markup Validation]( https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

**Jasmine**


## Client stories testing

As a player, I want:
1. The ability to easily find and understand the controls for the game, so that I can operate them easily. 
2. A large easy to press buttons and controls, so that my young fingers can use them easily on all devices.
3. Audio and/or visual feedback when I play the game, so that I know when I have clicked or not clicked something.
4. The ability to choose from cards with my favourite childrens characters on, so that I am even more engaged in finding them in the game.
5. Postitive audio feedback when I complete a step in the game (for example when I find a matching pair of cards), because this increases my enjoyment from playing.
6. Visual icons and images that I recoginise, so that I understand when I have achiveved something in the game. For example stars out of five, and a trophy for high score.
7. The ability to see my old scores when I return to the game, so I can try to beat them.

As a parent of a player, I want:
1. Levels of difficulty for my child to choose from, so that they are engaged for longer and the game is useable for a wider age range.
2. A visually and operationally appealing game, so that I also have a positive expeience when using it with my child.
3. The ability to delete a stored profile, so that I can reset the game for another go, or for another child. 
4. The option to delete a profile to be easy for me to find, but not easy for a child who is randomly pressing buttons to access, so that a profile is not deleted by accident.
5. A mute button to be included, so that the sounds can be switched off when they become annoying. (If only the actual child came with one of those too!).
6. to know who made the game and how I can contact them. 

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