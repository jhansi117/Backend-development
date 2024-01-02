
// 1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";
inquirer
  .prompt([
    {
        "question":"Enter your URL: ",
        "name": "URL"
    }
  ])
  .then((answers) => {
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("QR.png"));
// 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile("userAns.txt",answers.URL,(err)=>{
        if(err) throw err;
        console.log("stored successfully");
    });
  });


