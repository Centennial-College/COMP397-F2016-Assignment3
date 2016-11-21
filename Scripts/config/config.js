/**
 * @file config.ts
 * @author Kevin Ma k
 * @studentID 300867968
 * @date: November 20, 2016
 * @description: This file is used to store globally accessible values and states for the game.
 * @version 0.13.0 added scenes/gamewin.ts
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.LEVEL1 = 1;
        Scene.LEVEL2 = 2;
        Scene.GAMEOVER = 3;
        Scene.INSTRUCTIONS = 4;
        Scene.GAMEWIN = 5;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=config.js.map