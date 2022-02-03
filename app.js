const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0]
const github = profileDataArgs[1];
const [jane, janehub] = profileDataArgs; 

const generatePage = (userName, githubName) => {
    return ` 
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
console.log(name, github);
console.log(generatePage(name, github)); 

const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    //using inquirer to prompt questions
    return inquirer/prompt([
        {
            type: 'input', 
            name: 'github',
            message: 'What is your Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return ture;
                    } else {
                        console.log('Please enter your Github username!');
                        return false;
                    }
            }
        },
        
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?', 
    validate: nameInput => {
        if (nameInput) {
        return true; 
        } else {
        console.log('Please enter a valid email address');
        return false;
       }
    })
}

    const writeFile = data => {
        fs.writeFile('README.md', data, err => {
            if(err) {
                return; 
            } else {
                console.log("Your README has been created.")
                }
            })
        }
