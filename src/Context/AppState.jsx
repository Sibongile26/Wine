import React, { useState } from 'react'
import AppContext from './AppContext'

function AppState({children}) {
  const user = {
    email: "sibongile@gmail.com",
    password: "1234"
  };

  const [data, setData] = useState(user);

  return (
    <div>
        <AppContext.Provider value={[data, setData]}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default AppState