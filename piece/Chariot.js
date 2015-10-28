function Chariot(x, y, player) {
    Piece.call(this, "O", x, y, player);
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
                    if (a[x][y].getPiece().getPlayer() !== this.getPlayer()) {
                        result.push(a[x][y]);
                        x += ki[i];
                        y += kj[i];
                    }
                    break;
                }
            }
        }

        return result;
    };

    this.getName = function() {
        return "O";
    };
}

Chariot.prototype = Object.create(Piece.prototype);