/**
 * @file player.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 15 2016
 * @description: This is the Player object used in the game 
 * @version 0.7.0 implemented collision check method for player and other game objects
 */
module objects {
    export class Player extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _newPosition: objects.Vector2
        private FRICTION: number = 0.5
        private _dx: number

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Player.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(textureAtlas, imageString)

            this.start();
        }

        /**
        * This method checks if the object has reached its boundaries
        * 
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        private _checkBounds(): void {
            // checkbounds to stop player from going outside

            // check right bounds
            if (this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
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
            this._newPosition = new Vector2(config.Screen.CENTER_X, 430);
            this._dx = 0
            this.y = 430;
            this.x = config.Screen.CENTER_X
            this.position = new Vector2(this.x, this.y)
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
            // player to follow mouse
            // register the new position of the mouse when mouse moves 
            stage.on("stagemousemove", (evt) => {
                this._newPosition.x = stage.mouseX

                // initial velocity of 5 in either direction towards the mouse position
                // only start moving if mouse has left hitbox of the plane
                if (Math.abs(this._newPosition.x - this.x) > this.halfWidth)
                    this._dx = this._newPosition.x > this.x ? 5 : -5
            })

            // console.log('dx ' + this._dx);

            // only move the plane if the plane's position differs from the mouse position
            if (this._dx > 0 && this.x > this._newPosition.x ||
                this._dx < 0 && this.x < this._newPosition.x) {
                this._dx = 0
                this.x = this._newPosition.x
            }

            // console.log('this.position: ' + this.position);
            // console.log('this._newPosition: ' + this._newPosition);
            // console.log('this.y ' + this.y);
            // console.log('this.x ' + this.x);

            // this.position.x += this._dx
            this.x += this._dx
            this.position.x = this.x

            // this.position = new Vector2(this.x, this.y);
            // this.x = stage.mouseX;

            this._checkBounds();
        }

        /**
         * This method checks if this player obj is colliding with another GameObject
         * 
         * @param {objects.GameObject} other other GameObject
         * 
         * @memberOf Player
         */
        public checkCollision(other: objects.GameObject): void {
            //check to see if object is colliding

            if (objects.Vector2.distance(this.position, other.position) < (this.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    switch (other.name) {
                        case "island":
                            console.log('collided with island!');
                            break;
                    }

                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}