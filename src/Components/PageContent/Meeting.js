import { ClockCircleOutlined, LaptopOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React from 'react'

function Meeting(props) {
  return (
    <div style={{display:'flex',width:'100%',alignItems:'center',margin:'10% 0'}}>
        <div >
        {props.icon} 
        </div>
        <div style={{marginLeft:'4%'}}>
            <h4>{props.title}</h4>
            <p style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}> <span style={{marginRight:'2rem'}}><VideoCameraOutlined /></span>Google Meet <span style={{marginLeft:'6rem'}}><ClockCircleOutlined />{props.time}</span></p>
        </div>
    </div>
  )
}

export default Meeting