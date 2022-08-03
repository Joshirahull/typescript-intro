var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn1 = document.getElementById("btn1");
// const add =() =>{
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl( n1 + n2);
// }
// btn1?.addEventListener('click', add);
var x = 10;
// x = "ten";
x = 20;
// x= true;
var y;
y = 2;
y = "rahul";
y = false;
var a;
a = 20;
//  a= true;
var person;
person = {
    fname: "rahul",
    lname: "joshi",
    age: 28,
    email: "rahul12@gmail.com"
};
cl(person);
var skills;
skills = ['HTML5', 'CSS3', 'JAVASCRIPT', 'ANGULAR'];
var p;
p = {
    fname: "raj",
    lname: "patil",
    age: 27,
    child: {
        fname: "veer",
        lname: "patil",
        age: 10,
        email: "veer12@gmail.com"
    }
};
cl(p);
function add(n1, n2, showResult, phrase) {
    if (showResult === true) {
        // cl(n1 + n2)
        var result = n1 + n2;
        cl(result + "" + phrase);
        return;
    }
    else {
        return n1 + n2;
    }
}
btn1.addEventListener("click", function () {
    cl(add(+num1.value, +num2.value, false, "ra"));
});
add(10, 20, true, "ta");
// add(12, 13, false,"ha")
// ------------------ ex  --------
var r = 20; // data type is "number"
//  r = "google"  // error
r = 40;
var t; //data type is "any"
t = 5;
t = false;
t = "good morning";
var R;
R = 12;
// R = true;  'boolean' is not assignable to type of "number" 
// R = "hi";  'string' is not assignable to type of "number"
var V;
V = true;
// V = "ram"; // 'string' is not assignable to type of "boolean"
// V = 8; // 'number' is not assignable to type of "boolean"
V = false;
var A;
// A = 2;  // 'number' is not assignable to type of "string"
A = "shyam";
// A = false;  // 'boolean' is not assignable to type of "string"
A = 'hello typescript';
var canDrive;
canDrive = false;
canDrive = true;
// fname , lname , age 
var person1;
person1 = {
    fname: 'jhon',
    lname: 'Doe',
    age: 30
};
cl(person1);
var p1;
var product;
product = {
    pName: 'Redmi',
    pPrice: 12000,
    pCat: 'Electronics',
    pExp: new Date(2023, 0)
};
cl(product);
var person2;
person2 = {
    fname: 'abhi',
    lname: 'joshi',
    age: 22,
    email: "abhi12@gmail.com"
};
cl(person2);
var p2;
var product1;
product1 = {
    pName: 'laptop',
    pPrice: 50000,
    pCat: 'Electronics',
    pExp: new Date(2018, 2)
};
cl(product1);
var person3;
person3 = {
    fname: 'shubham',
    lname: 'joshi',
    age: 25,
    email: "shubham111@gmail.com"
};
cl(person3);
var p3;
var product2;
product2 = {
    pName: 'Drone',
    pPrice: 10000,
    pCat: 'Electronics',
    pExp: new Date(2022, 5)
};
cl(product2);
function add1(n1, n2, showResult, phrase) {
    if (showResult === true) {
        // cl(n1 + n2)
        var result = n1 + n2;
        cl(result + "" + phrase);
        return;
    }
    else {
        return n1 + n2;
    }
}
btn1.addEventListener("click", function () {
    cl(add1(+num1.value, +num2.value, false, "adding"));
});
add1(25, 24, true, "adding");
function add2(n1, n2, showResult) {
    if (showResult === true) {
        cl(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
add2(30, 40, true);
var getAddition = add2(40, 50, false);
cl(getAddition);
function add3(n1, n2, showResult) {
    if (showResult === false) {
        cl(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
add3(24, 12, false);
var getAddi = add3(25, 5, true);
cl(getAddi);
function add4(n1, n2, showResult, phrase) {
    if (showResult === true) {
        var result = n1 + n2;
        cl(phrase + " " + result);
        return;
    }
    else {
        return n1 + n2;
    }
}
add4(7, 8, true, "The result is");
var getAddition1 = add(5, 5, false, ' The result is ');
cl(getAddition1);
var P2;
p2 = {
    fname: 'jhon',
    lname: 'deo',
    age: 30,
    child: {
        fname: 'jen',
        lname: 'deo',
        age: 5
    }
};
cl(p2);
var skill;
skill = ['HTML1', 'CSS3', 'Javascript'];
cl(skill);
var P3;
p3 = {
    fname: 'rohit',
    lname: 'birge',
    age: 52,
    child: {
        fname: 'shankar',
        lname: 'birge',
        age: 23,
        hobbies: ['cricket', 'chess', 'coding']
    }
};
cl(p3);
var skill2;
skill2 = ['HTML5', 'CSS3', 'Javascript', 'angular'];
cl(skill2);
