// Input user
const name = prompt("Inserisci qui il tuo nome")
console.log(name);

const surname = prompt("Inserisci qui il tuo cognome")
console.log(surname);

const color = prompt("Inserisci qui il tuo colore preferito")
console.log(color);

// Data processing

const password_generated = `${name}${surname}${color}21`
console.log(password_generated);  

// Output

document.getElementById("password").innerHTML = password_generated