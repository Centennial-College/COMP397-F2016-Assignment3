/**
 * @file gamelevel.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: GameLevel scene that contains all assets and functionality associated with the game itself
 * @version 0.9.2 refactored scenes/game.ts into abstract class gamelevel.ts and extended to concrete level1.ts
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export abstract class GameLevel extends objects.Scene {

        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island
        private _player: objects.Player

        // top UI bar
        private _uiBar: objects.UIBar

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
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
            console.log("Game scene started");

            // hides cursor when game scene starts
            stage.cursor = 'none'

            this.addChild(this._ocean = new objects.Ocean("ocean"));
            this.addChild(this._island = new objects.Island("island"))
            this.addChild(this._player = new objects.Player("plane"));
            this.addChild(this._uiBar = new objects.UIBar())
            // this._uiBar.shadow = new createjs.Shadow('#000', 1, 1, 20)

            // Add gamescene to main stage container. 
            stage.addChild(this);
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
            // Update objects
            this._ocean.update()
            this._island.update()
            this._player.update()
            this._uiBar.update()

            // check for collisions
            this._player.checkCollision(this._island)

        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}