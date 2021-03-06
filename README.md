# Tainted Tomatillos

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

Do you need to know every detail about every movie that you want to see before you see it? Tainted Tomatillos is the app for you!

This was a paired project, where we were given two weeks to complete a movie database application using Asynchronous JavaScript, React, Router, Conditional Rendering, and Cypress acceptance testing. The Rubric & Spec for this project can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)

![Final_Main](https://user-images.githubusercontent.com/76409536/119431863-8ffeec00-bcd0-11eb-8d43-87b6699e127c.gif)

![Final_Details](https://user-images.githubusercontent.com/76409536/119431877-9a20ea80-bcd0-11eb-96dc-9297b6a963a4.gif)

### Notable Features

* Instant Search that populates any movie that matches a user's input

* Separate movie details display for every movie with data from an API

* Cypress testing to test all user flows, including both happy and sad paths

* Responsive and Responsible - Can be used on a wide variety of screen sizes and is fully accessible, with a 100% Lighthouse audit score

<p><img src="./assets/lighthouse-audit.png" alt="Lighthouse Audit" height="400px" height="auto" style="border-radius:5px"/><br></p>


## Installation

1. Clone this repo via `git clone git@github.com:battan40/Tainted_Tomatillos.git`
2. Access cloned directory
3. Run `npm install`
4. Run `npm start`

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Cypress Testing

1. Once your app is set up locally, install cypress by running `npm install cypress --save-dev`

2. To open and run the Cypress tests, run `npx cypress open`


## Walkthrough

1. Once you access the app, a user is immediately brought to the main landing page where all of the movie cards (each with their respective movie poster, title, and rating) will populate under a header and search bar.

2. To find a specific movie, a user can type into a search bar, where movies will instantly populate below if they match the criteria.

3. To see a specific movie's details, a user can click any movie card, which will bring them to that movie's details page. The movie details page includes: the movie poster, title, release date, rating, tagline, overview, genre(s), budget, revenue, and runtime.


## Learning Goals

* Gain competency with React fundamentals
* Learn how to test React Components & Asynchronous Javascript using Cypress
* Create a multi-page UX using Router


#### Angie's Learning Goals && Reflection

* Wants to feel at home with React and its clean modularity when she is finished with this project

* It was amazing to watch the layers of possibility unfold for us as we grew to understand the way the files communicated through each other. I see a lot of possibility in the future for this application


#### Ellie's Learning Goals && Reflection

* Becoming more comfortable with React and modular file structures; Continuing to practice writing clean and DRY code; Implementing Cypress Testing

* This project was a very interesting process of continued refactoring as we were slowly introduced to React, Conditional Rendering Router, and Cypress acceptance testing. Overall, I think this project was successful and I plan to continue to add features and refactor in the future.

## Evolution of the Project

We were given this project after one class on React. After this, we were completing iterations as we continued to take classes on React, Condtional Rendering, Cypress acceptance testing, and Router. As a team, we had regular check-ins to ensure we were meeting our project and personal goals, which was really helpful for our time management and balanced distribution of tasks.


## Future Iterations

* Refactor error handling for UX

* Add feature to display trailers for each movie

* Add feature to allow users to rate movies and store their ratings upon reload (persisting data)


## Authors
<table>
    <tr>
        <td> Ellie Azaveda <a href="https://github.com/EllieAzaveda">GH</td>
        <td> Angie Battillo <a href="https://github.com/battan40">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76409536?v=4" alt="E. Azaveda" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/58871312?v=4" alt="A. Battillo" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Framework</td>
        <td>Structure</td>
        <td>Styling</td>
        <td>Testing</td>
    </tr>
    </tr>
        <td><img src="./assets/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./assets/reactjs-icon.jpeg" alt="react" width="100" height="auto" /></td>
        <td><img src="./assets/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./assets/css-logo.png" alt="css" width="100" height="auto" /></td>
        <td><img src="./assets/cypress-logo.jpeg" alt="cypress" width="100" height="auto" /></td>
    </tr>
</table>
