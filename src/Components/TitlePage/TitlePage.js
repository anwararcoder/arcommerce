import React from 'react'

const TitlePage = (props) => {

    document.title = "ARCommerce - " + props.title

  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default TitlePage