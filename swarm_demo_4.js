new p5(function (sketch) {
  let numParticles = 1000;
  let particles = new Array(numParticles);
  let avoidanceRadius = 100;
  let maxSpeed = 0.15;
  let increasedSpeed = 1.5; // Adjust the speed increase factor
  
  sketch.setup = function () {
      let canvas = sketch.createCanvas(1700, 650);
      canvas.parent('sketch4');
      sketch.background(255);
      
      for (let i = 0; i < numParticles; i++) {
          particles[i] = new Particle(sketch.random(sketch.width), sketch.random(sketch.height));
      }
  };
  
  sketch.draw = function () {
      sketch.background(255);
      for (let i = 0; i < numParticles; i++) {
          particles[i].move();
          particles[i].display();
      }
  };
  
  sketch.mouseMoved = function () {
      for (let i = 0; i < numParticles; i++) {
          particles[i].avoidMouse(sketch.mouseX, sketch.mouseY, avoidanceRadius);
      }
  };
  
  class Particle {
      constructor(x, y) {
          this.x = x;
          this.y = y;
          this.speedX = sketch.random(-maxSpeed, maxSpeed);
          this.speedY = sketch.random(-maxSpeed, maxSpeed);
      }
      
      move() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (this.x < 0) this.x = sketch.width;
          if (this.x > sketch.width) this.x = 0;
          if (this.y < 0) this.y = sketch.height;
          if (this.y > sketch.height) this.y = 0;
      }
      
      display() {
          sketch.noStroke();
          sketch.fill(0, 255, 0);
          sketch.ellipse(this.x, this.y, 10, 10);
      }
      
      avoidMouse(mx, my, radius) {
          let d = sketch.dist(this.x, this.y, mx, my);
          if (d < radius) {
              let angle = sketch.atan2(this.y - my, this.x - mx);
              this.x += sketch.cos(angle) * maxSpeed * increasedSpeed; // Increase speed
              this.y += sketch.sin(angle) * maxSpeed * increasedSpeed; // Increase speed
          }
      }
  }
});
