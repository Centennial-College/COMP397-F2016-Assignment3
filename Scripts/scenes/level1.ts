/**
 * @file level1.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: Level1 scene extends from the abstract Game class and inherits all its behaviors and attributes
 * @version 1.1.0 added combo system; refactored scoring system
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Level1 extends scenes.GameLevel {

        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            super.start()
            this.start()
        }

        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         * 
         * @public
         * @method start
         * 
         * @memberOf Game
         * @return {void}
         */
        public start(): void {
            // Add objects to the scene
            console.log("Level 1 started...");

            // initialize game variables
            gameLevel = 1
            // gameTime = 3
            gameTime = 20
            gameScore = 0
            gameParcelsRemaining = 10
            gameCombo = 0

            stage.addChild(this)
        }

        /**
         * This function updates the objects contained in the game scene
         * 
         * @public
         * @method update
         * 
         * @memberOf Game
         * @return {void}
         */
        public update(): void {
            super.update()

            if (this._gameOver) {
                scene = config.Scene.GAMEOVER
                stage.cursor = "auto"
                changeScene()
            }

            if (gameParcelsRemaining == 0) {
                createjs.Sound.play("yay")
                scene = config.Scene.LOADING2
                stage.cursor = "auto"
                changeScene()
            }
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}