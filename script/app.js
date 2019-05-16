const container = document.querySelector(".container");
const displayScores = document.querySelectorAll(".display-score");
const dropdown = document.querySelector(".dropdown-content");

//defining all cats
const allCats = {
    cat1 : {
        name: "Garfield",
        counter: 0,
        img: "https://live.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
    },
    cat2 : {
        name: "Diego",
        counter: 0,
        img: "https://live.staticflickr.com/2298/2290467335_d4fd0b3bd7_o_d.jpg",
    },
    cat3 : {
        name: "Teddy",
        counter: 0,
        img: "https://live.staticflickr.com/7073/7190755946_ea97e85765_b.jpg",
    },
    cat4 : {
        name: "Jasper",
        counter: 0,
        img: "https://live.staticflickr.com/4733/27257168879_464200ea90_b.jpg",
    },
    cat5 : {
        name: "Pepper",
        counter: 0,
        img: "https://live.staticflickr.com/1204/1090235720_da0ca9dc95_z.jpg",
    }
};

//adding each cat to the document
for (const newCat in allCats) {

    /* GENERATING CAT SELECTION */

    const newCatSelection = document.createElement("a");
    newCatSelection.textContent = allCats[newCat].name;
    
    newCatSelection.addEventListener('click', function() {
        for (catContainer of container.children) {
            catContainer.style.display = "none";
        }

        newCatContainer.style.display = "block";
    });

    dropdown.appendChild(newCatSelection);

    /* GENERATING CATS */

    //creating the cat's container
    const newCatContainer = document.createElement("div");
    newCatContainer.classList.add("cat-container");
    newCatContainer.style.display = "none";

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


/* DROPDOWN BUTTON FROM https://www.w3schools.com/howto/howto_js_dropdown.asp */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }