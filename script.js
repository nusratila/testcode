let index=document.querySelector("#index");
let valueadd=document.querySelector("#valueadd");

index.innerHTML=index.innerHTML+"hkjhkj";
let p=document.createElement("p");

let h1=document.createElement("h1");
p.innerHTML="text";
h1.innerHTML="head";
valueadd.appendChild(h1);
  valueadd.appendChild(p);
/*
  let bigDiv=document.createElement("div");
  let smallDiv=document.createElement("div");

  
  
bigDiv.innerHTML="ila";
smallDiv.innerHTML="atik";
for (var i=o;i<20,i=i+1)
//{
 //   bigDiv.appendChild(smallDiv); 
//}

bigDiv.appendChild(smallDiv);
bigDiv.appendChild(smallDiv);
bigDiv.appendChild(smallDiv);

valueadd.appendChild(bigDiv);
*/

function mouseover1()
{
    h1.innerHTML="matha";
}

function mouseover2()
{
    let box2 = document.querySelector(".small2");
    box2.innerHTML="<h1>hjhk</h1>";
    document.querySelector(".big").style="background-color:red";
}
const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

let bigdiv = document.querySelector(".big");
for (let i = 0; i < 16; i = i + 1) {
  console.log(i);
  let newdiv = document.createElement("div");
  bigdiv.appendChild(newdiv);
  newdiv.innerHTML="njnkjnjk";
  newdiv.style="width:200px;height:200px; background-color:purple;";
  newdiv.className="small-div";
  newdiv.id="smalldiv"+i;
};
const smalldiv1 = document.querySelector('#smalldiv1');

smalldiv1.addEventListener('click', function () {
  console.log('The small div1  was clicked!');
});
document.addEventListener('click', function () {
  console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
   console.log('The document body was clicked');
});