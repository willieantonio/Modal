function require(infoDev){
    if(infoDev.name.value === "" ||infoDev.name.value === null ||
     infoDev.name.lenght < 8){
        alert("Preencha o campo Nome")
        infoDev.name.focus();
        return false;
        //Verificação do nome digitado
    }
    if(infoDev.name.value.indexOf("@") == -1||
       infoDev.name.value.indexOf(".") == -1||
       infoDev.email.value === "" ||
       infoDev.email.value == null){
        alert("Preencha o campo E-mail")
        infoDev.name.focus();
        return false;
        //Verificação do E-mail
    }
    if(job === null){
        alert("Escolha um Item")
        return false;
        //Verificação do job
    }
}


//Função para enviar os dados
function Enviar() {    
        alert("Dados enviados com sucesso")
        return true;
}

