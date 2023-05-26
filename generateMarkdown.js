// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${projectName}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
      
## Description <a name="description"></a>
${description}
      
## Installation <a name="installation"></a>
${installation}
      
## Usage <a name="usage"></a>
${usage}
      
## License <a name="license"></a>
${license}
      
## Contributing <a name="contributing"></a>
${collaborators}
      
## Tests <a name="tests"></a>
${tests}
  
## Questions <a name="questions"></a>
GitHub profile: https://github.com/${gitHubUserName}   
Email address: ${emailAddress}`;
}

module.exports = generateMarkdown;
