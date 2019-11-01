window.onload = function(){
    traerLista();
};

//GET
var req = new XMLHttpRequest();
var url = 'http://exophone.000webhostapp.com/api/producto.php'+window.location.search;
req.open("GET",url,true);

//POST
// var reqPOST = new XMLHttpRequest();
// var urlPOST = 'http://exophone.000webhostapp.com/api/producto.php';
// var params = '&name=';
// reqPOST.open("POST",urlPOST,true);
// reqPOST.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');



//GET
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


var order_subtotal;

function crearLista(resp){
    
    var lista = '';
    var $mostrar = document.getElementById('resumen');
    var order_cant;
    resp.forEach(function(elemento, index){
        id = elemento.id_product;
        order_subtotal = elemento.product_price;

        order_cant = document.createElement('input');
        order_cant.setAttribute('type', 'number');
        order_cant.setAttribute('min', '1');
        order_cant.setAttribute('value', '1');
        order_cant.setAttribute('class', 'form-control inp');
        order_cant.setAttribute('id', 'order_cant');
        var cant = document.createTextNode(elemento.product_price);
        order_cant.appendChild(cant);
        
        
        lista += '<img src="' + elemento.disp_pic + '" width="100px" alt="miniatura de '+ elemento.cpu_brand + ' ' + elemento.cpu_model +'" >' 
                        +'<h4>'+ elemento.disp_brand + ' ' + elemento.disp_model + '</h4>'
                        + '<h1>' + elemento.product_price + '<h1>';
        
    });

    $mostrar.innerHTML = lista; 
    $mostrar.appendChild(order_cant);
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










//POST
// formDos


let $formulario = document.querySelector('#formulario'),
    $order_name = document.querySelector('#formulario #order_name'),
    $order_surname = document.querySelector('#formulario #order_surname'),
    $order_tel = document.querySelector('#formulario #order_tel'),
    $order_mail = document.querySelector('#formulario #order_mail'),
    $formMsg = document.querySelector('#formulario .formMsg');
    
    

    $formulario.onsubmit = function(evento){
    evento.preventDefault();
    
    let formularioEsValido = false;

    let parametros = {
        order_name: $order_name.value,
        order_surname: $order_surname.value,
        order_tel: $order_tel.value,
        order_mail: $order_mail.value,
        order_subtotal: parseInt(order_subtotal),
        order_cant: parseInt(order_cant.value),
        id_prod: id
    };
    console.log(parametros);
    
    formularioEsValido = parametros.order_name && parametros.order_surname && parametros.order_tel && parametros.order_mail;

    if (formularioEsValido)
    {
        let request = new XMLHttpRequest();
        let url = 'http://exophone.000webhostapp.com/api/producto.php';
        request.open('POST', url, true);// configuro mi request para que sea tipo POST
        // Este header es necesario para comunicar al servidor dónde son enviados los parámetros
        // application/json : los parámetros se enviaran a través del body del request
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function(){
            if(request.status==200 && request.readyState==4){
                    let respuestaDelServidor = JSON.parse(request.responseText);
                    if (respuestaDelServidor.response === 'ok')
                    {
                        $formMsg.innerText = 'El producto ha sido comprado';
                        $formulario.reset();
                    } else {
                        $formMsg.innerText = 'Verificar los datos ingresados ' + request.status + ' / ' + request.readyState + ' / ' + request.responseText;
                    }
                    
            }
        };
        // la función JSON.stringify() transforma una variable tipo object a un string con formato Json
        request.send(JSON.stringify(parametros));
    } else {
        alert('complete los datos faltantes');
    }

};
// fin formDos
