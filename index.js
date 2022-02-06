// Include packages needed for this application
const inquirer = require('inquirer');
const mockData = require('./utils/generateMockData.js');
const { writeFile } = require('./utils/generateFile.js');
const generatePage = require('./src/generatePage.js');
const {generalQuestions,creditQuestions, featureQuestions,badgeQuestions,  testQuestions } = require('./src/questions.js');

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

// Function to promt user with one time questions
const promptUser = (questions) => {
    return inquirer.prompt(questions);
}

// Function to prompt user with repeatable questions ie multiple features
const promptMultiple = (questions, section) => {
    return inquirer.prompt(questions)
        .then(answers => {
            readMeData[section].push(answers);
            if (answers.confirmAdd) {
            return promptMultiple(questions, section);
            } else {
            return 'done';
            }
        });
}

// A function to initialize app
function  init() {
    // Test it out with mock data
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
    // The real deal starts here - prompt user.. .then .catch
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
            // We have all the answers, now generat the page
            //first remove all leading spaces so that the page is well formatted
            var page = generatePage(readMeData);
            page = page.split(/\r?\n/)
            .map(line => {
                line = line.trim();
                var testLine = line;
                if (testLine.replace(' ','') == ''){line = ''}
                return line;
            })
            .join('\n');
            return page;
            
        })
        .then(page => {
            //write page to file
            return writeFile(page);
        })
        .catch(err => {
            console.log(err);
        });
    }
}

// Function call to initialize app
init();
