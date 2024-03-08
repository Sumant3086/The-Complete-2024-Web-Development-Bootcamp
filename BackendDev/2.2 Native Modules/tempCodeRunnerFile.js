fs.writeFile("message.txt","Hello from NODEJS!",(err)=>{
    if(err)throw(err);
    console.log("This file have been saved!");
});