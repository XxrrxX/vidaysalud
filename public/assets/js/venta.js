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

function registro_venta(){
var datosF = "";
datosF = validar('np','lblnp','nombe producto',datosF);
datosF = validar('cant','lblcant','cantidad',datosF);

let select = document.getElementById("np");
let np = select.options[select.selectedIndex].value
let cantidad = document.getElementById("cant").value;

let productos = JSON.parse(localStorage.getItem('productos'));
let inventario ;
let precio_venta;

if(datosF.length > 0){
    alert(`Faltan los siguientes datos: \n ${datosF}`);
}else{
for (let i = 0; i < productos.length; i++) {
  if(productos[i].nombre_del_producto == np){
    inventario = productos[i].cantidad;
    precio_venta =  productos[i].Precio_venta
  }
}

if(cantidad == 0){
    alert("No se pude ingresar un valor 0 en la cantidad a vender");
}else{
if(inventario < cantidad && inventario != 0){
    let dif = cantidad - inventario;
    alert(`Stock insuficiente: \n Inventario: ${inventario} \n Cantidad venta: ${cantidad} \n Diferencia: ${dif} `)
}else{

if(inventario != 0){
    let tablap = document.getElementById("tablap");
    let monto = parseInt(cantidad) * parseInt(precio_venta);
    let fechaActual = new Date();
if(!localStorage.getItem('listaproductos')){
    var fila = tablap.insertRow(-1);
    var nombre_tabla = fila.insertCell(0);
    var cantidad_venta_tabla = fila.insertCell(1);
    var precio_venta_tabla = fila.insertCell(2);
    var monto_tabla = fila.insertCell(3);
    let listajson = [{nombre_del_producto:np,cantidad_venta:cantidad,monto:monto}];
    localStorage.setItem('listaproductos',JSON.stringify(listajson));
    nombre_tabla.innerHTML = np;
    cantidad_venta_tabla.innerHTML = cantidad;
    precio_venta_tabla.innerHTML = "$"+parseFloat(precio_venta);
    monto_tabla.innerHTML = "$"+parseFloat(monto);
    let cv = 0;
    listajson = JSON.parse(localStorage.getItem('listaproductos'));
    console.log(JSON.stringify(listajson));
}else{
    let cv = 0;
    let conf = 0;
    listajson = JSON.parse(localStorage.getItem('listaproductos'));
    for (let i = 0; i < listajson.length; i++) {
        if(listajson[i].nombre_del_producto == np){
            conf = 1;
            cv =  cv + parseInt(listajson[i].cantidad_venta) + parseInt(cantidad);
            listajson[i].cantidad_venta=cv;
            listajson[i].monto=cv * parseInt(listajson[i].monto);
            localStorage.setItem('listaproductos',JSON.stringify(listajson));
            
            if(inventario < listajson[i].cantidad_venta && inventario != 0){
                let dif = listajson[i].cantidad_venta - inventario;
                alert(`Stock insuficiente: \n Inventario: ${inventario} \n Cantidad venta: ${listajson[i].cantidad_venta} \n Direrencia: ${dif} `);
                listajson[i].cantidad_venta= parseInt(listajson[i].cantidad_venta) - parseInt(cantidad) ;
                listajson[i].monto= parseInt(listajson[i].cantidad_venta) * parseInt(precio_venta);
                localStorage.setItem('listaproductos',JSON.stringify(listajson));
                console.log(JSON.stringify(listajson));
            }else{
                var fila = tablap.insertRow(-1);
                var nombre_tabla = fila.insertCell(0);
                var cantidad_venta_tabla = fila.insertCell(1);
                var precio_venta_tabla = fila.insertCell(2);
                var monto_tabla = fila.insertCell(3);
               nombre_tabla.innerHTML = np;
               cantidad_venta_tabla.innerHTML = cantidad;
               precio_venta_tabla.innerHTML = "$"+parseFloat(precio_venta);
               monto_tabla.innerHTML = "$"+parseFloat(monto);
            }

        }
        
    }
        if(conf == 0){
        let prodV = {nombre_del_producto:np,cantidad_venta:cantidad,monto:monto};
        let listajson = JSON.parse(localStorage.getItem('listaproductos'));
        listajson.push(prodV);
        localStorage.setItem('listaproductos',JSON.stringify(listajson));
        console.log(JSON.stringify(listajson));
        var fila = tablap.insertRow(-1);
                var nombre_tabla = fila.insertCell(0);
                var cantidad_venta_tabla = fila.insertCell(1);
                var precio_venta_tabla = fila.insertCell(2);
                var monto_tabla = fila.insertCell(3);
               nombre_tabla.innerHTML = np;
               cantidad_venta_tabla.innerHTML = cantidad;
               precio_venta_tabla.innerHTML = "$"+parseFloat(precio_venta);
               monto_tabla.innerHTML = "$"+parseFloat(monto);
        }
            
       

}
listajson = JSON.parse(localStorage.getItem('listaproductos'));
let monto_total = 0;
let cant_total = 0;

for (let i = 0; i < listajson.length; i++) {
    monto_total += parseInt(listajson[i].monto);
    cant_total += parseInt(listajson[i].cantidad_venta);
}
let venta = {fecha_venta:fechaActual.toLocaleDateString(),productos:JSON.parse(localStorage.getItem('listaproductos')),cantidad_venta:cantidad,monto_total:monto_total,cantidad_venta:cant_total,usuario:JSON.parse(localStorage.getItem('AuthVS')).usuario};
console.log(JSON.stringify(venta))
let txtmonto = document.getElementById('txtmonto');
txtmonto.innerText=`Cantitdad total: ${cant_total} Monto total : $${monto_total}`;
localStorage.removeItem('venta');
document.getElementById('frmP').reset();
localStorage.setItem('venta',JSON.stringify(venta));


}else{
    alert(`No tenemos existencias en el inventario de ${np}`)
}
}

}
}
}

function generar_venta(){
if(localStorage.getItem('venta')){
    let pago_cliente = prompt("Con cuanto paga el cliente?: ");
    let monto_total = parseInt(JSON.parse(localStorage.getItem('venta')).monto_total);
    let cambio = pago_cliente - monto_total;
    let venta = JSON.parse(localStorage.getItem('venta'));
    alert(`Pago del cliente: $${pago_cliente} \n Monto total de compra: $${monto_total} \n Cambio: $${cambio}`);


   fetch('/Punto_de_venta', {
       method: 'PUT',
       headers: {
       'Content-Type': 'application/json' // Tipo de contenido
       },
       body: JSON.stringify(venta) // Datos a enviar
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
    
   
       }else{
           alert(datosjson.msg);
           window.location.href="/punto_de_venta";
       }
   
   })
   .catch(error => {
       console.error('Error:', error);
   });
}else{
    alert("No se a capturado nada en el carrito de compras");
}
  
}