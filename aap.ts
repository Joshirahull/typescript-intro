let cl = console.log;

let num1 = document.getElementById("num1")! as HTMLInputElement;
let num2 = <HTMLInputElement>document.getElementById("num2")!;
let btn1 = document.getElementById("btn1")!;

// const add =() =>{
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl( n1 + n2);
// }
// btn1?.addEventListener('click', add);

let x = 10;

// x = "ten";

x = 20;
// x= true;
let y;
 
y = 2;
y = "rahul";
y = false;

let a : number;

a = 20;

//  a= true;

let person: {
    fname : string,
    lname : string,
    age: number,
    email : string,
}

person ={
    fname : "rahul",
    lname : "joshi",
    age : 28,
    email : "rahul12@gmail.com"
}

cl(person);

let skills : string[];
 skills = ['HTML5', 'CSS3', 'JAVASCRIPT', 'ANGULAR'];

 let p:{
    fname : string,
    lname : string,
    age : number,
    child :{
        fname:string,
        lname : string,
        age : number,
        email : string,
    }
 }

 p ={
    fname : "raj",
    lname : "patil",
    age : 27,
    child:{
        fname: "veer",
        lname: "patil",
        age : 10,
        email : "veer12@gmail.com",
    }
 }

 cl (p);

function add(n1:number , n2:number, showResult:boolean,phrase:string){
  if (showResult === true){
    // cl(n1 + n2)
    let result = n1 + n2 ;
    cl(result+""+phrase)
    return;
  }else{
    return n1 + n2;
  }
}
 btn1.addEventListener("click", ()=>{
    cl(add(+num1.value , +num2.value ,false,"ra"));
 })

add(10 , 20 ,true,"ta")
// add(12, 13, false,"ha")


// ------------------ ex  --------

 let r = 20; // data type is "number"
//  r = "google"  // error
 r = 40;

 let t ; //data type is "any"
 t = 5;
 t = false;
 t = "good morning";

let R :number;
R = 12;
// R = true;  'boolean' is not assignable to type of "number" 
// R = "hi";  'string' is not assignable to type of "number"

let V :boolean;

V = true;
// V = "ram"; // 'string' is not assignable to type of "boolean"
// V = 8; // 'number' is not assignable to type of "boolean"
V = false;

let A : string;

// A = 2;  // 'number' is not assignable to type of "string"
A = "shyam"; 
// A = false;  // 'boolean' is not assignable to type of "string"
A = 'hello typescript' 


let canDrive : boolean;
canDrive = false;
canDrive = true;

// fname , lname , age 

let person1 : {
    fname :string,
    lname : string,
    age : number,
}

person1 = {
    fname :'jhon',
    lname : 'Doe',
    age :30,
    // email :,  //dost not exist in type of object
}
cl(person1);

let p1 : {}

let product :{
    pName : string,
    pPrice : number,
    pCat : string,
    pExp : Date,
}

product ={
    pName : 'Redmi',
    pPrice : 12000,
    pCat : 'Electronics',
    pExp : new Date(2023, 0)
}

cl(product);


let person2 : {
    fname :string,
    lname : string,
    age : number,
    email : string,
}

person2 = {
    fname :'abhi',
    lname : 'joshi',
    age :22,
    email :"abhi12@gmail.com", 
}
cl(person2);

let p2 : {}

let product1 :{
    pName : string,
    pPrice : number,
    pCat : string,
    pExp : Date,
}

product1 ={
    pName : 'laptop',
    pPrice : 50000,
    pCat : 'Electronics',
    pExp : new Date(2018, 2)
}

cl(product1);

let person3 : {
    fname :string,
    lname : string,
    age : number,
    email : string,
}

person3 = {
    fname :'shubham',
    lname : 'joshi',
    age :25,
    email :"shubham111@gmail.com", 
}
cl(person3);

let p3 : {}

let product2 :{
    pName : string,
    pPrice : number,
    pCat : string,
    pExp : Date,
}

product2 ={
    pName : 'Drone',
    pPrice : 10000,
    pCat : 'Electronics',
    pExp : new Date(2022, 5)
}

cl(product2);


function add1(n1:number , n2:number, showResult:boolean,phrase:string){
    if (showResult === true){
      // cl(n1 + n2)
      let result = n1 + n2 ;
      cl(result+""+phrase)
      return;
    }else{
      return n1 + n2;
    }
  }
   btn1.addEventListener("click", ()=>{
      cl(add1(+num1.value , +num2.value ,false,"adding"));
   })
  
  add1(25 , 24 ,true,"adding")

  
function add2(n1:number,n2:number,showResult:boolean){
    if (showResult === true){
        cl(n1 + n2);
    }else{
        return n1 + n2;
    }
}

add2(30,40,true)

let getAddition = add2(40,50, false);
cl(getAddition);


function add3(n1:number,n2:number,showResult:boolean){
    if (showResult === false){
        cl(n1 + n2);
    }else{
        return n1 + n2;
    }
}

add3(24,12,false)

let getAddi = add3(25,5, true);
cl(getAddi);



function add4(n1:number , n2:number, showResult:boolean,phrase:string){
    if (showResult === true){
      let result = n1 + n2 ;
      cl(phrase + " " + result)
      return;
    }else{
      return n1 + n2;
    }
  }
   
  add4(7 ,8 ,true,"The result is");
  let getAddition1 = add(5, 5, false, ' The result is ');
  cl(getAddition1);



  let P2 :{
    fname :string,
    lname :string,
    age : number,
        child:{
            fname:string,
            lname:string,
            age:number
        }
  }

  p2 ={
    fname:'jhon',
    lname : 'deo',
    age:30,
        child:{
            fname:'jen',
            lname:'deo',
            age: 5,
        }
  }
  cl(p2);

  let skill : string[]
   skill =['HTML1','CSS3','Javascript'];
   cl(skill);



   let P3 :{
    fname :string,
    lname :string,
    age : number,
        child:{
            fname:string,
            lname:string,
            age:number,
            hobbies : string[]
        }
  }

  p3 ={
    fname:'rohit',
    lname : 'birge',
    age:52,
        child:{
            fname:'shankar',
            lname:'birge',
            age: 23,
            hobbies : ['cricket','chess','coding'],
        }
  }
  cl(p3);

  let skill2 : string[]
   skill2 =['HTML5','CSS3','Javascript','angular'];
   cl(skill2);