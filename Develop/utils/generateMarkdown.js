const https = require('https');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license=='Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license=='GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if(license=='MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license=='BSD 2-Clause "Simplified" License'){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if(license=='BSD 3-Clause "New" or "Revised License'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if(license=='Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if(license=='Creative Commons Zero v1.0 Universal'){
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if(license=='Eclipse Public License 2.0'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if(license=='GNU Affero General Public License v3.0'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if(license=='GNU General Public License v2.0'){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if(license=='GNU Lesser General Public License v2.1'){
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if(license=='Mozilla Public License 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(license=='The Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if(license=='None'){
    return ''
  } else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=='Apache License 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if(license=='GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if(license=='MIT License'){
    return 'https://opensource.org/licenses/MIT'
  } else if(license=='BSD 2-Clause "Simplified" License'){
    return 'https://opensource.org/licenses/BSD-2-Clause'
  } else if(license=='BSD 3-Clause "New" or "Revised License'){
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if(license=='Boost Software License 1.0'){
    return 'https://www.boost.org/LICENSE_1_0.txt'
  } else if(license=='Creative Commons Zero v1.0 Universal'){
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if(license=='Eclipse Public License 2.0'){
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if(license=='GNU Affero General Public License v3.0'){
    return 'https://www.gnu.org/licenses/agpl-3.0'
  } else if(license=='GNU General Public License v2.0'){
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if(license=='GNU Lesser General Public License v2.1'){
    return 'https://www.gnu.org/licenses/lgpl-3.0'
  } else if(license=='Mozilla Public License 2.0'){
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if(license=='The Unlicense'){
    return 'http://unlicense.org/'
  } else if(license=='None'){
    return ''
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!='None' || license != null){
    return `## License
This app is covereved under the ${license}`
  }
}

// TODO: Create a function to generate markdown for README
async function getGithubLink(username){
  options = {
    hostname: 'api.github.com',
    path: `/users/${username}`,
    headers :{
      'User-Agent': 'jaronhadley'
    }
  }
  return new Promise((resolve) => {
    https.get(options, (res) => {
      let body = "";

      res.on("data", function(chunk) {
        body += chunk;
      });

      res.on("end", function() {
          let json = JSON.parse(body);
          //console.log(json.url)
          resolve(json.url)
          });
    })
})
}

async function githubLink(username) {
  var url = await getGithubLink(username);
  return url
} 

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits-and-contribution)
  - [Testing](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.description}

  ## Credits and Contribution
  
  ${data.contribution}

  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}

  ## Questions
  
  My github id is ${data.username}, link to [github](${githubLink(data.username)}) profile
  
  [Contact Me](mailto:${data.email})
  ---
`;
}


module.exports = generateMarkdown;
