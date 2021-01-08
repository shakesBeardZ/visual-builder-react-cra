import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({
  data = {
    // default values
    title: 'Save',
    type: 'primary',
  },
}) => {
  return (
    <div>
      <Button type={data.type}>{data.title}</Button>
    </div>
  )
}

export default ButtonComponent
