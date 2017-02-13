var CELL_CLASS = 'cell col-md-2 ';
var CELL_WHITE_CLASS = ' white ';
var CELL_BLACK_CLASS = ' black ';
var ROW_CLASS = 'row';
var CHESSBOARD_CLASS = 'chessboard';


function matrixArray(rows, columns) {
    var arr = new Array();
    for (var i = 1; i <= columns; i++) {
        arr[i] = new Array();
        for (var j = 1; j <= rows; j++) {
            arr[i][j] = i + j + 1;
        }
    }
    return arr;
}


function generateChessBoard() {
    var chessboard = matrixArray(9, 9);
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            chessboard[i][j] = {
                color: (i + j) % 2 == 1 ? true : false,
                figure: 0
            }


        }
    }
    console.log(chessboard);
    return chessboard;
}

function putFigures(chessboard) {
    for (var i = 1; i <= 8; i++) {
        chessboard[2][i].figure = 1;

    }
    for (var i = 1; i <= 8; i++) {
        chessboard[7][i].figure = 7;

    }
    for (var i = 1; i < 4; i++) {
        chessboard[1][i].figure = chessboard[1][9 - i].figure = i + 1;
    }
    chessboard[1][4].figure = 5;
    chessboard[1][5].figure = 6;
    for (var i = 1; i < 4; i++) {
        chessboard[8][i].figure = chessboard[8][9 - i].figure = i + 7;
    }
    chessboard[8][4].figure = 11;
    chessboard[8][5].figure = 12;

}

function figureToString(i) {
    switch (i) {
    case 1:
        return "&#9817;"
    case 2:
        return "&#9814;"
    case 3:
        return "&#9816;"
    case 4:
        return "&#9815;"
    case 5:
        return "&#9813;"
    case 6:
        return "&#9812;"
    case 7:
        return "&#9823;"
    case 8:
        return "&#9820;"
    case 9:
        return "&#9822;"
    case 10:
        return "&#9821;"
    case 11:
        return "&#9819;"
    case 12:
        return "&#9818;"
    }
}

function figureToImg(i) {
    switch (i) {
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

function toLetter(i) {
    switch (i) {
    case 1:
        return "A";
    case 2:
        return "B";
    case 3:
        return "C";
    case 4:
        return "D";
    case 5:
        return "E";
    case 6:
        return "F";
    case 7:
        return "G";
    case 8:
        return "H";
    }
}


function paintChessBoard(ch) {

    var cb = '';
    for (var i = 8; i >= 1; i--) {
        cb += ' <div class=" ' + ROW_CLASS + '">';
        cb += '<div class="' + CELL_CLASS + '">' + i + '</div>';
        for (var j = 1; j <= 8; j++) {
            var cellColor = (ch[i][j].color == true) ? CELL_WHITE_CLASS : CELL_BLACK_CLASS;
            var dclass = CELL_CLASS + cellColor;
            cb += '<div class="' + dclass + '"' +
                'id="' + toLetter(j) + i + '" onclick=chooseCell("' + toLetter(j) + i + '"); >';
            cb = (ch[i][j].figure) ? cb + figureToImg(ch[i][j].figure) : cb;
            cb += '</div>';
        }
        cb += '</div>';
    }
    cb += ' <div class=" ' + ROW_CLASS + '">';
    cb += '<div class="' + CELL_CLASS + '">' + '</div>';
    for (var i = 1; i <= 8; i++) {
        cb += '<div class="' + CELL_CLASS + '">' + toLetter(i) + '</div>';
    }
    cb += '</div>';
    chess = document.getElementsByClassName(CHESSBOARD_CLASS);
    chess = document.getElementById('chessboard');

    chess.innerHTML = cb;
}

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

var chessboard = generateChessBoard();
putFigures(chessboard);
console.log(chessboard);
paintChessBoard(chessboard);