function enviar(){
    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Valores digitados = "+txtEmail+" / "+ txtSenha);

    var msgBody = {
        email: txtEmail,
        senha: txtSenha
    }

    var cabecalho = {
        method : 'POST',
        body   : JSON.stringify(msgBody),
        headers: {
            'Content-type':'application/json'
        }
    }
    fetch("http://localhost:8080/login", cabecalho)
        .then(res=>tratarResultado(res));
}

function tratarResultado(resp){
    if (resp.status == 200){
        alert("Usuario Identificado");
    }
    else if(resp.status == 400){
        alert("Usuario não foi encontrado em nossa base");
    }
    else{
        alert("Senha invalida");
    }
}