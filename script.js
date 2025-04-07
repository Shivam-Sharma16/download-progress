let btn=document.querySelector('button')
let prog=document.querySelector('#prog')
let text=document.querySelector('h3')
let i=0
let count=0;
btn.addEventListener('click',function(){
   
   if(count==0){
    var a=setInterval(() => {


      i++
      text.innerHTML=i+'%'
      prog.style.width=i+'%'
    
     
      
    }, 50);

    setTimeout(() => {
      clearInterval(a)
      btn.innerHTML='downloaded'
    }, 5000);
    count=1
   }
   else{
 text.innerHTML=0+'%'
      prog.style.width=0+'%'
      btn.innerHTML='download now'
      count-0
   }
})