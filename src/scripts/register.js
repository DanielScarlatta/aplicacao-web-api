
const url = "http://18.231.124.162:4000"

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