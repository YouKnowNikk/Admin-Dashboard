import { CalendarOutlined } from '@ant-design/icons'
import { Avatar, Select } from 'antd'
import React ,{useState}from 'react'
import CustomTable from './CustomTable'

function TableComponent() {
    const [statusFilter, setStatusFilter] = useState(null);
    const statusFilterOptions = [
        { label: 'All', value: null },
        { label: 'Success', value: 'Success' },
        { label: 'Pending', value: 'Pending' },
      ];
      const dataSource = [
        {
          key: '1',
          customer: <div style={{display:'flex' , alignItems:'center'}}>
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
              <div style={{marginLeft:'4px'}}>
                  <h5>Floyd Johnston</h5>
                  <p>Floyd@gmail.com</p>
              </div>
          </div>,
      
          status: 'Success',
          date: '2023-10-13',
          invoice: '$100,00',
          people:  <Avatar.Group maxCount={2}>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </Avatar.Group>,
        },
        {
          key: '2',
          customer: <div style={{display:'flex' , alignItems:'center'}}>
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
              <div style={{marginLeft:'4px'}}>
                  <h5>Floyd Johnston</h5>
                  <p>Floyd@gmail.com</p>
              </div>
          </div>,
      
          status: 'Pending',
          date: '2023-10-13',
          invoice: '$100,00',
          people:  <Avatar.Group maxCount={0}>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
            <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </Avatar.Group>,
        },
        
      ];
  return (
    <div style={{marginTop:'4%'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            
            <h2>Transaction History</h2>
            <div style={{border:'0.5px solid grey',borderRadius:'10px', padding:'4px'}} >
            <CalendarOutlined /><Select  value='month'></Select>
            </div>
        </div>
        <div>
            <Select style={{borderRadius:'7px',backgroundColor:'lightgray'}} value='Reciepent'></Select>
            <Select style={{borderRadius:'7px',backgroundColor:'lightgray', margin:'1rem 1rem'}} options={statusFilterOptions} value='Status' onChange={(value) => setStatusFilter(value)}></Select>
            <Select style={{borderRadius:'7px',backgroundColor:'lightgray'}} value='Amount' ></Select>
        </div>
        <div>
            <CustomTable  statusFilter={statusFilter} dataSource={dataSource}/>
        </div>
    </div>
  )
}

export default TableComponent