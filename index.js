// const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const genHTML = require("./src/template.js");

const inquirer = require("inquirer");

const fs = require("fs");

teamArray = [];

function run() {

    function makeTeam() {
    inquirer.createPromptModule([{
        type: "list",
        message: "What type of employee would you like to add as a team member?",
        choices: ["Manager", "Employee", "Engineer", "Intern", "N/A"]
    }]).then(function(useInput){
    switch(useInput.addPrompt) {
        case "Manager":
            addManager();

        case "Intern":

            addIntern();
        case "Engineer":
            addEngineer;

        default:
            buildHTML();
        }       
    })
}
}

function addManager() {
    inquirer.prompt ([

        {
            type: "input",
            name: "managerName",
            message: "What is the Manger's name?"
        },

        {
            type: "input",
            name: "managerID",
            message: "What is the Manger's ID?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manger's Email?"
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Manger's office number?"
        },

    ])
}