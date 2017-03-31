//Wizard: Componente que contiene todos los modales de inversion y de inicio de sesión
import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'
import currency from '../services/currency'
import { listProperty } from '../services/list'
import { create } from '../services/crud'
import ModalInvest from './ModalInvest'
import { ModalLogin, ModalRegister, ModalRecover } from '../app/ModalLog'

//funcion ModalPromo: contiene el estilo de los titulos para los modales
function ModalPromo (props){
  return (
    <p className="text-center text-modal">
      {props.children}
    </p>
  )
}

//funcion ModalButton: contiene el estilo del boton participar
function ModalButton(props){
  return (
    <div className="col-sm-12">
      {props.name ? <button onClick={ props.onClick } className="button large-invertion" style={{marginTop: "2px"}}>{props.name}</button>:
        <button onClick={ props.onClick } className="button large-invertion" style={{marginTop: "2px"}}>Participar</button>}
    </div>
  )
}

//funcion ModalSmallButton: contiene el estilo de los botones mas pequeños dentro del modal(participa, regresar, si , no)
function ModalSmallButton (props){
  return(
    <div className="col-sm-6">
      <button onClick={props.onClick} className={`button ${props.clas}`} style={{marginTop: "2px"}}>{props.name}</button>
    </div>
  )
}

//funcion ModalText: contiene el estilo del texto cuerpo del modal
function ModalText(props){
  return (
    <p className="text-center" style={{fontSize: "12px", color: "white"}}>
      {props.children}
    </p>
  )
}

//funcion Modal: contiene la estructura del modal
/*props
onClick: contiene la funcion para cerrar el modal*/
function Modal (props){
  return (
    <div className='modal fade in' style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className={`loginmodal-container ${props.type}`}>
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

//funcion Step1: contiene el paso 1 del proceso de inversion
/*props
property.title: contiene el titulo de la propiedad
verify: contiene la funcion para verificar que el usuario se encuentra logueado antes de poder invertir
onClick: contiene la funcion para cerrar el modal*/
function Step1 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>Quiero participar en { props.property.title }</ModalPromo>
      <ModalButton onClick={ () => props.verify() } />
      <ModalPromo>Si tienes dudas, contáctanos</ModalPromo>
    </Modal>
  )
}

//funcion Step2: contiene el paso 2 del proceso de inversion
/*props
property = property.dataSheet: contiene la informacion sobre el monto de inversion, total de acciones y acciones vendidas de la propiedad
total = property.totalShares - property.sharesSold: contiene el numero de acciones restatntes para invertir restando las acciones vendidas de las totales
summary: funcion que envia el numero de acciones invertidas y el costo total de estas
onClick: contiene la funcion para cerrar el modal*/
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

//funcion Step3: contiene el paso 3 del proceso de inversion
/*props
onClick: contiene la funcion para cerrar el modal
shares: numero de acciones para invertir
total: costo total de las acciones para invertir
property.title: nombre de la propiedad para invertir*/
function Step3 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>¿Estás seguro que deseas apartar {props.shares} participaciones con un total de {currency(props.total)} en {props.property.title}?</ModalPromo>
      <ModalSmallButton onClick={ () => props.next(6) } name='Si' clas='large-invertion'/>
      <ModalSmallButton onClick={ props.onClick } name='No' clas='large-confirm'/>
    </Modal>
  )
}

function Step4 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>¿Realmente estas seguro que deseas invertir en esta propiedad?</ModalPromo>
      <ModalSmallButton onClick={ () => props.invest() } name='Si' clas='large-invertion'/>
      <ModalSmallButton onClick={ props.onClick } name='No' clas='large-confirm'/>
    </Modal>
  )
}

function Step5 (props){
  return(
    <Modal onClick={props.onClick} type='large'>
      <ModalPromo>¡Felicidades!, ya estas contemplado para participar en este proyecto. </ModalPromo>
      <ModalPromo>Por favor comienza a llenar tu solicitud inversion, no olvides dejar ningun campo solicitado vacio</ModalPromo>
      <ModalSmallButton onClick={ () => props.redirect() } name='Responder ahora' clas='large-invertion'/>
      <ModalSmallButton onClick={ props.onClick } name='En otro momento' clas='large-confirm'/>
    </Modal>
  )
}

function Step99 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>{ props.alert }</ModalPromo>
      <ModalButton onClick={ props.onClick } name='Aceptar' />
      <p style={{color: 'white',fontWeight: 'bolder'}}>{ props.support }</p>
    </Modal>
  )
}

function Step98 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>{ props.alert2 }</ModalPromo>
      <ModalButton onClick={ props.onClick } name='Aceptar' />
    </Modal>
  )
}

function Step97 (props){
  return(
    <Modal onClick={props.onClick}>
      <ModalPromo>Datos inválidos.Por favor inténtalo de nuevo</ModalPromo>
      <ModalButton onClick={ props.onClick } name='Aceptar' />
      <p style={{color: 'white',fontWeight: 'bolder'}}>¿Imposible conectar? Contacta a un <Link to="contacto">asesor</Link></p>
    </Modal>
  )
}

//InvestmentWizard componente que posee el paso en que se encuentra el modal(0, 1, 2, 3, 4, 5)
class InvestmentWizard extends Component {
  /* state
  step: paso en el que se encuntra el modal por defecto comienza en el 3 para comenzar a invertir
  property: contiene toda la información de la propiedad para invertir
  shares: numero de acciones que se desean invertir
  total: cantidad total del costo de las acciones
  user: contiene la informacion del usuario para verificar que este logueado*/
  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
    this.close = this.close.bind(this)
    this.summary = this.summary.bind(this)
    this.invest = this.invest.bind(this)
    this.verify = this.verify.bind(this)
    this.postLogin = this.postLogin.bind(this)
    this.redirect = this.redirect.bind(this)
    this.state = {
      step: 3,
      property: {},
      shares:0,
      total: 0
    }
  }
  /*componentDidMount funcion que se ejecuta antes de montar el componente y obtiene la informacion de
  usuario una vez que se ha iniciado sesion*/
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }
  //Lista los detalles de la propiedad y los inserta en el estado property
  /*props id: identificador de la propiedad*/
  componentDidMount() {
    if(this.props.step){
      this.setState({step: this.props.step})
    }
    this.props.id && listProperty({_id: this.props.id}, {}, 'title dataSheet marketResearch')
      .then( properties => this.setState({ property: properties[0] }) )
    let newState = {}
    if(this.props.investment) {
      console.log('STATE: ', this.props.investment);
      newState = Object.assign({}, this.props.investment)
      this.setState(newState)
      this.goTo(5)
    }
  }

  // goTo: funcion que asigna el paso al estado para cambiar de modal
  goTo( step ) {
    this.setState({step})
  }
  //verifica si el usuario se ha logueado para continuar el proceso de inversion, en caso de que no se manda el modal de inicio de sesion
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
  //funcion de resumen con el total de acciones y monto que verifica el nivel de usuario para poder invetir
  summary(shares,total) {
    if(this.user){
      this.setState({shares: shares, total: total})
      this.goTo(5)
    }
    // else {
    //   this.props.router.push({
    //     pathname: '/user/investment-data',
    //     state: {
    //       investment: Object.assign({},this.state, {shares, total})
    //     }
    //   })
    //   this.props.onClick()
    // }
  }
  //funcion invertir, crea el objeto de inversion con los datos y lo manda a la api
  invest(){
    let investment = {
      investor: this.user._id,
      property: this.state.property._id,
      sharesNumber: this.state.shares,
      amount: this.state.total
    }
    create( 'investment',investment )
      .then( success => {
        if(success) {
          this.goTo(7)
        }
      } )
  }

  redirect(){
    this.props.onClick()
    this.props.router.push({pathname: '/user/investment-data'})
  }

  postLogin() {
    this.user = JSON.parse(localStorage.getItem('my'))
    this.goTo(4)
  }

  render(){
    let { step, property } = this.state
    let Element = undefined
    let passProps = {
      property,
      onClick: this.props.onClick,
      alert: this.props.alert,
      postLogin: this.postLogin,
      next: this.goTo,
      summary: this.summary,
      invest: this.invest,
      verify: this.verify,
      shares: this.state.shares,
      total: this.state.total,
      redirect: this.redirect
    }
    /* switch: renderiza el componente correspondiente a cada paso
    (0= recuperacion de contraseña, 1= Registro, 2= Inicio de sesión, 3= Paso 1 inversion, 4= Paso 2 inversion, 5= Paso 3 inversion)*/
    switch (step) {
      case 0:
        Element = ModalRecover
        break;
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
      case 6:
        Element = Step4
        break;
      case 7:
        Element = Step5
        break;
      case 99:
          Element = Step99
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
  ModalSmallButton, Wizard, Step99, Step98, Step97
}
