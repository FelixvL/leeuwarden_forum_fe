function fetchTopics(){
    fetch("https://forumpjebe-gfbzgtfpbkh9h7h8.westeurope-01.azurewebsites.net/forumTopicsRuna.php")
    .then((e)=>e.json())
    .then((f) => addToCard(f))
}
function addToCard(data){
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
window.onload=fetchTopics();