const BASE_URL = 'https://inverspot.mx/api';
// const BASE_URL = 'http://127.0.0.1:8080/api';
const TOKEN = 'token';
// import hello from 'hellojs/dist/hello.all.js'
import hello from 'hellojs'

//funcion para obtener el token almacenado en localStorage
function getToken() {
  return localStorage.getItem(TOKEN)
}

//funcion para guardar los datos del usuario y el token recibidos al loguearse exitosamente en localStorage
function save( key, val ) {
  return localStorage.setItem(key, val)
}

//funcion para autentificar el correo y la contraseña del usuario
function requestAccess(email, password) {
  let body = JSON.stringify({ email, password})
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  return fetch(`${BASE_URL}/auth`, opts)
    .then( res => {
      if (res.ok) {
        return res.json().then(data => {
          save(TOKEN, data.token)
          save('my', JSON.stringify(data.user))
          return true
        })
      }
      throw new Error('Datos inválidos')
    })
}

//funcion para loguear al usuario una vez que se obtiene el token del api
function login(email, pass) {
  if ( getToken() ) return true
  return requestAccess(email, pass)
}

//funcion para cerrar sesion eliminando el token y los datos del usuario del localStorage
function logout(cb) {
  localStorage.removeItem(TOKEN)
  localStorage.removeItem('my')
  cb(true)
}

//funcion para comprobar si existe el token en localStorage
function isLogged() {
  return !!getToken()
}

//funcion para recuperar la contraseña a travez del envio del correo registrado
function recovery(email){
  let url = `${BASE_URL}/auth/recovery?email=${email}`
  return fetch(url)
    .then( res => {
      if(res.ok) {
        return res.text()
      }
      throw new Error('Error al solicitar contraseña')
    })
}

//funcion para completar el registro y cambiar la contraseña en caso de que sea olvidada
function verify(checker, password){
  let url = ''
  if (password)
    url = `${BASE_URL}/auth/verify/${checker}?password=${password}`
  else
    url = `${BASE_URL}/auth/verify/${checker}`
  return fetch(url)
    .then( res => {
      if(res.ok) {
        return res.json().then(data => {
          save(TOKEN, data.token)
          save('my', JSON.stringify(data.user))
          return true
        })
      }
      throw new Error('Error al completar registro')
    })
}

//funcion para obtener el usuario una vez que se verifica en facebook
function facebook(data) {
  let body = JSON.stringify(data)
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  return fetch(`${BASE_URL}/auth/facebook`, opts)
    .then( res => {
      if (res.ok) {
        return res.json().then(data => {
          save(TOKEN, data.token)
          save('my', JSON.stringify(data.user))
          return true
        })
      }
      throw new Error('Error en creación de usuario')
    })
}

//funcion para obtener los datos de facebook y mandarlos al api
function fbAuth() {
  return new Promise((resolve, reject) => {
    hello.init(
      { facebook: '1430245840616178' });

    hello.on('auth.login', (auth) => {
      let user = {
        socialToken: auth.authResponse.access_token,
        network: auth.network
      }
      facebook(user).then( success => resolve(success), e => reject(e) )
    });

    hello('facebook').login({scope: 'email'})

  })
}

export { login, logout, isLogged, getToken, recovery, verify, fbAuth, BASE_URL }
