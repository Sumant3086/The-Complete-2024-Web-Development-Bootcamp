const fs=require("fs"); 
fs.writeFile("message.txt","Hello from NodeJS!",(err)=>{
    if(err)throw(err);
    console.log("This file have been saved!");
});

fs.readFile("message.txt","utf-8",(err,data)=>{
    if(err)throw (err);
    console.log(data);
});