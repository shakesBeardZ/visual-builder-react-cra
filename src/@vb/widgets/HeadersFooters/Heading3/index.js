import React from 'react'

const Heading = ({
  data = {
    // default values
    title: 'Header with button',
    button: 'View All',
    url: '/',
  },
}) => {
  return (
    <div className="vb__utils__heading">
      <strong className="mr-3">{data.title}</strong>
      <a href={data.url} className="btn btn-light" target="_blank" rel="noopener noreferrer">
        <span>{data.button}</span>
      </a>
    </div>
  )
}

export default Heading
