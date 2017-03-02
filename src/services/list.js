import { BASE_URL } from './auth'

//funcion para listar todas la propiedades usando los parametros de filtro, consulta y selecion de campos
function listProperty(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
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

//funcion para listar todas los usuarios usando los parametros de filtro, consulta y selecion de campos
function listUser(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
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

//funcion para listar todas los avances de obra usando los parametros de filtro, consulta y selecion de campos
function listWork(filter, query, select) {
  filter = JSON.stringify(filter)
  query = JSON.stringify(query)
  let url = `${BASE_URL}/work-progress?filter=${filter}&query=${query}&select=${select}`
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

export { listProperty, listUser, listWork }
