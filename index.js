// function validate(){

//     let firstName = document.getElementById('first-name').value 
//     let lastName = document.getElementById('last-name').value
//     let email = document.getElementById('email').value
//     let city = document.getElementById('city').value
//     let state = document.getElementById('state').value
//     let zip = document.getElementById('zip').value
//     let tnc = document.getElementById('t-and-c').checked


//     console.log(firstName, lastName, email, city, state, zip, tnc)   always check the code with console
// }


// function validate(){
    
//     let firstName = document.getElementById('first-name').value 
//     let lastName = document.getElementById('last-name').value
//     let email = document.getElementById('email').value
//     let city = document.getElementById('city').value
//     let state = document.getElementById('state').value
//     let zip = document.getElementById('zip').value
//     let tnc = document.getElementById('t-and-c').checked

// if(firstName.length >= 2){
//     console.log('correct name')
// }else{
//     console.log('incorrect name')
// }

// }

function validate(){
    
    let firstName = document.getElementById('first-name').value 
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zip = document.getElementById('zip').value
    let tnc = document.getElementById('t-and-c').checked
    let error = false

if(firstName.length >= 2){
    document.getElementById('first-name-valid').style.display = 'block'
    document.getElementById('first-name-invalid').style.display = 'none'
    
}else{
    document.getElementById('first-name-invalid').style.display = 'block'
    document.getElementById('first-name-valid').style.display = 'none'
    error = true
   
}

if(lastName.length >= 2){
    document.getElementById('last-name-valid').style.display = 'block'
    document.getElementById('last-name-invalid').style.display = 'none'
}else{
    document.getElementById('last-name-invalid').style.display = 'block'
    document.getElementById('last-name-valid').style.display = 'none'
    error = true
}

/*
    Email:
    - Include @
    - Include .
    - Atleast 1 character before @
    - Atleast 2 character after .
 */

   /* includes -Returns true if the string containsthat character/substring, return false if not 
      indexOf  - Return indexOf first occurence of that charachter/substring,else return -1
   */

if(email.includes('@') && email.includes('.') && email.indexOf('@') != 0 && email.lastIndexOf('.') >= 3){
    document.getElementById('email-valid').style.display = 'block'
    document.getElementById('email-invalid').style.display = 'none'
}else{
    document.getElementById('email-invalid').style.display = 'block'
    document.getElementById('email-valid').style.display = 'none'
    error = true
}

if(city.length >= 4){
    document.getElementById('city-valid').style.display = 'block'
    document.getElementById('city-invalid').style.display = 'none'
}else{
    document.getElementById('city-invalid').style.display = 'block'
    document.getElementById('city-valid').style.display = 'none'
    error = true
}


if(state != 'None'){
    document.getElementById('state-valid').style.display = 'block'
    document.getElementById('state-invalid').style.display = 'none'
}else{
    document.getElementById('state-invalid').style.display = 'block'
    document.getElementById('state-valid').style.display = 'none'
    error = true
}

/*
    Zip:
    - length 6
    - All number
*/

/*
    - parseInt - Return number equivalent of string , if can't - it returns NaN
    - isNan - Returns true if value is NaN
    - !isNan - Returns true if value is Number
*/
 let zipNumber = parseInt(zip)

if(zip.length == 6 && !isNaN(zipNumber)  ){
    document.getElementById('zip-valid').style.display = 'block'
    document.getElementById('zip-invalid').style.display = 'none'
}else{
    document.getElementById('zip-invalid').style.display = 'block'
    document.getElementById('zip-valid').style.display = 'none'
    error = true
}

if(tnc){
     document.getElementById('t-and-c-invalid').style.display = 'none'
 }else{
    document.getElementById('t-and-c-invalid').style.display = 'block'
    error = true
 }

 if (!error){
    
    alert(' your details have been  saved sucessfully!')
    document.getElementById('registration-form').reset()

  //  -----------------------------------------or-----------------------

/*  document.getElementById('first-name').value = '' 
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
    document.getElementById('zip').value = ''
    document.getElementById('t-and-c').checked = false
*/

    let validFeedbacks = document.getElementsByClassName('valid-feedback')
    for(let i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = 'none'
    }

    let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
    for(let i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = 'none'
    }
 }


}

/*
- If no error,
1. Reset the form
2. Alert : ' your details have been  saved sucessfully'
*/