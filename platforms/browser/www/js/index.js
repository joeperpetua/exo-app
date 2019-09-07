

var req = new XMLHttpRequest();
var url = 'http://localhost/e-commerce/api/producto.php';
req.open("GET",url,true);


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
    var $mostrar = document.getElementById('card');
    
    resp.forEach(function(elemento, index){
        id = elemento.id_product;
        lista += '<div class="card mb-4 shadow-sm">'
                    +'<div class="card-header">' 
                        +'<h4 class="my-0 font-weight-normal">'+ elemento.disp_brand + ' ' + elemento.disp_model + '</h4>'
                    +'</div>'
                    +'<div class="card-body">'
                        +'<img src="' + elemento.disp_pic + '" alt="miniatura de '+ elemento.cpu_brand + ' ' + elemento.cpu_model +'" class="thumbnail">'
                        +'<h1 class="card-title pricing-card-title">$'+ elemento.product_price +'</h1>'
                        +'<ul class="list-unstyled mt-3 mb-4">'
                            +'<li>CPU: '+ elemento.cpu_brand + ' ' + elemento.cpu_model +'</li>'
                            +'<li>Memoria: '+ elemento.ram_size + 'GB/' + elemento.rom_size +'GB</li>'
                            +'<li>Bateria: '+ elemento.battery_capacity +'mAh</li>'
                            +'<li>Categoria: '+ elemento.cat +'</li>'
                        +'</ul>'
                        +'<button type="button" class="btn btn-lg btn-block btn-primary verMas" value="' + id + '">Ver más</button>'
                    +'</div>'
                +'</div>';
    });

    $mostrar.innerHTML = lista; 
    enlazarBotones();
}



window.onload = function(){
    traerLista();
};


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

function enlazarBotones(){
    var $mostrar = document.querySelector('#card');
    
    $mostrar.addEventListener('click', function (event) {
        let boton = event.target;

        if (boton.classList.contains("comprar")){
            window.open('http://localhost:3000/pago.html?id_product='+boton.value, "_self");
        }

        if (boton.classList.contains("verMas")){ 
            window.open('http://localhost:3000/item.html?id_product='+boton.value, "_self");
        }

    }, false);

}














   

