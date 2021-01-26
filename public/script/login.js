
function logar(){
    let email = document.getElementById('email').value();
    let password = document.getElementById('password').value();

    if(email.value == 'johnnymoreira91@hotmail.com' || password.value == '1234'){
        window.location = "/task";
    }else{
        alert('Dados incorretos')
    }

}