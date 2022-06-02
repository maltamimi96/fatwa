import { AppBar, makeStyles, Toolbar, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

// const useStyles = makeStyles({
//     page:{
//         background:'#f9f9f9',
//         width:'100%'
//     }


// })
function Layout({children}) {
    // const classes=useStyles
    return (

    <div>
        <div>

            {children}
        </div>
        
    </div>

  )
}

export default Layout

{/* <AppBar>
<Toolbar>
    <Typography>
        App Bar
    </Typography>
</Toolbar>
</AppBar> */}