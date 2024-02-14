// import MicroModal from "micromodal";

const typingElement = document.querySelector('.typing-text');
const typeArray = ['Patt', 'a developer', 'a creator', 'a mom'];

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

MicroModal.init({
  disableScroll: true,
});

function openProject(para) {
  const projectsBox = document.getElementById(para);

  projectsBox.style.display =
    projectsBox.style.display === 'none' ? 'block' : 'none';

  // projectsBox.style.opacity = projectsBox.style.opacity === 0 ? 1 : 0;
  console.log('click project', projectsBox);
}
