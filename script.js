
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');
var form6 = document.getElementById('form6')
var form7 = document.getElementById('form7');
var username = document.getElementById('username');
var password = document.getElementById('password');
var cnfpassword = document.getElementById('cnfpassword');
var username_regex = /[A-za-z0-9]+/;
var password_regex = /^[_$][A-Za-z0-9]+/;
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var x=document.getElementById("mydate").value;
var email = document.getElementById("email");
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var email_regex = /[a-zA-Z0-9]+\@(manipal\.edu)$/;
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var gmail = document.getElementById("gmail");
var fb_regex = /^[a-zA-z]+(\.)?(_$)?[a-zA-Z0-9]+(@gmail.com)/;
var tweet_regex = /^@\w+/;
var gmail_regex = /^[a-zA-z]+(\.)?(_$)?[a-zA-Z0-9]+(@gmail.com)/;
var pgmarks = document.getElementById('pgmarks');
var ugmarks = document.getElementById('ugmarks');
var proj1 = document.getElementById('proj1');
var proj2 = document.getElementById('proj2');


function form_validate() {
	var uname_regex = /^[A-Z][a-z]+/;
	var pass_regex = /^(?=.{10,})(?=.*\w)(?=.*[$&@]).*$/;	
	if (username.value == '') {
		username.style.borderColor = 'red';
		console.log(username.value);
		alert("Please enter Username");
		return false;
	}
	else if (uname_regex.test(username.value.trim()) == false) {
		alert("User name should be start from capital letter!");
		document.getElementById("username").innerHTML=" ";
		username.style.borderColor = 'red';
		return false;
	}
	else if (username.value.length < 10) {
		alert("Username name length should be 10 or more than 10!");
		console.log(password.value);
		password.style.borderColor = 'red';
		return false;
	}
	else if (password.value.length <= 0) {
		alert("Please enter password");
		console.log(password.value);
		password.style.borderColor = 'red';
		return false;
	}
	else if(pass_regex.test(password.value.trim()) == false){
		alert("Password length should be 10 or more than 10, with special charecter!");
		console.log(password.value);
		password.style.borderColor = 'red';
		return false;
	}
	else if (cnfpassword.value.length <= 0) {
		alert("Password is not matching");
		console.log(cnfpassword.value);
		return false;
	}
	else if (password.value != cnfpassword.value) {
		password.style.borderColor = 'red';
		cnfpassword.style.borderColor = 'red';
		alert("Password is not matching");
		return false;
	}
	return true;
}

function form_validate2() {
	var fname_regex = /^[A-Z][a-z]+$/;
	var lname_regex = /^[a-zA-Z]+$/;
	if (fname.value.length <= 0) {
		fname.style.borderColor = 'red';
		alert("Please enter first name");
		return false;
	}
	else if (fname_regex.test(fname.value.trim()) == false) {
		alert("First name is not follow the patern!");
		fname.style.borderColor = 'red';
		return false;
	}
	
	else if (lname.value == "") {
		lname.style.borderColor = 'red';
		alert("Please enter last name!");
		return false;
	}
	else if(lname_regex.test(lname.value.trim()) == false)
	{
			lname.style.borderColor = 'red';
			alert("Last name can not be number!");
			document.getElementById("lname").innerHTML="";
			return false;
	}
	return true;
}


