const player1 = "x";
const player2 = "o";
var turn = player1;
var gameOver = false;
var img = document.getElementById('imgturn')

changeTurn()
changeSpaces()

function changeTurn() {

    if (gameOver) {
        return;
    }

    if (turn == player1) {

        var player = document.querySelectorAll("div#turno img")[0];

        img.src = 'cross.png'

    } else {

        var player = document.querySelectorAll("div#turno img")[0];

        img.src = 'circle.png'

    }

}

function changeSpaces() {

    var espacos = document.getElementsByClassName('espaco');

    for (var i = 0; i < espacos.length; i++) {

        espacos[i].addEventListener("click", function () {

            if (gameOver) {
                return;
            }

            if (this.getElementsByTagName("img").length == 0) {

                if (turn == player1) {
                    
                    this.innerHTML = "<img src='cross.png' class='imgdentro'>";
                    this.setAttribute("jogada", player1);
                    turn = player2;

                } else {

                    this.innerHTML = "<img src='circle.png' class='imgdentro'>";
                    this.setAttribute("jogada", player2);
                    turn = player1;

                }

                changeTurn()

            }
        });
    }
}