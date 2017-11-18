// use node to connect to treehouse api to get profile information to print out
// simpole solution to fin users badge count in treehouse

// require https module
const https = require('https');
// user name constant 
// move to bottom

// to print message to console
// function has its arguements
function printMessage(username, badgeCount, points) {
    // arguments
    const message = `${username} has ${badgeCount} total of badges and ${points} points in Javascript`;
    console.log(message);
}



// application programming interface api

// treehouse provides a restapi to test against..

// connect to the api url https://treehouse.com/username.json
// template literal using contsants in string to refernce and change
// use `` to create template literals..this will allow passing contant variables into text strings that can change....like a template   
// the call back request using the arrow function => is to create the call back request for the response
// get has two parameters...the https site and the response. response is the anon function being used as a callback


// wrap code in function called get profile
function getProfileData(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = "";
            // This area is the call back
            // read data
            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                // Parse the data
                // const profile = JSON.parse(body);
                const profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.JavaScript);
                // print the data
            });

        });
        // variable e is for the error on request adn try catch.
        request.on('error', e => console.error(`Problem with request: ${e.message}`))
    } catch (e) {
        console.error(e.message);
    }
}
// to run the code mutltiple times...
// getProfileData("cmbailey87");
// getProfileData("jonathantubbs");
// getProfileData("bryannguyen");
// ********************************************
// const users
// getprofil takes one argument and username => only passes one in...
//  this can be shortened

// const users = ["cmbailey87","jonathantubbs","bryannguyen"];

// users.forEach(usersname => {
//     getProfileData(username);
// })
// ********************************************
// this can be shortened to an inline console prompts for name

// const users = ["cmbailey87", "jonathantubbs", "bryannguyen"];
// users.forEach(getProfileData);

//***********************************************
// run this to checkout the inline process commands...
// node app1.js cmbailey87 jonathantubbs bryannguyen
// console.log(process.argv);

// -*********************
// condcut slice to slive out arrays you dont want in the inline arguments

const users = process.argv.slice(2);
users.forEach(getProfileData);