import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
//import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";
import { useHistory } from "react-router-dom";
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';

setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header = function () {

  //const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  //const [openMenu3, setOpenMenu3] = React.useState(false);
  // const handleBtnClick = () => {
  //   setOpenMenu(!openMenu);
  // };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  // const handleBtnClick3 = () => {
  //   setOpenMenu3(!openMenu3);
  // };
  // const closeMenu = () => {
  //   setOpenMenu(false);
  // };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  // const closeMenu3 = () => {
  //   setOpenMenu3(false);
  // };
  // const ref = useOnclickOutside(() => {
  //   closeMenu();
  // });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  // const ref3 = useOnclickOutside(() => {
  //   closeMenu3();
  // });

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        //closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);


  return (
    <header id="myHeader" className='navbar white'>
      <div className='container'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/">
                <img
                  src="./img/logo-light.png"
                  className="img-fluid d-none"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          {/* <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div> */}

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu &&
                <div className='menu'>
                  <div className='navbar-item'>
                    <NavLink to="/home">
                      Home
                      <span className='lines'></span>
                    </NavLink>
                  </div>
                  <div className='navbar-item'>
                    <NavLink to="/cause">
                      Whitepaper
                      <span className='lines'></span>
                    </NavLink>
                  </div>
                  <div className="social-icons" style={{display: 'flex', flexDirection: 'row'}}>

                    <span onClick={() => {
                      window.location.href = 'https://discord.gg/zEH87mrrwE';
                      return null;
                    }}><i><BsDiscord /></i></span>
                    <span onClick={() => {
                      window.location.href = 'https://twitter.com/NFTNoWar';
                      return null;
                    }}><i><BsTwitter /></i></span>
                    <span onClick={() => {
                      window.location.href = 'https://www.instagram.com/nowarnft_egld/';
                      return null;
                    }}><i><BsInstagram /></i></span>
                    <span onClick={() => {
                      window.location.href = 'https://www.facebook.com/nowarnft';
                      return null;
                    }}><i><AiFillFacebook /></i></span>

                  </div>
                  {/* <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                      Explore
                      <span className='lines'></span>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/collection">Collection</NavLink>
                            <NavLink to="/cause">Cause</NavLink>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div> */}
                  {/* <div className='navbar-item'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                      About us
                      <span className='lines'></span>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/organization">Organization</NavLink>
                            <NavLink to="/news">News</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                  {/* <div className='navbar-item'>
                  <div ref={ref3}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                      Elements
                      <span className='lines'></span>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/elegantIcons">Elegant Icon</NavLink>
                            <NavLink to="/etlineIcons">Etline Icon</NavLink>
                            <NavLink to="/fontAwesomeIcons">Font Awesome Icon</NavLink>
                            <NavLink to="/accordion">Accordion</NavLink>
                            <NavLink to="/alerts">Alerts</NavLink>
                            <NavLink to="/price">Pricing Table</NavLink>
                            <NavLink to="/progressbar">Progess Bar</NavLink>
                            <NavLink to="/tabs">Tabs</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                </div>
              }
            </Breakpoint>

            <Breakpoint xl>
              <div className='menu' style={{marginTop: '25%',}}>
                {/* <div className='navbar-item'>
                  <NavLink to="/home">
                    Home
                    <span className='lines'></span>
                  </NavLink>
                </div>
                <div className='navbar-item'>
                  <NavLink to="/cause">
                    Whitepaper
                    <span className='lines'></span>
                  </NavLink>
                </div> */}
                <div className="social-icons" style={{marginBottom: '25%'}}>

                 
                  
                  <span onClick={() => {
                    window.location.href = 'https://www.instagram.com/rotaractgemina/';
                    return null;
                  }}><i><BsInstagram /></i></span>
                  <span onClick={() => {
                    window.location.href = 'https://www.facebook.com/rotaractgemina';
                    return null;
                  }}><i><AiFillFacebook /></i></span>

                </div>
                {/* <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                      Whitepaper
                      <span className='lines'></span>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/collection">Collection</NavLink>
                            <NavLink to="/cause">Cause</NavLink>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div> */}
                {/* <div className='navbar-item'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                      About us
                      <span className='lines'></span>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/organization">Organization</NavLink>
                            <NavLink to="/news">News</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                {/* <div className='navbar-item'>
                  <div ref={ref3}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                      Elements
                      <span className='lines'></span>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/elegantIcons">Elegant Icon</NavLink>
                            <NavLink to="/etlineIcons">Etline Icon</NavLink>
                            <NavLink to="/fontAwesomeIcons">Font Awesome Icon</NavLink>
                            <NavLink to="/accordion">Accordion</NavLink>
                            <NavLink to="/alerts">Alerts</NavLink>
                            <NavLink to="/price">Pricing Table</NavLink>
                            <NavLink to="/progressbar">Progess Bar</NavLink>
                            <NavLink to="/tabs">Tabs</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
              </div>
            </Breakpoint>
          </BreakpointProvider>



        </div>

        {/* <button className="nav-icon" onClick={() => btn_icon(!showmenu)} style={{ background: '#F3CC01' }}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button> */}

      </div>
    </header>
  );
}
export default Header;