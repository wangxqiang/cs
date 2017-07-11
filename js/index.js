var q=Math.floor(Math.random()*10);
function wq(){
    var name=$("#inp").val();
    $("#d1").css({"display": "none"});
    $("#d2").css({"display": "block"});
 if(name=="王强"){
     $(".conter h2").html("请不要尝试输入"+name+"你懂得!!");
     $(".img1").attr("src","imgs/00.jpg");
 }else if(name=="二强"){
     $(".conter h2").html("请不要尝试输入"+name+"你懂得!!");
     $(".img1").attr("src","imgs/00.jpg");
 }else if(name=="王二强"){
     $(".conter h2 ").html("请不要尝试输入"+name+"你懂得!!!");
     $(".img1").attr("src","imgs/00.jpg");
 }else if(name=="强"){
     $(".conter h2 ").html("请不要尝试输入"+name+"你懂得!!");
     $(".img1").attr("src","imgs/00.jpg");
 }else if(name==" "||name==''){
     $(".conter h2").html("我的眼前一片空白~");
     $(".img1").attr("src","imgs/01.jpg")
 }
 else if(name=="王思敏"){
     $(".conter .h3").html("嘿!"+name+":");
     $(".conter .h4").html("你是最美最可爱的小仙女");
     $(".img1").attr("src","imgs/08.jpg");
 }
 else {
     $(".conter .h3").html("嘿!"+name+":");
     if(q==0){
         $(".conter .h4").html("智商感人~=~");
         $(".img1").attr("src","imgs/01.jpg");
     }else if(q==1){
         $(".conter .h4").html("哪一坨是你啊!");
         $(".img1").attr("src","imgs/02.jpg");
     }else if(q==2){
         $(".conter .h4").html("吃屎被抓到了吧*^*");
         $(".img1").attr("src","imgs/03.jpg");
     }else if(q==3){
         $(".conter .h4").html("就算你是便便!那也是最可爱的那坨!");
         $(".img1").attr("src","imgs/04.jpg");
     }else if(q==4){
         $(".conter .h4").html("你今天特别的酷^+^");
         $(".img1").attr("src","imgs/05.jpg");
     }else if(q==5){
         $(".conter .h4").html("你是一个小可爱*-*");
         $(".img1").attr("src","imgs/06.jpg");
     }else if(q==6){
         $(".conter .h4").html("美丽与你同在@=@");
         $(".img1").attr("src","imgs/07.jpg");
     }else if(q==7){
         $(".conter .h4").html("你是我的女神@+@");
         $(".img1").attr("src","imgs/07.jpg");
     }else if(q==8){
         $(".conter .h4").html("你是一个超级二货②");
         $(".img1").attr("src","imgs/11.jpg");
     }else if(q==9){
         $(".conter .h4").html("十里桃花不如你");
         $(".img1").attr("src","imgs/10.jpg");
     }else if (q==10){
         $(".conter .h4").html("别说话`吻我~");
         $(".img1").attr("src","imgs/07.jpg");
     }else{
     }
 }
}
function fh(){
    window.location.href="index.html";
}