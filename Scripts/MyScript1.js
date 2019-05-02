var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
    // alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/firefox.jpg') {
      myImage.setAttribute ('src','Images/dandelion.jpg');
    } else {
      myImage.setAttribute ('src','Images/firefox.jpg');
    }
}

function initElement() {
        var p = document.getElementById("foo");
        // NOTE: showAlert(); or showAlert(param); will NOT work here.
        // Must be a reference to a function name, not a function call.
        p.onclick = showAlert;
 };

function showAlert(event) {
        alert("onclick Event detected!");
 }
var myButton = document.getElementById('myButton1');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//var separateModule=require("separateModule");
 // import {one} from "./SeparateModule";
 // alert(one);
// funcSep();