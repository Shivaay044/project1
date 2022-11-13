let cartArr = JSON.parse(localStorage.getItem("cart"))||[]


function display(array){
    document.querySelector("#product").innerHTML=""
    array.forEach(function(element,index) {
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src", element.img)

    let h4 = document.createElement("h4")
    h4.innerText = element.name
   
    let h3 = document.createElement("h3")
    h3.innerText = element.price

    let p = document.createElement("p")
    p.innerText = element.desc

    let btn = document.createElement("button")
    btn.innerText = "Remove"
    btn.addEventListener("click",function(){
        dlData(cartArr,index)
        refresh()
    })

    
    div.append(img,h4,h3,p,btn)
    document.querySelector("#product").append(div)
    });
    
}
display(cartArr)

function dlData(cartArr, index){
   cartArr.splice(index,1)
   localStorage.setItem("cart",JSON.stringify(cartArr))
  
 display(cartArr)
}


function refresh(){
    let total = cartArr.reduce(function(acc,el){
        return acc + el.price
    },0)
    console.log(total)
    
    document.querySelector("span").innerText=total
}

let total = cartArr.reduce(function(acc,el){
    return acc + el.price
},0)
console.log(total)

document.querySelector("span").innerText=total