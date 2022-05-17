
//define the elements within the DOM
const navList = document.querySelector(".navList");
const hamburger = document.getElementById("hamburger");

//define the event listener call back functions 

//function to add the drop-down menu on click
function hamburgerMenu () {
    navList.classList.add("showNav");
}

//function to remove the drop-down menu when user clicks off the drop-down
function hamburgerClose (event) {
    if (event.target.closest("#hamburger")=== null) {
        navList.classList.remove("showNav");
    }
}

//event listener functions to add and remove drop down from click on hamburger icon 
hamburger.addEventListener ("click", hamburgerMenu);
document.addEventListener ("click", hamburgerClose);


//define contact page form element within the DOM
const contactForm = document.querySelector(".contactForm");

//event listener function for form submission 
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (this[0].value.length === 0) {
      alert('Please fill out your name');
  } 
  if (this[1].value.length === 0) {
      alert('Please include your email address');
  }
  if (this[2].value.length === 0) {
      alert('Please include a message')
  }
});



