function login (){
    alert('hello ' + 'your username is ' + document.getElementById("username").value);
}
document.getElementById("login").addEventListener("click",login);