import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'

function FAQPanel(props) {
  const {title, body, html, ...other} = props
  const header = (<h4 className="faqs-title with-cursor" style={{color: '#4e2e89', cursor: 'pointer'}}>{title}</h4>)
  return (
    <Panel header={header} {...other}>{html ? ( <div dangerouslySetInnerHTML={{__html: body}} />) : body }</Panel>
  )
}

export default function FAQCollapse(props) {
  const {panels, ...other} = props
  return (
    <Accordion {...other}>
      {panels.map((panel, i) => (<FAQPanel key={`P${i}`} eventKey={i + 1} {...panel} />))}
    </Accordion>
  )
}
