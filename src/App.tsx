// Libraries
import React, { FC, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Mine
import { NowOnAirPage } from './pages/NowOnAirPage'
import { ProgramInfoPage } from './pages/ProgramInfoPage'
import { AreaIdContext } from './contexts/AreaId'

/**
 * ルートコンポーネント
 */
export const App: FC = () => {
  const [area] = useState('010')

  return (
    <AreaIdContext.Provider value={area}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NowOnAirPage} area={area} />
          <Route path="/programs/:service/:id" component={ProgramInfoPage} />
        </div>
      </BrowserRouter>
    </AreaIdContext.Provider>
  )
}
