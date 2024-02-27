import { createRow,validate } from "./function.js";
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form")
const name = document.querySelector("#name")
const status = document.querySelector("#status")
const description = document.querySelector("#description")
const price = document.querySelector("#price")
const btn = document.querySelector("#btn")
const nMode = document.querySelector("#darkmode-toggle")
const body = document.querySelector("body")

btn && btn.addEventListener("click",function(e){
  e.preventDefault()
  btn.setAttribute('disablet',true)

  const isValid = validate(name,price,status,description)
  

  if(isValid){
    btn.innerHTML = 'yuborilmoqda...'
const phone = {
      name:name.value,
      status:status.value,
      description:description.value,
      price:price.value,
      category_id:2,
}

fetch(`${API}`,{
  method:"POST",
  headers:{
    "Content-type":'application/json'
  },
  body: JSON.stringify(phone)
         })
         .then(res => res.json())
         .then(data => {
          btn.removeAttribute('disabled')
          btn.innerHTML = 'Saqlash'
         if(data.id){

         let row = createRow(data, tbody.childElementCount + 1);
         tbody.innerHTML  += row
         }
         })
         .catch(err => {
          console.log(err);
         })
     }
})

const API = "https://auth-rg69.onrender.com/api/products"

document.addEventListener("DOMContentLoaded", function () {
  fetch(`${API}/all`, {
    method: "GET",
  })
    .then(res => {
      if (res.status == 200) {
        return res.json();
      }
    })

    .then(data => {
        if(data.length){  
        
          data.forEach((phone ,index) => {
            let row = createRow(phone,index + 1)
            tbody.innerHTML += row;
          });
         

          const deleteButton = document.querySelectorAll('i.fa-trash-can')
          if(deleteButton.length){
            deleteButton.forEach(del => {
              del.addEventListener('click', function(){
                  let isDelete = confirm("Rostdan ham ushbu malumotni ochirmoqchimisiz");

                  if(isDelete){
                    let id = this.parentNode.getAttribute('data-id');
                    this.parentNode.innerHTML = "O'chirilmoqda..."
                   if(id){
                    fetch(`${API}/${id}`, {
                      method :"DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                      if(data.message == "Mahsulot muvaffaqiyatli o'chirildi"){
                  window.location.reload();
                      }
                    })
                    .catch(err => {
                      console.log(err);
                    })
                   }
                  }
              })
            })
          }
        }
    })
 
    .catch(err => {
      console.log(err);
    })
})

nMode && nMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "#232b2b"
    document.body.style.color = "white"  
})


