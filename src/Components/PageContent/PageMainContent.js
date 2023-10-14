import React from 'react'
import Statement from './Statement'
import { CaretUpOutlined } from '@ant-design/icons'
import AnalyticsChart from './AnalyticalChart'
import TableComponent from './TableComponent'

function PageMainContent() {
  return (
    <div>
      <div className='selectionBox' >
        <Statement  title="Monthly Revenue" revenue = '$3500' percentage ='+2.4%' prevmonth ='$1.7K' />
        <Statement  title="Monthly Sales" revenue = '$6750' percentage ='+1.7%' prevmonth ='$3.1K' />
        <Statement  title="Total Profit" revenue = '$10,900' percentage ='+4.2%' prevmonth ='$8.9K' />
      </div>
    <div className='sectionBox'>
    <div >
        <h4>Total Sales & Cost</h4>
        <p style={{fontSize:'12px',color:'rgb(100,100,100) '}}>Last 60 days</p>
        <h2 style={{color:'#6e62e5',margin:'1rem 0 0.2rem 0',alignItems:'center'}}>$956.82k <span style={{fontSize:'12px' ,color:'limeGreen',backgroundColor:'rgb(159, 254, 159)',borderRadius:'75px',padding:'4px'}}><CaretUpOutlined  /> +6.4%</span></h2>
        <p  style={{fontSize:'12px',color:'rgb(100,100,100)',marginBottom:'1rem'}}><span style={{color:'limeGreen',fontWeight:'600'}}>+8.20k</span> vs Prev 60 days</p>
      </div>
      <div>
        <AnalyticsChart/>
      </div>
    </div>
    <TableComponent/>
    </div>
  )
}

export default PageMainContent