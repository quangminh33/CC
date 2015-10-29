function Square(x, y, player) {
    var moveImage = PIXI.Texture.fromImage("assets/Move.png");
    var _x = 0;
    var _y = 0;
    var _player = player;
    var _piece = null;
    var moveSprite = new PIXI.Sprite(moveImage);
    var _isCastle = false;

    this.isCastle = function() {
        return _isCastle;
    };

    this.setCastle = function(isCastle) {
        _isCastle = isCastle;
    };

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
        if (piece) {
            piece.setX(_x);
            piece.setY(_y);
        }

        _piece = piece;
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