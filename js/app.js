const login = document.getElementById('form-container');
const formCont = document.getElementById('login-container')
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const text_login_register = document.getElementById('login-register-text');
var LoginOrRegister = 1;
async function registerInterface(){
  if (LoginOrRegister == 0){
    alert("você ja está na tela de registrar");
    return;
  }
  login.children[1].remove();
  const newDiv = document.createElement('form');
  formCont.classList.add("login-container-register");
  const inputcompletename = inputcreate("text", "completename", "full-name", "Seu nome completo", "input-text");
  const inputusername = inputcreate("text", "register-username", "username", "Escolha um nome de usuário", "input-text");
  const inputemail = inputcreate("email", "register-email", "register-email", "Seu endereço de e-mail", "input-text");
  const inputpassword = inputcreate("password", "register-password", "register-password", "Escolha uma senha", "input-text");
  const inputpasswordconfirm = inputcreate("password", "confirm-password","confirm-password", "Confirme sua senha", "input-text");
  const labelcompletename = labelCreate("completename", "Nome Completo:");
  const labelusername = labelCreate("username", "Usuário:");
  const labelemail = labelCreate("email", "E-mail:");
  const labelpassword = labelCreate("password", "Senha:");
  const labelpasswordconfirm = labelCreate("passwordconfirm", "Confirmar Senha:");
  const buttonSubmit = buttonCreate("submit", "Registrar", "buttonReg");
  const inputDate = inputcreate("date", "register-date", "register-date", "Escolha uma data");
  const labelDate = labelCreate("date", "Data de Nascimento:");
  buttonSubmit.addEventListener('click', getData);
  newDiv.appendChild(labelcompletename);
  newDiv.appendChild(inputcompletename);
  newDiv.appendChild(labelusername);
  newDiv.appendChild(inputusername);
  newDiv.appendChild(labelemail);
  newDiv.appendChild(inputemail);
  newDiv.appendChild(labelpassword);
  newDiv.appendChild(inputpassword);
  newDiv.appendChild(labelpasswordconfirm);
  newDiv.appendChild(inputpasswordconfirm);
  newDiv.appendChild(labelDate);
  newDiv.appendChild(inputDate);
  newDiv.appendChild(buttonSubmit);
  newDiv.setAttribute("id", "registerForm");
  text_login_register.textContent = 'Registrar-se';
  await sleep(150);
  login.appendChild(newDiv);

  LoginOrRegister = 0;
}
async function loginInterface(){
  if (LoginOrRegister == 1){
    alert("você ja está na tela de login");
    return;
  }
  login.children[1].remove();
  formCont.classList.remove("login-container-register");
  const newDiv = document.createElement('form');
  const inputemail = inputcreate("email", "email", "email", "Seu endereço de e-mail", "input-text", "input-text-animation");
  const inputpassword = inputcreate("password", "password", "password", "Sua senha", "input-text", "input-text-animation");
  const labelemail = labelCreate("email", "E-mail:");
  const labelpassword = labelCreate("password", "Senha:");
  const buttonSubmit = buttonCreate("submit", "Login", "buttonLog");
  newDiv.appendChild(labelemail);
  newDiv.appendChild(inputemail);
  newDiv.appendChild(labelpassword);
  newDiv.appendChild(inputpassword);
  newDiv.appendChild(buttonSubmit);
  newDiv.setAttribute("id", "loginForm");
  login.appendChild(newDiv);
  text_login_register.textContent = 'Login';
  LoginOrRegister = 1;
}

function labelCreate(x, y){
  var labelC = document.createElement('label');
  labelC.setAttribute('for', x);
  labelC.textContent = y;
  return labelC;
}
function inputcreate(tipo, identificador, nome, dica, classe){
  var inputC = document.createElement('input');
  inputC.setAttribute("type", tipo);
  if (classe != null) inputC.classList.add(classe);
  inputC.setAttribute("id", identificador);
  inputC.setAttribute("name", nome);
  inputC.setAttribute("placeholder", dica);
  return inputC;
}
function buttonCreate(tipo, valor, identificador){
  var newButton = document.createElement('input');
  newButton.setAttribute("type", tipo);
  newButton.setAttribute("value", valor);
  newButton.setAttribute("id", identificador);
  return newButton;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}