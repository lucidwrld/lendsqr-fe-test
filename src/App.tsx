import React from 'react'; // Importing React library
import './App.scss';
import Login from './components/login/login';  // Importing Login component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route components from react-router-dom
import Forgot from './components/login/forgotpassword/forgot'; // Importing Forgot component
import Mainpage from './components/mainpage/mainpage'; // Importing Mainpage component

function App() {
  return (
    <div className="App">
      <Routes> {/* Router configuration */}
        <Route path="/" element={<Login />} /> {/* Route for Login component */}
        <Route path="/forgotpassword" element={<Forgot />} /> {/* Route for Forgot component */}
        <Route path="/mainpage/*" element={<Mainpage />} /> {/* Route for Mainpage component */}
      </Routes>
    </div>
  );
}

export default App; /* Exporting the App component as the default */
