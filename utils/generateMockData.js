const getMockData = () => {
    mockData = {
        generalInfo: {
          title: 'sdfg',
          description: 'sdg',
          installation: 'sdfg',
          usage: 'sdfg',
          license: 's',
          licenseLink: 'sdf',
          howToContribute: 'sdf'
        },
        credits: [ { creditText: 'sdfg', creditLink: 'sdfg', confirmAdd: false } ],
        badges: [
          {
            badgeText: 'dsfg',
            bagdeLink: 'sdfg',
            badgeImage: 'sdfg',
            confirmAdd: false
          }
        ],
        features: [
          {
            featureText: 'sdfg',
            featureDescription: 'sdf',
            featureImage: 'sdfg',
            confirmAdd: false
          }
        ],
        tests: [
          {
            testText: 'sdfg',
            testDescription: 'sdfg',
            testExpected: 'sdfg',
            confirmAdd: false
          }
        ]
      };
    return mockData;
}

module.exports = getMockData;