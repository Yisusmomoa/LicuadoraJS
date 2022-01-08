let estado="apagado";
let licuadora=document.getElementById('blender');
let sonidoLicuadora=document.getElementById('blender-sound');
let botonLicuadora=document.getElementById('blender-button-sound');

function controlarLicuadora(){
    if(estado=="apagado"){
        estado="encendido";
        // console.log("estoy encendida");
        licuadora.classList.add("active");
        hacerRuido();
    }
    else{
        hacerRuido();
        estado="apagado";
        // console.log("estoy apagada");
        licuadora.classList.remove("active");
    }
}


function hacerRuido(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }
    else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime=0;
    }
}




