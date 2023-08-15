//step 1 add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
//step 2 get the deposite amount from the deposit input field
const depositField = document.getElementById('user-deposit');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// step 3 get the current deposit total amount
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// step 4 add number to set the total deposit
const currentDepositTotal = newDepositAmount + previousDepositTotal;
depositTotalElement.innerText = currentDepositTotal;
// step 5 get balance current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step 6 calculate current total balance
const currentBalanceTotal = previousBalanceTotal+newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

// step 7 clear deposit field
depositField.value = '';
})