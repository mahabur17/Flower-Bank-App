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

//access error
let showerror=document.querySelectorAll('#add-error')

//current balance
let currentbalance=document.querySelector('#currentbalance')


//btn functions
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

// confirm add button
confirmaddbtn.addEventListener('click',()=>{
  
  let toadd=Number(addinput.value);
  let current=Number(currentbalance.textContent);

   if(toadd==""){
          showerror[0].classList.remove('hidden');
       
         }

    if(toadd!==""){
       showerror[0].classList.add('hidden');  
      let newbalance=current+toadd;

         currentbalance.textContent =newbalance.toFixed(2);
         addinput.value=""
             
           divone.classList.remove('hidden');
         divtwo.classList.add('hidden');
      
    }
})

// 
confirmwithdrawbtn.addEventListener('click',()=>{
  
  let toremove=Number(withdrawinput.value);
  let current=Number(currentbalance.textContent);

   if(toremove==""){
          showerror[1].classList.remove('hidden');
       
         }

    if(toremove > current){
      alert('Insufficient Fund')
      withdrawinput.value=""
    }

    if(toremove!=="" && toremove < current ){
       showerror[1].classList.add('hidden');  
      let newbalance=current-toremove;

         currentbalance.textContent =newbalance.toFixed(2);
         withdrawinput.value=""
             
           divone.classList.remove('hidden');
         divthree.classList.add('hidden');
      
    }
    
})
