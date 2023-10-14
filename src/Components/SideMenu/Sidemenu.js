import React, { useState, useEffect } from 'react';
import { MessageOutlined, HomeOutlined, SettingOutlined, SlidersOutlined, ShoppingOutlined, CompassOutlined, QuestionCircleOutlined, AntDesignOutlined} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('', 'g1', null, [getItem('Home', '/', <HomeOutlined />), getItem('Analytica', '/analytical', <SlidersOutlined />), getItem('Explore', '/explore', <CompassOutlined />), getItem('Shop', '/shop', <ShoppingOutlined />), getItem('Inbox', '/inbox', <MessageOutlined />)], 'group'),
  getItem('Tools', 'g2', null, [getItem('Setting', '/tools/setting', <SettingOutlined />), getItem('Help', '/tools/help', <QuestionCircleOutlined />)], 'group'),
  getItem('Projects', 'g3', null, [getItem('Amazon', '/projects/amazon'), getItem('Invinity HQ', 'projects/invinityHQ')], 'group'),
];

function Sidemenu() {
  let navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const handleItemClick = ({ key }) => {
    setSelectedKey(key);
    navigate(key);
  };

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleMenu}
      trigger={null}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
        <AntDesignOutlined style={{marginLeft:'-3rem',marginRight:'2rem'}}/>
        <h3 style={{ color: 'black' }}>Omio</h3>
        </div>
        <Menu
          defaultSelectedKeys={['/']}
          selectedKeys={[selectedKey]}
          mode="vertical"
          theme="light"
          items={items}
          onClick={handleItemClick}
        />
      </div>
    </Sider>
  );
}

export default Sidemenu;
