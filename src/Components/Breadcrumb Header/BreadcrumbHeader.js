import React from 'react'

const BreadcrumbHeader = ({title}) => {
  return (
    <section className="breadcrumb-header">
        <div className="overlay"></div>
        <div className="container">
            <div className="breadcrumb-info">
                <h1>{title}</h1>
            </div>
        </div>
    </section>
  )
}

export default BreadcrumbHeader