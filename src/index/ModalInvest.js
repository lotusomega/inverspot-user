import React, { Component } from 'react'
import currency from '../services/currency'

class ModalInvest extends Component {

  constructor (props){
    super(props)
    this.more = this.more.bind(this)
    this.less = this.less.bind(this)
    this.state = {
      shares: 1,
      amount: this.props.amount
    }
  }

  more(){
    if (this.state.shares < this.props.total )
      this.setState({shares: this.state.shares + 1 })
    this.setState({amount: this.props.amount * this.state.shares})
  }

  less(){
    if (this.state.shares > 1 )
      this.setState({shares: this.state.shares - 1})
    this.setState({amount: this.props.amount * this.state.shares})
  }
  render(){
    return(
      <div>
        <div className="text-center counter">
            <button className="counter-minus buttoncounter" onClick={this.less}>-</button>
            <input type="text" value={this.state.shares} readOnly style={{margin: "0 5px",height: '34px', fontSize: '16px', fontWeight: '900', color: '#4B118E', textAlign: 'center', width: '50px'}}/>
            <button className="counter-plus buttoncounter"  onClick={this.more}>+</button>
        </div>
        {this.props.children}
        <div className="text-center counter" id="handleCounter">
            <input type="text" value={currency(this.state.amount)} style={{height: '34px', width: '200px', color: '#4b118e', fontWeight: '900', textAlign: 'center'}} readOnly/>
        </div><br/>
      </div>
    )
  }
}

export default ModalInvest;
