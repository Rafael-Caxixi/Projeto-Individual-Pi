function mostrar_senha() {
    var x = document.getElementById("input_senha");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password"
    }

}

function mostrar_confirmar_senha() {
    var z = document.getElementById("input_confirmar_senha");
    if (z.type === "password") {
        z.type = "text";
    }
    else {
        z.type = "password"
    }

 }  
 
 function mostrar_confirmar_senha_login() {
    var z = document.getElementById("input_senha_login");
    if (z.type === "password") {
        z.type = "text";
    }
    else {
        z.type = "password"
    }

 } 

function funcao_clique_aqui() {
    div_trocar.style.transition = 'opacity 0.5s ease'
    div_trocar.style.opacity = 0
    trocar_p_login.style.display = 'block'
    

    
    setTimeout(function() {
        div_trocar.style.display = 'none'
        caixa_branca_cadastro.style.width = '30%'
        caixa_branca_cadastro.style.marginLeft = '35%'
        
    },200)
    
    setTimeout(function() {
        trocar_p_login.style.transition = 'opacity 1s ease'
        trocar_p_login.style.opacity = 1
        
    },350)
}



 function imagem_voltar_cadastro() {

    div_trocar.style.transition = 'opacity 0.5s ease'
    div_trocar.style.opacity = 1
    trocar_p_login.style.display = 'none'
    

    
    setTimeout(function() {
        div_trocar.style.display = 'block'
        caixa_branca_cadastro.style.width = '50%'
        caixa_branca_cadastro.style.marginLeft = '25%'
        
    },200)
    
    setTimeout(function() {
        trocar_p_login.style.transition = 'opacity 1s ease'
        trocar_p_login.style.opacity = 0
        
    },350)

 }


 function validar_nome() {
    if(input_nome.value.length <= 3) {
        input_nome.style.borderColor = 'red'
    }
    else {
        input_nome.style.borderColor = 'green'
    }
}

function validar_cpf() {
    if(input_cpf.value.length < 11) {
        input_cpf.style.borderColor = 'red'
    }
    else {
        input_cpf.style.borderColor = 'green'
    }
}

function validar_email() {
    if(input_email.value.indexOf("@") < 0) {
        input_email.style.borderColor = 'red'
    }
    else {
        input_email.style.borderColor = 'green'
    }
}

function validar_cep() {
    if(input_cep.value.length < 8) {
        input_cep.style.borderColor = 'red'
    }
    else {
        input_cep.style.borderColor = 'green'
    }
}

function validar_senha() {
    if(input_senha.value.length < 8) {
        input_senha.style.borderColor = 'red'
    }
    
    else {
        input_senha.style.borderColor = 'green'
    }
}

function validar_confirmar_senha() {
    if(input_confirmar_senha.value != input_senha.value) {
        input_confirmar_senha.style.borderColor = 'red'
    }else if(input_confirmar_senha.value == "") {
        input_confirmar_senha.style.borderColor = 'black'
    }
    else {
        input_confirmar_senha.style.borderColor = 'green'
    }
}





 function cadastrar() {
     var var_nome = input_nome.value
     var var_cpf =  input_cpf.value
     var var_email = input_email.value
     var var_cep = input_cep.value
     var var_senha = input_senha.value
     var var_confirmar_senha = input_confirmar_senha.value

    if(var_nome.length <= 3) {
        input_nome.style.borderColor = 'red'
        input_nome.style.borderWidth = '3px'
        alert("Insira nome com mais de 3 caracteres")
    }
    else if(var_cpf.length < 11) {
        input_cpf.style.borderColor = 'red'
        input_cpf.style.borderWidth = '3px'
        alert("Preencha corretamente o CPF")
    }
    else if (var_email.indexOf("@") < 0 ) {
        input_email.style.borderColor = 'red'
        input_email.style.borderWidth = '3px'
        alert("O email precisa de @ ")
    }
    else if (var_cep < 8) {
        input_cep.style.borderColor = 'red'
        input_cep.style.borderWidth = '3px'
        alert("Preencha corretamente o CEP")
    }
    else if (var_senha.length < 8) {
        input_senha.style.borderColor = 'red'
        input_senha.style.borderWidth = '3px'
        alert("É obrigatório pelo menos 8 caracteres na senha")
    }
    else if(var_confirmar_senha != var_senha) {
        input_confirmar_senha.style.borderColor = 'red'
        input_confirmar_senha.style.borderWidth = '3px'
        alert("Senhas diferentes ou incorretas")
    }
    else {
        alert("Seja Bem-vindo")
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: var_nome,
                cpfServer: var_cpf,
                emailServer: var_email,
                cepServer: var_cep,
                senhaServer: var_senha
               

            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                alert("Cadastro efetuado com sucesso")
    
                
    
              
                    funcao_clique_aqui() 
             
                
                
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            
        });
    
        
        
    }

 }


 
 function entrar() {

    var emailVar = input_email_login.value;
    var senhaVar = input_senha_login.value;

    if (emailVar == "" || senhaVar == "") {
       alert("Preencha os campos corretamente")
    }
    else {
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

    }    


}


function validarSessao() {
    // aguardar();

    var nome = sessionStorage.NOME_USUARIO;

    var span_nome_usuario = document.getElementById("span_nome_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        span_nome_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}
