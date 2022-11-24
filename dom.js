//Add a new li element without the same class Name
// var newLi=document.getElementsByTagName("li");
// console.log(newLi);
// document.getElementsByTagName("li")[0].style[ "font-size" ] = "30px"
// newLi[0].style.fontWeight="bold";
// newLi[4].style.backgroundColor="green";
//  console.log(items);

//Query Selector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 6px #ccc';
var input=document.querySelector('input');
input.value="hello world!";
var submit=document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.setAttribute('hidden','hidden');
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor="#ccc";
}


//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font
//  var items=document.getElementsByClassName("list-group-item");
//  console.log(items);
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }
//============================================================================
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }
//====================================================================