import React,{Component} from 'react'
import {withRouter} from 'react-router'
import currency from '../services/currency'
import { listProperty, listUser } from '../services/list'
import { create } from '../services/crud'
import ModalInvest from './ModalInvest'
import {ModalLogin, ModalRegister } from '../app/ModalLog'

function ModalPromo (props){
  return (
    <p className="text-center text-modal">
      {props.children}
    </p>
  )
}

function ModalButton(props){
  return (
    <div className="col-sm-12">
      <button onClick={ props.onClick } className="button large-invertion" style={{marginTop: "2px"}}>Invertir</button>
    </div>
  )
}

function ModalSmallButton (props){
  return(
    <div className="col-sm-6">
      <button onClick={props.onClick} className={`button ${props.clas}`} style={{marginTop: "2px"}}>{props.name}</button>
    </div>
  )
}

function ModalText(props){
  return (
    <p className="text-center" style={{fontSize: "12px", color: "white"}}>
      {props.children}
    </p>
  )
}

function Modal (props){
  return (
    <div className='modal fade in' style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className="loginmodal-container">
          <button type="button" className="close" style={{fontSize: '35px'}} onClick={props.onClick}>&times;</button>
          <div className="col-sm-12">
              <img className="img-responsive center-block" alt="logo" src="style/images/inverspot.png"/>
              <div className="spacer"></div>
              {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

function Step1 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>Quiero invertir en { props.property.title }</ModalPromo>
      <ModalButton onClick={ () => props.verify() } />
      <ModalPromo>Si tienes dudas, contáctanos</ModalPromo>
      <ModalText>*Si no cuentas con el 100% del pago<br/>inicial te podemos financiar</ModalText>
    </Modal>
  )
}

function Step2 (props){
  let property = props.property.dataSheet
  let total = property.totalShares - property.sharesSold
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>Número de acciones</ModalPromo>
      <ModalInvest total={total} amount={property.investAmount} summary={props.summary}>
        <ModalPromo>Monto:</ModalPromo>
      </ModalInvest>
      <ModalSmallButton name='Regresar' onClick={ () => props.next(3) } clas='large-confirm'/>
    </Modal>
  )
}

function Step3 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>¿Estás seguro que deseas invertir {props.shares} acciones con un total de {currency(props.total)} en {props.property.title}?</ModalPromo>
      <ModalSmallButton onClick={ () => props.invest() } name='Si' clas='large-invertion'/>
      <ModalSmallButton onClick={ props.onClick } name='No' clas='large-confirm'/>
    </Modal>
  )
}

class InvestmentWizard extends Component {

  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
    this.close = this.close.bind(this)
    this.summary = this.summary.bind(this)
    this.invest = this.invest.bind(this)
    this.verify = this.verify.bind(this)
    this.verify = this.verify.bind(this)
    this.state = {
      step: 3,
      property: {},
      shares:0,
      total: 0,
      user: []
    }
  }

  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }

  componentDidMount() {
    this.props.id && listProperty({_id: this.props.id}, {}, 'title dataSheet marketResearch')
      .then( properties => this.setState({ property: properties[0] }) )
    listUser({_id: this.user._id},{}, 'level')
      .then( user => this.setState({user: user[0]}) )
      .catch(alert)
  }

  goTo( step ) {
    this.setState({step})
  }

  verify(){
    if (this.user)
      this.goTo(4)
    else
      this.goTo(2)
  }

  close(){
    this.props.onClick()
    // this.props.router.push('/user/investments')
  }

  summary(shares,total){
    if(this.state.user.level === 'investor'){
      this.setState({shares: shares, total: total})
      this.goTo(5)
    }
    else{
      this.props.onClick()
      this.props.router.push('/user/investment-data')
    }
  }

  invest(){
    let investment = {
      investor: this.user._id,
      property: this.state.property._id,
      sharesNumber: this.state.shares,
      amount: this.state.total
    }
    create( 'investment',investment )
      .then( success => success && this.close() )
  }

  render(){
    let { step, property } = this.state
    let Element = undefined
    let passProps = {
      property,
      close: this.close,
      onClick: this.props.onClick,
      next: this.goTo,
      summary: this.summary,
      invest: this.invest,
      verify: this.verify,
      shares: this.state.shares,
      total: this.state.total
    }
    switch (step) {
      case 1:
        Element = withRouter(ModalRegister)
        break;
      case 2:
        Element = withRouter(ModalLogin)
        break;
      case 3:
        Element = Step1
        break;
      case 4:
        Element = Step2
        break;
      case 5:
        Element = Step3
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="modal-backdrop fade in" onClick={this.close}></div>
        <Element { ...passProps } />
      </div>
    )
  }
}

let Wizard = withRouter(InvestmentWizard)

export {
  ModalSmallButton, Wizard
}
