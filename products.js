let arr = [
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 49639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        "name": "Lucas Lowe",
        "price": 63958,
        "category":"Cream",
        "desc": "omnis non voluptatem",
        "id": "2"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        "name": "Billie Dach",
        "price": 47517,
        "category":"Lotion",
        "desc": "aperiam",
        "id": "3"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
        "name": "Calvin Auer",
        "price": 86767,
        "category": "Shampoo",
        "desc": "Laboriosam sit quia id praesentium occae",
        "id": "4"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        "name": "Vicki Fay",
        "price": 77244,
        "category":"Cream",
        "desc": "Unde eos aut voluptatem et iure numquam "
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTI3OXxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDI1LzE1ODIwMzU5MjM3NjYyLmpwZ3wyMjRjOWIwMGUyMTU3ZjU3YTExNjM5MjkyMmJhNmE1MDAzYzU0YzVmMmE0NGU0NzI4NDRjZTI0YzdiNmNlNDU5",
        "name": "Virginia Wisoky",
        "price": 86952,
        "category": "Shampoo",
        "desc": "Laudantium ipsum dolorem architecto consequunturitaque odit.",
        "id": "6"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        "name": "Kayla Hand MD",
        "price": 2650,
        "category":"Lotion",
        "desc": "sit",
        "id": "7"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTI3OXxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDI1LzE1ODIwMzU5MjM3NjYyLmpwZ3wyMjRjOWIwMGUyMTU3ZjU3YTExNjM5MjkyMmJhNmE1MDAzYzU0YzVmMmE0NGU0NzI4NDRjZTI0YzdiNmNlNDU5",
        "name": "Marjorie Leannon",
        "price": 26682,
        "category": "Shampoo",
        "desc": "Dolor eaque et occaecati soluta rerum porro.",
        "id": "8"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        "name": "Zachary Aufderhar",
        "price": 97806,
        "category":"Cream",
        "desc": "ipsum",
        "id": "9"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk",
        "name": "Miss Harriet Pouros",
        "price": 69420,
        "category":"Lotion",
        "desc": "Libero nisi voluptate aut voluptates est. Hic", 
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        "name": "Fred Orn",
        "price": 1788,
        "category":"Cream",
        "desc": "eligendi",
        "id": "11"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 4939,
        "category":"Cream",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 9639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk",
        "name": "Henry O'Kon",
        "price": 3969,
        "category":"Lotion",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 9639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk",
        "name": "Henry O'Kon",
        "price": 4639,
        "category":"Lotion",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 7639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 9639,
        "category":"Cream",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/HSORGLP1-SOWA125-SOTT050-SOMO050-SOSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGQ1LzEyNzcxNTg3MTk0OTEwLmpwZ3w2Y2Q0ZmI5MDMwYzdmYTEwMGUzYzU4M2NiZGRkMWYxOTQ2MWIwMDAwMDIyYTEzYzI4YzUzNTZmMjZhZjNkMTRi",
        "name": "Henry O'Kon",
        "price": 8639,
        "category":"Lotion",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 4939,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/SMSH236-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w5MDY0fGltYWdlL3BuZ3xpbWFnZXMvaDY1L2hkYS8xNTgxMTk4NTE3ODY1NC5wbmd8NjhkNTA2ZjI5MmYzZDBjOTg2OTU1YmViOWUxNTk3YTdlNzAwOGZjMmI5OWFhYjM2MmExZjUzNDVmZjdjOTgwZA",
        "name": "Henry O'Kon",
        "price": 49639,
        "category":"Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 9639,
        "category":"Cream",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 49639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 639,
        "category":"Cream",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/VLSH236-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w5MzE4fGltYWdlL3BuZ3xpbWFnZXMvaDAwL2gxOC8xNTgxMTk4NTgzNDAxNC5wbmd8NDAwYTQyM2EzNjI5ZTkyYjZlMmVmZTZkNDY3YmUyNWY3ODkyMGFiZmMwZThlN2Y0Y2UzYjAyYWIyMjcxZjc1MA",
        "name": "Henry O'Kon",
        "price": 439,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 49639,
        "category":"Cream",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        "name": "Henry O'Kon",
        "price": 639,
        "category":"Lotion",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },
    {
        "img": "https://www.rodanandfields.com/en-us/medias/SMSH236-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w5MDY0fGltYWdlL3BuZ3xpbWFnZXMvaDY1L2hkYS8xNTgxMTk4NTE3ODY1NC5wbmd8NjhkNTA2ZjI5MmYzZDBjOTg2OTU1YmViOWUxNTk3YTdlNzAwOGZjMmI5OWFhYjM2MmExZjUzNDVmZjdjOTgwZA",
        "name": "Henry O'Kon",
        "price": 9639,
        "category": "Shampoo",
        "desc": "Nulla modi accusantium tempora modi beatae ",
        "id": "1"
    },

]

function display(array){
      document.querySelector("#product").innerHTML=""  

    array.forEach(element => {
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src", element.img)

    let h4 = document.createElement("h4")
    h4.innerText = element.name
   
    let h3 = document.createElement("h3")
    h3.innerText = element.price

    let b = document.createElement("b")
    b.innerText = element.category

    let p = document.createElement("p")
    p.innerText = element.desc

    let btn = document.createElement("button")
    btn.innerText = "Add to bag"
    btn.addEventListener("click",function(){
        addData("cart", element)
    })

    
    div.append(img,h4,h3,b,p,btn)
    document.querySelector("#product").append(div)
    });
    
}
display(arr)

function addData(key,value){
    let cartArr = JSON.parse(localStorage.getItem("cart"))||[]
    cartArr.push(value)
    localStorage.setItem(key,JSON.stringify(cartArr))
}

function filterData(){
    let pro = document.querySelector("#this").value
 
      let data = arr.filter(function(el){
         return el.category == pro
      })
       display(data)
}