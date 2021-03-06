/**
 * @file ocean.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: Ocean object used in the game
 * @version 0.2.0
 */
module objects {
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Ocean.
         * 
         * @constructor
         * @param {string} imageString
         */
        /**
         * Creates an instance of Ocean.
         * 
         * @param {string} imageString
         * @param {number} [scrollSpeed=5]  default of 5px per frame  down
         * 
         * @memberOf Ocean
         */
        constructor(imageString: string, scrollSpeed: number = 5) {
            super(assets.getResult(imageString));
            this._dy = scrollSpeed

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset(): void {
            this.y = -960;
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.y >= 0) {
                this._reset();
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start(): void {
            this._reset();
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update(): void {
            this.y += this._dy;
            this._checkBounds();
        }
    }
}