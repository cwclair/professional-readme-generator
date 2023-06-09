// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
  else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license === 'MIT') {
      return '[License: MIT](https://opensource.org/licenses/MIT)'
    }
    else if (license === 'Apache 2.0') {
      return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'GPL 3.0') {
      return '[License: GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else if (license === 'Mozilla Public License 2.0') {
      '![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
    }
    else {
      return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license == '') {
  return ''
}else {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  return `${licenseBadge} ${licenseLink}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license);
  return `# ${data.projectName}
      
${license}
      
## Description
${data.description}
      
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Collaborators](#collaborators)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
${data.installation}
      
## Usage
${data.usage}
      
## Collaborators
${data.collaborators}
      
## License
${data.license}
      
## Tests
${data.tests}
      
## Questions
My GitHub profile: https://github.com/${data.gitHubUserName}    
My email address: ${data.emailAddress}
`;
}
module.exports = generateMarkdown;