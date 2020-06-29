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
        //alert("Usuario Identificado");
        document.getElementById("resposta").innerHTML = "";
        resp.json().then(res => efetivarLogin(res));
    }
    else if(resp.status == 404){
        //alert("Usuario não foi encontrado em nossa base");
        document.getElementById("resposta").innerHTML = "<h3>Usuário não encontrado</h3>";
    }
    else{
        //alert("Senha invalida");
        document.getElementById("resposta").innerHTML = "<h3>Senha Inválida</h3>"
    }
}

function efetivarLogin(res){
    localStorage.setItem("userDash",JSON.stringify(res));
    window.location="home.html";
}