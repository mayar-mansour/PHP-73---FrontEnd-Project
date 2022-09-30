const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// const press =$('.accordion1');
// const show =$('.accordion');
// press .click(function(){
//     const this_title =$(this);
//     const this_content = $(this).parent().find(".accordion");
// console.log(this_title);
//     // show.toggle();
//     this_content.toggle();
//     show.not(this_content).hide();
    
// })
// Cache out buttons container, and all of the panels
const buttons = document.querySelector('.accordion2');
const panels = document.querySelectorAll('.accordion');

// Add an event listener to the buttons container
buttons.addEventListener('click', handleClick);

// When a child element of `buttons` is clicked
function handleClick(e) {
 
  // Check to see if its a button
  if (e.target.matches('button')) {

    // For every element in the `panels` node list use `classList`
    // to remove the show class
    panels.forEach(panel => panel.classList.remove('show'));

    // "Destructure" the `id` from the button's data set
    const { id } = e.target.dataset;

    // Create a selector that will match the corresponding
    // panel with that id. We're using a template string to
    // help form the selector. Basically it says find me an element
    // with a "panel" class which also has an id that matches the id of
    // the button's data attribute which we just retrieved.
    const selector = `.accordion[id="${id}"]`;

    // Select the `div` and, using classList, again add the
    // show class
    console.log(selector)
    document.querySelector(selector).classList.toggle('show');
  }
}
// container 11 
const btnns = document.querySelectorAll('.accordion1');
let cont = document.querySelector(".accordion2");
btnns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    // cont.classList.toggle("accordion2_height");

    let content = this.nextElementSibling;
    // console.log(content);
    // hide and show the head of each content
    // content.classList.toggle("container11-item2");
    var container = document.querySelector(".container11");
    // container.classList.toggle("container11_height");
    // document.getElementById("show").style.display = "block";
  //   if (content.style.maxHeight) {
  //     //this is if the accordion is open
  //     content.style.maxHeight = null;
  //   } else {
  //     //if the accordion is currently closed
  //     content.style.maxHeight = content.scrollHeight + "px";
  //     console.log(content.style.maxHeight);
  //   }
  };
});