/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "../scss/style.css"
import BlackJackCasino from "../Images/BlackJackCasino.png"
import WorldRecipeGenerator from "../Images/WorldRecipeGenerator.png"
import EmployeeManagementSystem from "../Images/EmployeeManagementSystem.png"
import PasswordGenerator from "../Images/PasswordGenerator.png"

function Portfolio() {
    return (
        <div>
            <section className="project__grid">  
                <div className="project__item">
                <div>
                    <p className="project__title">BlackJack Casino</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/Project2.git">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1gNp3-aFsfN4p1X5qIHFrtILm7UIg1F0k/view">Video Demo Link</a>
                    <a href="https://frozen-wildwood-18963.herokuapp.com/">Heroku Site Link</a>
                    </p>
                    <p className="project__description">Project Description: Play a game of BlackJack against the house. 
                    Start the game with 5000 in the bank, once the player is finished with playing the game, 
                    they have the option to add their name and score to the leaderboard after each round. 
                    If the player lost everything in the bank, bank is set back to the default amount.
                    </p>
                    <p>
                    Note: Group Project: Mainly responsible for creating the front-end homepage,
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
                    <a href="https://github.com/EgiVilza/NutritiousRecipeGenerator.git">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1i8II1TfKTViA3zX4ZIqisy2NNL5KZiDK/view">Video Demo Link</a>
                    <a href="https://egivilza.github.io/NutritiousRecipeGenerator/">Github Page Link</a>
                    </p>
                    <p className="project__description">Project Description: This project is a web application that allows users to quickly display recipes from a recipe API in different ways,
                    to inspire creativity in the kitchen. The landing page is a recipe search where the user can simply search for whatever recipe they wish.
                    On the "World Recipes" page, the user can use a world map or dropdown menu to search for recipes based on where they originate.
                    Also, the "Advanced Search" page allows the user to filter their search for additional parameters, including many common dietary restrictions. 
                    Lastly, the "Saved Recipes" page allows the user to see any recipe again (local storage) after they click the save button next to each recipe on the other pages.
                </p>
                <p>Note: World recipes page may not work on github due to https restrictions.</p>
                <p>
                    Note 2: Group Project: Mainly responsible for the front-end for each page and
                    the back-end for the home page and the advanded page.
                </p>
                </div>
                <img src={WorldRecipeGenerator}></img>
                </div>

                <div className="project__item">
                <div>
                    <p className="project__title">Employee Managment System</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/Employee_Tracker.git">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1KqPml_ouI3hD3j_BG7UQglMA5ib2R-ru/view">Video Demo Link</a>
                    </p>
                    <p className="project__description">Project Description: This project is to demonstrate a employee management system that has the functionality to view, add, and remove 
                    employees/departments/roles through the use of mysql and npm inquirer (by using the console terminal). 
                    Three tables are created in the mysql database (employees/departments/roles)
                    and foreign keys are used to display the relationship of the employee with the manager, department, and role.
                    </p>
                </div>
                <img src={EmployeeManagementSystem}></img>
                </div>

                <div className="project__item">
                <div>
                    <p className="project__title">Password Generator</p>
                    <p className="project__links">
                    <a href="https://github.com/EgiVilza/PasswordGenerator.git">Github Repo Link</a>
                    <a href="https://drive.google.com/file/d/1wUZ6aScHn4i0CUDFCN_6-sNiJNrGoaCM/view">Video Demo Link</a>
                    <a href="https://egivilza.github.io/PasswordGenerator/">Github Page Link</a>
                    </p>
                    <p className="project__description">Project Description: To generate a random password by asking a series of questions 
                    based on the criteria needed to generate the password. The series of question will be prompted to the user
                    after clicking the "Generate Password" button.
                    </p>
                </div>
                <img src={PasswordGenerator}></img>
                </div>
            </section>
        </div>
    )
}

export default Portfolio