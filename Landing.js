let arr =[
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Category-Image-1.png?context=bWFzdGVyfHJvb3R8MzcxNDI1fGltYWdlL3BuZ3xoOGIvaDJiLzEzOTAwNTk3MTMzMzQyLnBuZ3w5NTMwMDY2NDkxOTRmNDI1Mjc5ZjIyOTYxYjUyZTFiNDkyNDZhODZmNTJlZmQ4ZjU4NzBmZjI2NzFiMzhmZTMy",
        "name": "Lines, Wrinkles or Loss of Firmness",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Volume-Concern-6-grid-HOVER-STATE-438x438.jpg?context=bWFzdGVyfHJvb3R8NjE0NTl8aW1hZ2UvanBlZ3xoOTMvaDgzLzE1ODg5Mzg0MjEwNDYyLmpwZ3w4MGNlMjFhNGYwZTk1MTZmY2JkNzgwNzM5MmU0ZThiNDg1MjIzYjNiZjBlYjhjZGJkZTlmMzM2MWQzNzlmY2Fm",
        "name": "Redness, Dryness or Sensitivity",
        "id": "2"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Category-Image-3.png?context=bWFzdGVyfHJvb3R8MzU2OTI0fGltYWdlL3BuZ3xoNDMvaGJkLzEzOTAwNTk3MjY0NDE0LnBuZ3xhMWMzNDBiMGI0MWJmNjkwMDk2NDc0NGMxMjc4ZjljYzMzODYyYTRmNGUyNjFiYjZlOWZhOWM4ZmUzYTFjZmYz",
        "name":  "Discoloration or Uneven Tone",
        "id": "3"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Category-Image-2.png?context=bWFzdGVyfHJvb3R8Mzg1Mjk1fGltYWdlL3BuZ3xoOGUvaGI2LzEzOTAwNTk3MTk4ODc4LnBuZ3xmYzY3MThiYTcyZTNiMjhjNTI4MGZjNTUxMTY5OTgwNjFhMWQzM2Y0ZWQyZjJjMTUwOGEwYjBmM2Y1NjVlMTI3",
        "name": "Redness, Dryness or Sensitivity",
        "id": "4"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Smooth-Concern-6-grid-HOVER-STATE-438x438.jpg?context=bWFzdGVyfHJvb3R8MTQ1MTIwfGltYWdlL2pwZWd8aDc2L2g3My8xNTg4OTM4NDA3OTM5MC5qcGd8ZTY4N2UxZDlkMWU4YmJiOTU5NGU5MWQyMzk5ZWQ2NjdlYzcwZWVmNzVjOTI2MTIzY2MwNGEwMGQ4NWVjMDU4Mg",
        "name": "Dry, Frizzy, Dull Hair with Damage",
        "id": "5"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/Volume-Concern-6-grid-HOVER-STATE-438x438.jpg?context=bWFzdGVyfHJvb3R8NjE0NTl8aW1hZ2UvanBlZ3xoOTMvaDgzLzE1ODg5Mzg0MjEwNDYyLmpwZ3w4MGNlMjFhNGYwZTk1MTZmY2JkNzgwNzM5MmU0ZThiNDg1MjIzYjNiZjBlYjhjZGJkZTlmMzM2MWQzNzlmY2Fm",
        "name": "Thin, Flat Hair with Damage ",
        "id": "6"
    }
]

console.log(arr[0].img)

function display(array){

    array.forEach(element => {
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src", element.img)

    let h4 = document.createElement("h4")
    h4.innerText = element.name
    
    div.append(img,h4)
    document.querySelector(".child").append(div)
    });
    
}
display(arr)

var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

