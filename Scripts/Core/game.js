/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
var menuScene;
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Back", src: "../../Assets/images/Back.png" },
];
function preload() {
    assets = new createjs.LoadQueue();
    // assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", gameLoop, this);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    currentScene.update();
    stage.update();
}
function changeScene() {
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            // currentScene
            break;
    }
}
//# sourceMappingURL=game.js.map