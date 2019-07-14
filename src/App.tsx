// Libraries
import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Mine
import { NowOnAirPage } from './pages/NowOnAirPage'

/**
 * ルートコンポーネント
 */
export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={NowOnAirPage} />
      </div>
    </BrowserRouter>
  )
}
