/**
 * @file island.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: This is the Island object used in the game 
 * @version 0.5.0 added objects/gameobject, objects/vector2 and objects/island classes
 */
module objects {
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(textureAtlas, imageString);

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset(): void {
            this.y = -this.height;

            // get a random x location
            // return Math.floor(Math.random() * (max - min + 1)) + min;
            // Returns a random integer between min (inclusive) and max (inclusive)
            this.x = Math.floor((Math.random() * ((640 - this.halfWidth) - this.halfWidth + 1)) + this.halfWidth);
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.y >= (480 + (this.height * 0.5))) {
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
            this._dy = 5; // 5px per frame down
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
            this.position = new Vector2(this.x, this.y);
            this.y += this._dy;
            this._checkBounds();
        }
    }
}