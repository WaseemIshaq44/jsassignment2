// Chapter 4
// Question 1
let p=23, myName, condition=true;

// Question 2
// ligal variables
let _word;
let $dollar;
let variable22;
let user;
const APPLE=2341;

// illigal variable
// let 234;
// let ?what;
// let my name;
// let var="Function";
// let 9name;

// Question 3
document.write("<h1>Rules for Naming JS variables</h1>");
document.write("<p>Variables name can only contain, number,$ and _. For example: $my_1stVariable</p>");
document.write("<p>Variable must begin with a letter, $ or _. For example: $name, _name or name</p>");
document.write("<p>Variable names are case sensitive. For example: name and Name are not the same variable</p>");
document.write("<p>Variable names should not be JS keywords</p>");




// Chapter 5
// Question 1
let firstNumber= 3;
let secondNumber=5;
let sum=firstNumber+secondNumber;
document.write(`Sum of ${firstNumber} and ${secondNumber} is ${sum} <br/>`);

// Question 2
let num1= 30;
let num2=20;
let subtract=num1-num2;
document.write(`Subraction of ${num1} and ${num2} is ${subtract}<br/>`);

let num3= 30;
let num4=20;
let prod=firstNumber*secondNumber;
document.write(`Product of ${num3} and ${num4} is ${prod}<br/>`);

let num5=85;
let num6=5;
let div=num5/num6;
document.write(`division of ${num5} from ${num6} is ${div}<br/>`);

let number1= 13;
let numbr2=5;
let modulus=number1%numbr2;
document.write(`Modulus of ${number1} and ${numbr2} is ${modulus}<br/>`);

// Question 3
let f;
document.write(`Value after variable declaration is ${f} <br/>`);
f=59;
document.write(`Initial value: ${f} <br/>`);
f=++f;
document.write(`Value after increment: ${f} <br/>`);
f=f+7;
document.write(`Value after addition is: ${f} <br/>`);
f=--f;
document.write(`Value after decrement is: ${f} <br>`);
f=f%3;
document.write(`The reminder is: ${f} <br/>`);

// Question 4
let ticketPrice= 600;
let buyingTickets=5;
let totalcost= ticketPrice*buyingTickets;
document.write(`Total cost to buy ${buyingTickets} tickets to a movie is ${totalcost}PKR. <br/>`);

// Question 5
document.write(`Table for 4 <br/>`);
let x=4;
document.write(`${x} X ${1} = ${x*1} <br/>`);
document.write(`${x} X ${2} = ${x*2} <br/>`);
document.write(`${x} X ${3} = ${x*3} <br/>`);
document.write(`${x} X ${4} = ${x*4} <br/>`);
document.write(`${x} X ${5} = ${x*5} <br/>`);
document.write(`${x} X ${6} = ${x*6} <br/>`);
document.write(`${x} X ${7} = ${x*7} <br/>`);
document.write(`${x} X ${8} = ${x*8} <br/>`);
document.write(`${x} X ${9} = ${x*9} <br/>`);
document.write(`${x} X ${10} = ${x*10} <br/>`);
// // or
// let tab=4;
//  document.write(`Table for ${tab}<br/>`);
// for (let i=1; i<=10; i++) {
//     let result=tab*i;
//     document.write(`${tab} x ${i} = ${result}<br/>`);
// }

// Question 6
let celsiusTemp=25;
let fahrenheitTemp;
fahrenheitTemp=celsiusTemp*9/5+32;
document.write(`${celsiusTemp} C Temperature in Fahrenheit is ${fahrenheitTemp} F<br/>`);

let ftemp=70;
let cTemp;
cTemp=(ftemp-32)*5/9;
document.write(`${ftemp} F Temperature in Celsius is ${cTemp} C<br/>`);

// Question 7
let priceOfItem1=650;
let priceOfItem2=100;
let orderedQuantityOfItem1=3;
let orderedQuantityOfItem2=7;
let shippingCharges=100;
let totalCost=(orderedQuantityOfItem1*priceOfItem1+orderedQuantityOfItem2*priceOfItem2+shippingCharges);
document.write(`<h1>Shopping Cart</h1> <br/> <br/> <br/>`);
document.write(`Price of item 1 is ${priceOfItem1} <br/>`);
document.write(`Quantity of item 1 is ${orderedQuantityOfItem1} <br/>`);
document.write(`Price of item 2 is ${priceOfItem2} <br/>`);
document.write(`Quantity of item 2 is ${orderedQuantityOfItem2} <br/><br/><br/>`);
document.write(`Total cost of your order is ${totalCost}<br/><br/><br`);

