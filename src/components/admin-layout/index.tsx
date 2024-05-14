import FooterLayout from "@/components/admin-layout/Footer";
import HeadLayout from "@/components/admin-layout/Head";
import HeaderLayout from "@/components/admin-layout/Header";
import NavLayout from "@/components/admin-layout/Nav";
import ScriptLayout from "@/components/admin-layout/Script";
import SidebarLayout from "@/components/admin-layout/Sidebar";
import Head from "next/head";
import Script from "next/script"
import { useState } from "react";
/* eslint-disable */


type Proptypes = {
  children:React.ReactNode
}

const AdminLayout = (props:Proptypes) =>{
  const children = props.children
  return(
    
    <div lang="en" className="dark-style layout layout-menu-fixed layout-compact"

      data-theme="theme-default"
      data-assets-path="/admin-assets/assets/"
      data-template="vertical-menu-template">

      <HeadLayout />

      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <NavLayout />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <HeaderLayout />
            {/* / Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}

              {children}

              {/* / Content */}
              {/* Footer */}
              {/* <FooterLayout /> */}
              {/* / Footer */}
              <div className="content-backdrop fade" />
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>

      <ScriptLayout />
    </div>
  )
}

export default AdminLayout;