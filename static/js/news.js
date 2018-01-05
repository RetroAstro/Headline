
//点击事件
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



//点赞
function GiveLike() {
var Like = document.querySelector(".like");
var LiNum = document.querySelector(".LiNu");
var LikeNumber = parseInt(LiNum.innerHTML);
Like.onclick = function() {
  if (Like.getAttribute("src") == "/static/img/likegrey.png") {
	Like.setAttribute("src","/static/img/likered.png");
	Like.style.cssText = "transform:scale(1.2);";
	NewLikeNumber = LikeNumber + 1;
	LiNum.innerHTML = NewLikeNumber + "&nbsp;";
  }else{
	Like.setAttribute("src","/static/img/likegrey.png");
	Like.style.cssText = "transform:scale(1);";
	LiNum.innerHTML = LikeNumber + "&nbsp;";
      } 
   }
}
GiveLike();



//评论滑动特效
var cTextarea = document.getElementById("TEXTAREA");
var cAction = document.querySelector(".c-action");
var inputWrap = document.querySelector(".input-wrap");
inputWrap.onclick = function() {
 cTextarea.style.height = "110px"
 inputWrap.style.cssText = "padding-top:11px;"
 cAction.style.cssText = "background:#f4f5f6;cursor:default;"
}



//评论功能
var cSubmit = document.querySelector(".c-submit");
var Comments = document.getElementById("comments");
var toast = document.querySelector(".bui-toast");
cSubmit.onclick = function(){
    if (cTextarea.value == '') {
          toast.style.opacity = 1;
          setTimeout(() => {
          	toast.style.opacity = 0;
        },2500);
    }else {
	var output = '';
	output += `<li class="c-item">
		      <a href="#" class="avatar-wrap"></a>
			  <div class="c-content">
				<div class="c-user-info">
					<a href="#" class="c-user-name">${Username}</a>
					<span>20 HoursBefore...</span>
				</div>
				<p id="insertvalue"></p>
				<div class="c-footer-action">
					<span class="c-reply">回复</span>
					<span class="c-reply-count">&nbsp;~&nbsp;118条回复</span>
					<span title="点赞" class="bui-right c-digg">
					<span id="LikeWrap"><span class="LiNu">1188</span>&nbsp;</span><img src="/static/img/likegrey.png" class="like"></span>
				</div>
			  </div>
		   </li>`;
    Comments.insertAdjacentHTML("afterBegin",output);
    var insertValue = document.getElementById("insertvalue");
    insertValue.innerHTML = cTextarea.value;
    cTextarea.value = null;
    var cItem = document.querySelector(".c-item");
    GiveLike();
    cItem.classList.add("fadeIn");
  }
}

var Username = document.querySelector(".dxsname").innerText;

//改变URL地址
function ChangeURL() {
 var newsArticle = document.querySelector(".news-article");
 var userAvatar = document.querySelector(".user-name");
 newsArticle.addEventListener('click', function() {
  	if (window.location.href.match(/news\/.*/)) {
  	  window.location.href = "/Selfinfo/" + Username;
  	}else {
      window.location.href = "/login";
  	}
 });
 userAvatar.addEventListener('click', function() {
  	if (window.location.href.match(/news\/.*/)) {
  	  window.location.href = "/Selfinfo/" + Username;
  	}else {
      window.location.href = "/login";
  	}
 });
}
ChangeURL();
