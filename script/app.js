/* ===== Model ===== */

var model = {
    activeCat : null,

    //defining all cats
    allCats : [
        {
            name: "Garfield",
            counter: 0,
            img: "https://live.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
        },
        {
            name: "Diego",
            counter: 0,
            img: "https://live.staticflickr.com/2298/2290467335_d4fd0b3bd7_o_d.jpg",
        },
        {
            name: "Teddy",
            counter: 0,
            img: "https://live.staticflickr.com/7073/7190755946_ea97e85765_b.jpg",
        },
        {
            name: "Jasper",
            counter: 0,
            img: "https://live.staticflickr.com/4733/27257168879_464200ea90_b.jpg",
        },
        {
            name: "Pepper",
            counter: 0,
            img: "https://live.staticflickr.com/1204/1090235720_da0ca9dc95_z.jpg",
        }
    ]
};

/* ===== Octopus ===== */

var octopus = {
    init: function() {
        model.activeCat = model.allCats[0];

        //initializing cat view
        catSelection.init();
        view.init();
    },

    getAllCats : function() {
        return model.allCats;
    },

    getActiveCat: function() {
        return model.activeCat;
    },

    //updates current cat
    setActiveCat : function(cat) {
        model.activeCat = cat;
    },

    incrementCounter: function(){
        model.activeCat.counter++;
        view.render();
    }
};

/* ===== View ===== */

var view = {
    init : function() {
        //selecting needed DOM elements
        this.catContainer = document.querySelector(".cat-container");
        this.catName = document.querySelector(".cat-name");
        this.catImage = document.querySelector(".cat-img");
        this.catCounter = document.querySelector(".cat-counter");

        //adding an event listener to the cat's img
        this.catImage.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        //render/updating view
        this.render()
    },

    render : function() {
        //updating variables
        var activeCat = octopus.getActiveCat();
        this.catCounter.textContent = activeCat.counter;
        this.catName.textContent = activeCat.name;
        this.catImage.src = activeCat.img;
    }
};

/* ===== cat selection ===== */

var catSelection = {
    init: function() {
        this.dropdownContent = document.querySelector(".dropdown-content");

        //creating selection for the dropdown menu
        this.render();
    },

    //adding every single cat to the selection
    render: function() {
        for(i = 0; i < model.allCats.length; i++) {
            cat = model.allCats[i];
            
            const newCatSelection = document.createElement("a");
            newCatSelection.textContent = cat.name;

            newCatSelection.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setActiveCat(catCopy);
                    view.render();
                };
            })(cat));

            //adding the current selection to the dropdown menu
            this.dropdownContent.appendChild(newCatSelection);
        }
    }
};

//start everything
octopus.init();


/* -------------------------------------------------------------------------- */
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
