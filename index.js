// const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const genHTML = require("./src/template.js");

const inquirer = require("inquirer");

const fs = require("fs");

teamArray = [];

// function run() {

// }
function makeTeam() {
    inquirer.prompt([{
        name: "employeeType",
        type: "list",
        message: "What type of employee would you like to add as a team member?",
        choices: ["Manager", "Employee", "Engineer", "Intern", "N/A"]
    }]).then(function (useInput) {
        switch (useInput.employeeType) {
            case "Manager":
                addManager();
                break;
            case "Intern":

                addIntern();
                break;
            case "Engineer":
                addEngineer;
                break;
            default:
                buildHTML();
        }
    })
}

function addManager() {
    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the Manger's name?"
        },

        {
            type: "input",
            name: "managerId",
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
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        makeTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's ID?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's Email?"
        },

        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the Engineer's Github?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        makeTeam();
    });

}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the Intern's ID?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's Email?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern's school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        makeTeam();
    });

    function genHTML() {
        fs.writeFileSync(makeTeam)
    }



    makeTeam();
    genHTML();
}

// run();

makeTeam();
