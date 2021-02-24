
//Verificação dos campos do Formulario
function require(infoDev) {
    if (infoDev.name.value === "" || infoDev.name.value === null ||
        infoDev.name.lenght < 8) {
        alert("Preencha o campo 'Nome'")
        infoDev.name.focus(); //Paradeixar o campo destacado
        return false;
        //Verificação do nome digitado
    }
    if (infoDev.email.value.indexOf("@") == -1 ||
        infoDev.email.value.indexOf(".") == -1 ||
        infoDev.email.value === "" ||
        infoDev.email.value == null) {
        alert("Preencha o campo 'E-mail'")
        infoDev.name.focus();//Paradeixar o campo destacado
        return false;
        //Verificação do E-mail
    }
    
    if (infoDev.job.value === "") {
        alert("Escolha uma 'Atividade'")
        return false;
        infoDev.job.focus();//Paradeixar o campo destacado
        //Verificação do job
    }
    return true; 
   
}
//Para recarregar a pagina 
function recharge() {
    window.location.reload();
    return true;
}







