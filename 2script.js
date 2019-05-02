"use strict";
 function User(name){
	 this.FirstName="First"+name;
	 this.LastName="Last"+name;
	 this.sayHi= function(){
		 alert("My name is:"+ this.FirstName);
	 };
 }
// function User(name) {
  // this.name = name;

  // this.sayHi = function() {
    // alert( "My name is: " + this.name );
  // };
// }

let newUser=new User("Sam");
newUser.sayHi();
console.log(newUser);