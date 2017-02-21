import { BASE_URL } from './auth'

function create(data) {
  let body = JSON.stringify(data)
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  return fetch(`${BASE_URL}/auth/signup`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en creación de usuario')
    })
}

export { create}
