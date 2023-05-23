README
This code represents a React application for LendSqr. The application uses React Router for handling different routes and navigation. It also utilizes Bootstrap for styling.

Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)
Getting Started
Clone the repository or download the source code.

Open a terminal or command prompt and navigate to the project directory.

Install the dependencies by running the following command:
npm install
npm start
The application should now be running locally. Open your web browser and visit http://localhost:3000 to see the application in action.

Project Structure
The project structure is organized as follows:

App.scss: Styling for the main App component.

components/login/login.jsx: The login component responsible for rendering the login form.

components/login/forgotpassword/forgot.jsx: The forgot password component.

components/mainpage/mainpage.jsx: The main page component that includes a navigation bar and a subpage component.

components/nav/navbar.jsx: The navigation bar component.

components/subpage/subpage.jsx: The subpage component.

How It Works
The App component sets up the router configuration using the Routes and Route components from react-router-dom. It defines three routes: one for the login component, one for the forgot password component, and one for the main page component.

The Mainpage component represents the main page of the application. It includes a navigation component (Nav) and a subpage component (Sub). It uses the useState hook to control the visibility of the sidebar.

The Login component is responsible for rendering the login form. It uses the useState hook to manage the password visibility and password value. It also utilizes the useNavigate hook from react-router-dom for handling navigation.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Additional Code Explanation
navbar.jsx
The Navbar component represents the navigation bar of the application. It uses Font Awesome icons for various buttons and elements. The component includes state variables to control the visibility of the full navigation menu (isNavOpen) and the profile dropdown menu (isProOpen). It also receives a toggleSidebar prop, which is a function to toggle the visibility of the sidebar.

The component provides buttons for toggling the sidebar, a logo image, a search input field, buttons for notifications and profile dropdown, and additional buttons for menu and navigation. When the full navigation menu is open, it displays a search input field, profile dropdown, links for docs, and a notification button.

subpage.jsx
The Subpage component represents the subpage of the application, which includes a sidebar and different routes for different components. It receives an isSidebarOpen prop, which controls the visibility of the sidebar.

The component renders the Side component, which represents the sidebar, and sets up the routes for the dashboard, user page, and user details components using react-router-dom's Routes and Route components.

The Sidebar component represents the sidebar navigation menu. It accepts the isSidebarOpen prop to toggle the visibility of the sidebar.