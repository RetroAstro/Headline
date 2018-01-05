
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

new Click({
    Btn : ".btn-publish",
    Layer : ".ugcBox",
    Close : ".ugc-close"
});



//改变颜色
function clickChangeColor(obj) {
var elements = document.querySelectorAll(obj.el);
var boxs = document.querySelectorAll(obj.Box);
var flag = obj.Flag || false;
for (let i in elements) {
 	elements[i].onclick = function() {
 		for (let j = 0; j < elements.length; j++) {
            elements[j].classList.remove("active");
            if(flag == true){
            boxs[j].classList.add("hide");
            }
 		}
        this.classList.add("active");
        if (flag == true) {
            boxs[i].classList.remove("hide");
        }            
     }
  }   
}

new clickChangeColor({
	el : ".tab li",
    Box : ".relatedFeed li",
    Flag : true
});

new clickChangeColor({
	el : ".ugc-tab-list li",
    Box : ".title-input",
    Flag : true
});



//发布微头条
function Weitoutiao() {
var Publish = document.querySelector(".upload-publish");
var Target = document.querySelector(".dxsname").innerText;
var Textinput = document.querySelector(".imgBox .title-input");
Textinput.addEventListener('keyup', () => {
    Publish.classList.add("Allowred");
    if (Textinput.value == '') {
        Publish.classList.remove("Allowred");
    }
});
Publish.addEventListener('click', () => {
if (!Textinput.value == '') {
var output = '';
output += `
<div class="item-inner y-box ugc-item">
<div class="normal rbox">
    <div class="rbox-inner">
        <div class="ugc-box">
            <div class="ugc-user">
                <img src="/static/img/user_avatar.png" class="avatar">
                <span class="name">${Target}</span>
            </div>
            <div class="ugc-content">
                <a href="#">
                    <div>This is a test.</div>
                </a>
            </div>
        </div>
        <div class="y-box footer">
            <div class="y-left">
                <span class="lbtn">0阅读</span>
                <span class="lbtn">&nbsp;&nbsp;0赞</span>
                <span class="lbtn">&nbsp;&nbsp;0评论</span>
                <span class="lbtn">&nbsp;&nbsp;2018-01-02 13:58</span>
            </div>
            <div class="y-right">
                <span class="trash">
                    <img src="/static/img/trash.png">
                    <span>删除</span>
                </span>
            </div>
        </div>
    </div>
</div>
    <div class="lbox">
        <a href="#" class="img-wrap">
            <img src="/static/img/a3.png">
        </a>
    </div>
</div> `
var Insert = document.getElementById("Secondinsert");
var Dishide = document.getElementById("Dishide");
Insert.className = "item";
Dishide.style.display = "none";
document.querySelector(".ugcBox").style.display = "none";
document.body.style.overflow = "auto";
Insert.insertAdjacentHTML("afterBegin",output);
var Ugcitem = document.querySelector('.ugc-item');
var Ugcontent = document.querySelector('.ugc-content div');
Ugcontent.innerHTML = Textinput.value;
Textinput.value = '';

Publish.classList.remove("Allowred");
var elements = document.querySelectorAll(".tab li");
var boxs = document.querySelectorAll(".relatedFeed li");
    for(i in elements) {
        for(var j = 0; j < elements.length; j++) {
           elements[j].classList.remove("active");
           boxs[j].classList.add("hide");
        }
        elements[1].classList.add("active");
        boxs[1].classList.remove("hide");
      }            
    }
var Delete = document.querySelector(".trash");
var toast = document.querySelector(".bui-toast");
Delete.addEventListener("click", function() {
Ugcitem.classList.add("disappear"); 
toast.style.opacity = 1;
    setTimeout(() => {
           toast.style.opacity = 0;
    },2000)   
  });
});
}
Weitoutiao();





//滚轮监听事件
window.onmousewheel = document.onmousewheel = Scroll;

function Scroll(e) {
e = window.event;
var Topspan = document.querySelector(".topspan");
if (e.wheelDelta) {
    if (parseInt(e.wheelDelta)<0) {
        Topspan.style.display = "block";
    }else{
        Topspan.style.display = "none";
    }
  }
}

