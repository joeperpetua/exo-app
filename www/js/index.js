var req = new XMLHttpRequest();
var url = 'http://localhost/e-commerce/api/producto.php';
var respuesta=null;
req.open("GET",url,true);

req.onreadystatechange = function(){
    if(req.status==200 && req.readyState==4){
        respuesta=JSON.parse(req.responseText);
        console.log(respuesta);
    }

}
req.send(null);

