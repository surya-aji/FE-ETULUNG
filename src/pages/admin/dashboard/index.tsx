import AdminLayout from "@/components/admin-layout";
import FooterLayout from "@/components/admin-layout/Footer";
import HeadLayout from "@/components/admin-layout/Head";
import HeaderLayout from "@/components/admin-layout/Header";
import NavLayout from "@/components/admin-layout/Nav";
import ScriptLayout from "@/components/admin-layout/Script";
import SidebarLayout from "@/components/admin-layout/Sidebar";
import DashboardView from "@/components/views/admin/dashboard";
import Head from "next/head";
import Script from "next/script"
import { useState } from "react";
/* eslint-disable */

const AdminPage = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <AdminLayout>
      <DashboardView/>
    </AdminLayout>
  
  )
}

export default AdminPage;

