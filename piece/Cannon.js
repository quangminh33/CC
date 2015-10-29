function Cannon(x, y, player) {
    Piece.call(this, "C", x, y, player);
    var ki = [-1, 0, 1, 0];
    var kj = [0, 1, 0, -1];

    this.getMoves = function(a) {
        var result = [];
        for (var i=0; i<4; i++) {
            var x = this.getX() + ki[i];
            var y = this.getY() + kj[i];
            while (a[x] && a[x][y]) {
                if (a[x][y].getPiece() === null) {
                    result.push(a[x][y]);
                    x += ki[i];
                    y += kj[i];
                } else {
                    // Get over the piece, find a captured move.
                    x += ki[i];
                    y += kj[i];
                    while (a[x] && a[x][y] && a[x][y].getPiece() === null) {
                        x += ki[i];
                        y += kj[i];
                    }
                    if (a[x] && a[x][y] &&
                        a[x][y].getPiece().getPlayer() !== this.getPlayer()) {
                            result.push(a[x][y]);
                    }
                    break;
                }
            }
        }

        return result;
    };

    this.getName = function() {
        return "C";
    };
}

Cannon.prototype = Object.create(Piece.prototype);