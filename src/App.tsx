// Libraries
import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Mine
import { NowOnAirPage } from './pages/NowOnAirPage'
import { ProgramInfoPage } from './pages/ProgramInfoPage'

/**
 * ルートコンポーネント
 */
export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={NowOnAirPage} />
        <Route
          path="/programs/:area/:service/:id"
          component={ProgramInfoPage}
        />
      </div>
    </BrowserRouter>
  )
}
