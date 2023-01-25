//variables
const botonusuario = document.querySelector('#generaruser');
const foto = document.getElementById('Imgportrait');
const dirmail= document.getElementById('idcorreo');
const numerotel = document.getElementById('idnumero');
const direccion = document.getElementById('iddireccion');
const fecha = document.getElementById('idfecha');
const Nombre = document.getElementById('nombreid');
const Apellido = document.getElementById('apellidoid');
const Pais = document.getElementById ('idpais');
const Country = document.getElementById('idcoutry');
//funciones
    const generarusuario= async ()=>{ 
        try {
            const url = 'https://randomuser.me/api/';
            const respuesta1 = await fetch(url);
            const {results} = await respuesta1.json();
            const datos = results [0];
            console.log(datos);
            foto.src = datos.picture.large;
            Nombre.textContent = datos.name.first;
            dirmail.textContent = datos.email;
            numerotel.textContent = datos.phone;
            direccion.textContent = datos.location.street.number;
            fecha.textContent = new Date(datos.dob.date).toLocaleDateString("en-US");
            Apellido.textContent = datos.name.last;
            Pais.textContent = datos.location.street.name;
            Country.textContent = datos.location.country;
        } catch (error) {
            console.log(error)
        }
    }  
    


    function showmail (){
        document.getElementById("infocontacto").innerHTML = dirmail.textContent;
      }
      document.getElementById("mailbutton").onclick = function (){
        showmail();
      }
   
      function showphone (){
        document.getElementById("infocontacto").innerHTML = numerotel.textContent;
      }
      document.getElementById("phonebutton").onclick = function (){
        showphone();
      }

      function showaddress (){
        document.getElementById("infocontacto").innerHTML = direccion.textContent+" "+Pais.textContent;
      }
      document.getElementById("addressbutton").onclick = function (){
        showaddress();
      }
   
      function showdate (){
        document.getElementById("infocontacto").innerHTML = fecha.textContent;
      }
      document.getElementById("datebutton").onclick = function (){
        showdate();
      }

      function hidetxt (){
        document.getElementById("infocontacto").innerHTML = "Presione algún botón";
      }
      document.getElementById("generaruser").onclick = function (){
        hidetxt();
      }

botonusuario.addEventListener('click',generarusuario);
document.addEventListener('DOMContentLoaded',generarusuario)