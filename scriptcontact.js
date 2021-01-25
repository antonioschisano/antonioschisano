function verificaEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function controlloForm() {
  var nome = document.forms["formmail"]["nome"].value;
  var email = document.forms["formmail"]["email"].value;
  var tel = document.forms["formmail"]["tel"].value;
  var msg = document.forms["formmail"]["msg"].value;

  if (nome == "" || email == "" || msg == "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori!");
    return false;
  }
  else if (verificaEmail(email) !== true) {
    alert("L'indirizzo email non sembra corretto!");
    return false;  
  }else{
    return true;
  }
}