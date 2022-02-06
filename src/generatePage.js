//const { trimStart } = require("lodash");

// Only add sections to the TOC if they have data
const generateTOC = (myGeneralInfo, myCredits, myBadges, myFeatures, myTests) => {
    let myTOC = '';

    if (!myGeneralInfo.installation && !myGeneralInfo.usage && !myGeneralInfo.license && !myGeneralInfo.howToContribute && !myCredits[0].creditText ){
        //No further data
        console.log('no data no TOC');
        return '';
    } else {
        myTOC = `
        ## Table of Contents
        `;
        
        if (myGeneralInfo.installation) {
            myTOC = myTOC + `
            - [Installation](#installation)`;  
            //console.log('myTOC - lic: ' + myTOC);
        }
        if (myGeneralInfo.license) {
            myTOC = myTOC +  `
            - [License](#license)`;  
        }
        if (myGeneralInfo.usage) {
            myTOC = myTOC +  `
            - [Usage](#usage)`;  
        }
        if (myFeatures[0].featureText) {
            myTOC = myTOC +  `
            - [Features](#features)`;  
        }
        if (myGeneralInfo.howToContribute) {
            myTOC = myTOC +  `
            - [How To Contribute](#howtocontribute)`;  
        }
        if (myTests[0].testText) {
            myTOC = myTOC +  `
            - [Tests](#tests)`;  
        }
        if (myBadges[0].badgeText) {
            myTOC = myTOC +  `
            - [Badges](#badges)`;  
        }if (myCredits[0].creditText) {
            myTOC= myTOC +  `
            - [Credits](#credits)`;  
        }  
        return myTOC;
    }
};


// create general sections: Installation, Usage, License
const generateGeneralInfo = myGeneralInfo => {
    let generalInfoMD = '';
    if (!myGeneralInfo.installation && !myGeneralInfo.usage && !myGeneralInfo.license ){
        //No further data
        return '';
    } else {
        if (myGeneralInfo.installation) {
            generalInfoMD = generalInfoMD + `
            ## Installation

            ${myGeneralInfo.installation}
            
            [Return to Table Of Contents](#table-of-contents)
            `;  
        }
        if (myGeneralInfo.license) {
            generalInfoMD = generalInfoMD + `
            ## License

            ![License Image](${myGeneralInfo.licenseLink}) ${myGeneralInfo.license}
            
            [Return to Table Of Contents](#table-of-contents)
            `;  
        }
        if (myGeneralInfo.usage) {
            generalInfoMD = generalInfoMD + `
            ## Usage

            ${myGeneralInfo.usage}
            
            [Return to Table Of Contents](#table-of-contents)
            `;  
        }
        return generalInfoMD;
    }
}

// ${generateTFeatures(features)}
const generateFeatures = featuresArr => {
    if (!featuresArr[0].featureText) {
        return '';
    } else {
        return `
            ## Features
            ${featuresArr
            .map(({ featureText, featureDescription, featureImage }) => {
                return `
                ### ${featureText}
                ${featureDescription}

                ![${featureText}](${featureImage})`;
            })
            .join('')}
            
            [Return to Table Of Contents](#table-of-contents)
            
        `;
    }
};

// ${generateHowToContribute(generalInfo)}
const generateHowToContribute = myGeneralInfo => {
    if (!myGeneralInfo.howToContribute){
        //No further data
        return '';
    } else {
        return`## How to Contribute

            ${myGeneralInfo.howToContribute}
            
            [Return to Table Of Contents](#table-of-contents)
        `;  
    }
}
// ${generateTests(tests)}
const generateTests = testArr => {
    if (!testArr[0].testText) {
        return '';
    } else {
        return `
            ## Tests
            | Test | Description | Expected Result |
            | --- | --- | --- |
            ${testArr
            .map(({ testText, testDescription, testExpected }) => {
                return `| ${testText} | ${testDescription} |  ${testExpected} |
                `;
            })
            .join('')}
            
            [Return to Table Of Contents](#table-of-contents)
            
        `;
    }
};
// ${generateBadges(badges)}
const generateBadges = badgesArr => {
    if (!badgesArr[0].badgeText) {
        return '';
    } else {
        return `
            ## Badges
            ${badgesArr
            .map(({ badgeText, badgeLink, badgeImage }) => {
                return `![Badge Image](${badgeImage})
                [${badgeText}](${badgeLink})
                `;
            })
            .join('')}
            
            [Return to Table Of Contents](#table-of-contents)
            
        `;
    }
};
// ${generateCredits(credits)}
const generateCredits = creditsArr => {
    if (!creditsArr[0].creditText) {
        return '';
    } else {
        return `
            ## Credits
            ${creditsArr
            .map(({ creditText, creditLink }) => {
                return `[${creditText}](${creditLink})
                `;
            })
            .join('')}
            
            [Return to Table Of Contents](#table-of-contents)
            
        `;
    }
};
module.exports = templateData => {
    // destructure page data by section
    const { generalInfo, credits, badges, features, tests } = templateData;

    return `# ${generalInfo.title}

    ## Description
    
    ${generalInfo.description}
    ${generateTOC(generalInfo, credits, badges, features, tests)}
    ${generateGeneralInfo(generalInfo)}
    ${generateFeatures(features)}
    ${generateHowToContribute(generalInfo)}
    ${generateTests(tests)}
    ${generateBadges(badges)}
    ${generateCredits(credits)}
    (c) ${new Date().getFullYear()} by ${generalInfo.author}
    `;
}; 