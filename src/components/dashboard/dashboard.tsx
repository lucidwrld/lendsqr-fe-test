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
        <div className='headings'>
          <div className="card">
            <div className="card-top">
              <h1>Streamline operations and enhance customer service</h1>
            </div>
            <div className="card-footer"></div>
          </div>
          <div className="card"><div className="card-top">
            <h1>Unlocking the potential of our staff</h1>
          </div>
            <div className="card-footer"></div></div>
          <div className="card"><div className="card-top">
            <h1>Empowering our staff with powerful financial tools</h1></div>
            <div className="card-footer"></div></div>
        </div>
        <div className="content">
          <h1>Welcome!...</h1>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;