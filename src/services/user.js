import { BASE_URL, getToken } from './auth'

function edit(data) {
  if(!data._id) throw new Error('_id required')
  let body = JSON.stringify(data)
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  opts.headers.Authorization = getToken()
  return fetch(`${BASE_URL}/user`, opts)
    .then( res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Error en edición de usuario')
    })
}


export { edit }
