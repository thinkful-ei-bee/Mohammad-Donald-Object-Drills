'use strict';
function createMyObject() {
  const myObj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
  return myObj;
}

function updateObject(obj) {
  // your code here
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function keyDeleter(obj) {
  // your code here
  delete obj.foo;  
  delete obj.bar;
  return obj;
}

// object drills 2

function makeStudentsReport(data) {
  let studentReport = [];
  for(let i = 0; i < data.length; i++) {
    // studentReport.push(data[i].name+ ': '+ data[i].grade);
    studentReport.push(data[i]['name']+ ': '+ data[i]['grade']);
  }
  return studentReport;
}

function enrollInSummerSchool(students) {
  for(let i = 0;i < students.length; i++) {
    students[i].status = 'In Summer School';
    // console.log(Object.keys(students[i]).length);
  }
  return students;
}

function findById(items, idNum) {
  for(let i=0;i <items.length;i++) {
    if( items[i].id === idNum) {
      return items[i];
    }
  }
}

function validateKeys(object, expectedKeys) {  
  if(Object.keys(object).length !== expectedKeys.length){
    return false;
  }
  for(let i = 0; i < expectedKeys.length; i++){
    if(!Object.keys(object).find(key => key === expectedKeys[i])){
      return false;
    }
  }
  return true;  
}  
//===================================================================================================

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function(){
//     return ((this.water/this.flour)*100);
//   }
  
// };
// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const myObj2 = {
//   foo: 'foo2',
//   bar: 'bar2',
//   fum: 'fum2',
//   quux: 'quux2',
//   spam: 'spam2',
// };

// for(let property in myObj2){
//   console.log(property+ ': ' + myObj2[property]);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const myObj3 = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
// };

// console.log(myObj3.meals[3]);
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const myObj4 = {
//   name: 'Dwight',
//   jobTitle: 'assistant to the regional manager',
// };

// const myObj5 = {
//   name: 'Jim',
//   jobTitle: 'Regional manager',
// };

// const myObj6 = {
//   name: 'Michael',
//   jobTitle: 'Senior regional manager',
// };

// const myArray =[myObj4, myObj5, myObj6];

// for(let x in myArray){
//   console.log(myArray[x].name + ': ' + myArray[x].jobTitle);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// const myObj4 = {
//   name: 'Dwight',
//   jobTitle: 'assistant to the regional manager',
//   boss: 'Jim',
// };

// const myObj5 = {
//   name: 'Jim',
//   jobTitle: 'Regional manager',
//   boss: 'Michael',
// };

// const myObj6 = {
//   name: 'Michael',
//   jobTitle: 'Senior regional manager',
// };

// const myArray =[myObj4, myObj5, myObj6];

// for(let x in myArray){
//   if(myArray[x].hasOwnProperty('boss')){
//     console.log(`${myArray[x].jobTitle} ${myArray[x].name} reports to ${myArray[x].boss}`);
//   }
//   else{
//     console.log(`${myArray[x].jobTitle} ${myArray[x].name} doesn't report to anybody.`);
//   }  
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let sentence = 'craft block argon meter bells brown croon droop';
const myArray =  sentence.split(' ');
//console.log('hello ' + myArray[1]);

function decode(encodedWord) {
  const cipher ={
    a: 2,
    b: 3,
    c: 4,
    d: 5,  
  };
  if(encodedWord[0] in cipher){
    //console.log(encodedWord[0]);
    //console.log(encodedWord[cipher[encodedWord[0]]-1]);
    return encodedWord[cipher[encodedWord[0]]-1];
  }
  else{
    //console.log( 'empty string');
    return ' ';
  }    
}

function decodeWord(message){
  const myArray =  message.split(' ');
  let myString = '';
  for(let i = 0; i < myArray.length; i++){
    myString +=decode(myArray[i]);
  }
  return myString;
}
console.log( decodeWord(sentence));