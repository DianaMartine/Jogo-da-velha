const player1 = "x";
const player2 = "o";
var turn = player1;
var gameOver = false;
var img = document.getElementById('imgturn');
var vencedor = document.getElementById('vencedor')
var reiniciar = document.getElementById('reiniciar')


changeTurn();
changeSpaces();


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

                changeTurn();
                whoWins();

            }
        });
    }
}


async function whoWins() {

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var wins = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {

        wins = a1;

    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {

        wins = b2;

    } else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {

        wins = c3;

    } else if ((a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" && wins == "")) {

        vencedor.innerHTML = `Deu velha #~#`;

    }
    if (wins != "") {

        gameOver = true;

        await sleep(50);

        vencedor.innerHTML = `O vencedor foi o: ${wins}`;

    }

}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}