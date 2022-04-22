let playerOneName = prompt('Enter Player 1 name:');
let name1 = document.querySelector('#p1Name');
name1.textContent = playerOneName;
let goesFirst = document.querySelector('#first');
goesFirst.textContent = playerOneName + ' goes first & is X.';

function init() {
    const mssg1 = document.querySelector(".displayMessage");
    const playAgain = document.querySelector(".restart");
    const boxes = document.querySelectorAll(".cell");
    const gridArray = Array.from(boxes);
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "X";
  
    boxes.forEach((item) =>
      item.addEventListener("click", (e) => {
        const index = gridArray.indexOf(e.target);
        if (
          boxes[index].classList.contains("X") ||
          boxes[index].classList.contains("cpu")
        ) {
          return;
        }
  
        boxes[index].classList.add("X");
        const spliceNr = tracking.indexOf(index + 1);
        tracking.splice(spliceNr, 1);
  
        if (winCheck("X", boxes)) {
          mssg1.innerHTML = "You WIN!";
          document.body.classList.add("over");
          return;
        }
  
        if (tracking.length === 0) {
          mssg1.innerHTML = "It's a draw.";
          document.body.classList.add("over");
          console.log("Nothing Left");
          return;
        }
        const random = Math.floor(Math.random() * tracking.length);
        const computerIndex = tracking[random];
        boxes[computerIndex - 1].classList.add("cpu");
  
        tracking.splice(random, 1);
  
        if (winCheck("cpu", boxes)) {
          mssg1.innerHTML = "CPU wins try again!";
          document.body.classList.add("over");
          return;
        }
      })
    );

    playAgain.addEventListener("click", () => {
      location.reload();
    });
  }
  function winCheck(player, boxes) {
  
    function check(pos1, pos2, pos3) {
      
      if (
        boxes[pos1].classList.contains(player) &
        boxes[pos2].classList.contains(player) &
        boxes[pos3].classList.contains(player)
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (check(0, 3, 6)) return true;
    else if (check(1, 4, 7)) return true;
    else if (check(2, 5, 8)) return true;
    else if (check(0, 1, 2)) return true;
    else if (check(3, 4, 5)) return true;
    else if (check(6, 7, 8)) return true;
    else if (check(0, 4, 8)) return true;
    else if (check(2, 4, 6)) return true;
  }
  
  
  init();
  