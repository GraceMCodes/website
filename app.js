// if we click on a button we want an alert that says , check your email.
// eventlisener.
// the function has to have a set of instructions that when 
document.querySelector('button').addEventListener('click', signUp);
function signUp(){
   
     const text = document.querySelector('button').value;
     if ( text === 'sign up'){
        alert('Check Your email for your schedule!')
     }

 else{
       alert('oops!')
    }

}
signUp()