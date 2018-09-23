
console.log( "Equal string:","foo" == "foo");
console.log("Number", 1 == "1");
console.log("1" != 1)

console.log( "string", "sss" == "aww");
console.log( "NaN" ,NaN == NaN);


var x = 1;
var y = "1";
var o = {};
var b = {foo:true};
var c = {foo:true};
var b2 = b;
var z = 10;


console.log("Two objects:", {foo:true} == {foo:true}); //false
console.log("object === number", o === x);
console.log("10 > 1", z > x);
console.log("same object === same object", b===b );
console.log("b object === b2", b === b2 );


console.log("two stringified object", JSON.stringify(b) === JSON.stringify(c));
