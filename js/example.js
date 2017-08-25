//ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0]; //GET THE UL ELEMENT

//ADD NEW ITEM TO END OF LIST 
var newItemLast = document.createElement('li'); //CREATE NEW ITEM
var newTextLast = document.createTextNode('cream'); //CREATE TEXT NODE 
newItemLast.appendChild(newTextLast); //ADD TEXT NODE TO ELEMENT 

list.appendChild(newItemLast); //ADD ELEMENT TO END OF LIST 

//ADD NEW ITEM TO START OF LIST 
var newItemStart = document.createElement('li'); //CREATE ELEMENT 
var newTextStart = document.createTextNode('Kale'); //CREATE TEXT NODE 
newItemStart.appendChild(newTextStart); //ADD TEXT NODE TO ELEMENT
list.insertBefore(newItemStart, list.firstChild); //ADD ELEMENT TO LIST

//SET A CLASS ATTRIBUTE ON ALL ITEMS 

var listItems = document.querySelectorAll('li'); //ALL LIST ITME ELEMENTS 
//ADD A CLASS OF COOL TO ALL LIST ITEMS 

var i; //COUNTER VARIABLE 
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}
//LOPP THROUGH ELEMENTS 

//ADD THE NUMBER OF LIST ITEMS TO THE HEADING 
var heading = document.querySelector('h2'); //h2 element 
var headingText = heading.firstChild.nodeValue; //retrives h2 text
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>'; //CONTENT
heading.innerHTML = newHeading;
