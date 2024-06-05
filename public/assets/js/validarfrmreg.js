document.getElementById('frmreg').reset();

let validar = (id,lbl,dato,df)=>{

    if(document.getElementById(id).value.length == 0){
        document.getElementById(lbl).style.color='red';        
        document.getElementById(id).style.borderBlockColor='red';

        if(df.length == 0){
            df = dato;
        }else{
            df = `${df}, ${dato}`;
        }        
    }else{
        document.getElementById(lbl).style.color='green';        
        document.getElementById(id).style.borderBlockColor='green';
    }
    return df;
}

function enviar(){
var datosF = "";
datosF = validar('n','lblu','nombre',datosF);
datosF = validar('c','lblc','correo',datosF);
datosF = validar('p1','lblp1','password',datosF);
datosF = validar('p2','lblp2','conf. password',datosF);

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}

}