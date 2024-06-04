import WebLayout from "@/components/web-layout"
import DashboardView from "@/components/views/web/dashboard";
import ProjectServices from "@/services/projects";
import { useState, useEffect } from "react";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
  


    const getAllProjects = async () =>{
      const response = await ProjectServices.getAllProjects();
      const result = await response.json();
      setProjects(result.data);
    }
    getAllProjects()
    
  },[]);
  console.log(projects)
  return (
    <WebLayout>
      <DashboardView projects = {projects}/>
    </WebLayout>
    
  )
}
export default Home;