/**
 * @file loadingscreen1.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: This class is used to introduce new game concept/controls to the user for level 1
 * @version 0.14.0 added scenes/loadingscreen1.ts
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class LoadingScreen1 extends objects.Scene {

        // INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        protected _blackRectScreen: createjs.Shape
        protected _titleLabel: objects.Label
        protected _loadContainer: createjs.Container
        protected _actionLabel: objects.Label
        private _islandSprite: createjs.Sprite
        private _playerSprite: createjs.Sprite
        private _islandLabel: objects.Label
        private _playerLabel: objects.Label

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super()
        }

        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         * 
         * @public
         * @method start
         * 
         * @memberOf LoadingScreen
         * @return {void}
         */
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");


            this.addChild(this._blackRectScreen = new createjs.Shape())
            this._blackRectScreen.graphics.beginFill("#000")
            this._blackRectScreen.graphics.drawRect(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
            this._blackRectScreen.graphics.endFill();

            this._titleLabel = new objects.Label("Level 1: Training", "50px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._actionLabel = new objects.Label("- Click anywhere to continue -", "20px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this._actionLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._islandSprite = new createjs.Sprite(textureAtlas, 'island')
            this._islandSprite.x = config.Screen.CENTER_X - 200
            this._islandSprite.y = config.Screen.CENTER_Y - 30
            this._playerSprite = new createjs.Sprite(textureAtlas, 'plane')
            this._playerSprite.x = config.Screen.CENTER_X - 200
            this._playerSprite.y = config.Screen.CENTER_Y + 50

            this._islandLabel = new objects.Label("Parcels need to be delivered to these islands.\nFly your airplane over the islands to deliver\nparcels.", "15px custfont", "#fff", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y);
            this._islandLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._playerLabel = new objects.Label("You will use this airplane to deliver the parcels.\nThe plane steers left and right by following\nyour mouse.", "15px custfont", "#fff", config.Screen.CENTER_X + 60, config.Screen.CENTER_Y + 90);
            this._playerLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            // load everything into container for easier animations
            this._loadContainer = new createjs.Container()
            this._loadContainer.addChild(this._titleLabel);
            this._loadContainer.addChild(this._actionLabel)
            this._loadContainer.addChild(this._islandSprite)
            this._loadContainer.addChild(this._islandLabel)
            this._loadContainer.addChild(this._playerSprite)
            this._loadContainer.addChild(this._playerLabel)
            this._loadContainer.alpha = 0

            createjs.Tween.get(this._loadContainer).wait(500).to({
                alpha: 1
            }, 1500, createjs.Ease.backOut)

            this.addChild(this._loadContainer)

            // Add gamescene to main stage container. 
            stage.addChild(this);

            stage.on('stagemousedown', e => {
                scene = config.Scene.LEVEL1;
                changeScene();
            })
        }

        /**
         * This function updates the objects contained in the game scene
         * 
         * @public
         * @method update
         * 
         * @memberOf LoadingScreen
         * @return {void}
         */
        public update(): void {

            // flickering of actionlabel
            if (createjs.Ticker.getTime() % 1000 < 500) {
                this._actionLabel.alpha = 0
            }
            else {
                this._actionLabel.alpha = 1
            }
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}