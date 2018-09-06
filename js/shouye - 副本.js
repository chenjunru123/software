window.onload=function () {
    //1.获取元素
    let imgs=document.querySelectorAll(".section_four ul .pic .imgs img");
    let dots=document.querySelectorAll(".section_four ul .pic .dot .small");
    // let imgs=document.querySelectorAll(".section_four ul .pic .imgs img");
    // let dots=document.querySelectorAll(".section_four ul .pic .dot .small");
    let banner=document.querySelectorAll(".pic")[0];
    let leftBtn=document.querySelectorAll(".left-btn")[0];
    let rightBtn=document.querySelectorAll(".right-btn")[0];
    let widths=parseInt(getComputedStyle(imgs[0],null).width);
    console.log(imgs,dots,banner,leftBtn,rightBtn,widths);
    // shuangxiabiaolunbo(imgs,dots,banner,leftBtn,rightBtn,widths,"active",2000);

    //2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add("active");
    let now=0;
    let next=0;
    //开关：控制快速点击时图片会快速轮播的现象，默认开关时打开的
    let flag=true;
    let t=setInterval(move,3000);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    leftBtn.onclick=function () {
        //判断开关是否开启
        //如果开关开启，！flag=false，不执行return，执行flag=false和move，move执行完flag=turn；
        //开关关闭的时候不要点击
        //flag=false  !flag=ture
        if (!flag){
            return;
        }
        flag=false;
        // clearInterval(t);
        moveL();
    }
    rightBtn.onclick=function () {
        if (!flag){
            return;
        }
        flag=false;
        // clearInterval(t);
        move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,3000);
    }
    //移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            if(flag){
                for(let j=0;j<dots.length;j++){
                    dots[j].classList.remove("active");
                    imgs[j].style.left=widths+"px";
                }
                dots[i].classList.add("active");
                imgs[i].style.left=0;
                now=i;
                next=i;
            }
        }
    }
    //窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
    //窗口获得焦点时，继续时间间隔函数
    window.onfocus=function () {
        t=setInterval(move,3000);
    }










}