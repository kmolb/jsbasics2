var foo = 0;
var boo = foo || "hello"; // hello

var baz = 1;
var zoo = baz || "hey!"; //1

var foz = false;
var boz = !foz || 0 || 42; //true





console.log("boo: ",boo);
console.log("foo: ",foo);
console.log("boz: ",boz);

