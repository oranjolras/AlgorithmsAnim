new p5(function (that) {

    let numParticles = 300; // Number of particles in the swarm
    let particles = new Array(numParticles);
  
    that.setup = function () {
      let sketch = document.getElementById('sketch3');
      let canvas = that.createCanvas(1700, 650);
      canvas.parent(sketch);
      that.noFill();
      that.stroke(0);
      for (let i = 0; i < numParticles; i++) {
        particles[i] = new Particle(that.random(that.width), that.random(that.height));
      }
    }
  
    that.draw = function () {
     // if (that.mouseX <= 0 || that.mouseY <= 0) return;
      that.background(255);
      for (let i = 0; i < numParticles; i++) {
        particles[i].followMouse();
        particles[i].update();
        particles[i].display();
      }
    }
  
    that.mousePressed = function() {
      // Reset the positions of particles on mouse click
      for (let i = 0; i < numParticles; i++) {
        particles[i] = new Particle(that.random(that.width), that.random(that.height));
      }
    }
  
    class Particle {
      x;
      y; // Position of the particle
      speed; // Speed of the particle
      angle; // Direction angle
  
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = that.random(1, 4);
        this.angle = that.random(1);
      }
  
      followMouse() {
        let targetX = that.mouseX;
        let targetY = that.mouseY;
        let dx = targetX - this.x;
        let dy = targetY - this.y;
        let angleToMouse = that.atan2(dy, dx);
        this.angle = that.lerp(this.angle, angleToMouse, 0.8);
      }
  
      update() {
        this.x += that.cos(this.angle) * this.speed;
        this.y += that.sin(this.angle) * this.speed;
  
        if (this.x < 0) this.x = that.width;
        if (this.x > that.width) this.x = 0;
        if (this.y < 0) this.y = that.height;
        if (this.y > that.height) this.y = 0;
      }
  
      display() {
        that.noStroke();
        that.fill(0, 255, 0);
        that.ellipse(this.x, this.y, 10, 10);
      }
    }
  });
  