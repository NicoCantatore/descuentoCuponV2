// CUPONES  

const cuponcitos = [ // array de cupones

    "a",
    "b",
    "c",
];


function calcularPrecioConDescuento(precio, descuentop) {

    const porcentajePrecio = 100 - descuentop;
    const precioConDescuento = (precio * porcentajePrecio) / 100;
    return precioConDescuento;
}


function botonCupond() {

    let inputPric = document.getElementById("inputPrice"); // llamo del html el input que pone el usuario
    let valueP = inputPric.value; //  una vez que lo llame lo uso dandole una variable

    let inputCuponc = document.getElementById("inputCuponcin");
    let cuponValue = inputCuponc.value;

    let descuentop;

    switch (cuponValue) {
        case cuponcitos[0]:
            descuentop = 15;
            break;

        case cuponcitos[1]:
            descuentop = 30;
            break;

        case cuponcitos[2]:
            descuentop = 25;
            break;

    }

    const precioConDescuento = calcularPrecioConDescuento(valueP, descuentop); // llamamos a la funcion calcular

    const resultadoP = document.getElementById("resultP"); //llamo id con la funcion  y la nueva funcion la uso para escribir
    resultadoP.innerHTML = "precio con descuento $" + precioConDescuento; // inner escribimos html desde js


}


/*const listaCupones = {
    cupon1: 10,
    cupon2: 15,
    cupon3: 20,
 }; 
 
 function descuentoDelCupon() {
    const nombreCupon = document.getElementById('inputCupon').value;
    const cuponDefault = 0;
    const cuponDescuento = listaCupones[nombreCupon] || cuponDefault;
    return cuponDescuento;
 } */ // probar