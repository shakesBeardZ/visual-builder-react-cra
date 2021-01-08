import React from 'react'

const Footer = ({
  data = {
    // default values
    mainTitle: 'Unlock Account',
    mainIcon: 'fe fe-lock',
    mainType: 'btn-success',
    additionalTitle: 'Cancel',
  },
}) => {
  return (
    <div>
      <a className={`${data.mainType} btn mr-2`}>
        <i className={`${data.mainIcon} mr-2`} />
        {data.mainTitle}
      </a>
      <a className="btn btn-link">{data.additionalTitle}</a>
    </div>
  )
}

export default Footer
