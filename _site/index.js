const typingElement = document.querySelector(".typing-text");
const typeArray = ["Patt", "a developer", "a creator", "a mom"];
let index = 0;
const navList = document.querySelector(".nav-list");
const navListLi = document.querySelector("body > div.nav-bar > div > ul > li");
const burger = document.querySelector(".fa-solid.fa-burger");
const closeBTN = document.querySelector(".fa-solid.fa-circle-xmark");

(isAdding = true), (typeIndex = 0);

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
  navList.style.display = "flex";
  navList.style.flexDirection = "column";
  navList.style.listStyleType = "table";
  navList.style.padding = 0;
  navList.style.margin = 0;
  navListLi.style.margin = 0;
  burger.style.display = "none";
  closeBTN.style.display = "block";
}

function closeBurger() {
  burger.style.display = "block";
  closeBTN.style.display = "none";
  navList.style.display = "none";
}

// Start typing text
playAnim();
