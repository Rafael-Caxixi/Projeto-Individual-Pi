 function sair_cadastro() {
    sessionStorage.clear()
    alert("Volte sempre")
    window.location = "index.html"
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++
    if(count > 3){
        count = 1
    }
    document.getElementById("radio" + count).checked = true
}



/* 

 
    function imgs() {
        var lista_img1 = "slide first"
      ["url(img/arthur_carrossel.webp)",
        "url(img/thommy_carrossel.webp)",
        "url(img/John_carrossel.webp)"] 

    var lista_img2 = "slide"
   ["urlimg/Finn_carrossel.webp()",
    "url(img/Polly_carrossel.webp)",
    "url(img/Ada_carrossel.webp)"]

    var lista_img3 = "slide"
   ["url(img/Alfie_carrossel.webp)",
    "url(img/Michael_carrossel.webp)",
    "url(img/Lizzie_carrossel.webp)"]

    var posicao = 0
       

            if(posicao == 0){
              
               imagem_arthur_carrosel.style.backgroundImage = lista_img1[posicao]
                imagem_thommy_carrosel.style.backgroundImage = lista_img1[posicao + 1]
                imagem_john_carrosel.style.backgroundImage = lista_img1[posicao + 2]
                posicao++
            }
            else if(posicao == 1) {
                imagem_arthur_carrosel.style.backgroundImage = lista_img2[posicao]
                imagem_thommy_carrosel.style.backgroundImage = lista_img2[posicao + 1]
                imagem_john_carrosel.style.backgroundImage = lista_img2[posicao + 2]
                posicao++
            }
            else {
                imagem_arthur_carrosel.style.backgroundImage = lista_img3[posicao]
                imagem_thommy_carrosel.style.backgroundImage = lista_img3[posicao + 1]
                imagem_john_carrosel.style.backgroundImage = lista_img3[posicao + 2]
                posicao = 0          
            }
        }
     

    
    setInterval(function(){
        imgs();
    },3000)
 */

    function validarSessao() {
        // aguardar();
    
        var nome = sessionStorage.var_nome;
    
        var nome_usuario = document.getElementById("nome_usuario");
    
    
            nome_usuario.innerHTML = nome;
    
            
      
    }
