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
let maindiv=document.querySelector('.main')
let parentdiv=document.querySelector('.parentdiv')
 
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

   if(addinput.value==""){
          showerror[0].classList.remove('hidden');
       
         }

    if(addinput.value!==""){
       showerror[0].classList.add('hidden');  
      let newbalance=current+toadd;

         currentbalance.textContent =newbalance;
         addinput.value=""
             
           divone.classList.remove('hidden');
         divtwo.classList.add('hidden');

         let copydiv=maindiv.cloneNode(true);
         let time=copydiv.querySelector('.time')
         let transitiontype=copydiv.querySelector('.type')
         let balance=copydiv.querySelector('.balance')
         let new_balance=copydiv.querySelector('.newbalance')


        let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';
let day = now.getDate();
let month = now.toLocaleString('default', { month: 'short' });

 let timeString = `${month} ${day}, ${hours}:${minutes} ${ampm}`;

  time.textContent=timeString;

         transitiontype.textContent="Add"
         balance.textContent=`+$${toadd}`;
         new_balance.textContent=`$${newbalance}`;
      
         parentdiv.appendChild(copydiv)
    }
})

// confirm withdraw btn
confirmwithdrawbtn.addEventListener('click',()=>{
  
  let toremove=Number(withdrawinput.value);
  let current=Number(currentbalance.textContent);

   if(withdrawinput.value==""){
          showerror[1].classList.remove('hidden');
       
         }

    if(toremove > current){
      alert('Insufficient Fund')
      withdrawinput.value=""
    }

    if(withdrawinput.value!=="" && toremove <= current ){
       showerror[1].classList.add('hidden');  
      let newbalance=current-toremove;

         currentbalance.textContent =newbalance;
         withdrawinput.value=""
             
           divone.classList.remove('hidden');
         divthree.classList.add('hidden');

          let copydiv=maindiv.cloneNode(true);
         let time=copydiv.querySelector('.time')
         let transitiontype=copydiv.querySelector('.type')
         let balance=copydiv.querySelector('.balance')
         let new_balance=copydiv.querySelector('.newbalance')


        let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';
let day = now.getDate();
let month = now.toLocaleString('default', { month: 'short' });

 let timeString = `${month} ${day}, ${hours}:${minutes} ${ampm}`;

  time.textContent=timeString;

         transitiontype.textContent="withdraw"
         transitiontype.style.color="green"
         balance.textContent=`-$${toremove}`;
         new_balance.textContent=`$${newbalance}`;
      
         parentdiv.appendChild(copydiv)
      
    }
    


})


// time add 
let maintime=document.querySelector('#maintime')
function updateTime() {
          let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';
let day = now.getDate();
let month = now.toLocaleString('default', { month: 'short' });

 maintime.textContent = `${month} ${day}, ${hours}:${minutes} ${ampm}`;

}
updateTime()

setInterval(updateTime,1000)