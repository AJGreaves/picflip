<h1 align="center">
  <a href="https://ajgreaves.github.io/picflip/" target="_blank"><img src="https://i.ibb.co/SdxYJty/pic-Flipbanner.png" alt="PicFlip! logo"/></a>
</h1>
<h2 align="center">
<a href="https://ajgreaves.github.io/picflip/" target="_blank"><img src="https://i.ibb.co/f8g0CYk/tagline.png" alt="Memory card game for pre-school kids" ></a>
</h2>

<div align="center"> 

[PicFlip!](https://ajgreaves.github.io/picflip/) is an engaging and entertaining memeory card game, designed for children aged between 1 and 5 years old. 
Features include easy to operate controls, 3 levels of difficulty, entertaining animations and sounds,
characters that children enjoy, with an overall feel of child friendly entertainment.
<br>

[View the PicFlip! page](https://ajgreaves.github.io/picflip/)

</div>

## Table of Contents

- [**UX**](#ux)<br>
[**Project Goals**](#project-goals)<br>
[**Player goals**](#player-goals)<br>
[**Parental goals**](#parental-goals)<br>
[**Developer/Buinsess Goals**](#developer-business-goals)<br>
[**User Stories**](#user-stories)<br>

- [**Features**](#-features)<br>
[**1. Existing Features**](#existing-features)<br>
[**2. Features Left to Implement**](#features-left-to-implement)<br>

- [**Technologies used**](#technologies-used)<br>

- [**Testing**](#testing)<br>

- [**Deployment**](#deployment)<br>

- [**Credits**](#credits)<br>
[**1. Content**](#content)<br>
[**2. Media**](#media)<br>
[**3. Code**](#code)<br>
[**4. Acknowledgements**](#acknowledgements)<br>

## UX

### Project Goals

The primary goal of PicFlip! is to provide a clean, intuative and child friendly game to entertain and delight it's users.
PicFlip! has two target audiences: Pre-school children and their parents. 

#### Player goals

The central target audience for this game are pre-school children aged 1 to 5 years old.

Players goals are:
- A fun game to play.
- Child friendly controls.
- Large buttons and clickable areas for young fingers to operate.
- All game controls laid out together and in an intuative way. 
- Fun images and sounds. 
- Visual and audio rewards while playing.

PicFlip! is a great way to help players meet these needs because:
- The planning and design process took all these needs into account before starting to build it. 
- Controls are grouped together clearly.
- Game controls are large, utlising icons and colors to commuinicate their purpose before any words that a child would not be able to read. 
- PicFlip! includes audio and visual rewards as part of the game.
- The overall feel of PicFLip! is fun and child-friendly.

#### Parental goals

Parents of pre-school children have a large amount of say about what games their children are exposed to, 
therefore parental needs must also be at the forfront of any project designed for children in this age group. 

Parents goals are:
- A game with child development value. In this case to improve their memory and spacial awareness.
- Usability for the range of abilties in pre-school kids.
- A visiualy appealing, well functioning game. 
- The ability to for parent to reset the stored player profile. 
- A mute button.

PicFlip! is a great way to help parents meet these needs because:
- PicFLip! gives a child a fun enviroment in which to practice their memory skills. 
- Game includes 3 levels of difficulty ranging from 8 to 16 cards.
- It has been designed with user experience as a priority, not only for a child using it but also for a parent.
- The game includes a reset data option, which is easy to find an operate by an adult who can read and do simple mathematics.

#### Developer/Buinsess Goals

- Well thought out programming that prepares for a child's random and unpredictable use of PicFlip! 
For example, that the game cannot be broken by clicking many areas quickly, or if it is restarted at an unexpected moment. 
- A professional looking first dip into the world of using JavaScript, jQuery and Jasmine. 
- A project the developer is excited to make a part of her portfolio. 

#### User Stories

As a player aged between 1-5 years old, I want:
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

### Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project. 

- [User info modal](https://i.ibb.co/FWBy68Q/Create-profile.png)
- [Game page](https://i.ibb.co/H2XtCW9/Game-page.png)
- [Win pop-up](https://i.ibb.co/5809P3Q/Win-popup.png)

## Features
 
### Existing Features

1. **Player info modal**
    - On arriving at the page for the first time, this modal pops up to collect the players name and their choice of avatar image from the three available. 
    - This modal is also activated if stored player data is reset. 
    - The modal has been programmed to not close unless both the name has been filled out at an avatar has been chosen. Tooltips appear to guide the user to choose both.
    - The default setting for modals that they can be closed if clicking on the modal background has also been disabled.  

<div align="center">
<img src="https://i.ibb.co/NpXs3QC/user-info-modal.jpg" alt="Screenshot: User info modal" >
</div>


2. **Dashboard**
    - The game dashboard contains the player info display, difficulty selection, character selection, info, mute and reset buttons. 

<div align="center">
<img src="https://i.ibb.co/pwn3GFV/game-board.jpg" alt="Screenshot: Game board" >
</div>


3. **Player info display**
    - At the top of the dashboard the players name is displayed with their chosen avatar. 
    - Underneeth this is the display to show their heighest score (out of 5 stars) for the currently selected difficulty level. 
    - The star display changes if a different level is selected. 

4. **Difficulty selection buttons**
    - Players can select from three difficutly levels: Easy (8 cards), Medium (12 cards) and Hard (16 cards).
    - The difficilty buttons are coloured green, yellow and red for users who can't read to tell them apart.
    - Selecting any of these buttons turns any face-up cards back over and reshuffles the cards.

5. **Character selection buttons**
    - Players can choose from three different disney movie characters to disaply on the memory cards.
    - Selecting any of these buttons turns any face-up cards back over and reshuffles the cards.

6. **Mute button**
    - The mute button switches off all audio in the game. It is represented by a large speaker icon, which switches to one with a cross next to it when active.
 
7. **Reset button**
    - The reset button, represented by a curved arrow, resets the game, when it is pressed the game turns any face-up cards back over, reshuffles them and resets the turns counter back to 0. 
    - It does not reset the diffculty level or characters chosen for the cards. 

8. **Info button**
    - Represented by a large question mark, the info button opens the info modal. 
    - The info modal offers easy to understand instuctions on how to play the game. 
    - Underneeth how to play instructions there is inforamtion on how to open the modal to delete the players profile. 
    - The place to click is easy for an adult to see, but not an obvious button to click for a child. 

<div align="center">
<img src="https://i.ibb.co/xJ7PbS2/info-modal.jpg" alt="Screenshot: Info Modal" >
</div><br>

9. **Parental check modal**
    - This modal appears if the correct icon is clicked in the info modal. 
    - It explains that deleting the player profile will remove all game data including high scores. 
    - Then it asks a simple maths question with 9 possible answers to choose from, only if the correct answer is clicked will the player profile be deleted. 
    - All other choices will close the modal when clicked with no further effects to the game.
    - At this point the maths question and correct answer are static. This is a feature I would like to upadate in the future (see [Features Left to Implement](#Features-left-to-implement) for more inforamtion)

<div align="center">
<img src="https://i.ibb.co/nrRkQsq/delete-data-modal.jpg" alt="Screenshot: Parental check modal" >
</div>


10. **Turns counter**
    - Located above the game cards, the turns counter counts the number of turns the playe has taken in the current game. 
    - This total is then used to give the player a score out of 5 stars when the game is complete.

11. **Game board and cards**
    - The game board is where the memory cards are displayed. 
    - The cards are laid out in a grid 4 cards wide on medium to large screens, and 3 cards wide on phones to allow the size to remain easy for young fingers to tap on.
    - The number of rows of cards visible changes depending on the difficulty level selected. 

<div align="center">
<img src="https://i.ibb.co/q5sDjB4/mobile-view.jpg" alt="Screenshot: game board mobile view" >
</div>


12. **Win modals** 
    - PicFlip! has two possible win modals that pop up when a game is completed. 
    - Both win modals display the number of stars the player won for the game they just played.
    - The standard win modal is launched if the player completed the game, but did not beat their previous high score.
    - The high score win modal is launched for a new high score, along with the number of stars earned the high score win modal also displays a trophy picture.

<div align="center">
<img src="https://i.ibb.co/YRjzhw5/high-score-modal.jpg" alt="Screenshot: high score modal" >
</div>


13. **Footer tab**
    - a small tab is displayed at the bottom of the website that when clicked pulls up a short footer with developer information on. 

### Features Left to Implement

1. **Improvements to the parental check modal**

In the future more functionality can be added to the parental check modal to: 
    - Randomize the math question and active number to click to prove you are an adult. 
    - if the incorrect answer is given the math question/answer is randomised again. 
    - If the incorrect choice is made 5 times in a row then the modal closes. 

2. **Additional difficilty level**
    - Add level "insane" for older kids to try. 
    - This would only be possible on mobiles if converted into a mobile app, as the full screen would be needed to make enough room for all the cards.

3. **Conversion to a mobile App**
    - If this project were to become commercial the current card pictures would have to be changed to ones commissioned specifically for it, rather than using disney images.

------
## Technologies Used

- This project uses HTML, CSS and JavaScript programming languages.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Cloud9](https://c9.io) 
    - Developer used **Cloud9** for their IDE while building the website.
- [BootstrapCDN](https://www.bootstrapcdn.com/)
    - The project uses **Bootstrap4** to simplify the structure of the website and make the website responsive easily.
    - The project also uses BootstrapCDN to provide icons from [FontAwesome](https://www.bootstrapcdn.com/fontawesome/)
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** to style the website fonts.
- [Imgbb](https://imgbb.com)
    - All external images for this project are stored on **Imgbb.com**.
- [Jasmine](https://jasmine.github.io/)
    - This project used **Jasmine** to automatically test all JavaScript and jQuery code.
- [GitHub](https://github.com/)
    - This project uses **GitHub** to store and share all project code remotely. 

## Testing 

Testing information can be found in separate [testing.md](testing.md) file

## Deployment

This project was developed using the [Cloud9 IDE](https://c9.io), committed to git and pushed to GitHub using the built in function within cloud9. 

To deploy PicFlip! to GitHub Pages from [its GitHub repository](https://github.com/AJGreaves/picflip), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repositories on the screen, select **AJGreaves/picflip**.
3. From the menu items near the top of the page, select **Settings*.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labeled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, PicFlip! Is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

The PicFlip project made use of several branches for development, testing and bug fixing. 
The Master Branch has always been the one deployed to GitHUb Pages as the developer tries to keep the master branch to optimal code only when displaying live.
At the moment of submitting this Milestone project the Development Branch and Master Branch are identical. 

## Credits

### Content

- All text in this project was written by the developer.

example:
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media

#### Images
- The PicFlip logo was created using [Hatchful](https://hatchful.shopify.com).
- The Trophy image used was sourced from [Kissping](https://www.kisspng.com).
- The images for the user avatar were sourced from [Pngtree](https://pngtree.com).
- The images used for the memory cards were obtained from [Google Images](https://www.google.com/imghp?hl=en) and are used for educational purposes only. 
Copyright for the memory card images belong to [Disney](https://www.thewaltdisneycompany.com/) and [Pixar](https://www.pixar.com/).
- The comic-book style modal backgrounds were sourced from [freepik](https://www.freepik.com)
- The game board background photograph was obtained from [Jason Leung on Unsplash](https://unsplash.com/photos/M55JcA9wOG0).

#### Audio
- The audio file for button click sound was sourced from [SoundJay](https://www.soundjay.com).
- The audio files for card flip sound, matched cards sound and children applauding were sourced from [FreeSound](https://freesound.org/).

### Code
- Code for the card flip animation taken from [W3Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp).
- Box shadow codes were generated at [CSS matic | box-shadow](https://cssmatic.com/box-shadow).

### Acknowledgements

Special thanks to: 
- Code Institute Mentor Simen Daehlin for his time and support in explaining and demonstrating areas of code this developer was struggling to understand.
- Alumni John Longgately and Robin Zigmond for their help in guiding this developer in understanding JavaScript, jQuery and Jasmine testing. 

**Disclaimer**

The content of this Website, including the images used, are for educational purposes only.