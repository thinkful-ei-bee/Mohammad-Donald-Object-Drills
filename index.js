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