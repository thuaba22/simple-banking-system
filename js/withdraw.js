// add event handler with withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get the withdrow amount  from the withdraw input field
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const  newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 7 clear the withdraw input field
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    // step 3 get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalSring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalSring);
    // step 5 get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
     
    if(newWithdrawAmount>previousBalanceTotal){
        alert('Please withdraw according to your total balance');
        return;
    }
        // step 4 calculate the total withdraw ammount
        const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
        withdrawTotalElement.innerText = currentWithdrawTotal;
    
    //step 6 calculate new balance total
    const currentBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



   
})