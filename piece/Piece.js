function Piece(srcImage, x, y, player, isBlank) {
    var color = player ? "B" : "W";
    srcImage = isBlank ? "": srcImage;
    var name = srcImage;
    srcImage = "assets/" + srcImage + color + ".png";

    Sprite.call(this, PIXI.Texture.fromImage(srcImage));

    var _x = 0;
    var _y = 0;
    var _player = player;

    this.isBlank = function() {
        return Boolean(isBlank);
    };

    this.setX = function(val) {
        _x = val;
        this.position.y = Config.squareSize * _x + Config.deltaX;
    };

    this.setY = function(val) {
        _y = val;
        this.position.x = Config.squareSize * _y + Config.deltaY;
    };

    this.setPlayer = function(val) {
        _player = val;
    };

    this.getName = function() {
        return name;
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



    this.anchor.x = 0.5; // pixijs
    this.anchor.y = 0.5; // pixijs
    this.setX(x);
    this.setY(y);
}

Piece.prototype = Object.create(Sprite.prototype);
