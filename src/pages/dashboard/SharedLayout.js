import React from 'react'
import {Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout.js'
import {SmallSidebar , BigSidebar , Navbar} from '../../components/index.js'

export default function SharedLayout() {
  return <Wrapper>
          <main className='dashboard' >
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar/>
              <div className='dashboard-page' >
                <Outlet/>
              </div>
            </div>
          </main>
      
  </Wrapper>
}


