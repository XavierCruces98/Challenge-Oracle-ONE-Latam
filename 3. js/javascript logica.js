"use strict"
const HTML_textArea = document.querySelector("#textarea-1")
const HTML_botonEncriptar= document.querySelector(".btn-encriptar")
const HTML_botonDesencriptar = document.querySelector(".btn-desencriptar")

const HTML_mensaje = document.querySelector(".mostrar-texto")
const regex = /^([\s?]*[a-z]+[\s?]*)+$/ 

const evaluar_text = function(){
  if( !regex.test(HTML_textArea.value) ){
    HTML_mensaje.innerHTML=`<img src="1. imagenes/Muñeco.png" id="foto-2">
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desea encriptar o desencriptar.</p>`  

    HTML_mensaje.classList.add("sin-resultado")
    return true
  }
  else {
    HTML_mensaje.classList.remove("sin-resultado")
    return false
  }
  
}

///////////////////

const crear_boton_copiar= function(){
  const HTML_copiar = document.querySelector(".btn-copiar")
  const  HTML_textoAcopiar = document.querySelector("#textarea-2").textContent;

  HTML_copiar.addEventListener("click", function(){
    // console.log(`Texto que recien vamos a copiar ===_`, HTML_textoAcopiar,"_");
    const elemento_oculto = document.createElement("textarea"); //"textarea" nos permite copiar con todo y salto de linea
    elemento_oculto.innerHTML= HTML_textoAcopiar
    document.body.appendChild(elemento_oculto)
    elemento_oculto.select()
    document.execCommand("copy") //es normal que salga asi "--"
    document.body.removeChild(elemento_oculto)
  })
}
//////////////////

HTML_botonEncriptar.addEventListener("click", ()=>{
  if(evaluar_text()) return;
 
  const texto_encriptado=[]
  const texto = HTML_textArea.value

  for(let variable of [...texto]){

    if(variable==="e")      texto_encriptado.push("enter")
    else if(variable==="i") texto_encriptado.push("imes")
    else if(variable==="a") texto_encriptado.push("ai")
    else if(variable==="o") texto_encriptado.push("ober")
    else if(variable==="u") texto_encriptado.push("ufat")
    else { texto_encriptado.push(variable)}
  }

  HTML_mensaje.innerHTML=`
  <textarea class="informacion-encriptado" id="textarea-2" readonly>${texto_encriptado.join("")}</textarea>
    <div class="btn-copiar-contenedor">
      <button class="btn-copiar">Copiar</button>
    </div>`

  crear_boton_copiar()
})

HTML_botonDesencriptar.addEventListener("click", ()=>{
  if(evaluar_text()) return;
  const texto_desencriptado=[]
  const texto = HTML_textArea.value
  .replace(/enter/g, "1")
  .replace(/imes/g, "2")
  .replace(/ai/g, "3")
  .replace(/ober/g, "4")
  .replace(/ufat/g, "5")

  for(let variable of [...texto]){

    if(variable==="1")      texto_desencriptado.push("e")
    else if(variable==="2") texto_desencriptado.push("i")
    else if(variable==="3") texto_desencriptado.push("a")
    else if(variable==="4") texto_desencriptado.push("o")    
    else if(variable==="5") texto_desencriptado.push("u")
    else { texto_desencriptado.push(variable)}
  }

  HTML_mensaje.innerHTML=`
  <textarea class="informacion-encriptado" id="textarea-2" readonly>${texto_desencriptado.join("")}</textarea>
    <div class="btn-copiar-contenedor">
      <button class="btn-copiar">Copiar</button>
    </div>`

  crear_boton_copiar()

})





