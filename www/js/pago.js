window.onload = function(){
    traerLista();
};


var req = new XMLHttpRequest();
var url = 'http://exophone.000webhostapp.com/api/producto.php'+window.location.search;

   
req.open("GET",url,true);


function traerLista(){
    req.onreadystatechange = function(){
       if(req.status==200 && req.readyState==4){
            var respuesta = JSON.parse(req.responseText);
            console.log(respuesta.response);
            crearLista(respuesta.response);
       }
    };
    req.send(null);
}

function crearLista(resp){
    var disp;
    var price;
    var lista = '';
    var $mostrar = document.getElementById('resumen');
    
    resp.forEach(function(elemento, index){
        id = elemento.id_product;
        lista += '<img src="' + elemento.disp_pic + '" width="100px" alt="miniatura de '+ elemento.cpu_brand + ' ' + elemento.cpu_model +'" >' 
                        +'<h4>'+ elemento.disp_brand + ' ' + elemento.disp_model + '</h4>'
                   +'<h1>$'+ elemento.product_price +'</h1>'
                    +'<input type="number" class="form-control" placeholder="Cantidad">';
        disp = elemento.disp_brand + ' ' + elemento.disp_model;
        price = elemento.product_price;
    });

    $mostrar.innerHTML = lista; 
    
}

function processOrder(){
    alert("Confirmar su compra?");
    window.open("/index.html");
}

function menu() {
    var $button = document.getElementById('menuButton');
    var $state = document.getElementById('navbarCollapse').className;
    if ($state === 'collapse') {
        document.getElementById('navbarCollapse').className = 'collapse.show';
    }

    if ($state === 'collapse.show') {
        document.getElementById('navbarCollapse').className = 'collapse';
    }
}