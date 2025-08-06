document.getElementById('frmP').reset();

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


function enviar(P){
console.log(P)
if(P==2){
var datosF = "";
datosF = validar('Np','lblnp','nombre producto',datosF);
datosF = validar('cant','lblcant','cantidad',datosF);
datosF = validar('pc','lblpc','precio compra',datosF);
datosF = validar('pv','lblpv','precio venta',datosF);

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{
    let np = document.getElementById('Np').value;
    console.log(np)
    let cant = document.getElementById('cant').value;
    let pc = document.getElementById('pc').value;
    let pv = document.getElementById('pv').value;
    fetch('/registrar_producto', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json' // Tipo de contenido
        },
        body: JSON.stringify({ nombre_del_producto: np, cantidad: cant, Precio_compra: pc,Precio_venta: pv  }) // Datos a enviar
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
            alert('Registro exitoso');
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

}else if(P==1){

var datosF = "";
datosF = validar('pE','lblnp','nombre producto',datosF);
datosF = validar('cant','lblcant','cantidad',datosF);
datosF = validar('pc','lblpc','precio compra',datosF);
datosF = validar('pv','lblpv','precio venta',datosF);       

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{

    let select = document.getElementById("pE");
    let np = select.options[select.selectedIndex].value
    let npJSON = JSON.parse(np);
    console.log(npJSON);
    let cant = document.getElementById('cant').value;
    let pc = document.getElementById('pc').value;
    let pv = document.getElementById('pv').value;
    console.log(JSON.stringify({ nombre_del_producto: np, cantidad: cant, Precio_compra: pc,Precio_venta: pv}));
    fetch('/actualizar_productos', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json' // Tipo de contenido
        },
        body: JSON.stringify({ nombre_del_producto: npJSON.nombre_del_producto, cantidad: cant, Precio_compra: pc,Precio_venta: pv}) // Datos a enviar
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
            alert('Actualizacion exitosa');
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

}
