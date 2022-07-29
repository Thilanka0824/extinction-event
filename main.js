
/*
the goal of this problem is to apply a strike through on click for your listitem
think about how you can apply a style using an event listener.  my hint would be, you could probably do it in 1 line of code inside your event listener
*/

let crossout = document.querySelectorAll('#crossout-ol li');
let fadeOut = document.querySelectorAll('#opacity-ul li')
let collapse = document.querySelectorAll('#row')
let destroy_all = document.querySelectorAll('#destroy-all')


for (let i = 0; i < crossout.length; i++){
    //console.log('hey')
    let listItem = crossout[i];
    
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through"
        
    });
}

for(let t = 0; t < fadeOut.length; t++){
    let ulList = fadeOut[t];
    
    ulList.addEventListener('click', function(){ 
        ulList.style.opacity = '0'
    })
}


for(let i = 0; i < collapse.length; i++){
    let images = collapse[i];
    
    images.addEventListener('click', function(){
       
        images.style.display = "none";
        
    })
}

for(let i = 0; i < destroy_all.length; i++){
    let meteor = destroy_all[i];
    
    meteor.addEventListener('click', function(){
        //console.log('last')
        document.body.innerHTML = ''
    })
}