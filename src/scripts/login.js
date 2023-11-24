const emailRegister = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const btnAccessUser = document.getElementById('btnAccessUser')

btnAccessUser.addEventListener('submit', () => {
  let dataLoginUser = {
    email: emailRegister.value,
    password: passwordRegister.value
  }

  dataLoginUser = JSON.stringify(dataLoginUser)

  loginRequest()
})

async function loginRequest() {


}