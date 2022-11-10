import React from 'react'

const Services = ({services}) => {
  return (
    <section className="services">
        <div className='container'>
          <div className='row'>
            {
              services.map((service) => {
                return <div className='col-md-6 col-lg-3' key={service.id}>
                <div className='services-item' style={{ "background" : `${service.bg}`}}>
                  <i className={service.icon}></i>
                  <div className='content'>
                    <h4>{service.title}</h4>
                    <p>{service.subtitle}</p>
                  </div>
                </div>
              </div>
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Services