require('dotenv').config()
const url = process.env.URL

const nameRegister = document.getElementById('nameRegister')
const emailRegister = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const confirmPasswordRegister = document.getElementById('confirmpasswordRegister')
const btnRegisterUser = document.getElementById('btnRegisterUser')
const conteinerForm = document.getElementById('conteinerForm')


conteinerForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let dataUser = {
    name: nameRegister.value,
    email: emailRegister.value,
    password: passwordRegister.value,
    confirmpassword: confirmPasswordRegister.value,
  }

  dataUser = JSON.stringify(dataUser);

  registerUser(dataUser)
})


async function hello() {
  const response = await fetch(url + "/v1/hello");

  console.log(response)

  const data = await response.json()

  console.log(data)
}

async function registerUser(dataUser) {
  const response = await fetch(`${url}/v1/auth/register`, {
    method: "POST",
    body: dataUser,
    headers: {
      "Content-Type": "application/json",
    }
  });

  console.log(response)

  const data = await response.json()

  console.log(data)
}