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

let confpass = (i1,i2,lbl2) =>{
    if(document.getElementById(i1).value == document.getElementById(i2).value ){
        document.getElementById(i2).style.color='green';        
        document.getElementById(lbl2).style.borderBlockColor='green';
        return true
    }else{
        document.getElementById(lbl2).style.color='red';        
        document.getElementById(i2).style.borderBlockColor='red';
        return false
    }
}

function enviar(){
var datosF = "";
datosF = validar('n','lblu','nombre',datosF);
datosF = validar('c','lblc','correo',datosF);
datosF = validar('p1','lblp1','password',datosF);
datosF = validar('p2','lblp2','conf. password',datosF);

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{
    if(confpass('p1','p2','lblp2')){
    let n = document.getElementById('n').value;
    let c = document.getElementById('c').value;
    let p = document.getElementById('p1').value;
    let r = 'USER_ROLE';
    
    $.ajax({
        url: '/registrar',
        type: 'POST',
        body: { nombre: n, correo: c, password: p,rol: r  },
        dataType: 'json',
        success: (data) => {
            if (data.success) {
                alert('¡Usuario registrado!');
            }
        },
        error: () => {
            alert('¡Ups! Algo salió mal.');
        }
    });
      

    }else{
        alert('No coincide la conf. del password')
    }
}



}