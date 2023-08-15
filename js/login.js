// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
// step-2 get the email address inside te input field
// always remember to put .value to get the text from the input field
const emailFeild = document.getElementById('user-email');
const email = emailFeild.value;
// step-3 get password
const passwordField = document.getElementById('user-password');
const password =  passwordField.value;
// step-4 verify the user
if(email == 'sontan@gmail.com'&& password == 'admin12')
{
    console.log('valid user');
}
else{
    console.log('invalid user');
}
})