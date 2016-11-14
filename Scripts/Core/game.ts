/**
 * @file game.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: This file is the entry point for the game.
 * @version 0.6.1 implemented gliding delay when moving player.ts to be more realistic 
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/// <reference path = "_reference.ts" />

// GLOBAL VARIABES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let assets: createjs.LoadQueue;
let canvas: HTMLElement;
let stage: createjs.Stage;

let currentScene: objects.Scene;
let scene: number;

// declare textureAtlas
let textureAtlas: createjs.SpriteSheet

// Preload Assets required
let assetData: objects.Asset[] = [
    { id: "ocean", src: "../../Assets/images/bg.gif" },
    { id: "atlas", src: "../../Assets/images/atlas.png" }
];

/**
 * This method is used to preload all the assets required for the game 
 * before it starts running.
 * 
 * @method preload
 * @return {void}
 */
function preload(): void {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

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
function init(): void {
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
            [178, 181, 62, 62, 0, 0, 0],
            [1, 242, 175, 59, 0, 0, 0],
            [178, 245, 62, 51, 0, -3, -9],
            [178, 298, 62, 51, 0, -3, -9],
            [1, 303, 175, 59, 0, 0, 0],
            [178, 351, 62, 51, 0, -3, -9],
            [1, 364, 175, 59, 0, 0, 0]
        ],

        "animations": {
            "cloud": { "frames": [0] },
            "gotomenu": { "frames": [1] },
            "island": { "frames": [2] },
            "instructions": { "frames": [3] },
            "plane": {
                "frames": [4, 5, 7],
                "speed": 0.5
            },
            "playagain": { "frames": [6] },
            "playgame": { "frames": [8] }
        }
    })

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.GAME;
    changeScene();
}

/**
 * Main game loop function which handles what happens with each "tick" or frame
 * 
 * @method gameLoop
 * @param {createjs.TickerEvent} event
 * @return {void}
 */
function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

/**
 * This function is used as a View Switcher to switch between different scenes
 * within the application.
 * 
 * @method changeScene
 * @return {void}
 */
function changeScene(): void {

    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting GAMEOVER scene");
            break;
    }

}

window.onload = preload;

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */