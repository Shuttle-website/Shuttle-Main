import React from 'react';
import { useJwt } from "react-jwt";
import { Link, useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from '@chakra-ui/react';

import { googleLogout } from '@react-oauth/google';


export default function Navbar() {

  const isAuthenticated = localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(isAuthenticated);
  console.log(decodedToken);
  const navigate = useNavigate();
  //   console.log("LOCALTOKEN-->>>>",isAuthenticated);
  // try {

  // } catch (error) {
  //     const decoded = jwt.verify(token, "secrete123");
  //     console.log("decoded key---->>>",decoded);
  // }

  const handleLogin = () => {
    navigate("/login"); // Use navigate to redirect to the login page
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    googleLogout();
  };

  return (
    <nav>
      <div id="nav--content">
        <img src="assets/shuttle.jpg" alt="Shuttle" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/combo">Combo</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
        <div id="navbar--icons">
          <a href=""><Link to="/cart"><i className="fa-solid fa-cart-shopping" style={{ color: '#000000' }}></i></Link></a>
          <Popover>
            <PopoverTrigger>
              <i className="fa-solid fa-user" style={{ color: '#000000', cursor: 'pointer' }}></i>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                {/* <PopoverHeader>
                  Hi {isAuthenticated ? "User" : 'Shuttlite'}
                </PopoverHeader> */}

                <PopoverHeader>
                  Hi {isAuthenticated && decodedToken ? decodedToken.first_name
                   : 'Shuttlite'}
                </PopoverHeader>

                <PopoverCloseButton />
                <PopoverBody>
                  {isAuthenticated ? (
                    <>
                      <Button colorScheme="blue" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button colorScheme="blue" onClick={handleLogin}>
                      Login
                    </Button>
                  )}
                </PopoverBody>
                <PopoverFooter>Welcome to Shuttle</PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
