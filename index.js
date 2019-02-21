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

