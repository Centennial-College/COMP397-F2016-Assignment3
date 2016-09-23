/**
 * @file button.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Button class extends the createjs bitmap class and provides a clean interface for creating clickable objects
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module objects {
    export class Button extends createjs.Bitmap {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(pathString: string, x: number, y: number) {
            super(assets.getResult(pathString));
            // Set the position of the button
            this.x = x;
            this.y = y;

            // Set the size of the button
            this.width = 150;
            this.height = 50;

            // Set the registration point of the button. This is used for transformations
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this._overButton, this);
            this.on("mouseout", this._outButton, this);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method modifies the bitmaps alpha value when hovering over the button  
         * 
         * @private
         * @method _overButton
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf Button
         * @return {void}
         */
        private _overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }

        /**
         * This method modifies the bitmaps alpha value when mouse is not hovering over the button
         * 
         * @private
         * @method _outButton
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf Button
         * @return {void}
         */
        private _outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */