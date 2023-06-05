import './dashboard.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const Dashboard: React.FC = () => {

  return (
    <section className="Dashboard">
      <div className="laptopSize">
        <div className='title'>
          <h1>DashBoard</h1>
        </div>

        <div className="content">
          <h1>Welcome!...</h1>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;