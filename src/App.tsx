// Libraries
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

// Mine
import { NowOnAirPage } from './pages/NowOnAirPage'
import { ProgramInfoPage } from './pages/ProgramInfoPage'
import { store } from './store'

/**
 * ルートコンポーネント
 */
export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NowOnAirPage} />
          <Route path="/programs/:service/:id" component={ProgramInfoPage} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}
