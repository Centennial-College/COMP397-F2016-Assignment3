/**
 * @file level1.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: Level1 scene extends from the abstract Game class and inherits all its behaviors and attributes
 * @version 0.9.2 refactored scenes/game.ts into abstract class gamelevel.ts and extended to concrete level1.ts
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
            gameTime = 60
            gameScore = 0
            gameParcelsRemaining = 10

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
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}