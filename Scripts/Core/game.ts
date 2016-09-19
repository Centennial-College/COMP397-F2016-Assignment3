/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
var menuScene : scenes.Menu;
var gameScene : scenes.Game;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "Start", src:"../../Assets/images/Start.png"}, 
    {id: "Back", src:"../../Assets/images/Back.png"}
];

function preload() {
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
    }
    
}