//Inspired by JavaScript 30 For 30 day challenge
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("my-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 3.5 seconds
}

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
