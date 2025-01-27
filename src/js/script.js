
const boxtextcourt = document.querySelector(".boxtextcourt")
const boxtextcontato = document.querySelector(".boxtextcontato")
const $form = document.querySelector(".boxcontato form")

function Scroll(){
  
  window.addEventListener("scroll", ()=>{
    const scrollboxtextcourt = boxtextcourt.getBoundingClientRect()
    const scrolltextcontato = boxtextcontato.getBoundingClientRect()
    const scrollform = $form.getBoundingClientRect()

    if(scrollboxtextcourt.top < window.innerHeight){
        boxtextcourt.style = "opacity: 1;"
    }else{
      boxtextcourt.style = "opacity: 0;"

    }

    if(scrolltextcontato.top < window.innerHeight){
       boxtextcontato.style = "opacity: 1;"
    }else{
     boxtextcontato.style = "opacity: 0;"

    }

    if(scrollform.top < window.innerHeight){
       $form.style = "opacity: 1;"
   }else{
     $form.style = "opacity: 0;"

   }

  })
  
 
}


Scroll()
