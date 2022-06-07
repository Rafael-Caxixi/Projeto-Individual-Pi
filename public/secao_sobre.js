function sair_cadastro() {
    sessionStorage.clear()
    alert("Volte sempre")
    window.location = "index.html"
}



/* Funcao carrossel */

var check = ""
var radio1 = document.getElementById("radio1")
let count = 1;
var rodagem = 0
setInterval(function () {
    nextImage();
}, 3000)

function nextImage() {
    if (rodagem == 0) {

        count++
        if (count == 4) {
            rodagem = 1
            count--
        }

    }
    if (rodagem == 1) {
        count--
        if (count == 0) {
            rodagem = 0
            count++
            count++
        }
    }
   document.getElementById("radio" + count).checked = true  
    check = document.getElementById("radio" + count).checked  
    if (count == 3) {
        document.getElementById("label" + count).style.backgroundColor = "white"
        document.getElementById("label" + 2).style.backgroundColor = "transparent"
        document.getElementById("label" + 1).style.backgroundColor = "transparent"
    }
   else if (count == 2) {
        document.getElementById("label" + count).style.backgroundColor = "white"
        document.getElementById("label" + 3).style.backgroundColor = "transparent"
        document.getElementById("label" + 1).style.backgroundColor = "transparent"
    }
   else if (count == 1) {
        document.getElementById("label" + count).style.backgroundColor = "white"
        document.getElementById("label" + 2).style.backgroundColor = "transparent"
        document.getElementById("label" + 3).style.backgroundColor = "transparent"
    }


   

}   
/* Fim Funcao carrossel */
/* 
function validarSessao() {
    // aguardar();

    console.log("Chamei validar sessao")
    var nome = sessionStorage.NOME_USUARIO;
    var pick_perso = sessionStorage.imagem_arthur_carrosel

    var nome_usuario = document.getElementById("nome_usuario");
    var nome_personagem_votado = document.getElementById("nome_personagem_votado")
    span_personagem_votado.innerHTML = pick_perso


    nome_usuario.innerHTML = nome;
} */

var slide_1 = document.getElementById("img1")
var slide_2 = document.getElementById("img2")
var slide_3 = document.getElementById("img3")




fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.EMAIL_USUARIO = json.email_usuario;
            sessionStorage.NOME_USUARIO = json.nome_usuario;
            sessionStorage.ID_USUARIO = json.id_usuario;


            setTimeout(function () {
                window.location = "secao_sobre.html";
            }, 1000); // apenas para exibir o loading

        });

    } else {

        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

/* Escolha perso */

function escolher_perso(num) {

    var id_usuario = sessionStorage.ID_USUARIO

    fetch(`/usuarios/escolher_perso`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idPersonagemServer: num,
            idUsuarioServer: id_usuario
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO escolher_perso()!")

        console.log("resposta: ", resposta)

        

        if (resposta.ok) {
            console.log(resposta);

           
            
            alert('Personagem atualizado')
            if(num == 1){
                sessionStorage.NOME_PERSONAGEM = "Arthur Shelby" 
            }
            else if(num == 2){
                sessionStorage.NOME_PERSONAGEM = "Thomas Shelby" 
            }
           else if(num == 3){
                sessionStorage.NOME_PERSONAGEM = "John Shelby" 
            }
           else if(num == 4){
                sessionStorage.NOME_PERSONAGEM = "Finn Shelby" 
            }
           else if(num == 5){
                sessionStorage.NOME_PERSONAGEM = "Polly Shelby" 
            }
           else if(num == 6){
                sessionStorage.NOME_PERSONAGEM = "Ada Shelby" 
            }
           else if(num == 7){
                sessionStorage.NOME_PERSONAGEM = "Alfie Solomons" 
            }
           else if(num == 8){
                sessionStorage.NOME_PERSONAGEM = "Michael Shelby" 
            }
            else if(num == 9){
                sessionStorage.NOME_PERSONAGEM = "Lizzie Shelby" 
            }
            window.location.reload();


            

        } else {
            throw("Houve um erro ao trocar voto perso!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

   
