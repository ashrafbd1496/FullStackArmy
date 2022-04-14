/**
 * In js we can put different types of data in an array
 * like string, number, boolean, null etc
const mixed = [true, 'SL', null, 25, [1,2,3]];
 */
//const student1 = ['abu','rayhan','rayhan@example.com',25,true];
const student1 = {
	firstName: 'abu',
	secondName: 'rayhan',
	email: 'rayhan@example.com',
	age: 25,
	attent: true
}
const student2 = {
	firstName: 'Faruque',
	secondName: 'Hossain',
	email: 'FHossain@example.com',
	age: 26,
	attent: false
}
const student3 = {
	firstName: 'Md',
	secondName: 'Nurullah',
	email: 'Nurullah@example.com',
	age: 30,
	attent: true
}
const allStudent = [student1,student2,student3]
for(i = 0; i < allStudent.length; i++){
	//sendMail(allStudent[i].email);
}

// function sendMail(email){
// 	console.log('Sending Email to ', email);
// }

allStudent.forEach((item) => console.log('Email', item.email));
allStudent.forEach((item) => console.log('FullName: ', item.firstName, item.secondName));


// js is case sensitive Student and student is not same;
//console.log(student1);
//jokhon eki rokom koyekta  kaj eki jaygay hoy sekhane loop use korte hoy
//Jokhon  eki rokom koyekta kaj vinno vinno jaygay use korte hoy tokhon function use hoy
