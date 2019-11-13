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
                                +'<li>Codigo de modelo: ' + elemento.disp_code + '</li>'
                                +'<li>S.O: ' + elemento.disp_so + ' ' + elemento.disp_so_version + '</li>'
                                +'<li>Color: ' + elemento.disp_color + '</li>'
                                +'<li>Anio: ' + elemento.disp_year + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Unidades de procesamiento</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>CPU: ' + elemento.cpu_brand + ' ' + elemento.cpu_model + '</li>'
                                +'<li>Nucleos: ' + elemento.cpu_cores + '</li>'
                                +'<li>GPU: ' + elemento.gpu_brand + ' ' + elemento.gpu_model + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Pantalla</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>Tamanio: ' + elemento.screen_size + '"</li>'
                                +'<li>Resolucion: ' + elemento.screen_reso + '</li>'
                                +'<li>Tipo: ' + elemento.screen_type + '</li>'
                                +'<li>Relacion aspecto: ' + elemento.screen_aspect_ratio + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Memoria</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>Ram: ' + elemento.ram_size + 'GB</li>'
                                +'<li>Rom: ' + elemento.rom_size + 'GB</li>'
                                +'<li>SD (max): ' + elemento.sd_size + 'GB</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Bateria</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>Tipo: ' + elemento.battery_type + '</li>'
                                +'<li>Capacidad: ' + elemento.battery_capacity + 'mAh</li>'
                                +'<li>Carga rapida: ' + elemento.battery_qc + '</li>'
                                +'<li>Carga inalambrica: ' + elemento.battery_wc + '</li>'
                            +'</ul>'

                            
                            +'<ul class="list-unstyled mt-3 mb-4 tit">'
                                +'<li>Conectividad</li>'
                            +'</ul>'
                            +'<ul class="mt-3 mb-4 list">'
                                +'<li>Tipo SIM: ' + elemento.sim_type + '</li>'
                                +'<li>Tipo USB: ' + elemento.usb_type + '</li>'
                                +'<li>NFC: ' + elemento.has_nfc + '</li>'
                                +'<li>IRC: ' + elemento.has_irc + '</li>'
                                +'<li>LTE: ' + elemento.has_lte + '</li>'
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
                                +'<li>Lector dactilar: ' + elemento.fingerprint_type + '</li>'
                                +'<li>Audio: ' + elemento.speaker_type + '</li>'
                                +'<li>Resistencia al agua: ' + elemento.water_resistant_grade + '</li>'
                                +'<li>Jack 3.5mm: ' + elemento.has_headphone_jack + '</li>'
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
            window.open('pago.html?id_product='+boton.value, "_self");
        }

        if (boton.classList.contains("fav")){ 
            alert("El producto se añadió como favorito!");
        }

    }, false);

}