// Question 8
document.write("<h1>Marks Sheet</h1>");
let totalMarks=980;
let obtainedMarks=804;
let percentage=(obtainedMarks/totalMarks)*100;
document.write(`Total marks: ${totalMarks}<br/>`);
document.write(`Marks obtained: ${obtainedMarks}<br/>`);
document.write(`Percentage: ${(obtainedMarks/totalMarks)*100}%<br/>`);

// Question 9
document.write(`<h1>Currency in PKR</h1><br/> <br/> `);
let us$=10;
let sar=25;
document.write(`Total Currency in PKR: ${us$*278.29 +sar*74.02} <br/>`);

// Question 10
let number=37;
number=number+5;
number=number*10;
number=number/2;
let number2=23;
let c=number2+5*10/2;

// Question 11
document.write('<h1>Age Calculator</h1>');
let currentYear=2024;
let birthYear=1997;
let age=currentYear-birthYear;
document.write(`You age is: ${age}<br/>`);

// Question 12
document.write(`<h1>The Geomatrizer</h1>`);
let r=20;
let circumference=2*r*3.142
let area=3.142*r**2.
document.write(`Radius of the circle is: ${r}<br/>`);
document.write(`The circumference of the circle is: ${circumference}<br/>`);
document.write(`The area is: ${area}<br/>`);

// Question 13
document.write(`<h1>The Lifetime Supply Calculator</h1>`);
let favorateSnack = "Chocolate Chip";
let currentAge = 15;
let maxAge =65;
let amountPerDay =3;
let amountForRestOfLife =(maxAge-currentAge)*amountPerDay;
document.write(`Favorite Snack: ${favorateSnack} <br/>`);
document.write(`Current Age: ${currentAge} <br/>`);
document.write(`Estimated Maximum Age: ${maxAge}<br/>`);
document.write(`Amount of snacks per Day: ${amountPerDay}<br/>`);
document.write(`You will need ${amountForRestOfLife} ${favorateSnack} to last you until the ripe old age of ${maxAge}`); 




// Chapter 6
// Question 1
let s=10;
document.write('Result: <br/>');
document.write(`The value of a is: ${s}<br/> `);
document.write('--------------------------------- <br/><br/>');
document.write(`The value of a++ is: ${++s}<br/>`);
document.write(`Now the value of a is ${s} <br/><br/>`);
document.write(`The value of a++ is ${s++}<br/>`);
document.write(`Now the value of a is ${s}<br/><br/>`);
document.write(`The value of --a is ${--s}<br/>`);
document.write(`Now the value of --a is ${s}<br/><br/>`);
document.write(`The value of a-- is ${s--}<br/>`);
document.write(`Now the value of a-- is ${s}<br/>`);

// Question 2
// let a=2, b=1;
// let result= --a - --b + ++b + b--;
// --a   a is decremented
//--a - --b   first both a and b is decremented then the subtraction is performed
// --a- --b + ++b   b is decremented and incremented the the sum will subtract from the decremented a
// document.write(result);
// document.write(a);
// document.write(b);

// Question 3
let userName="User Name";
document.write(`Hello ${userName} welcome to our website <br/>`);

// Question 5
let t=11;
 document.write(`Table for ${t}<br/>`);
for (let i=1; i<=10; i++) {
    let result=t*i;
    document.write(`${t} x ${i} = ${result}<br/>`);
}

// Question 6
let subj1="English";
let subj2="Mathematics";
let subj3="Science";
let totlMarks=100;
let subj1Marks=54;
let subj2Marks=54;
let subj3Marks=48;
let perSubj1=(subj1Marks/totlMarks)*100;
let perSubj2=(subj2Marks/totlMarks)*100;
let perSubj3=(subj3Marks/totlMarks)*100;

document.write(`<h3>Subject  Total Marks      Obtained Marks      Percentage</h3> <br/>`);
document.write(`${subj1}     ${totlMarks}     ${subj1Marks}     ${perSubj1}% <br/>`);
document.write(`${subj2}     ${totlMarks}     ${subj2Marks}     ${perSubj2}% <br/>`);
document.write(`${subj3}     ${totlMarks}     ${subj3Marks}     ${perSubj3}% <br/>`);