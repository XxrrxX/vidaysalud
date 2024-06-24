let validar = (id,lbl,dato,df)=>{

    if(document.getElementById(id).value.length == 0 ||document.getElementById(id).value == "Opcion default" ){
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

function consultar_ventas(){
var datosF = "";
datosF = validar('listadia','lbldia','Dia',datosF);
datosF = validar('listames','lblmes','Mes',datosF);
datosF = validar('listaAño','lblAño','Año',datosF);


if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{


    fetch('/ventas', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json' // Tipo de contenido
        },
        body: JSON.stringify(AuthVS) // Datos a enviar
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            alert("A ocurrido un error inesperado!");
			 window.location.href="/login";
            throw new Error('Error en la llamada Ajax');
        }
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        let datosjson = JSON.parse(data);
        if(datosjson.msg == "sucess"){
			let AuthVS = JSON.parse(localStorage.getItem('AuthVS'));  
			AuthVS.usuario = datosjson.usuario;
			console.log(JSON.stringify(AuthVS));
			localStorage.setItem("AuthVS",JSON.stringify(AuthVS));
			let usuario = AuthVS.usuario;
			let puser = document.getElementById("dvusuario");
			puser.innerText= "Bienvenid@ "+usuario+" al registro de ventas";
            let ventas = datosjson.ventas;
            let tablap = document.getElementById("tablaIV");
            let total_ventas=0;
            let cantidad_total=0;
            let selectdia = document.getElementById("listadia");
            let dia = selectdia.options[selectdia.selectedIndex].value
            let selectmes = document.getElementById("listames");
            let mes = selectmes.options[selectmes.selectedIndex].value
            let selectyear = document.getElementById("listaAño");
            let year = selectyear.options[selectyear.selectedIndex].value
            let fecha_consulta = `${dia}/${mes}/${year}`;
            ventas.forEach(function(venta) {
            if(fecha_consulta == venta.fecha_venta){
            
            var strproductos = "";    
            var fila = tablap.insertRow(-1);
            var fecha_venta = fila.insertCell(0);
            var productos = fila.insertCell(1);
            var cantidad_venta = fila.insertCell(2);
            var monto = fila.insertCell(3);
            fecha_venta.innerHTML = venta.fecha_venta;

//
            venta.productos.forEach(function(producto) {
                
            strproductos += `${producto.cantidad_venta} ${producto.nombre_del_producto} ` ;
                
            });
//
            productos.innerHTML = strproductos;
            cantidad_venta.innerHTML = venta.cantidad_venta;
            monto.innerHTML = "$"+parseFloat(venta.monto_total);
            total_ventas += parseInt(venta.monto_total);
            cantidad_total += parseInt(venta.cantidad_venta);

        }});
        let txtmonto = document.getElementById('txtmonto');
        txtmonto.innerText=`Cantitdad total: ${cantidad_total} Monto total : $${total_ventas}`;

        }else{
            alert(datosjson.msg);
            window.location.href="/login";
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });
 
 


}
}