var x = document.getElementById("X");
var o = document.getElementById("O");
var play = document.getElementById("play");
var game = document.getElementById("game");
var gambody = document.getElementById("gambody");
var r1c1 = document.getElementById("r1-c1");
var r1c2 = document.getElementById("r1-c2");
var r1c3 = document.getElementById("r1-c3");
var r2c1 = document.getElementById("r2-c1");
var r2c2 = document.getElementById("r2-c2");
var r2c3 = document.getElementById("r2-c3");
var r3c1 = document.getElementById("r3-c1");
var r3c2 = document.getElementById("r3-c2");
var r3c3 = document.getElementById("r3-c3");
var Reset = document.getElementById("Reset");
var rstbtn = document.getElementById("rstbtn");
var s = 0;

x.onclick = function() {
    play.style.display = "none";
    game.style.display = "flex";
    gambody.style.display = "flex";
    s = 1;
}

o.onclick = function() {
    play.style.display = "none";
    game.style.display = "flex";
    gambody.style.display = "flex";
    s = 0;
}

function handleCellClick() {
    if (this.innerHTML === "") {
        if (s % 2 == 0 && s <= 9) {
            this.innerHTML = "O";
            this.style.borderColor = "blue";
        } else if (s % 2 != 0 && s <= 9) {
            this.innerHTML = "X";
            this.style.borderColor = "red";
        }
        s += 1;
    }
    checkWinner()
}

function checkWinner() {
    var win=[
        [r1c1,r1c2,r1c3],
        [r2c1,r2c2,r2c3],
        [r3c1,r3c2,r3c3],
        [r1c1,r2c1,r3c1],
        [r1c2,r2c2,r3c2],
        [r1c3,r2c3,r3c3],
        [r1c1,r2c2,r3c3],
        [r1c3,r2c2,r3c1]
    ];
    for (var i = 0; i < win.length; i++) {
        var [a, b, c] = win[i];
        if (a.innerHTML && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML) {
            a.style.backgroundColor = a.style.borderColor;
            b.style.backgroundColor = b.style.borderColor;
            c.style.backgroundColor = c.style.borderColor;
            a.style.borderColor="gold";
            b.style.borderColor="gold";
            c.style.borderColor="gold";
            alert(a.innerHTML + " wins!");
            rstbtn.style="display:flex;";
            Reset.style="display:flex;";
            return;
        }
        if (a.innerHTML && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML||s===9) {
            rstbtn.style="display:flex;";
            Reset.style="display:flex;";
        }
    }
}

function resetGame() {
    var allCells = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];
    allCells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "";
        cell.style.borderColor = "gold";
    });
    s = 0;
    play.style.display = "flex";
    rstbtn.style.display = "none";
    game.style.display = "none";
    gambody.style.display = "none";
}

r1c1.onclick = handleCellClick;
r1c2.onclick = handleCellClick;
r1c3.onclick = handleCellClick;
r2c1.onclick = handleCellClick;
r2c2.onclick = handleCellClick;
r2c3.onclick = handleCellClick;
r3c1.onclick = handleCellClick;
r3c2.onclick = handleCellClick;
r3c3.onclick = handleCellClick;
Reset.onclick = resetGame;