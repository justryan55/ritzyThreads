import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar'
import { HeaderBar } from './HeaderBar';
import { PromoBar } from './PromoBar';
import { Footer } from './Footer';
import { NavMobile } from './NavMobile';

const Layout = () => {

  const [activeItem, setActiveItem] = useState(null)

  const handleResetActiveItem = () => {
    setActiveItem(null)
  }

    return (
      <>
        <HeaderBar onLogoClick={handleResetActiveItem}/>
        {/* <NavMobile /> */}
        <NavigationBar activeItem={activeItem} setActiveItem={setActiveItem} />
        <PromoBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
}

export default Layout



