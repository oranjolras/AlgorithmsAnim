// 创建新实例 that 未新实例p5对象
new p5(function (that) {
	let trailLength = 80; // 拖尾长度
	let positions = new Array(trailLength);
	
	that.setup = function () {
		// 指定元素ID
		let sketch = document.getElementById('sketch1');
		// 创建画布
		let canvas = that.createCanvas(1700, 650);
		// 添加画布到指定元素
		canvas.parent(sketch);
		that.noFill();
		that.stroke(0);
		for (let i = 0; i < trailLength; i++) {
			positions[i] = new p5.Vector(that.mouseX, that.mouseY);
		}
	};
	that.draw = function () {
		if(that.mouseX <= 0 || that.mouseY <= 0)return;
		that.background(255); // 将当前鼠标位置添加到拖尾数组
		for (let i = 0; i < trailLength - 1; i++) {
			positions[i] = positions[i + 1];
		}
		positions[trailLength - 1] = new p5.Vector(that.mouseX, that.mouseY); // 绘制拖尾
		for (let i = 50; i < trailLength; i++) {
			//float alpha = map(i, 0, trailLength, 0, 255);
			that.stroke(0, 255, 0);
			that.strokeWeight(3);
			that.line(
				positions[i - 1].x,
				positions[i - 1].y,
				positions[i].x,
				positions[i].y
			);
		}
	};
	that.mousePressed = function(){
		that.background(255);
	}
});