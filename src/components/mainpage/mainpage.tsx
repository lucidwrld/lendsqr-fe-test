import React, { useState } from "react";
import Nav from "../nav/navbar";
import './mainpage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sub from "../subpage/subpage";

export default function Mainpage() {
 // State variable to control the visibility of the sidebar
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 // Toggle the visibility of the sidebar
 const toggleSidebar = () => {
  console.log("asdas")
  setIsSidebarOpen(!isSidebarOpen);
 };
 return (

  <section className="App">
   {/* Render the navigation component and pass the toggleSidebar function */}
   <Nav toggleSidebar={toggleSidebar} />
   {/* Render the subpage component and pass the isSidebarOpen state */}
   <Sub isSidebarOpen={isSidebarOpen} />
  </section>
 );
}