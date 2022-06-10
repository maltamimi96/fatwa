import { Container} from '@mui/system'
import React from 'react'


function Layout({children}) {
    return (
        <div className='wrapper'>
            {children}
        </div>
  )
}

export default Layout

