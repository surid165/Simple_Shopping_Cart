
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
     const currentPhoneTotalString = phoneTotalElement.innerText;
     const currentPhoneTotal = parseInt(currentPhoneTotalString);
     return currentPhoneTotal;
}

function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// calculate sub-total function

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total',currentSubTotal);
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;

    // calculate TAX
    const taxAmountString = (currentSubTotal * 0.10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount',taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount);

}




