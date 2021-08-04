function nombres () {
    
    console.log ("El nombre ingresado es " + nombreIngresado);
    alert ("¡Hola! " + nombreIngresado )
} 
function cilindrada () {
    motor = prompt (nombreIngresado + " que cilindrada es tu moto? 250, 500, +500");
    if (motor == "250") {
        console.log ("250");
    }
    else if (motor == "500") {
        console.log("500");
    }
    else if (motor == "+500"){
        console.log("+500");
    }
}
function datos () {
    tipoSeguro = prompt (nombreIngresado + " escoge un tipo de seguro: *terceros, *parcial, *total");
    if (tipoSeguro == "terceros") {
        alert (nombreIngresado = " el seguro de tu moto saldra $1000");
    }
    else if (tipoSeguro == "parcial") {
        alert (nombreIngresado = " el seguro de tu moto saldra $ 2000");
    }
    else if (tipoSeguro == "parcial" + motor == "500"){
        alert( nombreIngresado = "el valor");
    }
    else if (tipoSeguro == "total" || "Total") {
        alert (nombreIngresado = "el seguro de tu moto saldra $3000");
    }
}

let nombreIngresado = prompt("Porfavor, ingresa tu nombre completo");
let tipoSeguro = 0;


nombres ();
cilindrada ();
datos ();

