var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e)
{
  e.preventDefault();
  //get input value
  var newItem=document.getElementById('item').value;
  var newItem1=document.getElementById('item1').value;
  //create li element
  var li=document.createElement('li');
  //add class
  li.className='list-group-item';
  console.log(li);
  //add textnode with input values
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
  //create delete button element
  var deleteBtn=document.createElement('button');
  //add classes to buttons
  deleteBtn.className="btn btn-danger btn-sm float-right delete";

  
  // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

 // Append li to list
  itemList.appendChild(li);
}
// Remove item
   function removeItem(e){
   if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
     itemList.removeChild(li);
    }
 }
}
// Filter Items
function filterItems(e){
//   // convert text to lowercase
   var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
 // Convert to an array
 Array.from(items).forEach(function(item){
   var itemName = item.firstChild.textContent;
   if(itemName.toLowerCase().indexOf(text) != -1){
     item.style.display = 'block';
   } else {
     item.style.display = 'none';
       }
  });
 }

