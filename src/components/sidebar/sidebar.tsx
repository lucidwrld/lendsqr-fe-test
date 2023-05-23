import React, { useState } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import homei from '../../asset/home.svg'
import briefi from '../../asset/briefcase.svg'
import op1 from '../../asset/op1.svg'
import op2 from '../../asset/op2.svg'
import op3 from '../../asset/op3.svg'
import op4 from '../../asset/op4.svg'
import op5 from '../../asset/op5.svg'
import op6 from '../../asset/op6.svg'
import op7 from '../../asset/op7.svg'
import op8 from '../../asset/op8.svg'
import op9 from '../../asset/op9.svg'
import op10 from '../../asset/op10.svg'
import op11 from '../../asset/op11.svg'
import op12 from '../../asset/op12.svg'
import op13 from '../../asset/op13.svg'
import op14 from '../../asset/op14.svg'
import op15 from '../../asset/op15.svg'
import op16 from '../../asset/op16.svg'
import op17 from '../../asset/op17.svg'
import op18 from '../../asset/op18.svg'
import op19 from '../../asset/op19.svg'
import op20 from '../../asset/op20.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Add the "faAngleDown" icon to the library
library.add(faAngleDown,);
export default function Sidebar({ isSidebarOpen }: any) {
 // Get the current location
 const location = useLocation();

 // Track the active link
 const [activeLink, setActiveLink] = useState(location.pathname);

 // Handle link click event
 console.log(isSidebarOpen)
 const handleLinkClick = (path: string) => {
  setActiveLink(path);
 };


 return (
  //toggle the sidebar on mobile screen
  <section className={`sidebar ${isSidebarOpen ? "sSlide" : ""}`}>
   <div className="topSide">
    <button className="btnn"><img src={briefi} alt="home"></img><h1>Switch Organization</h1><FontAwesomeIcon icon="angle-down" className="angle-down" /></button>
    {/* checking if the active link path is the same link path in the link and adding active to the classname */}
    <Link className={`li ${activeLink === "/mainpage/" ? "active" : ""}`} to="/mainpage/" onClick={() => handleLinkClick("/mainpage/")}
    > <img src={homei} alt="user" /> <h1>Dashboard</h1> </Link>
   </div>
   <div className="subTitle"><h1>CUSTOMERS</h1></div>
   <div className="options">
    <Link className={`li ${activeLink === "/mainpage/userpage" ? "active" : ""}`} to="/mainpage/userpage" onClick={() => handleLinkClick("/mainpage/userpage")}
    > <img src={op1} alt="user" /> <h1>Users</h1> </Link>
    <Link
     className={`li ${activeLink === "/mainpage/guarantor" ? "active" : ""}`}
     to="/mainpage/guarantor"
     onClick={() => handleLinkClick("/mainpage/guarantor")}
    >
     <img src={op2} alt="guarantor" />
     <h1>Guarantors</h1>
    </Link>
    <Link className={`li ${activeLink === "/mainpage/loans" ? "active" : ""}`} to="/mainpage/loans" onClick={() => handleLinkClick("/mainpage/loans")}
    > <img src={op3} alt="user" /> <h1>Loans</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/decisionmodels" ? "active" : ""}`} to="/mainpage/decisionmodels" onClick={() => handleLinkClick("/mainpage/decisionmodels")}
    > <img src={op4} alt="user" /> <h1>Decision Models</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/savings" ? "active" : ""}`} to="/mainpage/savings" onClick={() => handleLinkClick("/mainpage/savings")}
    > <img src={op5} alt="user" /> <h1>Savings</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/loanrequest" ? "active" : ""}`} to="/mainpage/loanrequest" onClick={() => handleLinkClick("/mainpage/loanrequest")}
    > <img src={op6} alt="user" /> <h1>Loan Requests</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/whitelist" ? "active" : ""}`} to="/mainpage/whitelist" onClick={() => handleLinkClick("/mainpage/whitelist")}
    > <img src={op7} alt="user" /> <h1>WhiteList</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/karma" ? "active" : ""}`} to="/mainpage/karma" onClick={() => handleLinkClick("/mainpage/karma")}
    > <img src={op8} alt="user" /> <h1>Karma</h1> </Link>
   </div>
   <div className="subTitle"><h1>BUSINESSES</h1></div>
   <div className="options">

    <Link className={`li ${activeLink === "/mainpage/organization" ? "active" : ""}`} to="/mainpage/organization" onClick={() => handleLinkClick("/mainpage/organization")}
    > <img src={briefi} alt="user" /> <h1>Organization</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/loanproducts" ? "active" : ""}`} to="/mainpage/loanproducts" onClick={() => handleLinkClick("/mainpage/loanproducts")}
    > <img src={op6} alt="user" /> <h1>Loan Products</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/savingproducts" ? "active" : ""}`} to="/mainpage/savingproducts" onClick={() => handleLinkClick("/mainpage/savingproducts")}
    > <img src={op9} alt="user" /> <h1>Savings Products</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/feeandcharges" ? "active" : ""}`} to="/mainpage/feeandcharges" onClick={() => handleLinkClick("/mainpage/feeandcharges")}
    > <img src={op10} alt="user" /> <h1>Fee and Charges</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/transaction" ? "active" : ""}`} to="/mainpage/transaction" onClick={() => handleLinkClick("/mainpage/transaction")}
    > <img src={op11} alt="user" /> <h1>Transaction</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/services" ? "active" : ""}`} to="/mainpage/services" onClick={() => handleLinkClick("/mainpage/services")}
    > <img src={op12} alt="user" /> <h1>Services</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/serviceaccount" ? "active" : ""}`} to="/mainpage/serviceaccount" onClick={() => handleLinkClick("/mainpage/serviceaccount")}
    > <img src={op13} alt="user" /> <h1>Service Account</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/settlements" ? "active" : ""}`} to="/mainpage/settlements" onClick={() => handleLinkClick("/mainpage/settlements")}
    > <img src={op14} alt="user" /> <h1>Settlements</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/reports" ? "active" : ""}`} to="/mainpage/reports" onClick={() => handleLinkClick("/mainpage/reports")}
    > <img src={op15} alt="user" /> <h1>Reports</h1> </Link>
   </div>
   <div className="subTitle"><h1>SETTINGS</h1></div>
   <div className="options">

    <Link className={`li ${activeLink === "/mainpage/preferences" ? "active" : ""}`} to="/mainpage/preferences" onClick={() => handleLinkClick("/mainpage/preferences")}
    > <img src={op16} alt="user" /> <h1>Preferences</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/feeandpricing" ? "active" : ""}`} to="/mainpage/feeandpricing" onClick={() => handleLinkClick("/mainpage/feeandpricing")}
    > <img src={op17} alt="user" /> <h1>Fee and Pricing</h1> </Link>
    <Link className={`li ${activeLink === "/mainpage/auditlogs" ? "active" : ""}`} to="/mainpage/auditlogs" onClick={() => handleLinkClick("/mainpage/auditlogs")}
    > <img src={op18} alt="user" /> <h1>Audit Logs</h1> </Link>
    {/* checking if the active page is /mainpage/userdetails and if true then display this link */}
    {location.pathname.includes("/mainpage/userdetails/") && (<Link className={`li ${activeLink === "/mainpage/systemmessages" ? "active" : ""}`} to="/mainpage/systemmessages" onClick={() => handleLinkClick("/mainpage/systemmessages")}
    > <img src={op19} alt="user" /> <h1>Systems Messagse</h1> </Link>
    )}
   </div>

   {/* checking if the active page is /mainpage/userdetails and if true then display this div */}
   {location.pathname.includes("/mainpage/userdetails/") && (
    <div className="logoutt">
     <button><img src={op20} alt="logout" /> Logout</button>
     <h1>v1.2.0</h1>
    </div>
   )}
  </section>



 );

}