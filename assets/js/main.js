let datos;
// fnucion maestra
function cargarDatos(){

    // Llamamos la información
    extraerDatos();
    // Cargamos nuestra información en la página
    cargarDatosPagina();
    asignarTitulos();


}



async function extraerDatos(callback){

    await delay(2500);

    // Fuente de datos 3 Dollar-Peso Argentino
    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let bittcoin = await promesa1.json();
    document.getElementById("dolarBitcoin").append(bittcoin.bpi.USD.rate);

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let dolaEuro = await promesa2.json();
    document.getElementById("dolarEuro").append(dolaEuro.rates.EUR);

    let promesa3 = await fetch('https://open.er-api.com/v6/latest/ARS');
    let dolaPesoArg = await promesa3.json();
    document.getElementById("dolarPesoArg").append(dolaEuro.rates.ARS);
    
    document.getElementById("imagenEspera").style.visibility = 'hidden';

    
}



function cargarDatosPagina(){
    let textoTitulo = "cambio a dollar";
    let titulo = document.getElementById("tituloPagina");
    let logo = document.getElementById("logoPagina");
    titulo.innerText = textoTitulo.toUpperCase();
    logo.setAttribute("src","assets/img/change-money.png");

    let logoeEspera = document.getElementById("imagenEspera");
    logoeEspera.setAttribute("src","assets/img/loading.gif");
    logoeEspera.style.visibility = 'visible';

}

function asignarTitulos(){
    document.getElementById("dolarPesoTitulo").append("Peso Arg a USD");
    document.getElementById("dolarEUTitulo").append("Euro a USD");
    document.getElementById("bitcoinTitulo").append("Bitcoin a USD");
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res, ms);
    });
}