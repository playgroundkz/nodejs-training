const fs = require ('fs');

fs.appendFile('./file-store/append-file.txt', "Salem alem", (err)=>{
    if (err) throw err
    console.log("Filr has writen successfully")
});