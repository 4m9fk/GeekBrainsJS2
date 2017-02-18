var CELL_CLASS = 'cell ';
var CELL_WHITE_CLASS = ' white ';
var CELL_BLACK_CLASS = ' black ';
var ROW_CLASS = 'row';
var CHESSBOARD_CLASS = 'chessboard';


function Board(w, h) {
    this.w = w;
    this.h = h;

    function toLetter(i) {
        var A = 'A'.charCodeAt(0);
        return String.fromCharCode(i + A - 1);
    }

    this.generateBoard = function (boardParent) {
        var p = document.querySelector(boardParent);
        var board = document.createElement('table');
        board.id = CHESSBOARD_CLASS;
        board.tabIndex = 1;
        for (var i = 1; i <= this.h; i++) {
            var row = document.createElement('tr');
            //row.className = 'row';
            var cell = document.createElement('th');
            cell.className = CELL_CLASS;
            cell.innerHTML = this.h - i + 1;
            row.appendChild(cell);
            for (var j = 1; j <= this.w; j++) {
                var chcell = document.createElement('td');
                var color = (i + j) % 2 != 1 ? CELL_WHITE_CLASS : CELL_BLACK_CLASS;
                chcell.className = CELL_CLASS + color;
                chcell.id = toLetter(j) + (this.h - i + 1);

                row.appendChild(chcell);
            }
            board.appendChild(row);

        }
        var row = document.createElement('tr');
        //row.className = 'row';
        var cell = document.createElement('th');
        cell.className = CELL_CLASS;
        row.appendChild(cell);
        for (var j = 1; j <= this.w; j++) {
            var chcell = document.createElement('td');
            chcell.className = CELL_CLASS;
            chcell.innerHTML = toLetter(j);
            row.appendChild(chcell);

        }
        board.appendChild(row);
        p.appendChild(board);
    };
    this.getBoard = function () {
        return document.getElementById('chessboard');
    };

    function getFigure(f, color) {
        switch (f) {
            case 'pawn':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png'>";
            case 'rook':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'>";
            case 'knight':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'>";
            case 'bishop':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png'>";
            case 'queen':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png'>";
            case 'king':
                return (color == 'white') ? "<img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png'>" :
                    "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png'>";
        }

    }


    function checkFigures(fgrs) {

        var restrictions = {// можно было бы вынести в константу
            pawnblack: 8,
            pawnwhite: 8,
            rookwhite: 2,
            rookblack: 2,
            knightwhite: 2,
            knightblack: 2,
            bishopwhite: 2,
            bishopblack: 2,
            queenwhite: 1,
            queenblack: 1,
            kingwhite: 1,
            kingblack: 1
        };
        for (f in fgrs) {
            var fgr = fgrs[f].figure + fgrs[f].color;
            if (--restrictions[fgr] < 0) {
                console.error('слишком много ' + fgr + ' в json');
                return 0;
            }
        }
        //todo проверка нескольких фигур на одной клетке
        return 1;
    }

    this.putFigures = function (fileName) {
        // 1. Создаём новый объект XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', fileName, false);
        // 3. Отсылаем запрос
        xhr.send();
        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {

            var figures = JSON.parse(xhr.responseText);
            if (checkFigures(figures)) {
                for (var i = 0; i < figures.length; i++) {
                    if (figures[i].deleted == 0) {
                        var cell = document.getElementById(figures[i].postion);
                        cell.innerHTML = getFigure(figures[i].figure, figures[i].color);
                    }
                }
            }
            //  console.log(figures);


        }
    }
}




