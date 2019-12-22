//Variables that are used and manipualted throughout the program//
let dinTotal = document.querySelector('#cost');
let dinService = document.querySelector('#service');
let calcBtn = document.querySelector('button');
let total = 0;
let tipTotal = 0;
let amount = document.querySelector('#amount');
let tip = document.querySelector('#tip');
let hfour = document.querySelector('h4');
let divTwo = document.querySelector('#each');
let hfive= document.querySelector('h3');
let btn1 = document.querySelector('#one')
let btn2 = document.querySelector('#two')
let btn3 = document.querySelector('#three')
let resetBtn = document.querySelector('#clear-form')
//--------------------------------------------------------//


calcBtn.addEventListener('click', function() {
    /*If-else statements for calculator stored in function for 
    better readability*/
    ifElseStatements();
    //----------------//
    /* function that changes the text content and style of 'tip' 
    and 'each' headers*/
    amountOfTip();
    //---------------//
    let timer = setInterval(function() {
        let promptUser = prompt('Would you like to divide the bill')
    if(promptUser !== 'yes' && promptUser !== 'Yes') {
         alert('✌️😎✌️')
        } else {
            promptUser = prompt('How many ways would you like to divide?')
            clearInterval(timer)
             //the 'each' headers calculation aka dollar amount//
            let totalDivide = Math.round(total / Number(promptUser));

            //---------------------------------------------//
            //'tipDivide' being display on 'each' header//
            divTwo.textContent = totalDivide;
            //------------------------------------------//
        } 
        clearInterval(timer)
    }, 1000)
});


resetBtn.addEventListener('click', function() {
    reset();
})


function ifElseStatements() {
    
    if(dinTotal.value < 50 && dinService.value < 5)  {
        tipTotal = Math.round(Number(dinTotal.value) * 0.1)
        total = Number(dinTotal.value) + tipTotal; 
        console.log(total)
        amount.textContent = total;
    } else if(dinTotal.value < 50 && dinService.value >= 5) {
        tipTotal = Math.round(Number(dinTotal.value) * 0.25)
        total = Number(dinTotal.value) + tipTotal; 
        amount.textContent = total;
    } else if(dinTotal.value >= 50 && dinService.value < 5) {
        tipTotal = Math.round(Number(dinTotal.value) * 0.15)
        total = Number(dinTotal.value) + tipTotal; 
        amount.textContent = total;
    } else if(dinTotal.value >= 50 && dinService.value >= 5) {
        tipTotal = Math.round(Number(dinTotal.value) * 0.20)
        total = Number(dinTotal.value) + tipTotal; 
        amount.textContent = total;
    }
}

function amountOfTip() {
    tip.textContent = tipTotal
    hfour.style.color = 'black';
    hfive.style.color = 'black';
}

function reset() {
    dinTotal.value = 0;
    dinService.value = 0;
    amount.textContent = 0;
    tip.textContent = 0;
    divTwo.textContent = 0;
    hfour.style.color = 'white';
    hfive.style.color = 'white';
}
