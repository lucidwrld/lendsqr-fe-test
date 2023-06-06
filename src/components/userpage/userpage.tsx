import React, { useEffect, useState } from "react";
import './userpage.scss'
// Importing SVG assets
import user1 from '../../asset/user1.svg'
import user1c from '../../asset/user1c.svg'
import user1a from '../../asset/user1a.svg'
import user1b from '../../asset/user1b.svg'
import filterba from '../../asset/filterbar.svg'
import hidden from '../../asset/hidden.svg'
import activate from '../../asset/op7.svg'
import blacklist from '../../asset/op8.svg'
// Importing font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
// Importing CSS styles from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Adding font awesome icons to the library
library.add(faAngleLeft, faAngleRight, faEllipsisVertical);
// Interface for the User object
interface User {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}
interface Props {
  apiData: string;
}

// Userpage component
const Userpage: React.FC = () => {
  // State variables
  const [posts, setPosts] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showStatO, setShowStatO] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const itemsPerPage = 9;

  useEffect(() => {
    // Fetching posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  //function to update the current page with the provided page number
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const DateTimeConverter: React.FC<Props> = ({ apiData }) => {
    const formattedDate = formatDate(apiData);
    console.log(formattedDate)
    return <div className="details"><h1 className="details" id="datejoined">{formattedDate}</h1></div>;
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  //function to move to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  //function to go to the previous page
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  //calculates the page numbers to show in the page no ul
  const getPageNumbers = () => {
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const maxVisibleButtons = 6;
    //If the total number of pages is less than or equal to the maximum visible buttons, it returns an array of page numbers from 1 to totalPages.
    if (totalPages <= maxVisibleButtons) {
      return Array.from(Array(totalPages), (_, index) => index + 1);
    }

    const middleIndex = Math.floor(maxVisibleButtons / 2);
    const isAtStart = currentPage <= middleIndex;
    const isAtEnd = currentPage >= totalPages - middleIndex;

    if (isAtStart) {
      return Array.from(Array(maxVisibleButtons - 1), (_, index) => index + 1);
    } else if (isAtEnd) {
      return Array.from(Array(maxVisibleButtons - 1), (_, index) => totalPages - maxVisibleButtons + 2 + index);
    } else {
      return Array.from(Array(maxVisibleButtons - 2), (_, index) => currentPage - middleIndex + 1 + index);
    }
  };

  //It sets the button color based on the innerText value.
  //If innerText matches a specific string value ('Inactive', 'Pending', 'Blacklisted', 'Active'), it applies corresponding styles to the buttons with the class name 'stat'.
  const buttonColor = (innerText: string) => {
    if (innerText === 'Inactive') {
      // Code for 'Inactive' button color
      const statButtons = document.querySelectorAll('.stat') as NodeListOf<HTMLButtonElement>;
      statButtons.forEach((button) => {
        button.style.backgroundColor = "#21407d38";
        button.style.color = "#545F7D"
      });
    } else {
      if (innerText === 'Pending') {
        // Code for 'Inactive' button color
        const statButtons = document.querySelectorAll('.stat') as NodeListOf<HTMLButtonElement>;
        statButtons.forEach((button) => {
          button.style.backgroundColor = "#E9B20038";
          button.style.color = "#E9B200"
        });
      } else {
        if (innerText === 'Blacklisted') {
          // Code for 'Inactive' button color
          const statButtons = document.querySelectorAll('.stat') as NodeListOf<HTMLButtonElement>;
          statButtons.forEach((button) => {
            button.style.backgroundColor = "#E4033B38";
            button.style.color = "#E4033B"
          });
        } else {
          if (innerText === 'Active') {
            // Code for 'Inactive' button color
            const statButtons = document.querySelectorAll('.stat') as NodeListOf<HTMLButtonElement>;
            statButtons.forEach((button) => {
              button.style.backgroundColor = "#39CD6238";
              button.style.color = "#39CD62"
            });
          }
        }
      }
    }
  };

  //It runs the code inside the hook whenever the currentPage state changes.
  useEffect(() => {
    //It selects all elements with the class name 'stat' and applies the button color styling based on their inner text using the buttonColor function.
    const statButtons = document.querySelectorAll(".stat") as NodeListOf<HTMLButtonElement>;
    statButtons.forEach((button) => {
      buttonColor(button.innerText);
    });
  }, [currentPage]);
  //It toggles the state of showStatO by negating its current value.
  const toggleFilterForm = () => {
    setShowStatO((prevShowStatO) => !prevShowStatO);
  };
  //It toggles the selection of an item identified by itemId.
  const toggleStatO = (itemId: number) => {
    //If the currently selected item matches itemId, it clears the selection by setting selectedItemId to null. Otherwise, it sets selectedItemId to itemId.
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
    }
  };


  return (<div className="userpage">
    <section className="laptopSize">
      <div className="Title"><h1>Users</h1></div>
      <div className="cards">
        <div className="card">
          <div className="card-top">
            <img src={user1} alt="user"></img>
          </div>
          <div className="card-body">
            <h1>USERS</h1>
          </div>
          <div className="card-footer">
            <h1>2,453</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <img src={user1a} alt=" ativeuser"></img>
          </div>
          <div className="card-body">
            <h1>ACTIVE USERS</h1>
          </div>
          <div className="card-footer">
            <h1>2,453</h1>
          </div>
        </div><div className="card">
          <div className="card-top">
            <img src={user1b} alt="user with loans"></img>
          </div>
          <div className="card-body">
            <h1>USERS WITH LOANS</h1>
          </div>
          <div className="card-footer">
            <h1>12,453</h1>
          </div>
        </div><div className="card">
          <div className="card-top">
            <img src={user1c} alt="user with savings"></img>
          </div>
          <div className="card-body">
            <h1>USERS WITH SAVINGS</h1>
          </div>
          <div className="card-footer">
            <h1>102,453</h1>
          </div>
        </div>
      </div>
      <div className="displayUsers">
        <div className="filterBar">
          <div className="filters"><h1>ORGANIZATION</h1> <button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          <div className="filters"><h1>USERNAME</h1><button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          <div className="filters"><h1>EMAIL</h1><button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          <div className="filters"><h1>PHONE NUMBER</h1><button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          <div className="filters"><h1>DATE JOINED</h1><button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          <div className="filters"><h1>STATUS</h1><button onClick={toggleFilterForm}><img src={filterba} alt="filterbar"></img></button></div >
          {showStatO && (
            <form className="filter">
              <label htmlFor="">Organization</label>
              <select name="" id="">
                <option value="value" >Select</option>
                {posts.map((user) => (
                  <option key={user.id}>{user.orgName}
                  </option>
                ))}
              </select>
              <label htmlFor="">Username</label>
              <input type="text" placeholder="User" name="" id="" />
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" name="" id="" />
              <label htmlFor="">Date</label>
              <input type="datetime-local" name="" id="" />
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Phone Number" name="" id="" />
              <label htmlFor="">Status</label>
              <select name="" id="">
                <option value="value" selected>Select</option>
                <option value="inactive" >Inactive</option>
                <option value="pending" >Pending</option>
                <option value="blacklisted" >Blacklisted</option>
                <option value="activee" >Active</option>
              </select>
              <div className="filterBtn">
                <input id="reset" type="reset" value="Reset" />
                <input id="filte" type="submit" value="Filter" />
              </div>
            </form>
          )}
        </div>
        <div className="displayU">
          {currentItems.map((user) => (
            <li key={user.id}>
              <div className="details" ><h1 className="details" id="organization">{user.orgName}</h1></div>
              <div className="details" ><h1 className="details" id="username">{user.userName}</h1></div>
              <div className="details" ><h1 className="details" id="email">{user.email}</h1></div>
              <div className="details" ><h1 className="details" id="phonenumber">{user.phoneNumber}</h1></div>
              <div className="details" ><h1 className="details" id="datejoined"><DateTimeConverter apiData={user.createdAt} />
              </h1></div>
              <div className="details" id="status">
                <button disabled className="stat">
                  Active
                </button>
                <button
                  onClick={() => toggleStatO(user.id)}
                  className="statOpt"
                >
                  <FontAwesomeIcon
                    icon="ellipsis-vertical"
                    className="ellipsis-vertical"
                  />
                </button>
                {selectedItemId === user.id && (
                  <div className="statO">
                    <Link className="button" to={`/mainpage/userdetails/${user.id}`}><img src={hidden} alt="view"></img> <h1>View Details</h1></Link>
                    <button><img src={blacklist} alt="blacklist"></img> <h1>Blacklist User</h1></button>
                    <button><img src={activate} alt="activate"></img> <h1>Activate User</h1></button>
                  </div>
                )}
              </div>
            </li>
          ))}


        </div>
      </div>
      <div className="pageNo">
        {posts.length > itemsPerPage && (
          <div className="showing pagination">
            <h1>Showing</h1>
            <select value={currentPage} onChange={(e) => setCurrentPage(Number(e.target.value))}>
              {getPageNumbers().map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
            <h1>out of {Math.ceil(posts.length / itemsPerPage)}</h1>
          </div>
        )}

        {posts.length > itemsPerPage && (
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link short" onClick={goToPrevPage}>
                <FontAwesomeIcon icon="angle-left" className="angle-left" />
              </button>
            </li>
            {getPageNumbers().map((pageNumber) => (
              <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
                <button className={`page-link ${currentPage === pageNumber ? "active-button" : ""}`} onClick={() => paginate(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(posts.length / itemsPerPage) ? "disabled" : ""}`}>
              <button className="page-link short" onClick={goToNextPage}>
                <FontAwesomeIcon icon="angle-right" className="angle-right" />
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>
  </div>
  )
}
export default Userpage;