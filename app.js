/**
 * Discussion practice why we need function. those work we need to do two times 
 * then we need to use function. 
 */

// let a = 11 + 20 -1;
// let b = 19 + 20 -1;
// let c = 18 + 20 -1;
// let d = 12 + 20 -1;
// let e = 13 + 20 -1;
// let f = 15 + 20 -1;

let a = myFunc(11,20)
let b = myFunc(19,20)
let c = myFunc(18,20)
let d = myFunc(12,20)
let e = myFunc(13,20)
let f = myFunc(15,20)


function myFunc(a,b) {
	//return a+b-1;
	//return a+b*2;
	return (a*a) + (b*b);
}

/**
 * When we have data then we need to create a variable
 */

//let name = 'Abu Rayhan';
const names = ['Abu Rayhan','Akib Ahmad','Shaker Hossain','Alvi Chawdhury'];
//let names = ['Abu Rayhan','Akib Ahmad','Shaker Hossain','Alvi Chawdhury'];
//console.log('Abu Rayhan','Abu Rayhan'.length);
let index = -1;
let name = names[++index];

setInterval(() =>{
name = names[index++];
	//console.log('Abu Rayhan','Abu Rayha'.length);
	console.log(name, names.length);
	if (index == names.length) { index = 0 }
},1000);

/**
 * 12234add12esdfdf; // It's compile time error
 * throw new Error('something went wrong'); //It's run time error
 */

/**
 * Lecture on Condition
 */
if (studyBasic) {
    wontJoin();
}
if (studyAdvance) {
    join();
}
/**
 * scenario -1  -branch one-simple conditon
 * if condition
 */
if (haveMoney) {
    purchaseMobile();
}

/**
 * Scenairo -2  -have branch/condition
 * if elase condition
 */
if (toss == head) {
    win();
}else{
    lose();
}

/**
 * Scenario -3   -Multiple branch
 * else if condition
 */

if (1 > 1) {
big();
}else if (1 < 1) {
    small();
}else{
    same();
}

//NB. switch is not a condition
