/*
 * ====Functions====
 *
 * Functions are great, they take data (input), do stuff with that data and then
 * return it to you all shiny and fancy (output).
 *
 * Below are some specifications for Functions to be built.
 */

/*
 * Declare Two Variables
 *
 * a random Number value
 * b random Number value
 * We will be using both of these variables to pass as parameters to the
 * following functions that we will write. Pay close attention to the other
 * variable names you will create as they will become input to other functions.
 */

var a;
var b;

a = 22;
b = 5; 

/*function add(a+b);
*/


/*
 * Function - add
 * This function returns the result of adding a and b together. Store this
 * value in a variable named sum.
 */

function add(x,y) {
  return x+y;

}

var sum = add(a,b);

console.log(sum);

/*
 * Function - subtract
 * This function returns the result of subtracting b from a Store this value in
 * a variable named difference.
 */

function subtract(x,y){
    return x-y;
}
var difference = subtract(a,b);

console.log (difference);
/*
 * Function - multiply
 * This function returns the result of multiplying b by a. Store this value in a
 * variable named product.
 */

function multiply(x,y){
    return x*y;
}
var product = multiply(b,a);

console.log(product);

/*
 * Function - checkDifference
 * This function accesses the value stored in the difference variable and uses
 * this number to return the string "My football team lost X times this week",
 * where X is the value stored in difference.
 */

function checkDifference(){

 return "My football team lost " + difference + " times this week";


}

 console.log(checkDifference());

// N.B. Return values can be passed directly to other functions


/*
 * Function - checkSum
 * This function checks the value stored at sum and uses that number to print to
 * the screen the phrase "I CAN ADDS X NUMBERS" where X is the value stored in
 * the variable sum .
 */

function checkSum(){
    return "I CAN ADDS " + sum + " NUMBERS";


}

console.log(checkSum()); 

/*
 * Function - checkProduct
 * This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.
 */

    // N.B. Functions can access variables defined outside of them!
  
function checkProduct(){
	return product*difference;

}

console.log(checkProduct());
/*
 * Function - addThenSubtract
 *
 * This function takes three Number arguments named by you, then adds the first
 * two arguments together. Then with the sum of that operation, subtract the
 * value at the third argument.
 *
 * This function should make use of your previous functions.
 *
 * example: addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */


c = 10; 

function addThenSubtract(x,y,z){
	return subtract(add(x,y),z);

}

console.log("addThenSubtractSolution", a, b, c, addThenSubtract(a,b,c));



/*
 * Function - addThenMultiply
 * This function takes three Number arguments named by you, then adds the first
 * two arguments together. Then with the sum of that operation multiply it by
 * the third argument. This function also should make use of your previous
 * functions.
 *
 * Store the return of this function to a variable named howMany
 */

function addThenMultiply(x,y,z){
	return multiply(add(x,y),z);

}

console.log("addThenMultiply", a, b, c, addThenMultiply(a,b,c));


/*
 * Function - createFullName
 * @param Datatype: String firstName
 * @param Datatype: String lastName
 * @return Datatype: String
 *
 * This function takes two String arguments firstName and lastName. This
 * function returns back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it. Store the
 * return value to a variable named myFullName
 */


var firstName;
var lastName;

firstName = "Shiraz";
lastName = "Dole"; 


function createFullName(m,n){
	return m + " " + n;
}

console.log("createFullName", createFullName(firstName,lastName));


// log to test...
// N.B. console.log can take a list and puts a space between value


/*
 * Function - verifyDrinkingAge
 * @param Datatype: Number age
 * @return Datatype: Boolean
 *
 * This function takes one Number argument age. This function returns the
 * Boolean value true or false if age is lower than the legal drinking age
 * in the state of Hawaii.
 *
 * Call this function and pass in a number value. Store the return value to a
 * variable named canDrinkBeer
 */

var z;
var canDrinkBeer;

z = 20; 

canDrinkBeer = verifyDrinkingAge(z);

console.log("canDrinkBeer", canDrinkBeer);

function verifyDrinkingAge(age){
	if (age>=21){
		return true;
	} 
	else { 
	 	return false;
	}
}

/*
 * Function - throwParty
 * This function checks the value stored at the canDrinkBeer variable and if
 * the value is false it should print to a message to the screen, "The Party
 * will have tons of Cake!" otherwise this message should be "This Party will
 * have an open bar".
 */

function throwParty(){
	if (canDrinkBeer === false) {
		return "The Party will have tons of Cake!";
	}
	else {
		return "This Party will have an open bar";
	}
}

console.log(throwParty());

/*
 * Function - eatFood
 *
 * This function takes 3 arguments firstName, lastName, food and prints out a
 * message to your screen. Internally this function will make use of the
 * createFullName function you created earlier.
 *
 *
 * example 1.
 *
 * call: eatFood( "John", "Papa", "Pizza" )
 *
 *
 * example 2.
 *
 * call: eatFood( "Peter", "Bojangles", "California Burritos" )
 *
 * output: "Peter Bojanglesloves loves to eat California Burritos"
 */
var food;

food = " loves to eat sushi.";

function eatfood(){
	return createFullName(firstName,lastName) + food;

}

console.log(eatfood());

/*
 * Function - repeater
 *
 * This function will print to the screen X amount of times. Where X is the
 * value stored at howMany. Inside of this function it will check if the value
 * of canDrinkBeer, if the value is true the message will be "Bacon Pancakes,
 * makin' Bacon Pancakes..." othewise the message will be "Let it go.... LET IT
 * GOOOOOOoOoOoOo..."
 */

 var howMany;

 howMany = 22;

 function repeater(n){
 	if (canDrinkBeer === true){
 		return "Bacon Pancakes, makin' Bacon Pancakes...";
 	}
 	else {
 		return "Let it go.... LET IT GOOOOOOoOoOoOo...";
 	}
 }

 console.log(repeater(howMany));
