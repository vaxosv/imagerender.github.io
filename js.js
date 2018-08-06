var video;
var button;
var arr = [];
var bubbles = []

function preload() {
    img = loadImage("./n.jpg")
}

function setup() {
    // background(51)
    createCanvas(img.width, img.height)
    frameRate(60);
}

function draw() {
    // for (let g = 0; g <= 100; g++) {
        x = random(width)
        y = random(height)

        c = img.get(x, y)
        fill(c);
        noStroke()
        // ellipse(x, y, 12, 12)

        var b = new Bubble(x, y, c);
        bubbles.push(b);
        // background(51);
        for (var i = bubbles.length - 1; i >= 0; i--) {
            bubbles[i].update();
            bubbles[i].display();
            if (bubbles[i].isFinished()) {
                bubbles.splice(i, 1);
            }
        }
    // }

}