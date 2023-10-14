import { Avatar } from 'antd'
import React from 'react'

function Statement(props) {
  return (
    <div style={{display:'flex',alignItems:'center', margin:'1rem 0'}}>
        <div><Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" size={40}  /></div>
        <div style={{textAlign:'left',marginLeft:'0.4rem'}}>
            <p>{props.title}</p>
            <h5 style={{margin:'0.6rem 0',color:'white'}}>{props.revenue} <span style={{backgroundColor:'white',padding:'4px',borderRadius:'75px 75px' ,color:'#6e62e5'}}>{props.percentage}</span></h5>
            <p >Previous month <span>{props.prevmonth}</span></p>
        </div>
    </div>
  )
}

export default Statement