// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function(){
//     alert('Stop it!');
// }

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/pok.jpg'){
        myImage.setAttribute('src','images/pok2.png');
    } else{
        myImage.setAttribute('src','images/pok.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}   else{
    let storedName = localstorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName;
}

document.querySelector('button').onclick = function(){
    setUserName();
}