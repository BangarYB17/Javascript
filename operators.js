/*Arithmetic Operators*/
let a = 10;
let b = 3;

console.log("+ Operator :",a+b);  //13
console.log("- Operator:",a-b);   //7
console.log("/ Operator:",a/b);   //3.333333333
console.log("* Operator:",a*b);   //30
console.log("% Operator:",a%b);   // 1 

/*Unary Operator*/ 
let e = 4;
let d = 5;

console.log("e = ",e ,"& d = ",d); // e = 4 & d = 5 
// d++; // 6
// console.log("d = ",d); // 6
console.log("d++ : ",d++); // 5 (Post increment first print then increment.)
console.log("d : ",d); //6

console.log("++d : ",++d); //7  (Pre increment increment first then print.)

/* Assignment Operator */ 
let m = 5 ;

console.log("+= Operator :" , m += 1); // m = m + 1 ---> 6
console.log("-= Operator :" , m -= 1); // m = m - 1 ---> 5 (because previous value is 6)
console.log("*= Operator :" , m *= 1); // m = m * 1 ---> 5
console.log("+= Operator :" , m /= 2); // m = m / 2 ---> 2.5
console.log("%= Operator :" , m %= 1); // m = m % 2 ---> 0.5

/* Comparison Operator */
let n = 4;   //Number
let p = 3 ;  //Number
let l = "4"  //String

console.log("4 == 3 :" , n == p); //(true/false)---> false  ("==" checks value)
console.log("4 === 4 :",n === l); //(true/false)---> false datatype different   ("===" checks value and datatype)
console.log("4 != 3 :",n != p);  //(true/false)---> true  ("!=" checks value)
console.log("4 !== 4 :",n !== l); //(true/false)---> false   ("!==" checks value and datatype)

console.log("4 > 3 :",n > p) //true
console.log("4 < 3 :",n < p) //false
console.log("4 >= 3:",n >=p) //true
console.log("4 <= 3:",n <=p) //false

/* Logical Operators */
let y = 5;
let x = 4;

console.log("y > x && y < 10 :",y > x && y < 10 ); //true (both conditions should be right then it return true otherwise false)
console.log("y > x || y > 10 :",y > x || y > 10 ); //true  (one consdition needed right for true output)
console.log("y > x || y > 10 :",!(y > x || y > 10) ); //false (it converts true into false and false into true)