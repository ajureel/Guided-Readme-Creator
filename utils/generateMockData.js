const getMockData = () => {
    mockData = {
        generalInfo: {
          author: 'AJ Ureel',
          title: 'My Title',
          description: 'My Description',
          installation: 'This is how you install it',
          usage: 'This is how you use it',
          license: 'https://opensource.org/licenses/MIT',
          licenseLink: 'https://img.shields.io/badge/license-MIT-green',
          howToContribute: 'Give me $$$'
        },
        credits: [ { creditText: 'Cranky Cat', creditLink: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg', confirmAdd: false } ],
        badges: [
          {
            badgeText: 'Green Badge',
            badgeLink: 'https://shields.io/category/other',
            badgeImage: 'https://img.shields.io/badge/-brightgreen-brightgreen',
            confirmAdd: false
          }
        ],
        features: [
          {
            featureText: 'Feature 1',
            featureDescription: 'This feature is the best!',
            featureImage: 'https://www.celadonart.com/content/images/thumbs/0003953_lego-man-patent-parchment_650.jpeg',
            confirmAdd: false
          }
        ],
        tests: [
          {
            testText: 'Execute the Program',
            testDescription: 'Execute the program by typing "node index" into the console.',
            testExpected: 'The program should prompt you with questions about your project and then create a readme.md file in the dist folder.',
            confirmAdd: false
          },
          {
            testText: 'Try with multiple records',
            testDescription: 'Update your test data to include multiple records for features, tests, and credits.',
            testExpected: 'The program should create new subsections or new lines for each record.  Tests should be contained within the test table.',
            confirmAdd: false
          }
        ]
      };
    return mockData;
}

module.exports = getMockData;