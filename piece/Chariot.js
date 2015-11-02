function Chariot(x, y, player, isBlank) {
    var name = "O";
    Piece.call(this, name, x, y, player, isBlank);
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

}

Chariot.prototype = Object.create(Piece.prototype);