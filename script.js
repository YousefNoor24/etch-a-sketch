//Grab div element with board id
const board = document.querySelector("#board");

//Grab button with reset-btn id
const resetBtn = document.querySelector("#reset-btn");

//Grab button with set-btn id
const setBtn = document.querySelector("#set-btn");

//Create div with box class
const box = document.createElement("div");
box.setAttribute("class", "box");

function createBoard(totalBoxNumber) {
    let numberOfBoxes = totalBoxNumber;

    //Get the width and height of the board
    let boardWidth = board.offsetWidth;
    let boardHeight = board.offsetHeight;
    box.style.width = (boardWidth / numberOfBoxes) + "px";
    box.style.height = (boardHeight / numberOfBoxes) + "px";

    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        board.appendChild(box.cloneNode(true));
    }
}

//Create a default board
createBoard(16);

//Add hover to box
let boxArray = document.querySelectorAll(".box");
boxArray.forEach((boxElement) => {
    boxElement.addEventListener("mouseover", () => {
        boxElement.style.backgroundColor = "black";
    });
});

//Reset all box color to default color
resetBtn.addEventListener("click", () => {
    boxArray.forEach((boxElement) => {
        boxElement.style.backgroundColor = "white";
    });
});

//Able to recreate the board within a number of boxes
setBtn.addEventListener("click", () => {
    let gridNumber = prompt("Enter a number between 1 to 100");

    //Ensure that user enter proper input
    if (isNaN(gridNumber) || gridNumber === "") {
        gridNumber = prompt("Error! Please enter a number between 1 to 100");
    }

    //Ensure grid number is between 1 to 100
    if (gridNumber <= 0 || gridNumber >= 101) {
        gridNumber = prompt("Error! Please enter a number between 1 to 100");
    }
    
    //Remove all boxes
    const boxToRemoveArr = document.querySelectorAll(".box");
    boxToRemoveArr.forEach(boxToRemoveElement => {
        while(boxToRemoveElement.firstChild) {
            boxToRemoveElement.removeChild(boxToRemoveElement.lastChild);
        }
    });

    //Ensure board is empty
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }

    //If user hit the cancel, create the default board size
    if(gridNumber === null) {
        createBoard(16);
    } else {
        createBoard(gridNumber);
    }

    //Add hover effect
    boxArray = document.querySelectorAll(".box");
    boxArray.forEach((boxElement) => {
        boxElement.addEventListener("mouseover", () => {
            boxElement.style.backgroundColor = "black";
        });
    });
});