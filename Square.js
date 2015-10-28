function Square(x, y) {
    var moveImage = PIXI.Texture.fromImage("assets/Move.png");
    var _x = 0;
    var _y = 0;
    var _player = 0;
    var _piece = null;
    var moveSprite = new PIXI.Sprite(moveImage);

    this.setX = function(val) {
        _x = val;
        moveSprite.position.y = Config.squareSize * _x + Config.deltaX;
    };

    this.setY = function(val) {
        _y = val;
        moveSprite.position.x = Config.squareSize * _y + Config.deltaX;
    };

    this.setPlayer = function(val) {
        _player = val;
    };

    this.setPiece = function(piece) {
        _piece = piece;
        if (piece) {
            piece.setX(_x);
            piece.setY(_y);
        }
    };

    this.getX = function() {
        return _x;
    };

    this.getY = function() {
        return _y;
    };

    this.getPlayer = function() {
        return _player;
    };

    this.getPiece = function() {
        return _piece;
    };

    this.showMove = function() {
        stage.addChild(moveSprite);
    };

    this.hideMove = function() {
        stage.removeChild(moveSprite);
    };

    this.setX(x);
    this.setY(y);
    moveSprite.anchor.x = 0.5;
    moveSprite.anchor.y = 0.5;
}