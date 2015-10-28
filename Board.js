function Board() {
    var boardImage = PIXI.Texture.fromImage("assets/Board.png");
    Sprite.call(this, boardImage);

    var cols = 9;
    var rows = 10;
    var _pieces = [[],[]];
    var arr = [];
    var _player1 = 0;
    var _player2 = 1;
    var moveImage = PIXI.Texture.fromImage("assets/Move.png");
    var currentMoves = [];
    var selectedPiece = null;

    this.init = function() {
        var i = 0;
        var j = 0;
        // Init the board
        for (i=0; i<rows; i++) {
            arr[i] = [];
            for (j=0; j<cols; j++) {
                arr[i][j] = new Square(i, j);
            }
        }

        // Init pieces.
        _pieces[_player1].push(new Chariot(0, 0, _player1));
        _pieces[_player1].push(new Chariot(0, 8, _player1));
        _pieces[_player1].push(new Chariot(9, 0, _player2));
        _pieces[_player1].push(new Chariot(9, 8, _player2));
        _pieces[_player1].push(new Horse(0, 1, _player1));
        _pieces[_player1].push(new Horse(0, 7, _player1));
        _pieces[_player1].push(new Horse(9, 1, _player2));
        _pieces[_player1].push(new Horse(9, 7, _player2));
        _pieces[_player1].push(new Elephant(0, 2, _player1));
        _pieces[_player1].push(new Elephant(0, 6, _player1));
        _pieces[_player1].push(new Elephant(9, 2, _player2));
        _pieces[_player1].push(new Elephant(9, 6, _player2));
        _pieces[_player1].push(new Advisor(0, 3, _player1));
        _pieces[_player1].push(new Advisor(0, 5, _player1));
        _pieces[_player1].push(new Advisor(9, 3, _player2));
        _pieces[_player1].push(new Advisor(9, 5, _player2));

        // Add pieces to stage and square.
        for (i = 0; i < _pieces.length; i++) {
            for (j = 0; j < _pieces[i].length; j++) {
                var p = _pieces[i][j];
                // Add to board.
                arr[p.getX()][p.getY()].setPiece(p);
                // Add to stage.
                stage.addChild(p);
            }
        }
    };

    function drawCurrentMoves(moves) {
        var i = 0;
        // Remove current moves.
        while ((i = currentMoves.pop())) {
            i.hideMove(0);
        }
        // Draw moves on GUI.
        for (i = 0; i < moves.length; i++) {
            var m = moves[i];
            m.showMove();
            currentMoves.push(m);
        }
    }

    function clickOnBoard(eventData) {
        // Detect square which is clicked.
        var x = (eventData.data.global.y-Config.deltaY/2) / Config.squareSize;
        var y = (eventData.data.global.x-Config.deltaX/2) / Config.squareSize;
        x = Math.floor(x);
        y = Math.floor(y);

        if(currentMoves.indexOf(arr[x][y]) > -1) {
            movePiece(
                arr[selectedPiece.getX()][selectedPiece.getY()],
                arr[x][y]);
            selectedPiece = null;
            drawCurrentMoves([]);
        } else if(arr[x] && arr[x][y]) {
            selectedPiece = arr[x][y].getPiece();
            if (selectedPiece) {
                var m = selectedPiece.getMoves(arr);
                drawCurrentMoves(m);
                print(m);
            } else {
                selectedPiece = null;
                drawCurrentMoves([]);
            }
        }

    }

    function movePiece(from, to) {
        if (to.getPiece()) {
            stage.removeChild(to.getPiece());
        }
        to.setPiece(from.getPiece());
        from.setPiece(null);
    }

    function print(moves) {
        var s = "";
        for (var i=0; i<rows; i++) {
            s = "";
            for (var j=0; j<cols; j++) {
                if (arr[i][j].getPiece() !== null) {
                    s += arr[i][j].getPiece().getName();
                } else {
                    if(isInMoves(i,j,moves)) {
                        s += "X";
                    } else {
                        s += "_";
                    }
                }
                s += ",";
            }
            console.log(s);
        }
        console.log(JSON.stringify(moves));


    }

    function isInMoves(x,y,moves) {
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].getX() === x && moves[i].getY() === y) {
                return true;
            }
        }
        return false;
    }

    this.interactive = true;
    this.renderable = false;
    this.on("mousedown", clickOnBoard);
    this.on("touchstart", clickOnBoard);

}

Board.prototype = Object.create(Sprite.prototype);