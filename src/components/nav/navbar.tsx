import React, { useState } from "react";
import "./navbar.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../asset/lendsqrlogo.svg'
import profile from '../../asset/profile.svg'
import { Link } from "react-router-dom";
// Add font awesome icons to the library
library.add(faSearch, faBell, faCaretDown, faEllipsisVertical, faBars, faTimesCircle);

export default function Navbar({ toggleSidebar }: any) {
 // State variables
 const [isNavOpen, setIsNavOpen] = useState(false); // Controls the visibility of the full navigation menu
 const [isProOpen, setIsProOpen] = useState(false);// Controls the visibility of the profile dropdown menu

 // Toggle the visibility of the full navigation menu
 const toggleNav = () => {
  setIsNavOpen(!isNavOpen);
 };

 // Toggle the visibility of the profile dropdown menu
 const togglePro = () => {
  setIsProOpen(!isProOpen);
 };

 // Close the full navigation menu
 const closeNav = () => {
  setIsNavOpen(false);
 };

 return (
  <section className="navbar">
   {/* button that toggles the sidebar div in sidebar.tsx */}
   <button className="openSi" onClick={toggleSidebar}><FontAwesomeIcon className="bars" icon="ellipsis-vertical" /></button>
   <img src={logo} alt='logo' />
   <div className="searchdiv">
    <input type="text" placeholder="Search for anything"></input>
    <button><FontAwesomeIcon icon="search" /></button>
   </div>
   <div className="detailBtn">
    <Link className="docs" to="/docs">Docs</Link>
    <button className="notification"><FontAwesomeIcon icon="bell" /></button>
    <div className="profile">
     <img src={profile} alt='profile' />
     <h1 className="fw-bolder">Adedeji</h1>
     <button><FontAwesomeIcon className="caretdown" icon="caret-down" /></button>
    </div>
   </div>
   <button className="Menu" onClick={toggleNav}><FontAwesomeIcon className="bars" icon="bars" /></button>
   {isNavOpen && <div className="navSlide">
    {isNavOpen && <button className="closeMenu" onClick={closeNav}><FontAwesomeIcon className="times-circle" icon="times-circle" /></button>}
    <div className="searchdiv">
     <input type="text" placeholder="Search for anything"></input>
     <button><FontAwesomeIcon icon="search" /></button>
    </div>
    <div className="detailBtn">
     <div className="profile">
      <img src={profile} alt='profile' />
      <h1 className="fw-bolder">Adedeji</h1>
      <button onClick={togglePro}><FontAwesomeIcon className="caretdown" icon="caret-down" /></button>
     </div>
     {isProOpen && <div className="pro">
      <Link className="prol" to="/logout">Log Out</Link>
      <Link className="prol" to="/setting">Settings</Link>
     </div>}
     <Link className="docs" to="/docs">Docs</Link>
     <button className="notification">Notifications <FontAwesomeIcon className="bell" icon="bell" /></button>

    </div>
   </div>}

  </section>
 );
}






