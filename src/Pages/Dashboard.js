import React from 'react'
import DashboardContainer from '../Components/Dashboard/DashboardContainer'
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import TitlePage from '../Components/TitlePage/TitlePage'


const Dashboard = () => {
  return (
    <TitlePage title={"Dashboard"}>
      <BreadcrumbHeader title={'Dashboard'} />
      <DashboardContainer />
    </TitlePage>
  )
}

export default Dashboard