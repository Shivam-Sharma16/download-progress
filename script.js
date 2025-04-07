let btn=document.querySelector('button')
let prog=document.querySelector('#prog')
let text=document.querySelector('h3')
let i=0
btn.addEventListener('click',function(){
   
    var a=setInterval(() => {


      i++
      text.innerHTML=i+'%'
      prog.style.width=i+'%'
    
     
      
    }, 50);

    setTimeout(() => {
      clearInterval(a)
      btn.innerHTML='downloaded'
    }, 5000);
})