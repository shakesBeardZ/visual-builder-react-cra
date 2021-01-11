import React from 'react'

const Heading = ({
  data = {
    // default values
    title: 'Basic page header',
  },
}) => {
  return (
    <div className="vb__utils__heading">
      <strong>{data.title}</strong>
    </div>
  )
}

export default Heading
