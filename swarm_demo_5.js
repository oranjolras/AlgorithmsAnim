new p5(function (that) {
let trailLength = 80; // Length of the trail
let positions = new Array(trailLength);
that.setup = function () {
    let sketch = document.getElementById('sketch5');
    let canvas = that.createCanvas(1700, 650);
    canvas.parent(sketch);
    that.noFill();
    that.stroke(0);
    for (let i = 0; i < trailLength; i++) {
        positions[i] = new p5.Vector(that.mouseX, that.mouseY);
    }
};
that.draw = function () {
    if(that.mouseX <= 0 || that.mouseY <= 0)return;
    that.background(255); // Add current mouse position to the trail array
    for (let i = 0; i < trailLength - 1; i++) {
        positions[i] = positions[i + 1];
    }
    positions[trailLength - 1] = new p5.Vector(that.mouseX, that.mouseY); // Draw the trail as triangles
    for (let i = 50; i < trailLength; i++) {
        that.noStroke();
        that.fill(0,255,0); // Create random-shaped triangles using current and previous points
        that.triangle(
            positions[i - 1].x,
            positions[i - 1].y,
            positions[i].x,
            positions[i].y,
            positions[i].x + that.random(-60, 60),
            positions[i].y + that.random(-60, 60)
        );
    }
};
that.mousePressed = function(){
    that.background(255); // Clear the canvas
}
});