import React from 'react'

const Heading = ({
  data = {
    // default values
    title: 'Tag',
  },
}) => {
  return <div className="badge badge-example">{data.title}</div>
}

export default Heading
