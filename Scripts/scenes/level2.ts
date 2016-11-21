/**
 * @file level2.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: Level2 scene extends from the abstract Game class and inherits all its behaviors and attributes
 * @version 0.13.1 reduced parcelsGoal for level 2 so it is more possible to win
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Level2 extends scenes.GameLevel {

        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _clouds: objects.Cloud[]

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
            gameTime = 80
            gameParcelsRemaining = 20

            // cloud array
            this._clouds = new Array<objects.Cloud>();
            for (let count = 0; count < 2; count++) {
                this._clouds.push(new objects.Cloud("cloud"));
                this.addChild(this._clouds[count], this._uiBar);
            }

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

            // update each cloud
            this._clouds.forEach(cloud => {
                cloud.update();
                this._player.checkCollision(cloud)
            });

            if (this._gameOver) {
                scene = config.Scene.GAMEOVER
                stage.cursor = "auto"
                changeScene()
            }

            if (gameParcelsRemaining == 0) {
                createjs.Sound.stop()
                scene = config.Scene.GAMEWIN
                stage.cursor = "auto"
                changeScene()
            }
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}