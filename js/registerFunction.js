class UserRegister{
  constructor(name, username, email, password, date) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.borndate = date;
  }
  reciveData(data){
    let object = JSON.parse(data);
    this.name = object.name;
    this.username = object.username;
    this.email = object.email;
    this.password = object.password;
    this.borndate = object.borndate;
  }
  showData(){
    console.log(this.name);
    console.log(this.username);
    console.log(this.email);
    console.log(this.borndate);
  }
}


function collectData(){
  let name = document.querySelector('#completename');
  let email = document.querySelector('#register-email');
  let username = document.querySelector('#register-username');
  let password = document.querySelector('#register-password');
  let confirmpassword = document.querySelector('#confirm-password');
  let date = document.querySelector('#register-date');

  if (String (password.value) !== String (confirmpassword.value)) {return null;}

  return new UserRegister(name.value, username.value, email.value, password.value, date.value);

}

function sendData(){
  let url = "http://localhost:8080/user"
  let user = collectData();
  if (user === null) {
    alert("Senhas fornecidas são diferentes");
    return;
  }
  const userJson = JSON.stringify(user);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       },
    body: userJson,
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  }).then(data => {
  })
    .catch(error => {
      console.error("Erro na requisição:", error.message);
    });
  console.log(userJson);
  console.log(user);
}

function getData(){
  let url = "http://localhost:8080/user"
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  }).then(data => {
    data.map(json => new UserRegister(json).showData());
  })
    .catch(error => {
      console.error("Erro na requisição GET:", error.message);
    });

}
