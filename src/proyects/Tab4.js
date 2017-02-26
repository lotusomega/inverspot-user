import React, { Component } from 'react';
import { listWork } from '../services/list'

function CollapserItem(props) {
  if(!props || !props.name) return null
  return (
    <tr>
      <td>
        <a onClick={props.onClick} className="btn-group" role="group" id="" href="#Item11" data-toggle="tab">{props.name}</a>
      </td>
    </tr>
  )
}

// Props
// [String] months: Items
function Collapser(props) {
  if (!props || !props.months) return null
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a onClick={(e) => { e.preventDefault(); props.toggle(props.months[0][0].year) } } data-toggle="collapse" data-parent="#accordion" href="#collapseOne" style={{textDecoration:'none'}}>
          <span className="glyphicon glyphicon-folder-close"></span>&nbsp; Año {props.months[0][0].year}</a>
        </h4>
      </div>
      { props.months.map( (wp, i) => {
          return (
            <div key={wp[0].month} id={`collapse${i}`} className={`panel-collapse collapse ${props.current === wp[0].year && 'in'}`}>
              <div className="panel-body">
                <table className="table">
                  <tbody>
                   <CollapserItem onClick={ (e) => { e.preventDefault(); props.onSelect(props.index, i) } } key={`I${i}`} name={wp[0].month} />
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      )
      }
    </div>
  )
}

function WPMedia(props) {
  if(!props || !props.photo || !props.description) return null
  return (
    <div className="col-xs-12 col-sm-4">
      <a href="#" className="thumbnail">
        <img src={ `//192.169.174.96/is-img/${props.photo}` } alt={ props.photo }/>
        <p className="text-center" style={{fontSize: '10px', color:'black'}}>
          { props.description }
        </p>
      </a>
    </div>
  )
}

function WPViewer(props) {
  if(!props || !props.progress || !props.progress.length > 0) return null
  return (
    <div className="col-sm-9 well" style={{backgroundImage: 'linear-gradient(to bottom,#ffffff 0,#ffffff 100%)', borderColor: '#ffffff'}}>
      <div className="tab-content">
        <div className="tab-pane fade in active" id="Item11">
          <h5>{`${props.progress[0].month} ${props.progress[0].year}`}</h5>
          <div className="col-sm-12">
            <div className="row">
              { props.progress.map( p => <WPMedia key={p._id} photo={p.photo} description={p.description} /> ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class Tab4 extends Component {

  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
    this.toggleYear = this.toggleYear.bind(this)
    this.state = {
      workProgress: [],
      selectedMonth: [],
      selectedYear: undefined
    }
  }

  componentDidMount() {
    if( this.props.params.id) {
      listWork({ property: this.props.params.id }, {sort: 'year month'}, '')
        .then( wP => {
          let workProgress = this._groupWP(wP)
          this.setState({
            workProgress,
            selectedYear: workProgress.length > 0 ? workProgress[0].year : []
          })
        } )
        .catch( e => alert(e) )
    }
  }

  _groupWP(raw) {
    let calendar = []
    let yearList = raw.map( w => w.year ).reduce( (cum, year) => {
      if (cum.indexOf(year) === -1) {
        cum.push(year)
      }
      return cum
    }, [] )
    yearList.forEach( year => {
      let groupedYear = []
      let annual = raw.filter( e => e.year === year )
      let monthList = annual.map( w => w.month ).reduce( (cum, month) => {
        if (cum.indexOf(month) === -1) {
          cum.push(month)
        }
        return cum
      }, [] )
      monthList.forEach( month => {
        let monthly = annual.filter( e => e.month === month )
        groupedYear.push(monthly)
      } )
      calendar.push(groupedYear)
    } )
    console.log(calendar);
    return calendar
  }

  toggleYear(y) {
    this.setState({selectedYear: y})
  }

  onSelect(y, m) {
    let item = this.state.workProgress[y][m]
    this.setState({selectedMonth: item})
  }

  render(){
    let years = this.state.workProgress
    return(
      <div className="tab-pane fade in active" id="tab4">
        <h1 className="text-center">Avance de Obra</h1>
        <div className="spacer"></div>
        <div className="row">
          <div className="col-sm-3">
            <div className="panel-group" id="accordion">
          { years.map( (year, i) => <Collapser toggle={this.toggleYear} key={year[0][0].year} index={i} current={this.state.selectedYear} months={year} onSelect={ this.onSelect } /> ) }
          </div>
        </div>
        <WPViewer progress={this.state.selectedMonth} />
        </div>
      </div>
    )
  }
}


export default Tab4;
