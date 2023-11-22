const url = "http://54.94.34.44:4000"

const emailRegister = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const confirmPasswordRegister = document.getElementById('confirmPasswordRegister')
const btnRegisterUser = document.getElementById('btnRegisterUser')
const conteinerForm = document.getElementById('conteinerForm')


conteinerForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  hello()
})


async function hello() {
  const response = await fetch(url + "/v1/hello");

  console.log(response)

  const data = await response.json()

  console.log(data)
}

async function registerUser() {
  const response = await fetch(url + "/v1/auth/register", );

  console.log(response)

  const data = await response.json()

  console.log(data)
}