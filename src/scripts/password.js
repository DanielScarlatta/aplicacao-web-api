const url = "http://18.231.124.162:4000"

const codeRedefine = document.getElementById('codeRedefine')
const emailRedefine = document.getElementById('emailRedefine')
const passwordRedefine = document.getElementById('passwordRedefine')
const confirmPasswordRedefine = document.getElementById('confirmPasswordRedefine')
const btnRedefinirUser = document.getElementById('btnRedefinirUser')

const responseApi = document.querySelector("#responseApi")
const conteinerForm = document.getElementById('conteinerForm')

conteinerForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let dataUser = {
    email: emailRedefine.value,
    password: passwordRedefine.value,
    confirmpassword: confirmPasswordRedefine.value,
    recoveryCode: codeRedefine.value
  }

  dataUser = JSON.stringify(dataUser);
  registerUser(dataUser)
})

async function registerUser(dataUser) {
  const response = await fetch(`${url}/v1/auth/redefinePassword`, {
    method: "POST",
    body: dataUser,
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json()
  console.log(data)
  if(response.status === 200) {
    window.location.href = "login.html"
  }
}
