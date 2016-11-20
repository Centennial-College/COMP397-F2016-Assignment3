/**
 * @file level2.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: Level2 scene extends from the abstract Game class and inherits all its behaviors and attributes
 * @version 0.10.0 when player beats level1, level2 starts
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Level2 extends scenes.GameLevel {

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
            console.log("Level 2 started...");

            // initialize game variables
            gameLevel = 2
            gameTime = 50
            gameParcelsRemaining = 25

            // stage.addChild(this)
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

            if (gameParcelsRemaining == 0) {
                scene = config.Scene.MENU
                stage.cursor = "auto"
                changeScene()
            }
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}