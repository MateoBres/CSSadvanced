let galeria = document.querySelector("#galeria")
let left = document.querySelector("#left")
let right = document.querySelector("#right")

let deg = 0

right.addEventListener("click",()=>{
    deg = deg - 45
    galeria.style.transform = `rotateY(${deg}deg)`
})

left.addEventListener("click",()=>{
    deg = deg + 45
    galeria.style.transform = `rotateY(${deg}deg)`
})

setInterval(()=>{

    if(deg==-360){
        deg = 0
    }

    //console.log(deg)

    galeria.style.transform = `rotateY(${deg}deg)`


    deg = deg - 45

},5000)