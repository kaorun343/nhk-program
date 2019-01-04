import * as React from 'react'
import * as ReactDOM from 'react-dom'

ReactDOM.render(
  <div>{process.env.API_KEY}</div>,
  document.getElementById('app')
)
