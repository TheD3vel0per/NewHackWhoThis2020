import { PhoneScheme } from "../../services/PhoneScheme";
import { Binding } from "../core/Binding";
import { Library } from "../core/Library";

export class DrawingLibrary extends Library {

    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        super();
        this.context = context;
    }

    init(): DrawingLibrary {

        // Color
        // (color <color>)
        this.addBinding(new Binding(
            'color',
            this.setColor.bind(this),
            1,
            1
        ));

        // Draw Rectancle
        // (rect <x> <y> <width> <height>)
        this.addBinding(new Binding(
            'rect',
            this.drawRect.bind(this),
            4,
            4
        ));

        // Draw Circle
        // (circle <x> <y> <r>)
        this.addBinding(new Binding(
            'circle',
            this.drawCircle.bind(this),
            3,
            3
        ));

        // Draw Heart
        // (heart)
        this.addBinding(new Binding(
            'heart',
            this.drawHeart.bind(this),
            0,
            0
        ));

        // Draw Love Emoji
        // (love-emoji)
        this.addBinding(new Binding(
            'love-emoji',
            this.drawLoveEmoji.bind(this),
            2,
            2
        ));

        // Draw smiley
        // (smiley)
        this.addBinding(new Binding(
            'smiley',
            this.drawSmiley.bind(this),
            0,
            0
        ));


        // Draw "I love you" in a given language
        // (love <x> <y> <language>)
        this.addBinding(new Binding(
            'send-love',
            this.drawLove.bind(this),
            3,
            3
        ));


        // Draw horizontal mirror for a give string
        // (mirror <str> <x> <y>)
        this.addBinding(new Binding(
            'mirror',
            this.drawMirror.bind(this),
            3,
            3
        ));

        // Draw text on canvas
        // (text <text> <x> <y> <size>)
        this.addBinding(new Binding(
            'text',
            this.drawText.bind(this),
            3,
            4
        ));

        // Draw line on canvas
        // (line <x1> <y1> <x2> <y1> <width>)
        this.addBinding(new Binding(
            'line',
            this.drawLine.bind(this),
            4,
            5
        ));

        return this;

    }

    /**
     * Set a new color
     * @param args
     */
    setColor([color]) {
        this.context.fillStyle = color;
        return PhoneScheme.undef;
    }

    /**
     * Draw a rectangle 
     * @param args
     */
    drawRect([x, y, width, height]) {
        this.context.fillRect(x, y, width, height);
        return PhoneScheme.undef;
    }

    /**
     * Draw a circle
     * @param args 
     */
    drawCircle([x, y, r]) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0 * Math.PI, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();
        return PhoneScheme.undef;
    }

    drawHeart() {
        // Cubic curves example
        this.context.beginPath();
        this.context.moveTo(75, 40);
        this.context.bezierCurveTo(75, 37, 70, 25, 50, 25);
        this.context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.context.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.context.bezierCurveTo(85, 25, 75, 37, 75, 40);
        this.context.fill();
        return PhoneScheme.undef;
    }

    /**
     * Draw Love Emoji
     * @param args
     */
    drawLoveEmoji([x, y]) {
        this.context.fillText('😍', x, y);
        return PhoneScheme.undef;
    }

    /**
     * Draw Smiley
     * @param args
     */
    drawSmiley() {
        this.context.beginPath();
        this.context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        this.context.moveTo(110, 75);
        this.context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        this.context.moveTo(65, 65);
        this.context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        this.context.moveTo(95, 65);
        this.context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        this.context.stroke();
        return PhoneScheme.undef;

    }


    drawMirror([str, x, y]) {
        this.context.scale(-1, 1);
        this.context.font = '48px serif';
        this.context.fillText(str, (x - 300), y);
        return PhoneScheme.undef;
    }


    /**
     * Draw "I love you" in the given language
     * @param args 
     */
    drawLove([lang, x, y]) {

        this.context.font = "30px Verdana";
        var gradient = this.context.createLinearGradient(0, 0, 90, 0);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(0.5, "blue");
        gradient.addColorStop(1.0, "red");
        // Fill with gradient
        this.context.fillStyle = gradient;

        switch (lang) {
            case 'english':
                this.context.fillText("I Love You", x, y);
                break;
            case 'hindi':
                this.context.fillText("मैं तुमसे प्यार करता हूँ", x, y);
                break;
            case 'french':
                this.context.fillText("je t'aime", x, y);
                break;
            case 'spanish':
                this.context.fillText("te quiero", x, y);
                break;
            case 'arabic':
                this.context.fillText("أحبك", x, y);
                break;
            case 'tamil':
                this.context.fillText("நான் உன்னை நேசிக்கிறேன்", x, y);
                break;
            case 'japanese':
                this.context.fillText("わたしは、あなたを愛しています", x, y);
                break;
            case 'chinese':
                this.context.fillText("我爱你", x, y);
                break;
            case 'korean':
                this.context.fillText("사랑해", x, y);
                break;
            case 'gujarati':
                this.context.fillText("હું તને પ્રેમ કરું છુ", x, y);
                break;
            case 'punjabi':
                this.context.fillText("ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", x, y);
                break;
        }

    }


    /**
     * prints given text on page
     * @param args 
     */
    drawText([text, x, y, size]) {
        this.context.font = "30px Verdana";
        if (size) {
            this.context.font = size.toString() + "px Verdana";
        }
        this.context.fillText(text, x, y);
    }


    drawLine([x1, y1, x2, y2, width]) {
        if (width) {
            this.context.lineWidth = width;
        }
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
        this.context.lineWidth = 1;
    }

}

