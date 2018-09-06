//自己的函数，哈哈

// tab(lis,son);
//1.选项卡函数
//lis:鼠标移入的块
//son:鼠标移入需要显示的块
function tab(lis,son) {
    //1.获取元素
    // let lis=document.querySelectorAll("li");
    // let son=document.querySelectorAll(".son");
    //查看获取元素是否成功
    // console.log(lis);
    // console.log(son);
    //2.遍历每一个li
    for(let i=0;i<lis.length;i++){
        //3.当鼠标移入每一个li时的操作
        lis[i].onmouseover=function(){
            // alert(1);
            //4.其余子元素消失
            for(let j=0;j<son.length;j++){
                son[j].style.display="none";
            }
            //5.当前子元素出现
            son[i].style.display="block";
         }
    }
}





//covers(box,cover);
//2.遮罩函数
//box：需要遮罩的盒子
//cover：遮罩
function covers(box,cover) {
    //1.获取要操作的元素，注意集合问题，可以用[]下标来获取所需元素
    // let box=document.querySelectorAll(".box")[0];
    // let cover=document.querySelectorAll(".cover")[0];
    // console.log(box);
    // console.log(cover);
    //鼠标移入
    box.onmouseover=function () {
        //遮罩出现
        cover.style.display="block";
    }
    //鼠标移出
    box.onmouseout=function () {
        //遮罩消失
        cover.style.display="none";
    }
}


// lunbo(imgs,dots,banner,activeclass,bannerNum,times);
//3.层级轮播图函数
//imgs：需要轮播的图片的集合
//dots:轮播点的集合
//banner:放banner图的大盒子
//activeclass:轮播点选中参数的类名
//bannerNum:轮播图的数量
//times：需要轮播的时间
function lunbo(imgs,dots,banner,activeclass,bannerNum,times) {
    //1.移入轮播点显示对应的图片
    //2.对应轮播
    //获取所需元素
    //图片
    // let imgs=document.querySelectorAll("img");
    // let dots=document.querySelectorAll("li");
    // let banner=document.querySelectorAll(".banner")[0];
    // console.log(imgs,dots,banner);
    //定义初始值
    imgs[0].style.zIndex=2;
    dots[0].classList.add(activeclass);
    //遍历轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeclass);
                imgs[j].style.zIndex=1
            }
            dots[i].classList.add(activeclass);
            imgs[i].style.zIndex=2;
            num=i;
        }
    }
    //自动轮播
    let t;
    let num=0;
    function move() {
        num++;
        if (num==bannerNum){
            num=0;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeclass);
            imgs[j].style.zIndex=1
        }
        dots[num].classList.add(activeclass);
        imgs[num].style.zIndex=2;

    }
//移入停止，移出继续
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,times);
    }
}






// toumingdulunbo(imgs,dots,banner,activeclass,bannerNum,times);
//4.透明度轮播图函数
//imgs：需要轮播的图片的集合
//dots:轮播点的集合
//banner:放banner图的大盒子
//activeclass:轮播点选中参数的类名
//bannerNum:轮播图的数量
//times：需要轮播的时间
function toumingdulunbo(imgs,dots,banner,activeclass,bannerNum,times) {
    // let imgs=document.querySelectorAll("img");
    // let dots=document.querySelectorAll("li");
    // let banner=document.querySelectorAll(".banner")[0];
    // console.log(imgs,dots,banner);
    imgs[0].style.opacity=1;
    dots[0].classList.add(activeclass);
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeclass);
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add(activeclass);
            imgs[i].style.opacity=1;
            num=i;
        }
    }
    //自动轮播
    let t;
    let num=0;
    function move() {
        num++;
        if (num == bannerNum) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove(activeclass);
            imgs[j].style.opacity = 0;
        }
        dots[num].classList.add(activeclass);
        imgs[num].style.opacity = 1;
    }
    //3.鼠标移入
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,times);
    }
}


//shuangxiabiaolunbo(imgs,dots,banner,leftBtn,rightBtn,widths,activeclass,times=2000)
//5.双下标轮播/左右轮播
//imgs：需要轮播的图片的集合
//dots:轮播点的集合
//banner:放banner图的大盒子 元素
//activeclass:轮播点选中参数的类名
//bannerNum:轮播图的数量
//times：需要轮播的时间
//leftBtn：左箭头 元素
//rightBtn：右箭头 元素
//widths:轮播图的宽度 整数
function shuangxiabiaolunbo(imgs,dots,banner,leftBtn,rightBtn,widths,activeclass,times=2000) {
    //1.获取元素
    // let imgs=document.querySelectorAll("img");
    // let dots=document.querySelectorAll("li");
    // let banner=document.querySelectorAll(".banner")[0];
    // let leftBtn=document.querySelectorAll(".leftBtn")[0];
    // let rightBtn=document.querySelectorAll(".rightBtn")[0];
    // let widths=parseInt(getComputedStyle(imgs[0],null).width);
    // console.log(imgs,dots,banner,leftBtn,rightBtn,widths);
    //2.初始值
    imgs[0].style.left=0;
    dots[0].classList.add(activeclass);
    let now=0;
    let next=0;
    //开关：控制快速点击时图片会快速轮播的现象，默认开关时打开的
    let flag=true;
    let t=setInterval(move,times);
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
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
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
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
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
        t=setInterval(move,times);
    }
    //移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            if(flag){
                for(let j=0;j<dots.length;j++){
                    dots[j].classList.remove(activeclass);
                    imgs[j].style.left=widths+"px";
                }
                dots[i].classList.add(activeclass);
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
        t=setInterval(move,times);
    }
}