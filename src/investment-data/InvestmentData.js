import React, { Component } from 'react';
import { edit, list } from '../services/crud'

function SelectControl(props) {
  let { hint, value, handleInput, options, ...other } = props
  return (
    <select { ...other } className="form-control"
        onChange={ handleInput } value={ value }>
      <option disabled>{ hint }</option>
      { options.map(e => <option key={ e.value } value={ e.value }>{ e.name }</option> ) }
    </select>
  )
}

function FormControl(props) {
  let { kind, ...other } = props
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{props.hint}</label>
      <div className="col-md-4">
        { kind && kind === 'select' ? <SelectControl { ...other } /> : <InputControl { ...other } /> }
      </div>
    </div>
  )
}

function FormFieldset(props) {
  let { legend, controls, source, handleInput } = props
  return (
    <fieldset>
      <legend>{ legend }</legend>
      { controls.map( e => <FormControl key={e.name} value={e.name.indexOf('.') > -1 ? source[ [e.name.split('.')[0]] ][ [e.name.split('.')[1]] ] : source[e.name] } { ...e } handleInput={ handleInput } /> ) }
      {props.children}
    </fieldset>
  )
}

function InputControl(props) {
  let { hint, value, handleInput, ...other } = props
  return(
    <input { ...other } placeholder={hint} className="form-control input-md" type="text"
      onChange={ handleInput } value={ value } />
  )
}

