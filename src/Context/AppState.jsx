import React, { useState } from 'react'
import AppContext from './AppContext'


function AppState({children}) {

    const [email, setEmail] = useState('Sibongile@gmail.com')
    const [password,setPassword] = useState('1234')

  return (
    <div>
        <AppContext.Provider value={[email, password]}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default AppState