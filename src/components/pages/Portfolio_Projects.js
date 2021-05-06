/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "../scss/style.css"
import BlackJackCasino from "../Images/BlackJackCasino.png"
import WorldRecipeGenerator from "../Images/WorldRecipeGenerator.png"
import EmployeeManagementSystem from "../Images/EmployeeManagementSystem.png"
import CasinoMultiplayer from "../Images/CasinoGamePage.png"

function Portfolio() {
    return (
        <div>
            <section className="project__grid"> 
                <div className="project__item">
                <div>
                    <p className="project__title">Casino (BlackJack) Multiplayer</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/Casino_Multiplayer.git" target="_blank" rel="noreferrer">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1ugrEch-keI5W2pdDVlJBlyUdVIMXEbLU/view" target="_blank" rel="noreferrer">Video Demo Link</a>
                    <a href="https://casino-multiplayer.herokuapp.com/" target="_blank" rel="noreferrer">Heroku Site Link</a>
                    </p>
                    <p className="project__description">Project Description: 
                    Play a multiplayer game of BlackJack against the house with you and your friends! 
                    To start, the user must make an account by signing up with their username, email, and password. 
                    After signing in, the user will be directed to the game page
                    and will have the option to join the game. Once they have joined the game, they will be able to view other players
                    who have also joined the game. When the user is finished playing the game, they will be able to submit their score on the leaderboard.
                    </p>
                    <p className="project__description">
                        Group Project: Mainly responsible for creating the signup and login page (Frontend/Backend)
                        such as the saving player record to the Mongoose/MongoDB database, token session verification and validation, 
                        user authentication, alerts, and css styles.
                    </p>
                </div>
                <img src={CasinoMultiplayer}></img>
                </div>

                <div className="project__item">
                <div>
                    <p className="project__title">BlackJack Casino</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/Project2.git" target="_blank" rel="noreferrer">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1gNp3-aFsfN4p1X5qIHFrtILm7UIg1F0k/view" target="_blank" rel="noreferrer">Video Demo Link</a>
                    <a href="https://frozen-wildwood-18963.herokuapp.com/" target="_blank" rel="noreferrer">Heroku Site Link</a>
                    </p>
                    <p className="project__description">Project Description: Play a game of BlackJack against the house. 
                    Start the game with 5000 in the bank, once the player is finished with playing the game, 
                    they have the option to add their name and score to the leaderboard after each round. 
                    If the player lost everything in the bank, bank is set back to the default amount.
                    </p>
                    <p className="project__description">
                    Group Project: Mainly responsible for creating the front-end homepage,
                    implementing handlebars, and adding the functionality from the back-end and
                    implementing it to the front-end.
                    </p>
                </div>
                <img src={BlackJackCasino}></img>
                </div>

                <div className="project__item">
                <div>
                    <p className="project__title">World Recipe Generator</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/NutritiousRecipeGenerator.git" target="_blank" rel="noreferrer">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1i8II1TfKTViA3zX4ZIqisy2NNL5KZiDK/view" target="_blank" rel="noreferrer">Video Demo Link</a>
                    <a href="https://egivilza.github.io/NutritiousRecipeGenerator/" target="_blank" rel="noreferrer">Github Page Link</a>
                    </p>
                    <p className="project__description">Project Description: 
                    This project is a web application that allows users to quickly display recipes from a recipe API in different ways that
                    inspires creativity in the kitchen. The landing page is a recipe search where the user can simply find whatever recipe they wish.
                    On the "World Recipes" page, the user can use a world map or dropdown menu to search for recipes based on country of interest.
                    The "Advanced Search" page allows the user to filter their search for additional parameters, including many common dietary restrictions. 
                    And lastly, the "Saved Recipes" page allows the user to see any recipe again (local storage) after they click the save button next to each recipe.
                </p>
                <p className="project__description">
                    Group Project: Mainly responsible for the front-end for each page and
                    the back-end for the home/advanded pages.
                </p>
                </div>
                <img src={WorldRecipeGenerator}></img>
                </div>

                <div className="project__item">
                <div>
                    <p className="project__title">Employee Managment System</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/Employee_Tracker.git" target="_blank" rel="noreferrer">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1KqPml_ouI3hD3j_BG7UQglMA5ib2R-ru/view" target="_blank" rel="noreferrer">Video Demo Link</a>
                    </p>
                    <p className="project__description">Project Description: 
                    This project is to demonstrate a employee management system that has the functionality to view, add, and remove 
                    employees/departments/roles through the use of mysql and npm inquirer (by using the console terminal). 
                    Three tables are created in the mysql database (employees/departments/roles)
                    and foreign keys are used to display the relationship of the employee with the manager, department, and role.
                    </p>
                </div>
                <img src={EmployeeManagementSystem}></img>
                </div>
            </section>
        </div>
    )
}

export default Portfolio