class InvestmentData extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {
        invesmentData: {
          name: '',
          firstName : '',
          lastName : '',
          sex : '',
          nationality: '',
          birthPlace: '',
          idNumber: 0,
          typeid: '',
          curp: '',
          rfc: '',
          address: {
            street: '',
            suburb: '',
            town: '',
            city: '',
            contry: '',
            zipCode: '',
          },
          maritalStatus: '',
          regime: '',
          spouse: '',
          email: '',
          telephone: '',
          cellphone: '',
          investmentForm: {
            methodPayment: '',
            anticipationForm: '',
          },
          bankData: {
            acoountNumber: 0,
            standardizedBankKey: 0,
            bank: '',
            acountHolder: '',
          },
          beneficiary1: {
            name: '',
            firstName: '',
            lastName: '',
            telephone: 0,
            cellphone: 0,
            percentage: 0
          },
          beneficiary2: {
            name: '',
            firstName: '',
            lastName: '',
            telephone: 0,
            cellphone: 0,
            percentage: 0
          },
          comments: ''
        }
      }
    }
  }

  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }

  componentDidMount() {
    list('user',{_id: this.user._id},{}, 'invesmentData')
      .then( user => this.setState( (prev, props) => {
        return {
          user: Object.assign( prev.user, user[0])
        }
      } ) )
      .catch(alert)
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    console.log(name);
    if (name.indexOf('.') > -1) {
      console.log('in');
      let path = name.split('.')
      newState.user.invesmentData[path[0]][path[1]] = e.target.value
    }
    else
      newState.user.invesmentData[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    let newState = Object.assign( this.state )
    newState.user['level'] = 'investor'
    this.setState(newState)
    console.log(this.state.user)
    edit('user', this.state.user )
      .then( success => success && alert("Datos actualizados") )
  }

  render() {

    let u = this.state.user.invesmentData,
      general = [
        {
          name: 'name',
          hint: 'Nombre'
        },
        {
          name: 'firstName',
          hint: 'Apellido paterno'
        },
        {
          name: 'lastName',
          hint: 'Apellido materno'
        },
        {
          name: 'sex',
          hint: 'Sexo',
          kind: 'select',
          options: [
            {
              name: 'Masculino',
              value: 'Masculino'
            },
            {
              name: 'Femenino',
              value: 'Femenino'
            },
          ]
        },
        {
          name: 'nationality',
          hint: 'Nacionalidad'
        },
        {
          name: 'birthPlace',
          hint: 'Lugar de nacimiento'
        },
        {
          name: 'idNumber',
          hint: 'Número de identificación'
        },
        {
          name: 'typeid',
          hint: 'Tipo de identificación',
          kind: 'select',
          options: [
            {
              name: 'Credencial de Elector',
              value: 'Credencial de Elector'
            },
            {
              name: 'Pasaporte',
              value: 'Pasaporte'
            },
            {
              name: 'Cartilla Militar',
              value: 'Cartilla Militar'
            },
            {
              name: 'Licencia de Conducir',
              value: 'Licencia de Conducir'
            }
          ]
        },
        {
          name: 'curp',
          hint: 'Clave Única de Registro de Población (CURP)'
        },
        {
          name: 'rfc',
          hint: 'RFC'
        },
        {
          name: 'address.street',
          hint: 'Domicilio'
        },
        {
          name: 'address.suburb',
          hint: 'Colonia'
        },
        {
          name: 'address.town',
          hint: 'Delegación o Municipio'
        },
        {
          name: 'address.city',
          hint: 'Ciudad o Población'
        },
        {
          name: 'address.country',
          hint: 'País'
        },
        {
          name: 'address.zipCode',
          hint: 'Código Postal'
        },
        {
          name: 'maritalStatus',
          hint: 'Estado Civíl',
          kind: 'select',
          options: [
            {
              name: 'Soltero',
              value: 'Soltero'
            },
            {
              name: 'Comprometido',
              value: 'Comprometido'
            },
            {
              name: 'Casado',
              value: 'Casado'
            },
            {
              name: 'Divorciado',
              value: 'Divorciado'
            },
            {
              name: 'Viudo',
              value: 'Viudo'
            }
          ]
        },
        {
          name: 'regime',
          hint: 'En caso de ser casado/a (Bajo que régimen):',
          kind: 'select',
          options: [
            {
              name: 'Bienes Mancomunados',
              value: 'Bienes Mancomunados'
            },
            {
              name: 'Separación de Bienes',
              value: 'Separación de Bienes'
            }
          ]
        },
        {
          name: 'spouse',
          hint: 'Nombre Completo del/la Conyugue'
        },
        {
          name: 'email',
          hint: 'Correo Electrónico'
        },
        {
          name: 'telephone',
          hint: 'Teléfono Fijo'
        },
      ],
      invest=[
        {
          name: 'investmentForm.methodPayment',
          hint: 'Forma de Pago',
          kind: 'select',
          options: [
            {
              name: 'Efectivo',
              value: 'Efectivo'
            },
            {
              name: 'Cheque',
              value: 'Cheque'
            },
            {
              name: 'Transferencia',
              value: 'Transferencia'
            }
          ]
        },
        {
          name: 'investmentForm.regime',
          hint: 'Forma de Anticipo',
          kind: 'select',
          options: [
            {
              name: 'Financiado',
              value: 'Financiado'
            },
            {
              name: 'Contado',
              value: 'Contado'
            }
          ]
        }
      ],
      bankData=[
        {
          name: 'bankData.acoountNumber',
          hint: 'Número de Cuenta de Depósito'
        },
        {
          name: 'bankData.standardizedBankKey',
          hint: 'Clave'
        },
        {
          name: 'bankData.bank',
          hint: 'Banco'
        },
        {
          name: 'bankData.acountHolder',
          hint: 'Titular de la cuenta'
        }
      ],
      beneficiary1=[
        {
          name: 'beneficiary1.name',
          hint: 'Nombre'
        },
        {
          name: 'beneficiary1.firstName',
          hint: 'Apellido paterno'
        },
        {
          name: 'beneficiary1.lastName',
          hint: 'Apellido materno'
        },
        {
          name: 'beneficiary1.telephone',
          hint: 'Teléfono Fijo'
        },
        {
          name: 'beneficiary1.cellphone',
          hint: 'Teléfono Celular'
        },
        {
          name: 'beneficiary1.percentage',
          hint: 'Cantidad de Porcentaje'
        }
      ],
      beneficiary2=[
        {
          name: 'beneficiary2.name',
          hint: 'Nombre'
        },
        {
          name: 'beneficiary2.firstName',
          hint: 'Apellido paterno'
        },
        {
          name: 'beneficiary2.lastName',
          hint: 'Apellido materno'
        },
        {
          name: 'beneficiary2.telephone',
          hint: 'Teléfono Fijo'
        },
        {
          name: 'beneficiary2.cellphone',
          hint: 'Teléfono Celular'
        },
        {
          name: 'beneficiary2.percentage',
          hint: 'Cantidad de Porcentaje'
        },
        {
          name: 'comments',
          hint: 'Comentarios'
        }
      ]

		return(

      <div className="panel-body">
        <form className="form-horizontal" onSubmit={ this.handleSubmit } >
          <FormFieldset legend='1. Datos generales del inversionista'
            controls={ general } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='2. Forma de inversión'
            controls={ invest } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='3. Datos bancarios del inversionista'
            controls={ bankData } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='4. Designación de beneficiario 1'
            controls={ beneficiary1 } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='4. Designación de beneficiario 2'
            controls={ beneficiary2 } source={ u } handleInput={ this.handleInput }>
            <div className="text-right">
              <button type="submit" className="btn btn-primary">Editar Usuario <i className="icon-arrow-right14 position-right"></i></button>
            </div>
          </FormFieldset>
        </form>
      </div>

		)
	}
}

export default InvestmentData;
