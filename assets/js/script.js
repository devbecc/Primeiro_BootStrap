
   let nome = window.document.getElementById('nome')  /* criando variavel/ pegando o nome pelo id*/
   let email= document.querySelector('#email')
   let assunto = document.querySelector('#assunto')
   let nomeOk =false
   let emailOk =false
   let assuntoOk =false


function validaNome () {

    let txtNome= document.querySelector('#txtNome')
    if (nome.value.length <3) {
        txtNome.innerHTML='Nome inválido!'
        txtNome.style.color='red'
       
    } else {

        txtNome.innerHTML='Nome Válido '
        txtNome.style.color='green'
        nomeOk= true
     }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ /* Se o valor não tiver @ ele informa -1, do contrário retorna 1*/
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color='red'
}
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color='green'
        emailOk= true

    }
}
 
    function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
  if(assunto.value.length >=100){

      txtAssunto.innerHTML='Texto grande'
      txtAssunto.style.color='red'
      txtAssunto.style.display='block'

   }
    
    else {
          
        txtAssunto.style.display='none'
        assuntoOk= true
    }
}


function  enviar(){

    if (nomeOk==true && emailOk == true && assuntoOk ==true){

    alert('Formulário enviado com sucesso!')
    }

    else {
        
        alert('Preencha corretamente o formulário!')
    }



}