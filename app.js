console.log("welocome to the tic toe game");

let music = new Audio('music.mp3');
let ting = new Audio('turn.mp3');
let gameOver = new Audio('GameOver.mp3');
let turn = "X";
let isOver = false;

//to change the turn
function changeTurn() {
    if (turn === "X") {
        return "0";
    } else {
        return "X";
    }
}

function checkwin() {
    let input = document.getElementsByClassName('boxText');
    let wins = [[0, 1, 2, 0, 2, 5],
    [3, 4, 5, 0, 2, 15],
    [6, 7, 8, 0, 2, 25],
    [0, 4, 8, 45, 2, 15],
    [0, 3, 6, 90, -2, 15],
    [1, 4, 7, 90, 2, 15],
    [2, 5, 8, 15, 12, 90],
    [2, 4, 6, 135, 2, 15]];


    wins.forEach(function (i) {
        if ((input[i[0]].innerText === input[i[1]].innerText) && (input[i[1]].innerText === input[i[2]].innerText) && (input[i[0]].innerText !== "")) {
            document.querySelector('.info').innerText = input[i[0]].innerText + " Won!";
            isOver = true;
            gameOver.play();
            document.querySelector('.imgBox').style.width = "10rem";
            document.querySelector('.line').style.width = "25vw";
            document.querySelector('.line').style.transform = `translate(${i[4]}vw, ${i[5]}vw) rotate(${i[3]}deg)`;

        }
    })
}

//game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(function (ele) {
    let boxText = ele.querySelector('.boxText');

    ele.addEventListener('click', function () {
        if (isOver) {
            resetGame();
        }
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            ting.play();
            turn = changeTurn(turn);
            checkwin();
            if (!isOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    });
});

reset.addEventListener('click', resetGame);

function resetGame() {
    Array.from(boxes).forEach(function (ele) {
        let boxText = ele.querySelector('.boxText');
        boxText.innerText = "";
    });

    turn = "X";
    isOver = false;
    document.querySelector('.line').style.width = "0";
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').style.width = "0rem";
}
