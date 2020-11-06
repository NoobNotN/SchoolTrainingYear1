
var gameEngine = {
	ele: null,
	bullets: {},
	enemys: {},
	//是否碰撞到了我的飞机
	isCrashMyPlane: false,
	scoreNode: null,
	start: function() {
		var self = this;
		this.ele = document.getElementById("main_body");

		this.loading(function() {

			console.log("开始正式游戏");

			myPlane.init().fire();

			self.keyListening();

			self.createEnemy();

			self.crashListening();

			self.showScore();

			self.moVe();

		});
		return this;
	},

	loading: function(loadCallBack) {

		var logo = document.createElement("div");
		logo.className = "logo";
		gameEngine.ele.appendChild(logo);

		var load = document.createElement("div");
		load.className = "loading";
		gameEngine.ele.appendChild(load);

		var index = 0;
		var loadImgs = ["img/loading1.png", "img/loading2.png", "img/loading3.png"];
		var timer = setInterval(function(){
			load.style.background = "url(" + loadImgs[index % 3] + ") no-repeat";
			load.style.backgroundSize = "cover";

			index++;

			if (index >= 5) {
				clearInterval(timer);

				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);

				loadCallBack && loadCallBack(); 
			}
		}, 0);
	},
	//键盘监听
	keyListening: function() {
		//待完善
		var speed = 0;
		//监听键盘
		window.onkeydown = function(e) {
			e = e || window.event;
			if (e.keyCode == 37) {

				speed = -10;
			} else if (e.keyCode == 39) {

				speed = 10;
			}
		}
		//松开按键
		window.onkeyup = function() {
			speed = 0;

		}

		setInterval(function() {
			var x = myPlane.ele.offsetLeft + speed;
			if (x < 0) {
				x = 0;
			}

			if (x > gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth) {

			x = gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth;
			}
			myPlane.ele.style.left = x + "px";
		}, 0);
	},
	createEnemy: function() {
		setInterval(createBigEnemy,1500);
		function createBigEnemy(){
			if(Math.random() < 0.7){
				return;
			}
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Large);
			enemy.init().move();
		}
		setInterval(createMiddleEnemy,1500);
		function createMiddleEnemy(){
			if(Math.random() < 0.5){
				return;
			}
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Middle);
			enemy.init().move();
		}
		setInterval(createSmallEnemy,500);
		function createSmallEnemy(){
			if(Math.random() < 0.3){
				return;
			}
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Small);
			enemy.init().move();
		}
	    
	},
	crashListening: function() {
		setInterval(crashTest, 30);
		function crashTest() {
			for (var i in gameEngine.enemys) {
				var enemy = gameEngine.enemys[i];
				for (var j in gameEngine.bullets) {
					var bullet = gameEngine.bullets[j];
					//碰撞检测
					if (isCrash(enemy.ele, bullet.ele)) {
						bullet.boom();							enemy.hurt();
						delete gameEngine.bullets[bullet.id];
					}
				}
				if (!gameEngine.isCrashMyPlane && isCrash(myPlane.ele, enemy.ele)) {
					gameEngine.isCrashMyPlane = true;
					myPlane.boom(function() {
						alert("还就内个白给!");
						window.location.reload();
					});
				}
			}
		}

	},
	//显示分数
	showScore: function() {
		//待完善
		this.scoreNode = document.createElement("div");
		this.scoreNode.className = "score";
		this.scoreNode.innerHTML = "0";
		gameEngine.ele.appendChild(this.scoreNode);
	},
	//让背景图移动
	moVe: function() {
		//待完善
		var y = 0;
		setInterval(function(){
		gameEngine.ele.style.backgroundPositionY = y++ + "px";
		}, 30);

	}
}

