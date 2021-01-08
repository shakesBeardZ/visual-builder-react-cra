import React from 'react'

const Footer = ({
  data = {
    // default values
    mainTitle: 'Save',
    mainType: 'btn-primary',
    additionalTitle: 'Cancel',
  },
}) => {
  return (
    <div>
      <a className={`${data.mainType} btn mr-2`}>{data.mainTitle}</a>
      <a className="btn btn-link">{data.additionalTitle}</a>
    </div>
  )
}

export default Footer
