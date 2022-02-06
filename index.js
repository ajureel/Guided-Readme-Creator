// Include packages needed for this application
const inquirer = require('inquirer');
const mockData = require('./utils/generateMockData.js');
const { writeFile } = require('./utils/generateFile.js');
const generatePage = require('./src/generatePage.js');
const {generalQuestions,creditQuestions, featureQuestions,badgeQuestions,  testQuestions } = require('./src/questions.js');

//const { read } = require('fs');
//const { title } = require('process');

// ***Testing/Mock Data Switch***
const testingBln = false;
//const testingBln = true;
//console.log(mockData());

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
    if (testingBln) {
        var page = generatePage(mockData());
        page = page.split(/\r?\n/)
        .map(line => {
            line = line.trim();
            var testLine = line;
            if (testLine.replace(' ','') == ''){line = ''}
            return line;
        })
        .join('\n');
        console.log(page);
    }else{
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
        .then(answerData => {
             var page = generatePage(mockData());
            page = page.split(/\r?\n/)
            .map(line => {
                line = line.trim();
                var testLine = line;
                if (testLine.replace(' ','') == ''){line = ''}
                return line;
            })
            .join('\n');
            console.log(page);
            
        });
    }
}

// Function call to initialize app
init();
