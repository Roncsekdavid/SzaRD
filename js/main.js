

const mezok_div = document.querySelectorAll(".mezok div");
const resetBtn = document.querySelector(".reset")

mezok_div.forEach((mezo,i) =>{
    mezo.addEventListener("click",()=>{
        let szoveg = prompt("Adj meg egy eseményt(vagy hagy üresen a törléshez)")
        mezo.innerHTML = szoveg
        if(i>=0 && i<=20 && szoveg != ""){
            mezo.style.backgroundColor = "#8fd052"
        }
        else if(i>=21 && i<=)
    })
    
})
resetBtn.addEventListener("click",()=>{
    mezok_div.forEach(mezo =>{
        mezo.innerHTML = ""
        mezo.style.backgroundColor = "#fff"
    })
})