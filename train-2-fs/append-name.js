const fs = require('fs')
const os = require('os')
var user = os.userInfo()
fs.appendFile('file-store/append-name.txt', `Assalam aleykum ${user.username}`, (err)=>{
    if (err) throw err
    console.log('file suucessfully writen')
});