/**
 * @file label.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Label class provides a clean way of creating text that will appear on screen.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module objects {
    export class Label extends createjs.Text {

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number) {
            // MUST call parent class constructor. Requires text to be displayed, font, and color
            super(labelString, labelFont, labelColor);

            // Set registration point of the text. Used when performing transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            // Set initial x,y position of the label
            this.x = x;
            this.y = y;
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */