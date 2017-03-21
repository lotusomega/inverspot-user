import React, { Component } from 'react';
import { edit, list } from '../services/crud'
import {Wizard} from '../index/Wizard'
import data from './data'

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
    this.toggleWizard = this.toggleWizard.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      show: false,
      user: {
        invesmentData: {
          name: '',
          firstName : '',
          lastName : '',
          sex : '',
          nationality: '',
          birthPlace: '',
          typeid: '',
          idNumber: 0,
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
          user: Object.assign( {}, user[0], prev.user)
        }
      } ) )
      .catch(alert)
  }

  toggleWizard( property ) {
    if(!this.state.show) {
      document.body.className += ' modal-open'
      return this.setState({show: true, property})
    }
    document.body.className = ''
    return this.setState({show: false})
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
      .then( success => {
        if(success) {
          this.props.router.location.state.investment ? this.toggleWizard() : alert("Datos actualizados")
        }
        else {
          alert('Error al actualizar')
        }
      } )
  }

  render() {
    let u = this.state.user.invesmentData,
    general = data.general,
    invest = data.invest,
    bankData = data.bankData,
    beneficiary1 = data.beneficiary1,
    beneficiary2 = data.beneficiary2

		return(
<div className="container">
      <div className="panel-body panel panel-default" style={{backgroundColor: "rgb(247, 247, 247)"}}>
        { this.state.show && <Wizard onClick={ this.toggleWizard } investment={this.props.router.location.state.investment} /> }
        {/* <h3>Completa los campos requeridos * para comenzar a participar</h3> */}
          <div className="spacer"></div>
        <div className="text-center"><b>Para poder participar en cualquier proyecto de Inverspot es necesario llenar los campos requeridos, <br/>esto ayudará a que nuestros asesores generen tu contrato de participación</b></div>
        <form className="form-horizontal" onSubmit={ this.handleSubmit } >
          <div className="spacer"></div>
          <FormFieldset legend='1. Datos Generales de Participación'
            controls={ general } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='2. Forma de Paticipación'
            controls={ invest } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='3. Datos Bancarios'
            controls={ bankData } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='4. Designación de Beneficiario 1'
            controls={ beneficiary1 } source={ u } handleInput={ this.handleInput } />
          <FormFieldset legend='4. Designación de Beneficiario 2'
            controls={ beneficiary2 } source={ u } handleInput={ this.handleInput }>
            <div className="text-right">
              <button type="submit" className="button-save btn-success">Editar Usuario <i className="icon-arrow-right14 position-right"></i></button>
            </div>
          </FormFieldset>
        </form>
      </div>
</div>
		)
	}
}

export default InvestmentData;
