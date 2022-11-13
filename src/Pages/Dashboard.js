import React, { useEffect } from 'react'
import DashboardContainer from '../Components/Dashboard/DashboardContainer'
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import TitlePage from '../Components/TitlePage/TitlePage'

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <TitlePage title={"Dashboard"}>
      <BreadcrumbHeader title={'Dashboard'} />
      <DashboardContainer />
    </TitlePage>
  )
}

export default Dashboard