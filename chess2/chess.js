var CELL_CLASS = 'cell col-md-1 ';
var CELL_WHITE_CLASS = ' white ';
var CELL_BLACK_CLASS = ' black ';
var ROW_CLASS = 'row';
var CHESSBOARD_CLASS = 'chessboard';

function toLetter(i) {
    var A = 'A'.charCodeAt(0);
    return String.fromCharCode(i + A - 1);
}


function Board(w, h) {
    this.w = w;
    this.h = h;

    this.generateBoard = function (boardParent) {
        var p = document.querySelector(boardParent);
        var board = document.createElement('div');
        board.className = CHESSBOARD_CLASS;
        for (var i = 1; i <= this.h; i++) {
            var row = document.createElement('div');
            row.className = 'row';
            var cell = document.createElement('div');
            cell.className = CELL_CLASS;
            cell.innerHTML = this.h - i + 1;
            row.appendChild(cell);
            for (var j = 1; j <= this.w; j++) {
                var chcell = document.createElement('div');
                var color = (i + j) % 2 != 1 ? CELL_WHITE_CLASS : CELL_BLACK_CLASS;
                chcell.className = CELL_CLASS + color;
                chcell.id = toLetter(j) + (this.h - i + 1);
                row.appendChild(chcell);
            }
            board.appendChild(row);

        }
        var row = document.createElement('div');
        row.className = 'row';
        var cell = document.createElement('div');
        cell.className = CELL_CLASS;
        row.appendChild(cell);
        for (var j = 1; j <= this.w; j++) {
            var chcell = document.createElement('div');
            chcell.className = CELL_CLASS;
            chcell.innerHTML= toLetter(j);
            row.appendChild(chcell);
            
        }
        board.appendChild(row);
        p.appendChild(board);
    }
}




var test = new Board(8, 8);
test.generateBoard('.container');