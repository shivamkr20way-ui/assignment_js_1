let name=prompt("Enter Your Name :");
let age=Number(prompt("Enter Your Age :"));
let marks=Number(prompt("Enter marks :"));
let grade;

if (marks >= 90){
    grade="A"
}else if(marks >= 70 & marks < 90){
    grade='B'
}else if(marks >= 50 & marks < 70){
    grade='C'
}else if(marks >= 30 & marks < 50){
    grade="D"
}else{
    grade="Fail"
};
console.log(`your grade is : ${grade}`);

