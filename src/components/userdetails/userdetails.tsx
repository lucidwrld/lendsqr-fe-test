import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './userdetails.scss'
import arrowleft from '../../asset/arrowleft.svg'
import starsolid from '../../asset/starsolid.svg'
import starlight from '../../asset/starlight.svg'
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

// Add font awesome icons to the library
library.add(faArrowLeft, faAngleRight, faEllipsisVertical);

// Define interfaces for different types of user data
interface User {
 id: number;
 firstName: string;
 lastName: string;
 email: string;
 phoneNumber: string;
 createdAt: string;
 accountBalance: string;
 accountNumber: string;
}
interface UserProfile {
 firstName: string;
 lastName: string;
 phoneNumber: string;
 avatar: string;
 gender: string;
 bvn: number;
 address: string;
 currency: string;
}
interface UserGuarantor {
 firstName: string;
 lastName: string;
 phoneNumber: string;
 gender: string;
 address: string;
}
interface UserSocial {
 facebook: string;
 instagram: string;
 twitter: string;
}
interface Usereducation {
 level: string;
 employmentStatus: string;
 sector: string;
 duration: string;
 officeEmail: string;
 monthlyIncome: string[];
 loanRepayment: string;
}
const Userdetails: React.FC = () => {
 const { id } = useParams();
 const [user, setUser] = useState<User | null>(null);
 const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
 const [userGuarantor, setUserGurantor] = useState<UserGuarantor | null>(null)
 const [userSocial, setUserSocial] = useState<UserSocial | null>(null)
 const [userEducation, setUserEducation] = useState<Usereducation | null>(null)
 useEffect(() => {
  // Fetch user details from the API

  const fetchUserDetails = async () => {
   try {
    const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
    const data = await response.json();
    setUser(data);
    setUserProfile(data.profile);
    setUserGurantor(data.guarantor);
    setUserSocial(data.socials);
    setUserEducation(data.education)
   } catch (error) {
    console.error("Error fetching user details:", error);
   }
  };
  // Call the fetchUserDetails function when the component mounts
  fetchUserDetails();
 }, [id]);
 // If user data is not yet loaded, show a loading message
 if (!user) {
  return <div>Loading user details...</div>;
 }
 // Helper function to format monthly income
 const formatMonthlyIncome = (income: string[]) => {
  if (income.length === 2) {
   return income.join(" - ");
  }
  return "";
 };


 return (
  <section className="userdetails">
   {/* User details UI */}
   <div className="laptopSize">
    <div className="backBtn"><Link className="button" to={`/mainpage/userpage/`}> <img src={arrowleft} alt="arrowleft" /><h1>Back to Users</h1></Link></div>
    <div className="title tit">
     <h1>User Details</h1>
     <div className="Btns">
      <button id="blacklist">BLACKLIST USER</button>
      <button id="activate">ACTIVATE USER</button>
     </div>
    </div>
    {/* User profile UI */}
    <div className="userPro">
     <div className="top">
      <img src={userProfile?.avatar} alt="" />
      <div className="profileName">
       <h1>{userProfile?.firstName} {userProfile?.lastName}</h1>
       <h2>LSQFf587g90</h2>
      </div>
      <div className="userTier">
       <h1>User's Tier</h1>
       <div className="stars">
        <img src={starsolid} alt="starsolid" />
        <img src={starlight} alt="starlight" />
        <img src={starlight} alt="starlight" />
       </div>
      </div>
      <div className="bankAmo">
       <h1>₦ {user.accountBalance}</h1>
       <h2>{user.accountNumber}/Providus Bank</h2>
      </div>
     </div>
     <div className="bottom">
      <button className="active"><h1>General Details</h1></button>
      <button><h1>Documents</h1></button>
      <button><h1>Bank Details</h1></button>
      <button><h1>Loans</h1></button>
      <button><h1>Savings</h1></button>
      <button><h1>App and System</h1></button>
     </div>
    </div>
    {/* User details sections UI */}
    <div className="userDetail">
     <div className="personalInfo">
      <div className="title"><h1>Personal Information</h1></div>
      <div className="personalDetail">
       <div className="Detail">
        <h1>FULL NAME</h1>
        <h2>{userProfile?.firstName} {userProfile?.lastName}</h2>
       </div>
       <div className="Detail">
        <h1>PHONE NUMBER</h1>
        <h2>{userProfile?.phoneNumber}</h2>
       </div>
       <div className="Detail">
        <h1>EMAIL ADDRESS</h1>
        <h2>{user.email}</h2>
       </div>
       <div className="Detail">
        <h1>BVN</h1>
        <h2>{userProfile?.bvn}</h2>
       </div>
       <div className="Detail">
        <h1>GENDER</h1>
        <h2>{userProfile?.gender}</h2>
       </div>
       <div className="Detail">
        <h1>MARITAL STATUS</h1>
        <h2>Single</h2>
       </div>
       <div className="Detail">
        <h1>Currency</h1>
        <h2>{userProfile?.currency}</h2>
       </div>
       <div className="Detail">
        <h1>Address</h1>
        <h2>{userProfile?.address}</h2>
       </div>
      </div>

     </div>
     {userEducation ? (
      <div className="educationInfo">
       <div className="title"><h1>Education and Employment</h1></div>
       <div className="personalDetail">
        <div className="Detail">
         <h1>Level of education</h1>
         <h2>{userEducation.level}</h2>
        </div>
        <div className="Detail">
         <h1>employmentStatus</h1>
         <h2>{userEducation.employmentStatus}</h2>
        </div>
        <div className="Detail">
         <h1>sector of Employment</h1>
         <h2>{userEducation.sector}</h2>
        </div>
        <div className="Detail">
         <h1>duration of employment</h1>
         <h2>{userEducation.duration}</h2>
        </div>
        <div className="Detail">
         <h1>office email</h1>
         <h2>{userEducation.officeEmail}</h2>
        </div>
        <div className="Detail">
         <h1>Monthly income</h1>
         <h1>₦ {formatMonthlyIncome(userEducation.monthlyIncome)}</h1>
        </div>
        <div className="Detail">
         <h1>loan repayment</h1>
         <h2>{userEducation.loanRepayment}</h2>
        </div>
       </div>

      </div>
     ) : (
      <h1>Loading...</h1>
     )}
     <div className="socialInfo">
      <div className="title"><h1>Socials</h1></div>
      <div className="personalDetail">
       <div className="Detail">
        <h1>Twitter</h1>
        <h2>{userSocial?.twitter}</h2>
       </div>
       <div className="Detail">
        <h1>Facebook</h1>
        <h2>{userSocial?.facebook}</h2>
       </div>
       <div className="Detail">
        <h1>Instagram</h1>
        <h2>{userSocial?.instagram}</h2>
       </div>

      </div>

     </div>
     <div className="guarantorInfo">
      <div className="title"><h1>Guarantor</h1></div>
      <div className="personalDetail">
       <div className="Detail">
        <h1>Full Name</h1>
        <h2>{userGuarantor?.firstName} {userGuarantor?.lastName}</h2>
       </div>
       <div className="Detail">
        <h1>Phone Number</h1>
        <h2>{userGuarantor?.phoneNumber}</h2>
       </div>
       <div className="Detail">
        <h1>Address</h1>
        <h2>{userGuarantor?.address}</h2>
       </div>
       <div className="Detail">
        <h1>Gender</h1>
        <h2>{userGuarantor?.gender}</h2>
       </div>
      </div>

     </div>
     <div className="guarantorInfo" id="guarantorBottom">
      <div className="title"></div>
      <div className="personalDetail">
       <div className="Detail">
        <h1>Full Name</h1>
        <h2>{userGuarantor?.firstName} {userGuarantor?.lastName}</h2>
       </div>
       <div className="Detail">
        <h1>Phone Number</h1>
        <h2>{userGuarantor?.phoneNumber}</h2>
       </div>
       <div className="Detail">
        <h1>Address</h1>
        <h2>{userGuarantor?.address}</h2>
       </div>
       <div className="Detail">
        <h1>Gender</h1>
        <h2>{userGuarantor?.gender}</h2>
       </div>
      </div>

     </div>
    </div>
   </div>
  </section>
 );
};

export default Userdetails;
