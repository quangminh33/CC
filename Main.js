var renderer = PIXI.autoDetectRenderer(630, 700,{backgroundColor : 0xFFFFFF});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a new Sprite using the texture
var board = new Board();
stage.addChild(board);
board.init();


//board.print();

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);
    // render the container
    renderer.render(stage);
}