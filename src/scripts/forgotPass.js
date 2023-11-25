const url = "http://18.231.124.162:4000"

const emailForgot = document.getElementById('emailForgot')
const btnAccessLogin = document.getElementById('btnAccessLogin')
const responseApi = document.querySelector("#responseApi")
const conteinerForm = document.getElementById('conteinerForm')

conteinerForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let dataUser = {
    email: emailForgot.value,
  }

  dataUser = JSON.stringify(dataUser);
  registerUser(dataUser)
})

async function registerUser(dataUser) {
  const response = await fetch(`${url}/v1/auth/forgot`, {
    method: "POST",
    body: dataUser,
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json()
  console.log(data)
  if(response.status === 200) {
    window.location.href = "password.html"
  }
}
