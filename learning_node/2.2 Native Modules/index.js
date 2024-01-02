//this is more like import pandas 
const fs = require('fs');

//fs.writeFile(file, data[, options], callback)
// fs.writeFile("message1.txt","hello from jhansi", (err) =>{
//     if (err) throw err;
//     console.log("The file has been saved");
// });

fs.readFile("message1.txt",'utf-8',(err,data) => {
    if(err) throw err;
    console.log(data);
});
