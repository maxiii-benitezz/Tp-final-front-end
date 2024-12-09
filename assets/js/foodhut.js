/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }

 function claro() { document.getElementById("claro").style.display = "none";
    document.getElementById("oscuro").style.display = "block";
    document.body.style.backgroundColor="#c4b5b5"; 
    const elementos = document.querySelectorAll('h2, h3, p, a, h6, h4');
    elementos.forEach(function(elemento) {
        elemento.style.color = "#d4002c";
        document.getElementById("rojo").style.color="#d4002c"
        document.getElementById("carta1").style.backgroundColor="white"
        document.getElementById("carta2").style.backgroundColor="white"
        document.getElementById("carta3").style.backgroundColor="white"
         document.getElementById("pills-home-tab").style.backgroundColor="white"
         document.getElementById("rojito1").style.color="#e0758b"
         document.getElementById("rojito2").style.color="#e0758b"
         document.getElementById("rojito3").style.color="#e0758b"
         document.getElementById("rounded-btn").style.color="white"
         document.getElementById("sectionn").style.backgroundColor="#c4b5b5"
         document.getElementById("footer").style.backgroundColor="#c4b5b5"
         document.getElementById("nav").style.backgroundColor="#c4b5b5"
          document.getElementById("paraiso").style.color="white"
        

         
    });

 }
function oscuro() { 
    document.getElementById("claro").style.display = "block";
    document.getElementById("oscuro").style.display = "none";
    document.body.style.backgroundColor="#343a40"; 
    const elementos = document.querySelectorAll('h2, h3, p, a, h6, h4');
    elementos.forEach(function(elemento) {
        elemento.style.color = "#f8f9fa";
        document.getElementById("rojo").style.color="#f8f9fa"
        document.getElementById("carta1").style.backgroundColor="#ff214f"
        document.getElementById("carta2").style.backgroundColor="#ff214f"
        document.getElementById("carta3").style.backgroundColor="#ff214f"
         document.getElementById("pills-home-tab").style.backgroundColor=""
         document.getElementById("rojito1").style.color="white"
         document.getElementById("rojito2").style.color="white"
         document.getElementById("rojito3").style.color="white"
         document.getElementById("blog").style.color="#ff214f"
         document.getElementById("sectionn").style.backgroundColor="#343a40"
         document.getElementById("nav").style.backgroundColor="#343a40"
         document.getElementById("footer").style.backgroundColor="#343a40"
         document.getElementById("book-table").style.backgroundColor="#343a40"
    
        
       
        

         
    });

 }





function persona1() {alert ("Nombre: Máximo Benítez\n" +
        "Correo: maximo.benitez@webdesignpro.com\n" +
        "Rol: Diseñador Web\n" +
        "Responsabilidad: Coordinar el diseño gráfico y la estructura visual del sitio web, asegurando que la estética del proyecto esté alineada con los objetivos del cliente."
    );
}
function persona2() {alert("Nombre: Emiliano Benítez\n" +
        "Correo: emiliano.benitez@webguidesolutions.com\n" +
        "Rol: Guiador de Visitas\n" +
        "Responsabilidad: Facilitar la interacción de los usuarios con el sitio web, proporcionando orientación clara y optimizando la experiencia de navegación."
    );
}
function persona3() {alert("Nombre: Lorenzo Benítez\n" +
        "Correo: lorenzo.benitez@financeplanner.com\n" +
        "Rol: Asesor Financiero\n" +
        "Responsabilidad: Supervisar la estrategia financiera del proyecto, asegurando una asignación eficiente de los recursos y la viabilidad económica a largo plazo."
    );
}
