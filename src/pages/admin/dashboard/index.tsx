import AdminLayout from "@/components/admin-layout";
import DashboardView from "@/components/views/admin/dashboard";
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

