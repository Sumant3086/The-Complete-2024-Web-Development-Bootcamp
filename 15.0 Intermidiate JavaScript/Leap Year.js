function isLeap(year){ 
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        return "Leap year."
    }
    else{
        return "Not leap year."
    } 
} 
var result=isLeap(2024);
console.log(result);

//this code is working properly: