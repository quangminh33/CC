function Advisor(x, y) {
    Piece.call(this, "assets/AB.png", x, y);

    var ki = [-1, -1, 1, 1];
    var kj = [-1, 1, -1, 1];

    this.getMoves = function(a) {
        var result = [];
        for (var i=0; i<4; i++) {
            var x = this.getX() + ki[i];
            var y = this.getY() + kj[i];
            if (a[x] && a[x][y] === null) {
                result.push({
                    x: x,
                    y: y
                });
            }
        }

        return result;
    };

    this.getName = function() {
        return "A";
    };
}

Advisor.prototype = Object.create(Piece.prototype);
Advisor.prototype.constructor = Advisor;