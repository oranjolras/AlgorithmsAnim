new p5(function (that) {
that.setup = function () {
    let sketch = document.getElementById('sketch6');
    let canvas = that.createCanvas(1700, 650);
    canvas.parent(sketch);
    that.background(255);
    that.frameRate(80);
};
that.draw = function ()  {
    that.noStroke();
    that.fill(0, 255, 0);
    that.ellipse(that.mouseX, that.mouseY, that.random(1, 20), that.random(1, 20));
};
that.mousePressed = function(){
    that.background(255);
}

});