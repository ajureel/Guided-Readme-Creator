// ***Questions are split into sections so that some sections can be recursive
// Create an array of questions for user input
const generalQuestions = [
// title, description, installation, usage, license, licenseImage, howToContribute
    {
        type: 'input',
        name: 'author',
        message: 'What is your name? (required)',
        validate: authorInput => {
            if (authorInput) {
            return true;
            } else {
            console.log('Please enter your name!');
            return false;
            }
        }
    },
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
        message: 'Usage License Title or Text:',
    },
    {
        type: 'input',
        name: 'licenseImage',
        message: 'Usage License Image Link:',
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
        message: 'Badge Name?',
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

exports.generalQuestions = generalQuestions ;   
exports.creditQuestions = creditQuestions ; 
exports.featureQuestions = featureQuestions ; 
exports.badgeQuestions = badgeQuestions ; 
exports.testQuestions = testQuestions ; 
