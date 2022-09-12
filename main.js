let title = document.querySelector('.title');
let boxes = document.querySelectorAll(".square");
let Btn = document.querySelector('button');
// console.log(Btn); // check Step

let squares = [];

let turn = 'x';




boxes.forEach(function (box) {
    box.onclick = function () {
        if (turn === 'x' && box.innerHTML === '') {
            box.innerHTML = 'X';
            turn = 'o';
            title.innerHTML = '[O] Will Play';
        } else if (turn === 'o' && box.innerHTML == '') {
            box.innerHTML = 'O';
            turn = 'x';
            title.innerHTML = '[X] Will Play';
        }
        checkWinner();
    };
});

Btn.onclick = function () {
    location.reload();
}








/* @@@@@@@@@@@ abdelRahman gamal solution and we must put in html on click event in
 all square item of  [ onclick="game(this.id)" ]*/


// ==> first function
// function game(id) {
//     let element = document.getElementById(id);
//     if (turn === 'x' && element.innerHTML == '') {
//         element.innerHTML = 'X';
//         turn = 'o';
//         title.innerHTML = '[O] Will Play';
//     } else if (turn === 'o' && element.innerHTML == '') {
//         element.innerHTML = 'O';
//         turn = 'x';
//         title.innerHTML = '[X] Will Play';
//     }
//     checkWinner();
// }



// == > second function
function checkWinner() {
    //@@ get squares
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML;
        // console.log(squares[1])   // check step
    }
    //@@ do all probability
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        // title.innerHTML = `${squares[1]} Winner`;
        // document.getElementById('item' + 1).style.backgroundColor = "#000";
        // document.getElementById('item' + 2).style.backgroundColor = "#000";    //// ===> replace to afunction
        // document.getElementById('item' + 3).style.backgroundColor = "#000";
        // setInterval(function () { title.innerHTML += " . " }, 1000);
        // setTimeout(function () { location.reload() }, 3000);
        winnerRow(1, 2, 3);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        winnerRow(4, 5, 6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        winnerRow(7, 8, 9);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        winnerRow(1, 4, 7);
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        winnerRow(2, 5, 8);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        winnerRow(3, 6, 9);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        winnerRow(1, 5, 9);
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        winnerRow(3, 5, 7);
    };
};




// ==> third Function

function winnerRow(n1, n2, n3) {
    title.innerHTML = `${squares[n1]} Winner`;
    document.getElementById('item' + n1).style.backgroundColor = "#906";
    document.getElementById('item' + n2).style.backgroundColor = "#906";
    document.getElementById('item' + n3).style.backgroundColor = "#906";
    setInterval(function () { title.innerHTML += " . " }, 1000);
    setTimeout(function () { location.reload() }, 3000);
}





