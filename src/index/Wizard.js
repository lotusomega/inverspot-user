import React,{Component} from 'react'
import currency from '../services/currency'
import { listProperty } from '../services/list'

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

function ModalInvest(props){
  return(
    <div>
      <div className="text-center counter" id="handleCounter">
          <button className="counter-minus buttoncounter">-</button>
          <input type="text"  style={{height: '34px', fontSize: '16px', fontWeight: '900', color: '#4B118E', textAlign: 'center', width: '50px'}}/>
          <button className="counter-plus buttoncounter">+</button>
      </div>
      {props.children}
      <div className="text-center counter" id="handleCounter">
          <input type="text"  style={{height: '34px', width: '200px', color: '#4b118e', fontWeight: '900', textAlign: 'center'}}/>
      </div><br/>
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
    <Modal>
      <ModalPromo>Quiero invertir en { props.property.title }</ModalPromo>
      <ModalButton onClick={ () => props.next(2) } />
      <ModalPromo>Si tienes dudas, contáctanos</ModalPromo>
      <ModalText>*Si no cuentas con el 100% del pago<br/>inicial te podemos financiar</ModalText>
    </Modal>
  )
}

function Step2 (props){
  return(
    <Modal onClick={props.onClick} extraClass={ props.extraClass } show={props.show}>
      <ModalPromo>Número de acciones</ModalPromo>
      <ModalInvest>
        <ModalPromo>Monto:</ModalPromo>
      </ModalInvest>
      <ModalSmallButton name='Invertir' onClick={ () => props.next(3) } clas='large-invertion'/>
      <ModalSmallButton name='Regresar' onClick={ () => props.next(1) } clas='large-confirm'/>
    </Modal>
  )
}

function Step3 (props){
  return(
    <Modal onClick={props.onClick} extraClass={ props.extraClass } show={props.show}>
      <ModalPromo>¿Estás seguro que deseas invertir en ésta propiedad?</ModalPromo>
      <ModalSmallButton onClick={ () => alert('Gracias') } name='Si' clas='large-invertion'/>
      <ModalSmallButton onClick={ () => props.next(2) }name='No' clas='large-confirm'/>
    </Modal>
  )
}

class Wizard extends Component {

  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
    this.state = {
      step: 1,
      property: {}
    }
  }

  componentDidMount() {
    this.props.id && listProperty({_id: this.props.id}, {}, 'title dataSheet marketResearch')
      .then( properties => this.setState({ property: properties[0] }) )
  }

  goTo( step ) {
    this.setState({step})
  }

  render(){
    let { step, property } = this.state
    let Element = undefined
    let passProps = {
      property,
      next: this.goTo
    }
    switch (step) {
      case 1:
        Element = Step1
        break;
      case 2:
        Element = Step2
        break;
      case 3:
        Element = Step3
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="modal-backdrop fade in"></div>
        <Element { ...passProps } />
      </div>
    )
  }
}

export {Wizard}
