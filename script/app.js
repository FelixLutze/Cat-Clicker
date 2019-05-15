const container = document.querySelector(".container");
const displayScores = document.querySelectorAll(".display-score");

//defining all cats
let allCats = {
    cat1 : {
        name: "cat1",
        counter: 0,
        img: "https://live.staticflickr.com/1126/625069434_db86b67df8_b.jpg"
    }
};

//adding each cat to the document
for (const newCat in allCats) {
    //creating the cat's container
    const newCatContainer = document.createElement("div");
    newCatContainer.classList.add("cat-container");

    //creating a header to display the name of the cat
    const newCatName = document.createElement("h1");
    newCatName.textContent = allCats[newCat].name;
    //adding the header to the container
    newCatContainer.appendChild(newCatName);

    //creating a score-text for the cat
    const newCatScore = document.createElement("span");
    newCatScore.classList.add("score");
    newCatScore.textContent = "Counter: ";
    //adding the score-text to the container
    newCatContainer.appendChild(newCatScore);

    //creating a scorec-ounter for the cat
    const newCatScoreCounter = document.createElement("span");
    newCatScoreCounter.classList.add("display-score");
    newCatScoreCounter.textContent = allCats[newCat].counter;
    //adding the score-counter to the score-text
    newCatScore.appendChild(newCatScoreCounter);

    //get the image for the cat
    const newCatImg = document.createElement("img");
    newCatImg.classList.add("cat-img");
    newCatImg.src = allCats[newCat].img;
    
    //adding an event listener to the cat's img
    newCatImg.addEventListener('click', function() {
        allCats[newCat].counter++;

        //updating counter
        newCatScoreCounter.textContent = allCats[newCat].counter;
    });

    //adding img to container
    newCatContainer.appendChild(newCatImg);

    //adding the whole container to the document
    container.appendChild(newCatContainer);
}