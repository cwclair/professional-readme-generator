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
  return `# README test run

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
      
## Description <a name="description"></a>
test
      
## Installation <a name="installation"></a>
test
      
## Usage <a name="usage"></a>
test
      
## License <a name="license"></a>
other
      
## Contributing <a name="contributing"></a>
test
      
## Tests <a name="tests"></a>
test
  
## Questions <a name="questions"></a>
GitHub profile: https://github.com/cwclair   
Email address: christopher.w.clair@gmail.com`;
}

module.exports = generateMarkdown;
