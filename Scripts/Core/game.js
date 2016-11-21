/**
 * @file game.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: This file is the entry point for the game.
 * @version 0.14.0 added scenes/loadingscreen.ts
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/// <reference path = "_reference.ts" />
// GLOBAL VARIABES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var assets;
var canvas;
var stage;
var currentScene;
var tempScene;
var scene;
// global scope game variables
var gameLevel;
var gameTime;
var gameScore;
var gameParcelsRemaining;
// declare textureAtlas
var textureAtlas;
// Preload Assets required
var assetData = [
    { id: "ocean", src: "../../Assets/images/bg.gif" },
    { id: "atlas", src: "../../Assets/images/atlas.png" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "goal", src: "../../Assets/audio/goal.wav" },
    { id: "yay", src: "../../Assets/audio/yay.mp3" },
    { id: "gameover", src: "../../Assets/audio/gameover.mp3" },
];
/**
 * This methoengine is used to preload all the assets required for the game
 * before it starts running.
 *
 * @method preload
 * @return {void}
 */
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
/**
 * This method is the entry point for the application.
 *
 * @method init
 * @return {void}
 */
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events; the frequency parameter indicates how many times per second EaselJS should calculate what is currently under the pointer. 
    // A higher number is more responsive, but also more computationally expensive. It defaults to 20 times per second. 
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.framerate = config.Game.FPS;
    createjs.Ticker.on("tick", this.gameLoop, this);
    textureAtlas = new createjs.SpriteSheet({
        "images": [
            assets.getResult('atlas')
        ],
        "frames": [
            [1, 1, 226, 178, 0, 0, 0],
            [1, 181, 175, 59, 0, 0, 0],
            [178, 181, 175, 59, 0, 0, 0],
            [229, 1, 175, 59, 0, 0, 0],
            [229, 62, 175, 59, 0, 0, 0],
            [406, 1, 62, 62, 0, 0, 0],
            [229, 123, 62, 51, 0, -3, -9],
            [406, 65, 62, 51, 0, -3, -9],
            [293, 123, 62, 51, 0, -3, -9],
            [357, 123, 81, 68, 0, 0, 0]
        ],
        "animations": {
            "cloud": { "frames": [0] },
            "gotomenu": { "frames": [1] },
            "instructions": { "frames": [2] },
            "playagain": { "frames": [3] },
            "playgame": { "frames": [4] },
            "island": { "frames": [5] },
            "plane": {
                "frames": [6, 7, 8],
                "speed": 0.5
            },
            "parcel": { "frames": [9] }
        }
    });
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.LOADING1;
    // scene = config.Scene.MENU;
    changeScene();
}
/**
 * Main game loop function which handles what happens with each "tick" or frame
 *
 * @method gameLoop
 * @param {createjs.TickerEvent} event
 * @return {void}
 */
function gameLoop(event) {
    // Update whatever scene is currently active.
    if (tempScene != null) {
        tempScene.update();
    }
    else {
        currentScene.update();
    }
    stage.update();
}
/**
 * This function is used as a View Switcher to switch between different scenes
 * within the application.
 *
 * @method changeScene
 * @return {void}
 */
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            console.log("Starting MENU scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting Instructions scene");
            break;
        case config.Scene.LEVEL1:
            stage.removeAllEventListeners();
            stage.removeAllChildren();
            currentScene = new scenes.Level1();
            console.log("Starting LEVEL1 scene");
            break;
        case config.Scene.LEVEL2:
            stage.removeAllChildren();
            currentScene = new scenes.Level2();
            console.log("Starting LEVEL2 scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting GAMEOVER scene");
            break;
        case config.Scene.GAMEWIN:
            stage.removeAllChildren();
            currentScene = new scenes.GameWin();
            console.log("Starting GAMEWIN scene");
            break;
        case config.Scene.LOADING1:
            stage.removeAllChildren();
            currentScene = new scenes.LoadingScreen1();
            console.log("Starting LOADING1 scene");
            break;
    }
}
window.onload = preload;
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=game.js.map