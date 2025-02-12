let username = "Runa"
function fetchTopics(){
  // Fetches topics of forums
    fetch("https://forumpjebe-gfbzgtfpbkh9h7h8.westeurope-01.azurewebsites.net/forumTopicsRuna.php")
    .then((e)=>e.json())
    .then((f) => addToCard(f))
}
function addToCard(data){
    // Creates cards and adds the fetched data to them
    console.log(data)
    let cardString = ``;
    for(x=0; x<data.length; x++){
        cardString+=`<div class="card text-white">
                <img class="forumImage" src="images/${data[x].forumImage}" alt="Forum image">
                <div class="card-body">
                  <h4 class="card-title">${data[x].forumTitle}</h4>
                  <p class="card-text">${data[x].forumDiscr}</p>
                </div>
              </div>`;
    }
    cardString+=``;
    document.getElementById("cardContainer").innerHTML = cardString;
}
function sendMsg(){
  // creates a series of variables to create a message
  let msgContainer = document.getElementById("msgField");
  let msg = document.getElementById("inputField").value;
  let newMsg = document.createElement("div");
  let newUserField = document.createElement("div");
  let newMsgField = document.createElement("div");
  let msgContent = document.createTextNode(msg);
  let usernameTxt = document.createTextNode(username);
  // assigns the right classes to the variables
  newMsg.className = "message"
  newUserField.className = "username"
  newMsgField.className = "msgContent"
  // Assigns the text and hierarchy to the variables
  msgContainer.appendChild(newMsg);
  newMsg.appendChild(newUserField);
  newMsg.appendChild(newMsgField);
  newUserField.appendChild(usernameTxt);
  newMsgField.appendChild(msgContent);
  // Empties the inputField
  document.getElementById("inputField").value = "";
}
window.onload=fetchTopics();