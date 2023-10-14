import { ArrowRightOutlined, CodepenCircleOutlined, DatabaseOutlined, DownOutlined, LaptopOutlined } from '@ant-design/icons'
import { Avatar} from 'antd'
import React from 'react'
import CalendarComponent from './CalendarComponent'
import Meeting from './Meeting'

function PageSideContent() {
  return (
    <div style={{marginLeft:'5%'}} className='premium'>
      <p style={{color:'blue',marginBottom:'1rem'}} className='premium'>Premium Access</p>
      <div>
        <h2>Take Back </h2>
        <h2>Your Creative</h2>
        <h2>Control <span style={{marginLeft:'0.5rem'}}> <Avatar.Group maxCount={3}>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </Avatar.Group></span></h2>
      </div>
      <p style={{fontSize:'0.9rem',color:'rgb(207,207,207)',marginTop:'2%'}}>The professional platform <span style={{fontSize:'0.7rem',marginLeft:'2%'}}><DownOutlined /></span></p>
    <div>
      <div style={{display:'flex',justifyContent:'space-between',width:'90%' ,border:'0.5px solid lightGrey',padding:'2%',borderRadius:'10px',color:'blue',alignItems:'center',margin:'4% 0'}}>
        <p>Upgrade Now</p>
        <div><ArrowRightOutlined /></div>
      </div>
    </div>
   {/* <CalendarComponent/> */}
   <Meeting title="Meeting With Client" time="12pm"icon ={<LaptopOutlined  style={{backgroundColor:'grey',width:'100%',fontSize:'30px',padding:'15px',borderRadius:'100px'}}/>}/>
   <Meeting title="Weekly Report" time = '3pm' icon={<DatabaseOutlined  style={{backgroundColor:'grey',width:'100%',fontSize:'30px',padding:'15px',borderRadius:'100px'}}/>}/>
   <Meeting title = "Daily scrum metting" time = '5pm' icon ={<CodepenCircleOutlined style={{backgroundColor:'grey',width:'100%',fontSize:'30px',padding:'15px',borderRadius:'100px'}} />}/> 
   
    </div>
  )
}

export default PageSideContent