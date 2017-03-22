var userInput = document.getElementById("userInput");
var createBtn = document.getElementById("createBtn");
var cardMakerDiv = document.getElementById("newCard");
var counter = 0;

function writeToDom() {
	counter += 1
	var createNewCard = "";
	createNewCard += `<div class="cardBox" id="newBox-${counter}">`
	createNewCard += `<h3> ${userInput.value} </h3>`;
	createNewCard += `<img src="http://sites.muscogee.k12.ga.us/codingroboticsacademy/wp-content/uploads/sites/68/2016/05/coding-reading.jpg">`
	createNewCard += `<button class="deleteButton">Delete</button>`
	createNewCard += `</div>`
	cardMakerDiv.innerHTML += createNewCard;
	userInput.value = "";

}

createBtn.addEventListener("click", writeToDom);

document.body.addEventListener("click",function(event){

	console.log(event);

	if (event.target.className === "deleteButton"){
		console.log(event.target.parentNode);
		event.target.parentNode.remove();	
	}	
});	
