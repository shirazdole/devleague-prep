function isNumberGreaterThan(first,second){
	if (first>second){
		return true;
	}
	else{
		return false;
	}
}
console.log(isNumberGreaterThan(10,15));

function isTrue(val){
	if (val === 1){
		return true;
	}
	else{
		return false;
	}
}
console.log(isTrue(1));

function isFalse(val){
	if (val === 1){
		return false;
	}
	else{
		return true;
	}
}
console.log(isFalse(1));

function isEqual(firstWord,secondWord){
	if (firstWord === secondWord){
		return "AWWWWRIGHT";
	}
	else{
		return "Y U NO MATCH";
	}
}

console.log(isEqual("Hi","Hi"));


function isNotEqual(firstWord,secondWord){
	if (firstWord === secondWord){
		return "AWWWWRIGHT";
	}
	else{
		return "Y U MATCH";
	}
}

console.log (isNotEqual("Hi","Bye"));

function doubleEquals(first,second){
	if (first === second){
		return true;
	}
	else{
		return false;
	}

}

console.log (doubleEquals("Hi","Bye"));

function totalOver30(first, second,third){
	if (first + second + third > 30){
		return true;
	}
	else{
		return false;
	}

}
console.log (totalOver30(20,4,80));

function totalUnderWhat(first,second,third,fourth){
	if (first + second + third < fourth){
		return true;	
	}
	else{
		return false;
	}
}

console.log (totalUnderWhat(10,20,30,1));

function looptoNumber(limit){
	for(var i=0; i < limit; i++){
		console.log(i);
	}
}

looptoNumber(3);

function showEachValue(characters){
	for(var i=0; i<characters.length; i++){
		console.log(characters[i]);
	}
}
showEachValue("hello");

var phrase;
phrase = "I ate A lot todAy";

function createArrayFromString(word){
	var letters = []; //"this array will store letters, not A"//	for(var i=0; i<word.length; i++){
		for(var i=0; i<word.length; i++){	
			var currentletter = word.charAt(i);
		if (currentletter !== "A" && currentletter !== "a"){
			letters.push(currentletter); 
		}

	}
			return letters;
}

console.log(createArrayFromString(phrase));	


