//点击事件特效
function Click(opts) {
   var btn = document.querySelector(opts.Btn);
   var close = document.querySelector(opts.Close);
   var layer = document.querySelector(opts.Layer);
   btn.addEventListener('click',() => {
    layer.style.display = "block";
    document.body.style.overflowY = "hidden";
   });
   close.addEventListener('click',() => {
    layer.style.display = "none";
    document.body.style.overflow = "auto";
   });
}

new Click({
    Btn : "#btn",
    Layer : "#Layer",
    Close : "#close"
});


//不感兴趣
function  Deletenews() {
  var actionDislike = document.querySelectorAll(".action-dislike");
  for (let i = 0; i < actionDislike.length; i++) {
    actionDislike[i].onclick = function(){
    actionDislike[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity = "0";
    setTimeout(function(){
    actionDislike[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
    },500)
    }
  }
}
Deletenews();


//中心轮播特效
var lis = document.querySelectorAll(".slide-item");
var lisRight = document.querySelectorAll(".slide-tab-item");
lisRight[0].classList.add("on");
var num = 1;
var flag = null;
function play(num){
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.cssText = "opacity:0;position:absolute;z-index:-1;"
		lisRight[i].className = "slide-tab-item";
	}
	lis[num].style.cssText = "opacity:1;transition:opacity 0.5s ease-in;";
	lisRight[num].classList.add("on");
};
setTimeout(play(0),10);
function autoPlay(){
	flag = setInterval(function(){
        play(num);
		num++
        if (num >= lis.length){
			num = 0;
		}
	},3000);
}
autoPlay();
var catelog = document.getElementById('catch');
catelog.onmouseover = function(){
	clearInterval(flag);
	flag = null;
}
catelog.onmouseout = function(){
	autoPlay();
}
for (var i = 0; i < lisRight.length; i++){
  lisRight[i].index = i;
  lisRight[i].onmouseover = function(){
  	num = this.index;
  	play(this.index);
  }
}


//刷新页面等待数据更新
window.onload = function () {
    var ballpulse = document.querySelector(".ball-pulse");
    var mah = document.querySelector(".msg-alert-hidden");
    var infinite = document.querySelector(".infinite-ul");
    infinite.style.display = "none";
    setTimeout(function(){
    	ballpulse.style.display = "none";
    	mah.style.height = "32px";
    	infinite.style.display = "block";
    },2000);
	setTimeout(function(){
		mah.style.height = "0px";
	},4500)
}

var updateData = document.querySelector(".update");
updateData.addEventListener('click',function() {
    window.location.reload();
});

