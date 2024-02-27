function createRow(phone,index){
    return `
    <tr>
    <td>${index}.</td>
    <td>${phone.name}</td>
    <td>${phone.price}$</td>
    <td>${phone.status}</td>
    <td>${phone.description}</td>
    <td>${phone.createdAt}</td>
    <td>${phone.updatedAt}</td>
    <td data-id = ${phone.id}>
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
    </td>
  </tr>
    `
  }

  function validate(name,price,status,description){
    // Name required
    if(!name.value){
       alert("Ism maydoni bo'sh bolishi mumkin emas");
       number.focus()
       return false
    }

    if(Number(name.value)){
      alert("Ism maydoni raqam bolishi mumkin emas");
      number.focus()
      return false
   }

  //  Price required
  if(!price.value){
    alert("Narx maydoni bo'sh bolishi mumkin emas");
    price.focus()
    return false
 }
 
//  Description required
   if(!description.value){
  alert("Izoh maydoni bo'sh bolishi mumkin emas");
  price.focus()
  return false
  }


    return true;
  }

  

  export{createRow,validate};


 