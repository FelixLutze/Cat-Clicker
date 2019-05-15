const cats = document.querySelectorAll(".cat-img");
const displayScores = document.querySelectorAll(".display-score")
let counter = 0;

//adding event listener for each cat
for (const cat of cats) {
    cat.addEventListener('click', function() {
        counter++;

        //updating counter
        for (const displayScore of displayScores){
            displayScore.textContent = counter;
        }
    });
}