/**
 * @file instructions.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: This scene guides the player in playing this game
 * @version 0.12.1 added scenes/instructions.ts 
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Instructions extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _instructionsLabel: objects.Label

        private _playGameBtn: objects.Button;
        private _menuBtn: objects.Button;

        private _ocean: objects.Ocean;

        private _bottomPanel: createjs.Container;
        private _instructionsRoundRectBG: createjs.Shape

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
          * This method runs when the scene is started
          * 
          * @public
          * @method start
          * 
          * @memberOf Menu
          * @return {void}
          */
        public start(): void {
            // ocean object
            this._ocean = new objects.Ocean("ocean", 1);

            // 5x5 Box Blur filter on bg image
            let blurFilter = new createjs.BlurFilter(5, 5);
            this._ocean.filters = [blurFilter];
            let bitmapBounds = this._ocean.getBounds();

            this._ocean.cache(bitmapBounds.x, bitmapBounds.y, bitmapBounds.width, bitmapBounds.height);
            this.addChild(this._ocean);

            this._titleLabel = new objects.Label("What am I doing here?", "50px custfont", "#fff", config.Screen.CENTER_X - 1500, config.Screen.CENTER_Y - 200);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)
            createjs.Tween.get(this._titleLabel).wait(500).to({
                x: config.Screen.CENTER_X,
                y: config.Screen.CENTER_Y - 200,
            }, 1500,
                createjs.Ease.backOut);
            this.addChild(this._titleLabel);

            // Add buttons to scene. Register for click callback function
            this._playGameBtn = new objects.Button("playgame", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 185);
            this._playGameBtn.shadow = new createjs.Shadow('#000', 5, 5, 15)
            this._playGameBtn.on("click", this._playGameBtnClick, this);

            this._menuBtn = new objects.Button("gotomenu", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 185);
            this._menuBtn.shadow = new createjs.Shadow('#000', 5, 5, 15)
            this._menuBtn.on("click", this._menuBtnClick, this);

            this._instructionsLabel = new objects.Label("You have been desperately searching for a co-op job.\nHowever, you have been unsuccessful in doing so. When\nall hope was lost, you heard from a friend who heard\nfrom his friend's uncle's colleague about a position\noffered at 12 Parsecs Delivery.\n\n12 Parsecs Delivery is a company known for excelling in\ncustomer service, rapid delivery services and reliability.\nYour job at the company is to deliver parcels to\nresidents living on remote islands using an aircraft.\nYou have to successfully deliver all the parcels in\nthe allocated time.\n\nIt is clearly stated in your offer letter that you will be\nfired even if you are ONE second late in making a\ndelivery. The offer letter also states that you will be\nprovided training on your first day of work. You\nimmediately accept the job offer and must now get to\nwork...", "18px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y - 10)
            this._instructionsLabel.shadow = new createjs.Shadow("#000", 2, 2, 2)
            this._instructionsLabel.alpha = 0.8

            this._instructionsRoundRectBG = new createjs.Shape()
            this._instructionsRoundRectBG.graphics.beginLinearGradientFill(["#fff", "#888"], [0, 1], 0, 0, 550, 310)
            // this._instructionsRoundRectBG.graphics.beginLinearGradientFill(["#FFA519", "#B26D02"], [0, 1], 0, 0, 550, 310)
            this._instructionsRoundRectBG.graphics.drawRoundRect(45, 75, 550, 310, 25)
            this._instructionsRoundRectBG.shadow = new createjs.Shadow("#000", 2, 2, 20)
            this._instructionsRoundRectBG.alpha = .6

            //add to panel for animation purposes
            this._bottomPanel = new createjs.Container()
            this._bottomPanel.addChild(this._instructionsRoundRectBG)
            this._bottomPanel.addChild(this._instructionsLabel)
            this._bottomPanel.addChild(this._playGameBtn);
            this._bottomPanel.addChild(this._menuBtn);
            this._bottomPanel.alpha = 0

            createjs.Tween.get(this._bottomPanel).wait(2000).to({
                alpha: 1
            }, 2000, createjs.Ease.cubicIn)

            this.addChild(this._bottomPanel)

            createjs.Sound.play('gameover')

            // Add scene to global stage container
            stage.addChild(this);
        }

        /**
         * This method runs when the Scene updates
         * 
         * @public
         * @method update
         * 
         * @memberOf GameOver
         * @return {void}
         */
        public update(): void {
            this._ocean.update()
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the game scene when the play game button is clicked
         * 
         * @private
         * @method _playGameBtnClick
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf GameOver
         * @return {void}
         */
        private _playGameBtnClick(event: createjs.MouseEvent): void {
            // Change global scene variable to LEVEL1. Call global changeScene() function
            scene = config.Scene.LEVEL1;
            changeScene();
        }

        /**
         * This method changes the current scene to the menu scene when the menu button is clicked
         * 
         * @private
         * @method _menuBtnClick
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf GameOver
         * @return {void}
         */
        private _menuBtnClick(event: createjs.MouseEvent): void {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */