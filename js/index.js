window.onload=function () {
///////////////首页选项卡////////////////
    let xuanze=document.querySelector(".head_min .right");
    let xuanze1=document.querySelector(".head_min .right_return");
    let xiala=document.querySelector(".head_min .head_xiala");
    let list = document.querySelectorAll(".head_min .head_xiala li");
    // console.log(xuanze,xiala);
    xuanze.onclick=function () {
        xiala.style.height="200px";
        xuanze1.style.display = "block";
        xuanze.style.display = "none";
    }
    xuanze1.onclick=function () {
        xiala.style.height="0";
        xuanze1.style.display = "none";
        xuanze.style.display = "block";
    }
    list.forEach((v,i)=>{
        v.onmouseenter = function(){
            list[i].classList.add("hot");
        }
        v.onmouseleave = function(){
            list[i].classList.remove("hot");
        }
    })









}