
function Bullet() {
	this.ele = document.createElement("div");
	this.id = parseInt(Math.random() * 10000) + "";
	this.init = function() {
		this.ele.className = "bullet";
		gameEngine.ele.appendChild(this.ele); // 添加到游戏界面main上
		//位置
		var x = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth / 2 - this.ele.offsetWidth / 2;
		var y = myPlane.ele.offsetTop;
		x = parseInt(x);
		this.ele.style.left = x + "px";
		this.ele.style.top = y + "px";
		gameEngine.bullets[this.id] = this;
		this.move();
	};
	this.move = function() {
		var self = this;
		this.timer = setInterval(function() {
			self.ele.style.top = self.ele.offsetTop - 10 + "px";
			if (self.ele.offsetTop < 0) {
				clearInterval(self.timer);
				self.boom();
				delete gameEngine.bullets[self.id];
			}
		}, 30);
	},
	this.boom = function() {
		var self = this;
		clearInterval(self.timer);
		self.ele.className = "bullet-die";
		var x = self.ele.offsetLeft - self.ele.offsetWidth/3;
		x = parseInt(x);
		self.ele.style.left = x + "px";
		var dieImgs = ["img/die1.png", "img/die2.png"];
		var index = 0;
		var dieTimer = setInterval(function() {
			self.ele.style.background = "url("+ dieImgs[index] +")";
			index++;
			if (index >= dieImgs.length) {
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(self.ele);
			}
		}, 50);
	}
}
