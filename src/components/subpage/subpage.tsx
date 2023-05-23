import React from "react";
import "./subpage.scss";
import Side from '../sidebar/sidebar'
import { Routes, Route } from "react-router-dom";
import Userpage from "../userpage/userpage";
import Dashboard from "../dashboard/dashboard";
import Userdetails from "../userdetails/userdetails";
// Exports a Subpage that accepts an isSidebarOpen prop.
export default function Subpage({ isSidebarOpen }: any) {
 return (
  <section className="subpage">
   {/* Renders the Side component and passes the isSidebarOpen prop to it. */}
   <Side isSidebarOpen={isSidebarOpen} />
   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/userpage" element={<Userpage />} />
    <Route path="/userdetails/:id" element={<Userdetails />} />
   </Routes>
  </section>
 );
}
