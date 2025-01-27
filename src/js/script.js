
const boxtextcourt = document.querySelector(".boxtextcourt")

function Scroll(){
  
  window.addEventListener("scroll", ()=>{
    const scrollboxtextcourt = boxtextcourt.getBoundingClientRect()
    if(scrollboxtextcourt.top < window.innerHeight){
        boxtextcourt.style = "opacity: 1;"
    }else{
      boxtextcourt.style = "opacity: 0;"

    }

  })
  
 
}


Scroll()
