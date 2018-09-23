/*

switch (numb) {
    case 1:
        console.log("It's number 1?!");
        break;
    case "1":
        console.log("It's string 1?!");
        break;
    default:
        console.log("lolloon...not a number1 / not a string 1");
}
*/

const foo = false;

const bar = foo && true ? "hello" : "bye!"; //  jesli true hello // jesli false to bye

console.log("bar:",bar);

const bar1 = foo && false ? "hello" : "bye!"; //  jesli true hello // jesli false to bye

console.log("bar1:",bar1);
