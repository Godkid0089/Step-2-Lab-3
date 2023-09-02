// variable/huvisagch
var name = "Oosko";
// number, string, boolean, undefined, null
console.log("hi"+name);
// alert();
// +promt ("") --> garaas utga avah
// +,-,/,*,% --> operator
// if,else --> hervee buyu nuhtsul shalgah
var age=14;
//>,<, <=,>=, ==;
if(age>18 && age<30){
	console.log("ider nas");
	// alert("nasand hursen bna");
}else if (age<=3 && age>=0){
	console.log("nylh huuhed");
}else if(age<18 && age>=0){
	console.log("zaluu huuhed")
}else{
	console.log("Nasand hureegui bn");
}
var number = +prompt("too oruulnuu");
if(number%2==0){
	console.log("tegsh bna");
}
var number2 = +prompt("too oruulnu");
if(number2<0){
	console.log("surug too");
}else{
	console.log("friday");
}
//swich - nuhtsul shalgan
var today = 6;
swich(today){
	case 5;
	console.log("friday");
		break;
	default;
	console.log("saturday");
		break;
}
var lang = "english";
swich(lang){
	case"english"
		console.log