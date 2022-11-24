//traversing the dom
var itemList=document.querySelector('#items');
//===========parent node==============
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode);
//===========parentElement==============
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentElement.parentElement);
//===========child nodes==========================
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//========firstchild
//console.log(itemList.firstChild);
//========firstElementchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent="hello1";
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="hello4";
//nextSibling
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//create a div
var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','hello div');
var newdivText=document.createTextNode('hello world');
newdiv.appendChild(newdivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newdiv);
container.insertBefore(newdiv,h1);