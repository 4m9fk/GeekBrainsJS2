var CELL_CLASS = 'cell col-md-1 ';
var CELL_WHITE_CLASS = ' white ';
var CELL_BLACK_CLASS = ' black ';
var ROW_CLASS = 'row';
var CHESSBOARD_CLASS = 'chessboard';




function toLetter(i){
    var A = 'A'.charCodeAt(0);
    return String.fromCharCode(i+A-1);
}




function Board(w, h) {
    this.w = w;
    this.h = h;
    var board = generateChessBoard.call(this);

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
    }
    this.paint = function (idd) {
        //console.log(board);
        var cb = '';
        for (var i = this.h; i >= 1; i--) {
            cb += ' <div class=" ' + ROW_CLASS + '">';
            cb += '<div class="' + CELL_CLASS + '">' + i + '</div>';
            for (var j = 1; j <= this.w; j++) {
                console.log(i,' ',j);
                var cellColor = (board[j][i].color != true) ? CELL_WHITE_CLASS : CELL_BLACK_CLASS;
                var dclass = CELL_CLASS + cellColor;
                cb += '<div class="' + dclass + '"' +
                    'id="' + toLetter(j) + i + '" onclick=chooseCell("' + toLetter(j) + i + '"); >';
                cb = (board[j][i].figure) ? cb + figureToImg(board[i][j].figure) : cb;
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


}
var chess = new Board(15, 13);
chess.paint('#chessboard');
