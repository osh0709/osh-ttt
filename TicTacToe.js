console.log("hello")

let boxes = document.getElementsByClassName("empty-box");
let playerX = true;
let scoreX = 0;
let scoreO = 0;

for (let i = 0; i < boxes.length; i++){

    let playerSwitch = boxes[i];

    playerSwitch.onclick = function(){
       
        if (playerSwitch.innerHTML != ""){
            window.alert("*Ahem* It's taken.")
        }

        else if (playerX){
            playerSwitch.innerHTML = "X";
            playerX =! playerX;
            playerStatus();
            storeScores();

        }

        else if (playerX == false){
            playerSwitch.innerHTML = "O";
            playerX =! playerX;
            playerStatus();
            storeScores();
    
        }

    }
}

// //to detect strike HORIZONTAL, VERTICAL and CORNER-CORNER 3 "X" and 3 "O"
// //to detect a TIE in game, if all grids are filled by 9


function playerStatus(){
    if (
        (boxes[0].textContent == "X" && boxes[1].textContent == "X" && boxes[2].textContent == "X")||
        (boxes[3].textContent == "X" && boxes[4].textContent == "X" && boxes[5].textContent == "X")||
        (boxes[6].textContent == "X" && boxes[7].textContent == "X" && boxes[8].textContent == "X")||
        (boxes[0].textContent == "X" && boxes[3].textContent == "X" && boxes[6].textContent == "X")||
        (boxes[1].textContent == "X" && boxes[4].textContent == "X" && boxes[7].textContent == "X")||
        (boxes[2].textContent == "X" && boxes[5].textContent == "X" && boxes[8].textContent == "X")||
        (boxes[0].textContent == "X" && boxes[4].textContent == "X" && boxes[8].textContent == "X")||
        (boxes[2].textContent == "X" && boxes[4].textContent == "X" && boxes[6].textContent == "X")
        ){  
            document.getElementById("status").innerHTML = "<h2>Player X Won!</h2>";
            scoreX = scoreX + 1
        }

        else if (
            (boxes[0].textContent == "O" && boxes[1].textContent == "O" && boxes[2].textContent == "O")||
            (boxes[3].textContent == "O" && boxes[4].textContent == "O" && boxes[5].textContent == "O")||
            (boxes[6].textContent == "O" && boxes[7].textContent == "O" && boxes[8].textContent == "O")||
            (boxes[0].textContent == "O" && boxes[3].textContent == "O" && boxes[6].textContent == "O")||
            (boxes[1].textContent == "O" && boxes[4].textContent == "O" && boxes[7].textContent == "O")||
            (boxes[2].textContent == "O" && boxes[5].textContent == "O" && boxes[8].textContent == "O")||
            (boxes[0].textContent == "O" && boxes[4].textContent == "O" && boxes[8].textContent == "O")||
            (boxes[2].textContent == "O" && boxes[4].textContent == "O" && boxes[6].textContent == "O")
            ){

            document.getElementById("status").innerHTML = "<h2>Player O Won!</h2>"
            scoreO = scoreO + 1
        }

        else if(
        (boxes[0].textContent != "" && boxes[1].textContent != "" && boxes[2].textContent != "") &&
        (boxes[3].textContent != "" && boxes[4].textContent != "" && boxes[5].textContent != "") &&
        (boxes[6].textContent != "" && boxes[7].textContent != "" && boxes[8].textContent != "")
        ){
            document.getElementById("status").innerHTML = "<h2>It's a Tie!</h2>";
        }

    }

    function storeScores(){
        document.getElementById("player-x-score").innerHTML = scoreX;
        document.getElementById("player-o-score").innerHTML = scoreO;
    }


// //to keep scores of winner
//let playerX = 0;
//let playerO = 0;
// let scoreGivenX = document.getElementById("player-one-score");
// let scoreGivenO = document.getElementById("player-two-score");


//onclick to play again and keep score

let pressPlayAgain = document.getElementById("play-again");

function clearGrids(){

    for (let c = 0; c < boxes.length; c++){
            boxes[c].innerHTML = "";
            document.getElementById("status").innerHTML = "";


    }
}

pressPlayAgain.onclick = clearGrids;


// function clearGrids(){
//     document.getElementById("empty-box").innerHTML = " ";
// }

// pressPlayAgain.onClick = clearGrids;

// for (let i = 0; i < boxes.length; i++){
//     let clearGrids = boxes;

//     pressPlayAgain.onclick = function(){
//         if ( clearGrids.innerHTML == "X" || "Y"){
//             clearGrids.innerHTML = "";
//         }
//     }
// }

//onclick to refresh the whole game
let pressRematch = document.getElementById("rematch");

function rematchClick(){
history.go(0);
}

pressRematch.onclick = rematchClick;