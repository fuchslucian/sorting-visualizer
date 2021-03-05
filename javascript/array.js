var numbers = []
for (let i = 0; i < 200; i++){
    let a = Math.floor(Math.random()*100+1)
    document.getElementById("array").innerHTML += `<div id=${i} class=_${a}></div>`
    numbers.push(a)
}
function new_array(){
    if (document.getElementById("generate-array").parentNode.className === "navigation-grid-visualizing"){
        return
    }
    numbers = []
    for (let i = 0; i < 200; i++){
        let a = Math.floor(Math.random()*100+1)
        document.getElementById(i).className = `_${a}`
        numbers.push(a)
    }
}
document.getElementById("generate-array").addEventListener("click", new_array)