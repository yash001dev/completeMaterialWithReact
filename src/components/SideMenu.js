import { makeStyles } from '@material-ui/core'
import React from 'react'


//withStypes & makeStyles
const style=makeStyles({
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height:'100%',
        backgroundColor:'#253053'
    }
})


const SideMenu=(props)=> {
    const classes=style();
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SideMenu;
