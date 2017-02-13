var CELL_CLASS = 'cell col-md-1 ';
var CELL_WHITE_CLASS = ' white ';
var CELL_BLACK_CLASS = ' black ';
var ROW_CLASS = 'row';
var CHESSBOARD_CLASS = 'chessboard';


function showMeaasge(m) {
    msg = document.getElementById('msg');
    m = "Выбрана ячейка: " + m;
    msg.innerHTML = m;

}

function keyListener(key) {
    if (prev = document.getElementsByClassName('active')[0]) {

        id = prev.getAttribute("id");
        var i = id.charCodeAt(0) - 64;
        var j = parseInt(id[1], 10);
        //   alert(i, j);
        switch (key) {
        case 37:
            chooseCell2((i - 1 > 0) ? i - 1 : 8, j);
            break;
        case 38:
            chooseCell2(i, (j + 1 <= 8) ? j + 1 : 1);
            break;
        case 39:
            chooseCell2((i + 1 <= 8) ? i + 1 : 1, j);
            break;
        case 40:
            chooseCell2(i, (j - 1 > 0) ? j - 1 : 8);
            break;
        }
    }
}

function chooseCell(a) {
    //  alert(a);
    if (prev = document.getElementsByClassName('active')[0]) {
        //console.log(prev);
        prev.classList.remove('active');
    }
    cell = document.getElementById(a.trim());
    cell.classList.add('active');
    showMeaasge(a);
}

function chooseCell2(i, j) {
    var ch = ' ' + toLetter(i) + j;
    return chooseCell(ch);
}

function figure(e) {
    console.log(e);
    if (e.classList.contains('deleted')) {
        e.classList.remove('deleted');
        var d = document.getElementById(e.getAttribute("alt"));
        d.appendChild(e);


    } else {
        e.classList.add('deleted');
        e.setAttribute("alt", e.parentElement.getAttribute("id"));
        if (e.getAttribute("color") == 'w') {
            del = document.getElementById('delw');
            del.appendChild(e);

        } else {
            del = document.getElementById('delb');
            del.appendChild(e);

        }
    }
}

function toLetter(i) {
    var A = 'A'.charCodeAt(0);
    return String.fromCharCode(i + A - 1);
}

function Board(w, h) {
    this.w = w;
    this.h = h;
    var board = generateChessBoard.call(this);
    console.log(board);

    function generateChessBoard() {
        var chessboard = matrixArray(this.w + 1, this.h + 1);
        for (var i = 1; i <= this.w; i++) {
            for (var j = 1; j <= this.h; j++) {
                chessboard[i][j] = {
                    color: (i + j) % 2 == 1 ? true : false,
                    figure: 0
                }
            }
        }
        return chessboard;



        function matrixArray(columns, rows) {
            var arr = new Array();
            for (var i = 1; i <= columns; i++) {
                arr[i] = new Array();
                for (var j = 1; j <= rows; j++) {
                    arr[i][j] = i + j + 1;
                }
            }
            return arr;
        }


    }

    this.paint = function (idd) {

        var cb = '';
        for (var i = this.h; i >= 1; i--) {
            cb += ' <div class=" ' + ROW_CLASS + '">';
            cb += '<div class="' + CELL_CLASS + '">' + i + '</div>';
            for (var j = 1; j <= this.w; j++) {
                console.log(i, ' ', j);
                var cellColor = (board[j][i].color == true) ? CELL_WHITE_CLASS : CELL_BLACK_CLASS;
                var dclass = CELL_CLASS + cellColor;
                cb += '<div class="' + dclass + '"' +
                    'id="' + toLetter(j) + i + '" onclick=chooseCell("' + toLetter(j) + i + '"); >';
                cb = (board[j][i].figure) ? cb + figureToImg(board[j][i].figure) : cb;
                cb += '</div>';
            }
            cb += '</div>';
        }
        cb += ' <div class=" ' + ROW_CLASS + '">';
        cb += '<div class="' + CELL_CLASS + '">' + '</div>';
        for (var i = 1; i <= this.w; i++) {
            cb += '<div class="' + CELL_CLASS + '">' + toLetter(i) + '</div>';
        }
        cb += '</div>';
        chess = document.querySelector(idd);

        chess.innerHTML = cb;
    }
    this.putFigures = function () {
        if ((this.h < 8) && (this.w < 8)) {
            console.warn('не пихаю фигуры на маленькие доски')
        } else {


            for (var i = 1; i <= 8; i++) {
                board[i][2].figure = 1;

            }
            for (var i = 1; i <= 8; i++) {
                board[i][7].figure = 7;

            }
            for (var i = 1; i < 4; i++) {
                board[i][1].figure = board[9-i][1].figure = i + 1;
            }
            board[4][1].figure = 5;
            board[5][1].figure = 6;
            for (var i = 1; i < 4; i++) {
                board[i][8].figure = board[9-i][8].figure = i + 7;
            }
            board[4][8].figure = 11;
            board[5][8].figure = 12;

        }
        console.log(board);


    }

    function figureToImg(i) {
        switch (i) {
        case 0:
            return "";
        case 1:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png' onclick='figure(this)' color='w'> "
        case 2:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png'onclick='figure(this)' color='w'> "
        case 3:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png'onclick='figure(this)' color='w'>"
        case 4:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png'onclick='figure(this)' color='w'>"
        case 5:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'onclick='figure(this)' color='w'>"
        case 6:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png'onclick='figure(this)' color='w'>"
        case 7:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png'onclick='figure(this)' color='b'>"
        case 8:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'onclick='figure(this)' color='b'>"
        case 9:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'onclick='figure(this)' color='b'>"
        case 10:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png'onclick='figure(this)' color='b'>"
        case 11:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png'onclick='figure(this)' color='b'>"
        case 12:
            return "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png'onclick='figure(this)' color='b'>"

        }
    }

}

function ChessBoard() {
    Board.apply(this, [8, 8]);
}
var cb = new ChessBoard();

cb.putFigures();

cb.paint('#chessboard');