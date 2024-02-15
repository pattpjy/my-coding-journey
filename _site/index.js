// import MicroModal from "micromodal";

const typingElement = document.querySelector('.typing-text');
const typeArray = ['Hello!', '你好', '안녕하세요', 'Hola', 'สวัสดี', 'ສະບາຍດີ'];

const navList = document.querySelector('#nav-list');
const navListLi = document.querySelector('body > div.nav-bar > div > ul > li');
const burger = document.querySelector('#burger');
const closeBTN = document.querySelector('#xmark');
const modal = document.querySelector('#modal');
const showProj = document.querySelector('.proj-card');

let index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);

      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by increasing typeIndex
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        } else {
          // Continue to removing text by decreasing index
          index--;
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 120 : 60
  );
}

function openBurger() {
  navList.classList.add('nav-list-extend');
  burger.classList.add('burger-hide');
  closeBTN.classList.add('xmark-hide');
  navListLi.style.margin = 0;
}

function closeBurger() {
  burger.classList.remove('burger-hide');
  closeBTN.classList.remove('xmark-hide');
  navList.classList.remove('nav-list-extend');
}

// Start typing text
playAnim();

function openProject(para) {
  const projectsBox = document.getElementById(para);

  projectsBox.style.display =
    projectsBox.style.display === 'none' || projectsBox.style.display === ''
      ? 'block'
      : 'none';
}

function loader() {
  setTimeout(showPage, 3000);
}

function showPage() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  loader.style.display = 'none';
  content.style.display = 'block';
}

// Function to check if the element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle scroll events and add/remove the 'animate' class
function handleScroll() {
  var targetElement = document.getElementById('targetElement');

  if (isInViewport(targetElement)) {
    // Add the 'animate' class when the element is in the viewport
    targetElement.classList.add('animate');
  } else {
    // Remove the 'animate' class when the element is not in the viewport
    targetElement.classList.remove('animate');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already in the viewport on page load
handleScroll();
