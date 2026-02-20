/* Variables */
fullname="Tony stark";
age = 54;
price = 89.33;
x = null;
y = undefined;
isFollow = true;
console.log(fullname);
console.log(age);

let bigNum = BigInt(2549963322255555555555555555);
let c = Symbol("Hello");
/*Datatypes */
/*1> var --> redeclare and reassign is allowed.(Global Scope Variable)*/ 
var num = 5;
var num = 8;
var num = 71;

console.log(num);

/*2> let --> only reassign is allowed .*/
let course = "java";

course = "Fullstack Development";
console.log(course);

/*3> const --> redeclare and reassign is not allowed.(Block Scope Variable) */
const PI = 3.14;

console.log(PI); 

const student = {
    marks : 90,
    gender : "Male",
    ispass : true,
};
console.log(student.marks);
student["marks"]=99;

const product = {
    productName : "Parker jotter ct ball pen(Black)",
    rating : 4,
    isdealoftheday :true,
    price : 270,
    offerperoff : 5,
};
console.log(product);

const profile = {
    username : "Shradha khapra",
    isfollow : true,
    posts : 190,
    followers : 1600000,
    following : 4,
    bio : "Entrepreneur (Apna college) ,Ex-microsoft , DRDO , To educate someone is the highest previlege",
};

console.log(profile);
console.log(typeof(profile));
console.log(typeof(profile["posts"]));


