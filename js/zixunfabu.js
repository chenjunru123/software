window.onload=function () {
    //1.获取元素
    let lis=document.querySelectorAll("main .head ul li h1");
    let son=document.querySelectorAll("main .body");
    // console.log(lis);
    // console.log(son);
    //2.遍历每一个li
    for(let i=0;i<lis.length;i++){
        //3.当鼠标移入每一个li时的操作
        lis[i].onclick=function(){
            // alert(1);
            //4.其余子元素消失
            for(let j=0;j<son.length;j++){
                lis[j].classList.remove("active");
                son[j].style.opacity="0";
            }
            //5.当前子元素出现
            son[i].style.opacity="1";
            lis[i].classList.add("active");
        }
        // lis[i].onmouseleave=function(){
        //     for(var j=0;j<son.length;j++){
        //         son[j].style.display="none";
        //     }
        // }
    }
































}