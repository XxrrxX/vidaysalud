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


function login(){
var datosF = "";
datosF = validar('c','lblc','correo',datosF);
datosF = validar('p1','lblp1','password',datosF);

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{
    let c = document.getElementById('c').value;
    let p = document.getElementById('p1').value;
    fetch('/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json' // Tipo de contenido
        },
        body: JSON.stringify({correo: c, password: p}) // Datos a enviar
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            alert("A ocurrido un error inesperado!");
            throw new Error('Error en la llamada Ajax');
        }
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        let datosjson = JSON.parse(data);
        if(datosjson.msg == "sucess"){
            alert('Inicio exitoso');
            location.reload();            
        }else{
            alert(datosjson.msg);
            location.reload();
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

}