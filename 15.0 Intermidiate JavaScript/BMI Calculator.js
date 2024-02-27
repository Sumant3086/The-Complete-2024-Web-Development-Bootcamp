function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    var message;

    if (bmi < 18.5) {
        message = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        message = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return message;
}
 
var result = bmiCalculator(70, 1.75);   
console.log(result); 