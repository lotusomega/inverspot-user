import { BASE_URL } from './auth'

function listProperty(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
  // select = JSON.stringify(select)
  let url = `${BASE_URL}/property?filter=${filter}&query=${query}&select=${select}`
  let opts = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
  return fetch(url, opts)
    .then( res => {
      if(res.ok) {
        return res.json()
      }
      throw new Error('Error al listar')
    })
}

function listUser(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
  // select = JSON.stringify(select)
  let url = `${BASE_URL}/user?filter=${filter}&query=${query}&select=${select}`
  let opts = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
  return fetch(url, opts)
    .then( res => {
      if(res.ok) {
        return res.json()
      }
      throw new Error('Error al listar')
    })
}

export { listProperty, listUser }
