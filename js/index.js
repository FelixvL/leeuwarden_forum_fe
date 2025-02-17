let username = "Runa"
const createBtn = document.getElementById("createBtn");
function fetchTopics(){
  // Fetches topics of forums
    fetch("https://forumpjebe-gfbzgtfpbkh9h7h8.westeurope-01.azurewebsites.net/topicsR.php")
    .then((e)=>e.json())
    .then((f) => addToCard(f))
}
createBtn.addEventListener('click', () => {
    const title = document.getElementById("titleInput");
    const description = document.getElementById("discInput");
    const image = document.getElementById("imgInput");
    fetch(`https://forumpjebe-gfbzgtfpbkh9h7h8.westeurope-01.azurewebsites.net/insertTopicsR.php?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}`)
          .then(response => response.text())
          .then(data => {
              console.log('Server response:', data);
              alert(`Server response: ${data}`);
          })
          .catch(error => {
              console.error('Error: ', error);
          })
          .then(fetchTopics());
});
function addToCard(data){
    // Creates cards and adds the fetched data to them
    console.log(data)
    let cardString = ``;
    for(x=0; x<data.length; x++){
        cardString+=`<div class="card text-white">
                <img class="forumImage" src="images/${data[x].image}" alt="Forum image">
                <div class="card-body">
                  <h4 class="card-title">${data[x].title}</h4>
                  <p class="card-text">${data[x].description}</p>
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
const toevoegenBtn = document.getElementById('toevoegenBtn');

        toevoegenBtn.addEventListener('click', () => {
            const naam = document.getElementById('naam').value;
            const lengte = document.getElementById('lengte').value;

            // 2. We sturen een GET-verzoek naar ons PHP-script:
            //    insert.php?denaamvandeboot=XXX&lengte=YYY
            fetch(`insert.php?denaamvandeboot=${encodeURIComponent(naam)}&lengte=${encodeURIComponent(lengte)}`)
                .then(response => response.text())
                .then(data => {
                    // 3. Response van de server
                    console.log('Server response:', data);
                    alert(`Server response: ${data}`);
                })
                .catch(error => {
                    console.error('Fout:', error);
                });
        });