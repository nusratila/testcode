
const container1=document.querySelector("#container1");
const container2=document.querySelector("#container2");
const container3=document.querySelector("#container3");
const container4=document.querySelector("#container4");

container1.addEventListener("click",function(){
    document.querySelector("#container-img-1").src="src/img1.jpg";

});

container2.addEventListener("click",function(){
    document.querySelector("#container-img-2").src="src/img2.jpg";

});
container3.addEventListener("click",function(){
    document.querySelector("#container-img-3").src="src/img3.jpg";

});
container4.addEventListener("click",function(){
    document.querySelector("#container-img-4").src="src/img4.jpg";

});