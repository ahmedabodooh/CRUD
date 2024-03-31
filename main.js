let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submite = document.getElementById('submite');
let mood = 'creat';
// function name get total
function getTotal(){
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value) 
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#A0A603';
    } else{
        total.innerHTML = '';
        total.style.background = '#04BFBF';
    }

}
// function nmae creat product

// function nmae save localstorage
  let dataPro;
  if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
  }else{
    dataPro = [];
  }
submite.onclick = function () {
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

        if(newPro.count > 1){
            for(let i =0; i < newPro.count;i++){
                dataPro.push(newPro);
            }
        }   else{
            dataPro.push(newPro);
        }
   



    localStorage.setItem('product', JSON.stringify(dataPro) )
    clearData()
    showData()
    
}
// function nmae clear inputs
    function clearData(){
        title.value = ' ';
        price.value = ' ';
        taxes.value = ' ';
        ads.value = ' ';
        discount.value = ' ';
        total.innerHTML = ' ';
        count.value = '';
        category.value = '';
    
    }
// raed
function showData(){
    let table = '';
    for(let i= 0; i < dataPro.length;i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>

        </tr>
    
        `;

    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelet = document.getElementById('deleteAll')
    if(dataPro.length >0){
        btnDelet.innerHTML = `
        <button onclick="deleteAll()">delete All(${dataPro.length})</button>
        `
    }else{
        btnDelet.innerHTML = '';
    }
}
showData()
// delete
function deleteData(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro);
    showData()
}
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
}
// count
// update
function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal()
    count.style.display = 'none';
    category.value = dataPro[i].category;
    submite.innerHTML = 'update';
    mood = 'update';
    scroll({
        top:0
    })
}










// search
// clean data
