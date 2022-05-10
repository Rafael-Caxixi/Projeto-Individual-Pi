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
        alert("É obrigatório pelo menos 8 caracteres na senha")
    }
    else if(var_confirmar_senha != var_senha) {
        alert("Senhas diferentes")
    }
    else {
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
