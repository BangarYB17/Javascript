/* Conditional Statements */
// 1> if statement
let age = 16;

if(age >=18){
    console.log("You Can Vote");
}

// 2> if-else statement
//ex1
let mode = "light";
let color;
if(mode === "dark"){
    color = "black";
}else{
    color = "white";
}
console.log(color);

//ex2
if(age>=18){
    console.log("You Can vote");
}else{
    console.log("You Cannot vote");
}

//ex3 
let num1 =10;
if(num1 % 2 == 0){
    console.log(num1,"is Even");
}else{
    console.log(num1,"is Odd")
}

// 3> if-else-if statement
if(mode === "light"){
    color = "white";
}else if(mode === "dark"){
    color = "black";
}else if(mode === "pink"){
    color = "pink";
}else if(mode === "Blue"){
    color = "blue";
}else {
    color = "green";
}
console.log(color);

/* Ternary Operators */
//Condition ?True Output:False Output;
let life = 67;
console.log(life > 60 ?"Happy":"Sad");

//switch statement
let day = 0;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("Day Number is incorrect");
}

// homework ex1
let num3 = prompt("Enter a number");
if(num3 % 5 == 0){
    console.log(num3,"is multiple of 5.")
}else{
    console.log(num3,"is not multiple of 5.")
}

//homework ex 2
let marks = prompt("Enter Your Marks");
if(marks>=90 && marks<=100){
    grade = "A";
}else if(marks>=70 && marks<=89){
    grade = "B";
}else if(marks>=60 && marks<=69){
    grade = "C";
}else if(marks>=50 && marks<=59){
    grade = "D";
}else{
    grade = "F";
}
console.log("Your Grade Is :",grade);

