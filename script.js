let nav = document.getElementById('navbar');
let bar = document.getElementById('bar')
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    }) 
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    }) 
}


                                    // SIN PRODUCT PAGE

let mainimg  = document.getElementById('mainimg');
let smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}


               /*LOGIN PAGE*/            /*LOGIN PAGE*/          /*LOGIN PAGE*/