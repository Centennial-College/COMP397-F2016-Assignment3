var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file player.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: This is the Player object used in the game
 * @version 1.1.1 fixed combo-based scoring system calculations
 */
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Player.
         *
         * @constructor
         * @param {string} imageString
         */
        function Player(imageString) {
            _super.call(this, textureAtlas, imageString);
            this.FRICTION = 0.5;
            this.start();
        }
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Player.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Player.prototype.start = function () {
            this._newPosition = new objects.Vector2(config.Screen.CENTER_X, 430);
            this._dx = 0;
            this.y = 430;
            this.x = config.Screen.CENTER_X;
            this.position = new objects.Vector2(this.x, this.y);
            this._untouchable = false;
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Player.prototype.update = function () {
            var _this = this;
            // player to follow mouse
            // register the new position of the mouse when mouse moves 
            stage.on("stagemousemove", function (evt) {
                _this._newPosition.x = stage.mouseX;
                // initial velocity of 5 in either direction towards the mouse position
                // only start moving if mouse has left hitbox of the plane
                if (Math.abs(_this._newPosition.x - _this.x) > _this.halfWidth)
                    _this._dx = _this._newPosition.x > _this.x ? 5 : -5;
            });
            // ensures that the plane only moves to the cursor's position and doesnt keep
            // moving beyond it
            if (this._dx > 0 && this.x > this._newPosition.x ||
                this._dx < 0 && this.x < this._newPosition.x) {
                this._dx = 0;
                this.x = this._newPosition.x;
            }
            this.x += this._dx;
            this.position.x = this.x;
            if (this._untouchable) {
                // creates flickering effect to visualize invulnerabiltiy
                if (this._untouchableStartTime + createjs.Ticker.getTime() % 500 < 250) {
                    this.alpha = .5;
                }
                else {
                    this.alpha = 1;
                }
                // temp god mode after "respawning" for 3 seconds
                if (gameTime <= this._untouchableStartTime - 3) {
                    this._untouchable = false;
                    this.alpha = 1;
                }
            }
            this._checkBounds();
        };
        /**
         * This method checks if this player obj is colliding with another GameObject
         *
         * @param {objects.GameObject} other other GameObject
         *
         * @memberOf Player
         */
        Player.prototype.checkCollision = function (other) {
            //check to see if object is colliding
            if (objects.Vector2.distance(this.position, other.position) < (this.halfHeight + other.halfHeight)) {
                // only check for collision if the player is not already colliding with the current obj
                // to prevent executing collision handling code multiple times for the same collision 
                if (!other.isColliding) {
                    other.isColliding = true;
                    // check what type of game object the player is colliding with 
                    switch (other.name) {
                        // if the player collides with an island
                        case "island":
                            // increase game combo
                            gameCombo++;
                            // increase score
                            // business mission to deliver express packages
                            // therefore more points awarded when more time remaining and less packages left to deliver
                            gameScore += ((gameCombo * gameTime * gameLevel) / gameParcelsRemaining);
                            // decrease # remaining packages to deliver
                            gameParcelsRemaining--;
                            // play collision Sound
                            createjs.Sound.play("goal");
                            return true;
                        case "cloud":
                            if (!this._untouchable) {
                                createjs.Sound.play("thunder");
                                gameTime -= 5; // colliding with cloud sets delays in delivering parcels
                                this._untouchable = true;
                                this._untouchableStartTime = gameTime;
                                console.log('colliding with cloud');
                            }
                            return true;
                    }
                }
            }
            else {
                other.isColliding = false;
                return false;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map