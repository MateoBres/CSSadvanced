//Agarro el boton
let toggler = document.querySelector("#toggler")
let drawer = document.querySelector("#drawer")

//Le asigno un click
toggler.addEventListener("click",()=>{
    drawer.classList.toggle("open")
})