var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li"); //array of list
var heading = document.querySelector("h1");

heading.classList.add("coolTitle");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", listToggler); // add toggle function to newlist item
	createDeleteButton(); //add a new delte button
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listToggler(){
	this.classList.toggle("done");

}

function createDeleteButton(index){
	var newDeleteButton = document.createElement("button"); //new  button element
	newDeleteButton.appendChild(document.createTextNode("Delete")); //create a text node and append it to the button
	newDeleteButton.addEventListener("click", listDelete) // delete event when clicks
	ul.insertBefore(newDeleteButton,li[index+1]); //inserting button element after the list time
}

function listDelete(i) {
	this.previousElementSibling.remove(); // delete associated html and the element
	this.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (i = 0; i < li.length; i++){ 
	li[i].addEventListener("click", listToggler); //adding toggle and delete functionality to pre-existing list
	createDeleteButton(i);
}


