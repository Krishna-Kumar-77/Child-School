import React from 'react'
import Header from '../ui/Header';
import styled from 'styled-components';
import Services from './Services';
import About from './About';
import Choose from './Choose';
import Blog from './Blog';
import OurSchools from './OurSchools';
import ContactDiv from './ContactDiv';


const DashboardDiv = styled.div`
  width: 100%;
  background-color:transparent;
  background-size: 100%;
  background-repeat: no-repeat;
`
// const NavDiv = styled.div`
//   padding: 0 1.5rem;
// `;
function Dashboard() {
  return (
    <DashboardDiv>
     <Header/>
     <Services/>
     <About/>
     <Choose/>
     <Blog/>
     <OurSchools/>
     <ContactDiv/>
    </DashboardDiv>
  )
}

export default Dashboard