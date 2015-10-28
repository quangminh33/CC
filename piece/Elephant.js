function Elephant(x, y) {
    Piece.call(this, "assets/EB.png", x, y);

    var kiX = [-1, -1, 1, 1];
    var kjX = [-1, 1, -1, 1];
    var ki = [-2, -2, 2, 2];
    var kj = [-2, 2, -2, 2];

    this.getMoves = function(a) {
        var result = [];
        for (var i = 0; i < 4; i++) {
            var x = this.getX() + kiX[i];
            var y = this.getY() + kjX[i];
            if (a[x] && a[x][y] === null) {
                x = this.getX() + ki[i];
                y = this.getY() + kj[i];
                if (a[x] && a[x][y] === null) {
                    result.push({
                        x: x,
                        y: y
                    });
                }
            }
        }
        return result;
    };

    this.getName = function() {
        return "E";
    };
}

Elephant.prototype = Object.create(Piece.prototype);
Elephant.prototype.constructor = Horse;