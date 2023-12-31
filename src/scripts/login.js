const url = "http://18.231.124.162:4000"

const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')
const btnAccessLogin = document.getElementById('btnAccessLogin')
const responseApi = document.querySelector("#responseApi")
const conteinerForm = document.getElementById('conteinerForm')

conteinerForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let dataUser = {
    email: emailLogin.value,
    password: passwordLogin.value,
  }

  dataUser = JSON.stringify(dataUser);
  registerUser(dataUser)
})

async function registerUser(dataUser) {
  const response = await fetch(`${url}/v1/auth/login`, {
    method: "POST",
    body: dataUser,
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json()
  console.log(data)
}
