'use strict';
alert('Hello');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.create = function() {
  if(this.selector === '.block') {
    let firstElem = document.createElement('div');
    firstElem.className = 'block';
    firstElem.innerHTML = '<h1><b>Hello!</b></h1>';
  } else if(this.selector === '#best') {
    let secondElem = document.createElement('p');
    secondElem.id = '#best';
    secondElem.innerHTML = '<p>Get our best offer!<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>'
  } 
  
}

let myDiv = new DomElement('.block');
let myId = new DomElement('#best');

console.log(myDiv);
console.log(myId);
/*
myDiv = {
  selector: '.block',
  getStyle: function() {
    div.style.cssText = `height = 80px;
    width = 160px;
    bg = yellow;
    fontSize = 30px;
    `;
    alert(div.style.cssText);
  }
};
*/

myDiv.create();
myId.create();

