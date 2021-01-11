import React from 'react'

const Heading = ({
  data = {
    // default values
    title: 'Header with description',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
}) => {
  return (
    <div className="vb__utils__heading">
      <strong>{data.title}</strong>
      <div className="text-muted font-size-15">{data.description}</div>
    </div>
  )
}

export default Heading
