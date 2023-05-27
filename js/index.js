let name = prompt('What is your name?').toLocaleLowerCase().trim()
if (name[0] === 'a'){
    alert('Welcome')
} else {
    alert('not allowed to come in')
}

let age = prompt('How old are you?').toLocaleLowerCase().trim()
if (age >= 20 && age <=40){
    alert('Welcome sir')
}else {
    alert('ASAP go back')
}


let money = prompt('How much money do you have?').toLowerCase().trim()
if (money >= 100){
    alert('Welcome sir ')
}else {
   'make money and come back baby'
}

let people = prompt('How many people wants to tke part in?').toLowerCase().trim()
