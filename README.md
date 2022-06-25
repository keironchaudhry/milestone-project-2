# Rock, Paper, Scissors, Lizard, SPOCK! 

![amiresponsive-screenshot](https://user-images.githubusercontent.com/78651133/173227399-4dd0e913-e012-4628-89e9-334af61b91c9.jpg)

Rock, Paper, Scissors, Lizard, Spock is a game inspired by the well-known scene in the famed Big Bang Theory television series, in which one of the main protagonists, Sheldon Cooper, explains in his unique manner a rendition of the original well-known Rock, Paper, Scissors game. Here I have made an interactive version of the game using HTML, CSS and Javascript as part of the Code Institute Milestone Project 2. 

Users of the game will contend against the computer, which generates a hand choice at random. This site is a fun game, targeted towards adults and children, as it is based on pop-culture, is simple to use and quick to learn.  

The website contains two pages, the landing page with the gameplay tools and a guide page, with instructions. Both pages are linked via buttons and are easily accessible. 

A deployed version of the website can be found here: https://keironchaudhry.github.io/p2-rock-paper-scissors-lizard-spock/

**Requirements**

To create an interactive front-end site, which responds to the users' actions and how they interact with the site in engaging with data and alter the way the site displays information based on conditional criteria. The development of the site should be controlled and documented through Github. 

The required technologies are Javascript, CSS and HTML. 

# Table of content

* [UX](#ux)
     * [User demographics](#user-demographic)
     * [User goals](#user-goals)
     * [Design](#design)
     * [Typography](#typography)
     * [Colour](#colour)
     * [Images](#images)
* [Features](#features)
     * ['Game' page](#-game-page)
     * ['Guide' page](#-guide-page)
* [Site features](#site-features)
     * [Header](#header)
     * [Landing page](#landing-page)
     * [Guide page](#guide-page)
* [Technologies used](#technologies-used)
* [Testing](#testing)
* [Development and deployment](#development-and-deployment)
* [Media](#media)
* [Acknowledgments](#acknowledgments)


# UX 

### **User Demographic**

This site has been designed in mind for people of all ages, as its logical is fairly simple and the aim of the game can be completed by both an infant and an adult. 

### **User Goals**

* To be able to play a game.
* To be able to find the appropriate guide information for rules.
* To be able to know who has won or lost.
* To be able to reset the game afresh.

### **Design**

The design for the website was inspired by the [Love Maths project](https://keironchaudhry.github.io/love-maths/) in terms of how it has been laid out, however no direct code has been borrowed. 

The aim of the site was to create a visually complimenting environment where the background colours contrast pleasantly along with the emoji icons picked. 

The site consists of two HTML pages which are both interlinked and fully accessible, the first one being the landing page with the actual interactive game, and the second page being a written guide to where the idea for Rock, Paper, Scissors, Lizard, Spock came from, with a quote and a short clip from the TV show Big Bang Theory. Afterwards a visual guide for the winning hands appear toward the end of the page for clarity and then a button which leads the user straight back to the game.

### **Typography**

The fonts applied to this website was Akshar as the principal font of the headers and subheadings, and PT Sans Narrow for the paragraph elements across both pages.

### **Colour**

The colour design used for this project was the use of two principal colours, "Gainsboro" as the background colour and "Aliceblue" for the navigation bar. These two colours contrasted wonderfully to give a sense of modernity. They also contrasted particularly well with the colour of the emojis used for the hand selections, which range from gray, white, red, green and brown. The colour of the Reset and Guide buttons are a pinkish-red colour, "rgba(168, 52, 52, 0.671)". Overall the choice of colours all compliment one another, giving ease of access across the user interface.

### **Images**

No images were used in the making of this site however emojis were used for buttons. They were picked in accordance of colour, contrast, style and overall usefulness within the site and the user interface.

# Features

#### ** "Game" page
    * Header 
    * 'Guide' button
    * 'Hand' choice button(s)
    * Player/Computer score count
    * 'Reset' button
    
#### ** "Guide" page
    * Header
    * Description
    * Video
    * List of possibilities
    * 'Return' button
    
# **Site features**

### **Header**

  * Featured at the top of the page, it displays the game title clearly with a sub-title surrounded by emojis. 
  * The header clearly indicates what the user is playing.
  * Header is identical on both the landing page and the 'guide' page.

![nav-bar-screenshot](https://user-images.githubusercontent.com/78651133/173321793-7ac82d1d-3935-4b13-9b3a-1d2f0ee09f7a.jpg)

### **Landing page**

  * Features a 'guide' button, taking the user to the help page with instructions.
  * Features the buttons in which emojis have been made to clearly represent the choice of hand.
  * Displays the player and computer score, which are aligned and centred on the left and right for clarity. Emojis have also been placed to show clear representation both the player and computer.
  * Features a 'reset' button, identical in design to the 'guide' button for consistency, that resets the points or any modification to the page by the user/computer.

![landing-page-screenshot](https://user-images.githubusercontent.com/78651133/173323384-fef85281-b350-40d2-8dc5-4373eafed185.jpg)

### **Guide Page**

  * Features brief and concise information on the origins of the game for user knowledge.
  * Features a video of the exact clip where the game's origins is referenced (The Big Bang Theory, season 5, episode 17).
  * Displays a list of the winning possibilities, using the same emojis in the game page as a visual reference for user clarity.
  * Features a 'return to game' button, set at the bottom of the page, guiding the user back to the game page. 

![guide-page-screenshot](https://user-images.githubusercontent.com/78651133/173327718-313845f9-b33c-45df-82b2-c1f75cabf381.jpg)
![guide-page-outcomes-screenshot](https://user-images.githubusercontent.com/78651133/173327738-2c6fad31-6e23-4f97-b0fc-b2928079706b.jpg)

# Technologies used

  * HTML
  * CSS
  * Javascript

# Testing

Testing the functionality and overall appearence of the website has been largely dealt with throughout the creation and development of the site.

Testing of the site has been performed with Google Chrome, Mozilla Firefox and Safari. Testing the different sizes has been carried out using Google Developer Tools.

Some issues that came about were:

    1. The Youtube clip on the Guide page was causing an unexpected margin to occur down the right-hand side of the page.
        * Fixed in the media query, removed problematic code and added better CSS style.
        
    2. The buttons across all pages were nested in <a> anchor links, which caused an error in the HTML validator.
        * Removed the anchor links and replaced with <form> tags instead, which passed the HTML validator.
        
    3. There was duplicated code from the development process of the 'Game' page, picked up in the HTML validator.
        * Removed the duplicated code and made sure no such duplication was seen across any of the pages. 
        
    4. The nav bar was not nested within a header tag.
        * For consistency, added a <header> tag into both HTML pages and nested <nav> elements within them.
    
    5. Javascript code was generally quite repetitive upon revision, with much of the code being functionally redundant. 
        * All JS code has since been refactored (using the forEach method and a single .onclick rather than several) 
        and better reflects my learning of Javascript during this project. 
        
**Ongoing bugs**

Whilst there are no ongoing bugs in this project at present, future versions of this project will have more refactored Javascript code for the point system.

**Validator testing**

* HTML

    * No errors were returned when passing through the official W3C Validator

![project 2 html validator (1)](https://user-images.githubusercontent.com/78651133/173756773-a9c9d06b-ea88-4a2c-949e-3087674d352c.jpg)
![project 2 html validator (2)](https://user-images.githubusercontent.com/78651133/173756787-bbdc08e5-3849-47f2-b6e2-7248af2bd794.jpg)

* CSS

    * No errors were returned when passing through the official Jigsaw validator

![project 2 css validator](https://user-images.githubusercontent.com/78651133/173756975-1e87deca-a581-468d-806e-b5b8990f5d80.jpg)

* Javascript

    * No errors were returned when passing through the official JSHint Javascript validator

![project 2 javascript validator ](https://user-images.githubusercontent.com/78651133/175315069-ff020cf2-d3a0-4f26-a64c-9a1b05a26c01.jpg)

* Lighthouse testing

![project 2 lighthouse](https://user-images.githubusercontent.com/78651133/173760169-62421f32-496f-42b9-80e5-62f72a550c5e.jpg)


# Development and deployment

The development environment used for this project was Gitpod. Regular commits and pushes to Github have been employed to be able to track and trace the development process of the website.

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in GitHub Docs.

1.	Log into Github.
2.	Select desired GitHub Repository to be deployed live.
3.	Underneath the repository name, click the “Settings” option.
4.	In the sub-section list on the left, under “Code and automation”, click “Pages”.
5.	Within the ”Source” section choose ”main” as Branch and root as folder and click ”Save”.
6.	The page refreshes and a website shall then deploy via a link.

The following is the live link deployed: https://keironchaudhry.github.io/p2-rock-paper-scissors-lizard-spock/

# Media

All emojis were borrowed from https://getemoji.com/. 

The clip from the Big Bang Theory is a Youtube link (https://www.youtube.com/watch?v=x5Q6-wMx-K8).

# Acknowledgments

For inspiration, guidance and inputs, thank you to:

Sandeep Aggarwal

* Great mentor at Code Institute

Jack Crymble

* Friend and guide, thank you for your knowledge and insight!

Jody Murray

* Fellow student and colleague, thank you for your input!







