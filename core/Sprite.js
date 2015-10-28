function Sprite(texture) {
    PIXI.Sprite.call(this, texture);
}

Sprite.prototype = Object.create(PIXI.Sprite.prototype);