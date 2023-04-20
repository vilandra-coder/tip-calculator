'use strict'
const billInput = document.getElementById('bill_input')
const tips = document.querySelectorAll('.tips')
const peopleInput = document.getElementById('people-num')
const errorMessage = document.querySelector('.errmsg')
const perPersonAmount = document.getElementById('perperson-amt')
const totalPerPerson = document.getElementById('totalper-person')
const reset = document.querySelector('.reset')
const tipInput = document.querySelector('.tip-input')




let billPerPerson = 28.51
let bill;

    peopleInput.addEventListener('change', (e)=>{
        billInput.value = Math.trunc(Number(e.target.value) * billPerPerson).toFixed(2)
// calculating the custom tip
tipInput.addEventListener('change', (e)=>{
    let tipAmt6 = (billInput.value * (e.target.value/100))/peopleInput.value
    perPersonAmount.innerHTML = tipAmt6.toFixed(2)
  let totalPerson6 = billPerPerson + tipAmt6
  totalPerPerson.innerHTML = totalPerson6.toFixed(2)

})
        // calculating the tip percent per person
        tips.forEach((tip) =>{
           tip.addEventListener('click', (e)=>{
        
               switch (e.target.innerHTML) {
                   case '5%':
                        let tipAmt = (billInput.value * (5/100))/peopleInput.value
                          perPersonAmount.innerHTML = tipAmt.toFixed(2)
                        let totalPerson = billPerPerson + tipAmt
                        totalPerPerson.innerHTML = totalPerson.toFixed(2)
                      
                       break;
                       case '10%':
                        let tipAmt2 = (billInput.value * (10/100))/peopleInput.value
                          perPersonAmount.innerHTML = tipAmt2.toFixed(2)
                          let totalPerson2 = billPerPerson + tipAmt2
                          totalPerPerson.innerHTML = totalPerson2.toFixed(2)
                       break;
                       case '15%':
                        let tipAmt3 = (billInput.value * (15/100))/peopleInput.value
                          perPersonAmount.innerHTML = tipAmt3.toFixed(2)
                          let totalPerson3 = billPerPerson + tipAmt3
                          totalPerPerson.innerHTML = totalPerson3.toFixed(2)
                       break;
                       case '25%':
                        let tipAmt4 = (billInput.value * (25/100))/peopleInput.value
                          perPersonAmount.innerHTML = tipAmt4.toFixed(2)
                          let totalPerson4 = billPerPerson + tipAmt4
                          totalPerPerson.innerHTML = totalPerson4.toFixed(2)
                       break;
                       case '50%':
                        let tipAmt5 = (billInput.value * (50/100))/peopleInput.value
                          perPersonAmount.innerHTML = tipAmt5.toFixed(2)
                          let totalPerson5 = billPerPerson + tipAmt5
                          totalPerPerson.innerHTML = totalPerson5.toFixed(2)
                       break;
               
                   default:
                       break;
               }
            
           })
       })

    
   })

reset.addEventListener('click', ()=>{
    // billInput.value = Math.trunc(Number(e.target.value) * billPerPerson).toFixed(2)
billInput.value = ''
perPersonAmount.innerHTML = '$0.00'
totalPerPerson.innerHTML = '$0.00'
peopleInput.value = ''
tipInput.value = ''
})
 

    