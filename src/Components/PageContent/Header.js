import React from 'react'
import { Avatar, Badge, Select, Space } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
function Header() {
  return (
    <div className="header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", width: '65%' }} >
        <Space >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Badge count={3} color='blue' >
              <Avatar
                src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                size={40}
                shape="circle"
              />
            </Badge>
            <div style={{ marginLeft: '20px' }}>
              <h2>Good Evening Team!</h2>
              <p>Have an in-depth look at all the metrics within your dashboard.</p>
            </div>
          </div>
        </Space>
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
          <SearchOutlined style={{ fontSize: '25px' }} />
        </div>
      </div>
      <Space >
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <div style={{marginRight:'240px'}}>
          <Badge dot  color='blue'>
            <BellOutlined style={{ fontSize: '25px' }} />
          </Badge>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}} className='user-select'>
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            size={40}
            shape="circle"
          />
          <Select className="custom-select" style={{ width: '100', border: 'none' }} value="Johnstan">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
       </div>
      </Space>
    </div>
  )
}

export default Header

