//access the btns
let addbtn=document.querySelector('#show-add-btn')
let withdrawbtn=document.querySelector('#show-withdraw-btn')
let transactionbtn=document.querySelector('#show-history-btn')
let dashboardbtn=document.querySelectorAll('#back-from-add')
let confirmaddbtn=document.querySelector('#Confirmadd')
let confirmwithdrawbtn=document.querySelector('#confirmwithdraw')


//access the divs
let divone=document.querySelector('.div1')
let divtwo=document.querySelector('.div2')
let divthree=document.querySelector('.div3')
let divfour=document.querySelector('.div4')
 
//access of inputs
let addinput=document.querySelector('#add-amount')
let withdrawinput=document.querySelector('#withdraw-amount')

addbtn.addEventListener('click',()=>{
       divone.classList.add('hidden');
         divtwo.classList.remove('hidden');
        

})
withdrawbtn.addEventListener('click',()=>{
     divone.classList.add('hidden');
        divthree.classList.remove('hidden');
})

transactionbtn.addEventListener('click',()=>{
    divone.classList.add('hidden');
        divfour.classList.remove('hidden');
})

for(x of dashboardbtn){
    x.addEventListener('click',()=>{
   divone.classList.remove('hidden')
      divthree.classList.add('hidden');
        divtwo.classList.add('hidden');
          divfour.classList.add('hidden');
    })
}
