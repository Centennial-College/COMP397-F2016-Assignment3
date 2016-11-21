/**
 * @file loadingscreen2.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: This class is used to introduce new game concept/controls to the user for level 2
 * @version 1.0.0 initial release.
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class LoadingScreen2 extends objects.Scene {

        // INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        protected _blackRectScreen: createjs.Shape
        protected _titleLabel: objects.Label
        protected _subtitleLabel: objects.Label
        protected _loadContainer: createjs.Container
        protected _actionLabel: objects.Label
        private _cloudSprite: createjs.Sprite
        private _cloudLabel: objects.Label

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
            createjs.Sound.stop()

            // Add objects to the scene
            this.addChild(this._blackRectScreen = new createjs.Shape())
            this._blackRectScreen.graphics.beginFill("#000")
            this._blackRectScreen.graphics.drawRect(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
            this._blackRectScreen.graphics.endFill();

            this._titleLabel = new objects.Label("Level 2: Probation", "50px custfont", "#F0E68C", config.Screen.CENTER_X, config.Screen.CENTER_Y - 50);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._subtitleLabel = new objects.Label("As a trained employee candidate, you now\nneed to prove your worth to the company.", "20px custfont", "#888", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._subtitleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._actionLabel = new objects.Label("- Click anywhere to continue -", "20px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this._actionLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            this._cloudSprite = new createjs.Sprite(textureAtlas, 'cloud')
            this._cloudSprite.scaleX = this._cloudSprite.scaleY = .5
            this._cloudSprite.x = config.Screen.CENTER_X - 250
            this._cloudSprite.y = config.Screen.CENTER_Y + 40

            this._cloudLabel = new objects.Label("You will now begin to encounter clouds.\nColliding with clouds slows you down.\nYour time to deliver parcels decreases by\n5 seconds. Your airplane will be invulnerable\nto clouds for the next 3 seconds.", "15px custfont", "#fff", config.Screen.CENTER_X + 55, config.Screen.CENTER_Y + 80);
            this._cloudLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)

            // load everything into container for easier animations
            this._loadContainer = new createjs.Container()
            this._loadContainer.addChild(this._titleLabel);
            this._loadContainer.addChild(this._subtitleLabel);
            this._loadContainer.addChild(this._actionLabel)
            this._loadContainer.addChild(this._cloudSprite)
            this._loadContainer.addChild(this._cloudLabel)
            this._loadContainer.alpha = 0

            createjs.Tween.get(this._loadContainer).wait(500).to({
                alpha: 1
            }, 1500, createjs.Ease.backOut)

            this.addChild(this._loadContainer)

            // Add gamescene to main stage container. 
            stage.addChild(this);

            stage.on('stagemousedown', e => {
                scene = config.Scene.LEVEL2;
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