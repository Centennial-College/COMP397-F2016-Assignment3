/**
 * @file config.ts
 * @author Kevin Ma k
 * @studentID 300867968
 * @date: November 20, 2016
 * @description: This file is used to store globally accessible values and states for the game.
 * @version 0.12.1 added scenes/instructions.ts
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module config {
    export class Scene {
        public static MENU: number = 0;
        public static LEVEL1: number = 1;
        public static LEVEL2: number = 2;
        public static GAMEOVER: number = 3;
        public static INSTRUCTIONS: number = 4;
    }

    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }

    export class Game {
        public static FPS: number = 60;
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */