import React from 'react'

const Header = ({
  data = {
    // default values
    title: 'Basic header',
  },
}) => {
  return (
    <h5 className="mb-0">
      <strong>{data.title}</strong>
    </h5>
  )
}

export default Header
