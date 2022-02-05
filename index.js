// TODO: Include packages needed for this application
const { read } = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
// const { writeFile, copyFile } = require('./utils/generate-site.js');
// const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const generalQuestions = [
// title, description, installation, usage, license, licenseLink, howToContribute
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
            return true;
            } else {
            console.log('Please enter your project title!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
            console.log('Please enter your project description!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Usage License Title:',
    },
    {
        type: 'input',
        name: 'licenseLink',
        message: 'Usage License Link:',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'How to Contribute:',
    }
];

//credits
const creditQuestions = [
    {
        type: 'input',
        name: 'creditText',
        message: 'Name of additional person or group that needs credit?',
      },
      {
        type: 'input',
        name: 'creditLink',
        message: 'Credit link:',
      },
      {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to enter another recognition credit?',
        default: false
      }
];
 
// badges 
const badgeQuestions = [
    {
        type: 'input',
        name: 'badgeText',
        message: 'BadgeName?',
      },
      {
        type: 'input',
        name: 'bagdeLink',
        message: 'Badge link:',
      },
      {
        type: 'input',
        name: 'badgeImage',
        message: 'Badge image link:',
      },
      {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to enter another badge?',
        default: false
      }
];
// features 
const featureQuestions = [
    {
        type: 'input',
        name: 'featureText',
        message: 'Feature Title?',
      },
      {
        type: 'input',
        name: 'featureDescription',
        message: 'Feature Description:',
      },
      {
        type: 'input',
        name: 'featureImage',
        message: 'Feature image link:',
      },
      {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to enter another feature?',
        default: false
      }
];
// tests 
const testQuestions = [
    {
        type: 'input',
        name: 'testText',
        message: 'Test Title?',
      },
      {
        type: 'input',
        name: 'testDescription',
        message: 'Test Description:',
      },
      {
        type: 'input',
        name: 'testExpected',
        message: 'Test Expected Results:',
      },
      {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to enter another test?',
        default: false
      }
];

// arrary to store input
const readMeData = {
    generalInfo:[],
    credits:[],
    badges:[],
    features:[],
    tests:[]
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const promptUser = (questions) => {
    return inquirer.prompt(questions);
}

const promptMultiple = (questions, section) => {
    return inquirer.prompt(questions)
        .then(answers => {
            // console.log(readMeData);
            // console.log(readMeData[section]);
            readMeData[section].push(answers);
            if (answers.confirmAdd) {
            return promptMultiple(questions, section);
            } else {
            return 'done';
            }
        });
}

// TODO: Create a function to initialize app
function  init() {
    //prompt user.. .then .catch
    promptUser(generalQuestions)
        .then(answerData => {
            readMeData.generalInfo = answerData;
            return promptMultiple(creditQuestions, 'credits');
        })
        .then(answerData => {
            return promptMultiple(badgeQuestions, 'badges');
        })
        .then(answerData => {
            return promptMultiple(featureQuestions, 'features');
        })
        .then(answerData => {
            return promptMultiple(testQuestions, 'tests');
        })
        .then(answerData => console.log(readMeData))

    // promptUser(generalQuestions)
    //     .then(answerData => {
    //         readMeData.push(answerData);
    //         promptUser(creditsQuestions)
    //             .then(creditData => {
    //                 console.log(readMeData.credits);
    //                 readMeData.credits.push(creditData);
    //                 if (creditData.confirmAddCredit) {
    //                 return promptUser(creditsQuestions);
    //                 } else {
    //                 return portfolioData;
    //                 } 
    //             })
    //             .then(result => console.log(readMeData))
    //     }
    //     )

}

// Function call to initialize app
init();