function form_validate3() {
	
	var phone_regex=/^[0-9]{10}/;
	if (email.value == "") {
		email.style.borderColor = 'red';
		alert("email didn't entered");
		return false;
	}
	else if (email_regex.test(email.value.trim()) == false) {
		email.style.borderColor = 'red';
		alert("Please enter your manipal ID!");
		return false;
	}
	else if (phone.value == "") {
		phone.style.borderColor = 'red';
		alert("Please enter Phone number!");
		return false;
	}
	else if (phone_regex.test(phone.value.trim()) == false) {
		phone.style.borderColor = 'red';
		alert("Please enter valid Phone number!");
		return false;
	}
	
	else if (address.value == "") {
		address.style.borderColor = 'red';
		alert("Please enter Address");
		return false;
	}
	return true;
}
function form_validate4() {
	if (facebook.value.length <= 0) {
		facebook.style.borderColor = 'red';
		alert("Enter facebook id or enter 'NONE'");
		return false;
	}
	if (twitter.value.length <= 0) {
		twitter.style.borderColor = 'red';
		alert("Enter your twitter ID or enter '@NONE' ");
		return false;
	}
	
	if (tweet_regex.test(twitter.value) == false) {
		twitter.style.borderColor = 'red';
		alert("Patter didn't Match");
		return false;
	}
	if (gmail.value.length <= 0) {
		gmail.style.borderColor = 'red';
		alert("gmail didn't entered");
		return false;
	}
	if (gmail_regex.test(gmail.value) == false) {
		gmail.style.borderColor = 'red';
		alert("Gmail Patter didn't Match");
		return false;
	}
	return true;
}
function form_validate5() {
	if (pgmarks.value.length <= 0) {
		pgmarks.style.borderColor = 'red';
		alert("Fill your PG marks!");
		return false;
	}
	if (ugmarks.value.length <= 0) {
		ugmarks.style.borderColor = 'red';
		alert("Fill your UG marks!");
		return false;
	}

	return true;
}



function form_validate6() {
	if (proj1.value.length <= 0) {
		proj1.style.borderColor = 'red';
		alert("Fill your project name(or place text 'none')");
		return false;
	}
	if (proj2.value.length <= 0) {
		proj2.style.borderColor = 'red';
		alert("Fill your project name(or place text 'none')");
		return false;
	}
	return true;
}


function display() {
	if (form_validate() == true) {
		console.log("Account setup done");
		document.getElementById('form1').style.display = "none";
		document.getElementById('form2').style.display = "block";
	}
}
function display2() {
	if (form_validate2() == true) {
		console.log("Personal detail done");
		document.getElementById('form2').style.display = "none";
		document.getElementById('form3').style.display = "block";
	}
}
function display3() {
	if (form_validate3() == true) {
		console.log("Contact detail done");
		document.getElementById('form3').style.display = "none";
		document.getElementById('form4').style.display = "block";
	}
}
function display4() {
	if (form_validate4() == true) {
		console.log("Social profile detail:");
		document.getElementById('form4').style.display = "none";
		document.getElementById('form5').style.display = "block";
	}
}
function display5() {
	if (form_validate5() == true) {
		console.log("Acadmic detail:");
		document.getElementById('form5').style.display = "none";
		document.getElementById('form6').style.display = "block";
		
	}
}
function display6() {
	if (form_validate6() == true) {
		console.log("project detail:");
		document.getElementById('form6').style.display = "none";
		document.getElementById('form7').style.display = "block";
		alert("You have Succesfully Submitted!");
	}
}
function displayDetail(){
	var username = document.getElementById("username").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var twitter = document.getElementById("twitter").value;
    var facebook = document.getElementById("facebook").value;
    var gmail = document.getElementById("gmail").value;
    var ugmarks = document.getElementById("ugmarks").value;
    var pgmarks = document.getElementById("pgmarks").value;	
    var proj1 = document.getElementById("proj1").value;
    var proj2 = document.getElementById("proj2").value;
	var x=document.getElementById("mydate").value;

	document.getElementById("d-username").innerHTML = username;
    document.getElementById("d-fname").innerHTML = fname;
    document.getElementById("d-lname").innerHTML = lname;
	document.getElementById("Finaldob").innerHTML = x;
    document.getElementById("d-gender").innerHTML = gender;
    document.getElementById("d-phone").innerHTML = phone;
    document.getElementById("d-address").innerHTML = address;
    document.getElementById("d-twitter").innerHTML = twitter;
    document.getElementById("d-facebook").innerHTML = facebook;
    document.getElementById("d-google").innerHTML = gmail;
    document.getElementById("d-ugmarks").innerHTML = ugmarks;
    document.getElementById("d-pgmarks").innerHTML = pgmarks;
	document.getElementById("d-proj1").innerHTML = proj1;
    document.getElementById("d-proj2").innerHTML = proj2;
}

