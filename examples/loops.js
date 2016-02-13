/*var myArr;
var i;
var j;
var continents;
var firstToStartWithA;
var continent;

continents =
  [ 'North America',
    'South America',
    'Europe',
    'Asia',
    'Africa',
    'Australia',
    'Antarctica' ];

console.log('There are ' +
    continents.length +
    ' continents.');
console.log('They are:');

// option 1
for (i = 0; i < continents.length; i++) {
  continent = continents[i];
  for (j = 0; j < continent.length; j++) {
    console.log(i, j, continent[j]);
  }
}

// option 2
continents.forEach(function (continent) {
  console.log(continent);
});

// option 3
forEach(continents, printContinent);
//continents.forEach(printContinent);

function printContinent(continent, k) {
  console.log(k, continent);
}


// my forEach
// /function forEach(arr, fn) {
  var i;
  // for (i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}





for (i = 0; i < continents.length; i++) {
  continent = continents[i];
  if (continent[0] === 'A') {
    console.log('Found continent starting with A:', continent);
    firstToStartWithA = continent;
    break;
  }
}


console.log('The first continent to start with A:',
    firstToStartWithA);


//variables
var evenNumberArray;
var evenNumber;
var i; 
//logic
evenNumberArray = [];
//for (i=0, i < 50, i++){
  evenNumber = 2 * i;
  evenNumberArray.push(evenNumber);
}

var oopsArray;

oopsArray = /

for (i = 0; i < oopsArray.length; i++)*/ 

//variables
var presidents;
presidents = ["Washington","Adams","Jefferson","Madison","Monroe"];
var i;  

//logic
for(i=0; i < presidents.length; i++){
  console.log ("The value of i is:" + i);
  console.log ("The value at Index is: " + presidents[i]);
  console.log (i);
}

var stringOfNumbers;
stringOfNumbers = "";

for (i=10; i <= 20; i++){
  stringOfNumbers += i
}

console.log (stringOfNumbers);

var evenNumberArray;
var i; 
evenNumberArray = [];

for (i=0; i < 50; i++){
  evenNumberArray.push (i*2);
}

console.log (evenNumberArray);

var oopsArray;
oopsArray = ['turn', ,'down', ,'for', ,'what'];
  
  for(i=0; i<oopsArray.length; i++){
    console.log (i, oopsArray[i]);
    if (i%2 === 1){
      oopsArray[i] = 'nope';
    }
  }
console.log(oopsArray);














