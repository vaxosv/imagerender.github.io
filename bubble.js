function Bubble(x, y, c) {
    this.x = x;
    this.y = y;
    this.lifespan = 255;
    this.diameter = 5;
    this.display = function () {
        fill(c, this.lifespan);
        noStroke()
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    this.update = function () {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
        this.lifespan -= 5;
    };
    this.isFinished = function () {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    };
};