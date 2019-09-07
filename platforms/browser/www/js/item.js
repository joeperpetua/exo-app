window.onload = function(){
    traerLista();
};



var req = new XMLHttpRequest();
var url = 'http://localhost/e-commerce/api/producto.php'+window.location.search;

   
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
    
    var lista = '';
    var $mostrar = document.getElementById('item');
    
    resp.forEach(function(elemento, index){
        id = elemento.id_product;
        lista += '<div class="card mb-4 shadow-sm margin">'
                
                    +'<div class="card-body">'
                        +'<img src="' + elemento.disp_pic + '" alt="miniatura de '+ elemento.cpu_brand + ' ' + elemento.cpu_model +'" class="thumbnail">'
                        +'<h4 class="my-0 font-weight-normal">'+ elemento.disp_brand + ' ' + elemento.disp_model + '</h4>'
                        +'<h1 class="card-title pricing-card-title">$'+ elemento.product_price +'</h1>'
                        +'<button type="button" class="btn btn-lg btn-block btn-primary comprar" value="' + id + '">Comprar</button>'
                        +'<button type="button" class="btn btn-lg btn-block btn-primary fav" value="' + id + '">Añadir a Favoritos</button>'
                        
                        +'<details class="my-0 font-weight-normal mainDetails">'
                            +'<summary class="mainSub">Especificaciones Tecnicas</summary>'
                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Datos del dispositivo</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Unidades de procesamiento</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Pantalla</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Memoria</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Bateria</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Conectividad</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Camaras</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Extras</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                                +'<li>' + elemento.a + '</li>'
                            +'</ul>'
                        +'</details>'
                        
                        
                    +'</div>'
                +'</div>';
    });

    $mostrar.innerHTML = lista; 
    enlazarBotones();
}

function enlazarBotones(){
    var $mostrar = document.querySelector('#item');
    
    $mostrar.addEventListener('click', function (event) {
        let boton = event.target;

        if (boton.classList.contains("comprar")){
            window.open('http://localhost:3000/pago.html?id_product='+boton.value, "_self");
        }

        if (boton.classList.contains("fav")){ 
            alert("El producto se añadió como favorito!");
        }

    }, false);

}



