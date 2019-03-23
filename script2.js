const container0 = document.querySelector('#container0');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
let containerImg={
    'container0':'img0.jpg',
    'container1':'img1.jpg',
    'container2':'img0.jpg',
    'container3':'img1.jpg'
}
let showImg={
    'container0':0,
    'container1':0,
    'container2':0,
    'container3':0
}
let lastdiv = 'none';
let lastimg = 'none';
let clickcount = 0; 
container0.addEventListener('click',function(){
    if ((lastdiv!='container0')&(showImg['container0']==0)) {
        clickcount++;
        console.log("you clicked same div. "+clickcount)
    }
    let curImg = containerImg['container0'];
    container0.style = "background-image: url('src/"+curImg+"')";
    showImg['container0']=1;
    if((lastimg!= curImg)&(clickcount%2==0)){
        setTimeout(function(){ 
            container0.style="background-image: url('src/fruits.jpg')";
            
            document.querySelector('#'+lastdiv).style="background-image: url('src/fruits.jpg')";
            showImg['container0']=0;
            showImg[lastdiv]=0;
            lastdiv = 'container0';
        }, 3000);
    
    }else{
        lastdiv = 'container0';
    }
    

    lastimg = curImg;
});
container1.addEventListener('click',function(){
    if ((lastdiv!='container1')&(showImg['container0']==0)) {
        clickcount++;
        console.log("you clicked same div. "+clickcount)
    }
    let curImg = containerImg['container1'];
    container1.style = "background-image: url('src/"+curImg+"')";
    showImg['container1']=1;
    if((lastimg!= curImg)&(clickcount%2==0)){
        setTimeout(function(){ 
            container1.style="background-image: url('src/fruits.jpg')";
            console.log('#'+lastdiv);
            document.querySelector('#'+lastdiv).style="background-image: url('src/fruits.jpg')";
            showImg['container1']=0;
            showImg[lastdiv]=0;
            lastdiv = 'container1';
        }, 3000);
    
    }
    else{
        lastdiv = 'container1';
    }

    lastimg = curImg;
});
container2.addEventListener('click',function(){
    if ((lastdiv!='container2')&(showImg['container0']==0)) {
        clickcount++;
        console.log("you clicked same div. "+clickcount)
    }
    let curImg = containerImg['container2'];
    container2.style = "background-image: url('src/"+curImg+"')";
    showImg['container2']=1;
    if((lastimg!= curImg)&(clickcount%2==0)){
        setTimeout(function(){ 
            container2.style="background-image: url('src/fruits.jpg')";
            document.querySelector('#'+lastdiv).style="background-image: url('src/fruits.jpg')";
            showImg['container2']=0;
            showImg[lastdiv]=0;
            lastdiv = 'container2';
        }, 3000);
    
    }
    else{
        lastdiv = 'container2';
    }

    lastimg = curImg;
});
container3.addEventListener('click',function(){
    if ((lastdiv!='container0')&(showImg['container3']==0)) {
        clickcount++;
        console.log("you clicked same div. "+clickcount)
    }
    let curImg = containerImg['container3'];
    container3.style = "background-image: url('src/"+curImg+"')";
    showImg['container3']=1;
    if((lastimg!= curImg)&(clickcount%2==0)){
        setTimeout(function(){ 
            container3.style="background-image: url('src/fruits.jpg')";
            document.querySelector('#'+lastdiv).style="background-image: url('src/fruits.jpg')";
            showImg['container3']=0;
            showImg[lastdiv]=0;
            lastdiv = 'container3';
        }, 3000);
    
    }
    else{
        lastdiv = 'container3';
    }

    lastimg = curImg;
});