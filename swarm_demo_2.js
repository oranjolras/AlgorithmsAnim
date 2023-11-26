// ������ʵ�� that δ��ʵ��p5����
new p5(function (that) {
	
	that.setup = function () {
		// ָ��Ԫ��ID
		let sketch = document.getElementById('sketch2');
		// ��������
		let canvas = that.createCanvas(1700, 650);
		// ���ӻ�����ָ��Ԫ��
		canvas.parent(sketch);
		that.background(255);
	};
	that.draw = function () {
		if(that.mouseX <= 0 || that.mouseY <= 0)return;
		that.strokeWeight(0.5);
		that.stroke(0, 255, 0);
		that.line(that.mouseX, that.mouseY, that.width, that.height);
	};
	that.mousePressed = function(){
		that.background(255);
	}
});