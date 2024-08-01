let menu = document.querySelector(".drop").childNodes[1]
let dropmenu=document.getElementById("dropmenu")
let nav=document.querySelector(".navbar")
let burger=document.getElementById("burger")
let slider=document.getElementById("slider")


let test=true
menu.addEventListener('click',openMenu)
function openMenu(){
    dropmenu.classList.toggle("show")
    if (test) {
        nav.style.padding = "15px 0px 100px"
        test=false;
    }else{
        nav.style.padding = "15px 0px 70px"
        test=true
    }
}
window.addEventListener("resize",tests)

function tests(){

  if (window.innerWidth>768){
    console.log(test)
    dropmenu.classList.remove("show")

  }
}




slider.addEventListener('click',addClass)

function addClass(e){
    for(i=0;i<=7;i++){
        if(i%2!==0){
            slider.childNodes[i].classList.remove("active-page")
        }
    }
    e.preventDefault()
    if(e.target.id!=="slider"){
      e.target.classList.add("active-page")
    }

    

}


