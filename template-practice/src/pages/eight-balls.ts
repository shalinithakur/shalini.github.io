let userName = '';
userName? console.log(`Hello, ${userName}`) : console.log('Hello!');
const userQuestion = "Will I buy a Mac?";
console.log(`The user asked: ${userQuestion}`);
var randomNumber = Math.round(Math.random()*8);
console.log(randomNumber);
let eightBall = '';
switch(eightBall){
  Case 'randomNumber = 0':
  console.log('It is certain');
  break;
  Case 'randomNumber = 1':
  console.log('It is decidedly so');
  break;
  Case 'randomNumber = 2':
  console.log('Reply hazy try again');
  break;
  Case 'randomNumber = 3':
  console.log('Cannot predict now');
  break;
  Case 'randomNumber = 4':
  console.log('Do not count on it');
  break;
  Case 'randomNumber = 5':
  console.log('My sources say no');
  break;
  Case 'randomNumber = 6':
  console.log('Outlook not so good');
  break;
  Case 'randomNumber = 7':
  console.log('Signs point to yes');
  break;
  default:
  console.log('invalid');
}
console.log(eightBall);




let userName = "";
// Ternary expression for userName
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

const userQuestion = "Will I buy a Mac?";
console.log(`The user asked: ${userQuestion}`);

// Generate random number between 0 and 7
let randomNumber = Math.round(Math.random()*7);
console.log(randomNumber);

let eightBall = "";

if (randomNumber = 0) {
  eightBall = 'It is certain';
}
else if (randomNumber = 1) {
  eightBall = 'It is decidedly so';
}
else if (randomNumber = 2) {
	eightBall = 'Reply hazy try again';
}
else if (randomNumber = 3) {
  eightBall = 'Cannot predict now';
}
else if (randomNumber = 4) {
  eightBall = 'Do not count on it';
}
else if (randomNumber = 5) {
	eightBall = 'My sources say no';
}
else if (randomNumber = 6) {
	eightBall = 'Outlook not so good';
}
else if (randomNumber = 7) { 
	eightBall = 'Signs point to yes';
}

console.log(eightBall);