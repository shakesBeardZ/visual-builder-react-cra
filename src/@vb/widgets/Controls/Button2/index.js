import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({
  data = {
    // default values
    title: 'New Request',
    icon: 'fe fe-plus-circle',
    type: 'primary',
  },
}) => {
  return (
    <Button type={data.type} className="btn-with-addon">
      <span className="btn-addon">
        <i className={`btn-addon-icon ${data.icon}`} />
      </span>
      {data.title}
    </Button>
  )
}

export default ButtonComponent
