import React from 'react'
import { Tabs } from 'antd'

const HeaderTabbed = ({
  data = {
    // default values
    title: 'Basic',
  },
}) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <h5 className="mb-0">
          <strong>{data.title}</strong>
        </h5>
      </div>
      <Tabs defaultActiveKey="1" className="vb-tabs">
        <Tabs.TabPane tab="History" key="1" />
        <Tabs.TabPane tab="Information" key="2" />
        <Tabs.TabPane tab="Actions" key="3" />
      </Tabs>
    </div>
  )
}

export default HeaderTabbed
