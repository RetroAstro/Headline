
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



//页面刷新
var updateData = document.querySelector(".update");
updateData.addEventListener('click',function() {
    window.location.reload();
});



//改变颜色
function clickChangeColor(obj) {
    var elements = document.querySelectorAll(obj.el);
    var boxs = document.querySelectorAll(obj.Box);
    for (let i in elements) {
      elements[i].onclick = function() {
        for (let j = 0; j < elements.length; j++) {
                elements[j].classList.remove("current");
                boxs[j].classList.add("hide");
            }
            this.classList.add("current");
            boxs[i].classList.remove("hide");         
        }
    }   
}

new clickChangeColor({
  el : ".ugc-tab-list li",
  Box : ".upload-box"
});



//发布图文
function upload() {
  var Msgtip = document.querySelector(".msg-tip");
  var Upload = document.querySelector(".upload-publish");
  var Infinite = document.querySelector(".infinite-ul");
  var Message = document.getElementById("pubself");
  var TextNumber = document.getElementById("Textnumber");
  Message.addEventListener('keyup', () => {
    var Length = Message.value.length + 0;
    TextNumber.innerHTML = Length;
    if (!Message.value == '') {
      Upload.style.opacity = 1;
    }else {
      Upload.style.opacity = 0.6;
    }
  });
  Upload.addEventListener('click', () => {
  var Messages = document.getElementById("pubself").value;
      if (Messages == '') {
        Msgtip.style.opacity = 1;
        setTimeout(() => {
          Msgtip.style.opacity = 0;
        },2500);
      }else {
        var output = '';
        output += `<div class="bui-box ugc-mode">
              <div>
            <div class="ugc-mode-right ugc-mode-rbox">
              <div class="ugc-mode-rbox-inner">
                <div class="ugc-mode-user">
                  <a href="#" class="ugc-avatar">
                    <img src="/static/img/user_avatar.png">
                  </a>
                  <div class="ugc-desc">
                    <a href="#" class="ugc-name">
                      <span>${Target}</span>
                      <img src= "/static/img/weitoutiao.png" class= "weitoutiao">
                    </a>
                    <p class="ugc-meta">
                      <span>已关注</span>
                    </p>
                  </div>
                </div>
                <div class="ugc-mode-content">
                  <a href="#" id= "insertvalue"></a>
                </div>
                <div class="bui-box ugc-mode-footer">
                  <div class="bui-left ugc-mode-footer-left">
                    <span class="ugc-mode-action">0赞</span>
                    <span class="ugc-mode-action">0评论</span>
                    <span class="ugc-mode-action">&nbsp;&nbsp;0阅读</span>
                    <span class="ugc-mode-action">&nbsp;&nbsp;50分钟前</span>
                  </div>
                  <div class="bui-right">
                    <div class="action-dislike">
                      <i class="bui-icon icon-close_small">&times;</i>不感兴趣
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>`;   
      Infinite.insertAdjacentHTML("afterBegin",output);
      var insertValue = document.getElementById("insertvalue");
      insertValue.innerHTML = Messages;
      var Ugcmode = document.querySelector(".ugc-mode");
      Ugcmode.classList.add("fadeIn");
      Message.value = null;
      TextNumber.innerHTML = 0;
      Upload.style.opacity = 0.6;
      Deletenews();      
     }  
  });
}
upload();


//UserID
var Target = document.querySelector(".name span").innerText;


function Jump() {
  var imgWrap = document.querySelectorAll(".img-wrap");
  var link = document.querySelectorAll(".link");
  var nameSpan = document.querySelector(".head");
  var newsArticle = document.querySelector(".news-article");
  newsArticle.addEventListener('click', () => {
    window.location.href = "/Selfinfo/" + Target;
  });
  nameSpan.addEventListener('click',() => {
    window.location.href = "/Selfinfo/" + Target;
  });
  for (var i = 0; i < imgWrap.length; i++) {
    imgWrap[i].addEventListener('click', function() {
      window.location.href = "/news/" + Target;
    })
  }
  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
      window.location.href = "/news/" + Target;
    })
  }
}
Jump();

//随机加载图片
function Random(){
  var IMG = document.querySelectorAll(".img-wrap img");
  var images = ['/static/img/a1.png','/static/img/a2.png','/static/img/a3.png','/static/img/a4.png','/static/img/a5.png','/static/img/a6.png','/static/img/a7.png'];
  var GOTIMG = images.sort(() => 0.5 - Math.random());
  for(var i = 0; i < IMG.length; i++) {
      IMG[i].src = GOTIMG[i];
  }
}
Random();



