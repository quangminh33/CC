function Board() {
    var boardImage = PIXI.Texture.fromImage("assets/Board.png");
    Sprite.call(this, boardImage);

    var cols = 9;
    var rows = 10;
    var pieces = [[],[]];
    var hiddenPieces = [[],[]];
    var realPieces = [];
    var arr = [];
    var player1 = 0;
    var player2 = 1;
    var currentMoves = [];
    var selectedPiece = null;
    var activePlayer = player1;

    this.init = function() {
        var i = 0;
        var j = 0;
        // Init the board
        // Init square of player 1.
        for (i = 0; i < rows / 2; i++) {
            arr[i] = [];
            for (j = 0; j < cols; j++) {
                arr[i][j] = new Square(i, j, player1);
            }
        }
        // Init square of player 2.
        for (i = rows / 2; i < rows; i++) {
            arr[i] = [];
            for (j = 0; j < cols; j++) {
                arr[i][j] = new Square(i, j, player2);
            }
        }
        // Init square of castle.
        for (i = 0; i < 3; i++) {
            for (j = 3; j < 6; j++) {
                arr[i][j].setCastle(true);
                arr[rows - 1 - i][j].setCastle(true);
            }
        }

        // Init pieces.
        pieces[player1].push(new Chariot(0, 0, player1, true));
        pieces[player1].push(new Chariot(0, 8, player1, true));
        pieces[player1].push(new Cannon(2, 1, player1, true));
        pieces[player1].push(new Cannon(2, 7, player1, true));
        pieces[player1].push(new Horse(0, 1, player1, true));
        pieces[player1].push(new Horse(0, 7, player1, true));
        // pieces[player1].push(new King(0, 4, player1, true));
        pieces[player1].push(new Advisor(0, 3, player1, true, true));
        pieces[player1].push(new Advisor(0, 5, player1, true, true));
        pieces[player1].push(new Elephant(0, 2, player1, true));
        pieces[player1].push(new Elephant(0, 6, player1, true));
        pieces[player1].push(new Pawn(3, 0, player1, true));
        pieces[player1].push(new Pawn(3, 2, player1, true));
        pieces[player1].push(new Pawn(3, 4, player1, true));
        pieces[player1].push(new Pawn(3, 6, player1, true));
        pieces[player1].push(new Pawn(3, 8, player1, true));

        pieces[player2].push(new Chariot(9, 0, player2, true));
        pieces[player2].push(new Chariot(9, 8, player2, true));
        pieces[player2].push(new Cannon(7, 1, player2, true));
        pieces[player2].push(new Cannon(7, 7, player2, true));
        pieces[player2].push(new Horse(9, 1, player2, true));
        pieces[player2].push(new Horse(9, 7, player2, true));
        // pieces[player2].push(new King(9, 4, player2, true));
        pieces[player2].push(new Advisor(9, 3, player2, true,true));
        pieces[player2].push(new Advisor(9, 5, player2, true,true));
        pieces[player2].push(new Elephant(9, 2, player2, true));
        pieces[player2].push(new Elephant(9, 6, player2, true));
        pieces[player2].push(new Pawn(6, 0, player2, true));
        pieces[player2].push(new Pawn(6, 2, player2, true));
        pieces[player2].push(new Pawn(6, 4, player2, true));
        pieces[player2].push(new Pawn(6, 6, player2, true));
        pieces[player2].push(new Pawn(6, 8, player2, true));

        hiddenPieces[player1].push(new Chariot(0, 0, player1));
        hiddenPieces[player1].push(new Chariot(0, 8, player1));
        hiddenPieces[player1].push(new Cannon(2, 1, player1));
        hiddenPieces[player1].push(new Cannon(2, 7, player1));
        hiddenPieces[player1].push(new Horse(0, 1, player1));
        hiddenPieces[player1].push(new Horse(0, 7, player1));
        // hiddenPieces[player1].push(new King(0, 4, player1));
        hiddenPieces[player1].push(new Advisor(0, 3, player1));
        hiddenPieces[player1].push(new Advisor(0, 5, player1));
        hiddenPieces[player1].push(new Elephant(0, 2, player1));
        hiddenPieces[player1].push(new Elephant(0, 6, player1));
        hiddenPieces[player1].push(new Pawn(3, 0, player1));
        hiddenPieces[player1].push(new Pawn(3, 2, player1));
        hiddenPieces[player1].push(new Pawn(3, 4, player1));
        hiddenPieces[player1].push(new Pawn(3, 6, player1));
        hiddenPieces[player1].push(new Pawn(3, 8, player1));

        hiddenPieces[player2].push(new Chariot(9, 0, player2));
        hiddenPieces[player2].push(new Chariot(9, 8, player2));
        hiddenPieces[player2].push(new Cannon(7, 1, player2));
        hiddenPieces[player2].push(new Cannon(7, 7, player2));
        hiddenPieces[player2].push(new Horse(9, 1, player2));
        hiddenPieces[player2].push(new Horse(9, 7, player2));
        // hiddenPieces[player2].push(new King(9, 4, player2));
        hiddenPieces[player2].push(new Advisor(9, 3, player2));
        hiddenPieces[player2].push(new Advisor(9, 5, player2));
        hiddenPieces[player2].push(new Elephant(9, 2, player2));
        hiddenPieces[player2].push(new Elephant(9, 6, player2));
        hiddenPieces[player2].push(new Pawn(6, 0, player2));
        hiddenPieces[player2].push(new Pawn(6, 2, player2));
        hiddenPieces[player2].push(new Pawn(6, 4, player2));
        hiddenPieces[player2].push(new Pawn(6, 6, player2));
        hiddenPieces[player2].push(new Pawn(6, 8, player2));

        var list = [];
        list[player1] = [
            {x: 0, y: 0},
            {x: 0, y: 8},
            {x: 2, y: 1},
            {x: 2, y: 7},
            {x: 0, y: 1},
            {x: 0, y: 7},
            // {x: 0, y: 4},
            {x: 0, y: 3},
            {x: 0, y: 5},
            {x: 0, y: 2},
            {x: 0, y: 6},
            {x: 3, y: 0},
            {x: 3, y: 2},
            {x: 3, y: 4},
            {x: 3, y: 6},
            {x: 3, y: 8}
        ];
        list[player2] = [
            {x: 9, y: 0},
            {x: 9, y: 8},
            {x: 7, y: 1},
            {x: 7, y: 7},
            {x: 9, y: 1},
            {x: 9, y: 7},
            // {x: 9, y: 4},
            {x: 9, y: 3},
            {x: 9, y: 5},
            {x: 9, y: 2},
            {x: 9, y: 6},
            {x: 6, y: 0},
            {x: 6, y: 2},
            {x: 6, y: 4},
            {x: 6, y: 6},
            {x: 6, y: 8}
        ];

        var kingPos = [
            {x: 0, y: 4, p: player1},
            {x: 9, y: 4, p: player2}
        ];
        for (var i in kingPos) {
            var king = new King(kingPos[i].x, kingPos[i].y, kingPos[i].p);
            arr[kingPos[i].x][kingPos[i].y].setPiece(king);
            stage.addChild(king);
        }

        // Add pieces to stage and square.
        for (i = 0; i < pieces.length; i++) {
            for (j = 0; j < pieces[i].length; j++) {
                var p = pieces[i][j];
                // Add to board.
                //p.setX(item.x);
                //p.setY(item.y);
                arr[p.getX()][p.getY()].setPiece(p);
                // Add to stage.
                stage.addChild(p);
            }
        }

        // Add real pieces.
        for (i = 0; i < hiddenPieces.length; i++) {
            for (j = 0; j < hiddenPieces[i].length; j++) {
                var p = hiddenPieces[i][j];
                // Add to board.
                var rand = Math.floor(Math.random() * list[i].length);
                var item = list[i].splice(rand, 1)[0];
                realPieces[item.x + ":" + item.y] = p;
                //arr[item.x][item.y].setPiece(p);
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
            if (selectedPiece && selectedPiece.getPlayer() == activePlayer) {
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
        var p = from.getPiece();
        if (to.getPiece()) {
            stage.removeChild(to.getPiece());
        }

        if (p.isBlank()) {
            stage.removeChild(p);
            stage.addChild(realPieces[from.getX() + ":" + from.getY()]);
            to.setPiece(realPieces[from.getX() + ":" + from.getY()]);
        } else {
            to.setPiece(p);
        }
        from.setPiece(null);
        activePlayer = activePlayer == player1 ? player2 : player1;
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