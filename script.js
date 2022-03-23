// *****Declare a variable firstname and give it a value of “Lata”

let firstname;
firstname = 'Lata';
console.log(firstname)



//**** Which value does “k” have after the execution of the following code?

let k = 'Tic';
k = 'Tac';
k = 'Toe';
console.log(k)

// *****value of k after execution will be 'Toe"



//**** */ Display the sum of 5 + 10, using two variables “x” & “y”.

let x;
let y;
result= x+y;
x=5;
y=10;
console.log(x+y)



// ****A function called add7 that takes one number and returns that number +7

function add7(num) {
    return num+7;
  }
  let newNum = add7(10);
  console.log(newNum)
  


//*****function called multiply that takes two numbers and returns their product

function multiply (num1, num2){
    return num1 * num2;
}
let product = multiply (10, 5);
console.log(product)


// *****a function called lastLetter that takes a string and returns the very last letter of that string

function lastLetter (input){
    return (input.slice(-1))
}

let result = lastLetter("abcdefg");
console.log(result); 



// *****function greet returning the value “Haydo

function greet (){
    return ("Haydo");
}

let salutation = greet();
console.log(salutation)



// *** program to display current day of the week

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
console.log(`Today is ${day}`);



// ****javascript program to compute the sum of two given integers.
function sumNumber(num1, num2) {
    if (num1 == num2) {
      return 3*(num1+num2);
    } 
    else {
      return (num1+num2);
    }
  }
  console.log(sumNumber(20, 20));



// ***javascript program to check to given numbers
function checkNumber (num1, num2) {
    if (num1==50||num2==50||num1+num2==50)
    return (true);
    else {
        return (false);
}

}
console.log(checkNumber(10,20))



//****program that returns the square of any given number

function returnSquare (num){
    return num**2;
}

console.log(returnSquare(5))