import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const sidebarStyle = {
    height: '100vh',  // Set the height to 100% of the viewport height
    width: '20vw',
    position: 'fixed',
    top:0,
    left:0
  };

  const navLinkStyle = {
    color: 'white',
  };

  return (

     <div className="d-flex fixed top-0 left-0 flex-column flex-shrink-0 p-3 text-bg-dark" style={sidebarStyle}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">SHUTTLE</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin/home" className="nav-link active" aria-current="page" style={navLinkStyle}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="nav-link text-white" style={navLinkStyle}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <a href="#" className="nav-link text-white" style={navLinkStyle}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <Link to="/admin/product" className="nav-link text-white" style={navLinkStyle}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Products
          </Link>
        </li>
        <li>
          <a href="#" className="nav-link text-white" style={navLinkStyle}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div> 


  );
}

export default Sidebar;
