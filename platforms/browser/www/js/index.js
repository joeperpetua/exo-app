var req = new XMLHttpRequest();
var url = 'http://localhost/e-commerce/api/producto.php';
req.open("GET",url,true);
var $lista = document.getElementById('prod');

function traerLista(){
    req.onreadystatechange = function(){
       if(req.status==200 && req.readyState==4){
            var respuesta = JSON.parse(req.responseText);
            console.log(respuesta);
            crearLista(respuesta.response);
       }
    };
    req.send(null);
}


function crearLista(resp){
    
    var lista = '';
    var $mostrar = document.getElementById('prod');
    
    resp.forEach(function(elemento, index){
        lista += '<label>'+ elemento.id_product +'</label><br>'
                +'<label>'+ elemento.disp_brand +'</label><br>' 
                +'<label>'+ elemento.disp_model +'</label><br>';
    });

    $mostrar.innerHTML = lista; 
}



window.onload = function(){
    traerLista();
};

















   

