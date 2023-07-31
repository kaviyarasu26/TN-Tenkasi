import '../StyleSheet/nav.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BiMenuAltLeft } from 'react-icons/bi';

export const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSizeReduced, setSizeReduce] = useState(false);
  const [isSlider,setSlider]=useState(false);

  const handleSlider=()=>{
    setSlider(!isSlider);
  }
  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
    setTimeout(() => {
      setDropdownOpen(false);
    }, 5000);
  };

  const handleSizeReduced = () => {
    setSizeReduce(!isSizeReduced);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setSizeReduce(!isSizeReduced);
    setTimeout(() => {
      setSizeReduce(false);
    }, 5000);
  };

  return (
    <div className="top">
      <div className="nav">
        <div className="nav-left">
          <h1 className="logo">TN-<span>Tenkasi</span></h1>
        </div>
        <div className="nav-right">
          <ul className="nav-ul" type="none">
            <Link to="/"><li className='li'>Home</li></Link>
            <Link to="/gis"><li className="li">GIS</li></Link>
            <li className="li" id="gov" onClick={handleDropdownClick}>
              Service
            </li>
            <Link to="/about"><li className="li">About Us</li></Link>

          </ul>
          <div onClick={handleSizeReduced}>
            <BiMenuAltLeft className="menu" />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div onClick={handleDropdownClick}><ImCross className='cross' /></div>
          <ul type="none">
            {/*<li  className="dropdown-list" ><Link to="/gov/all">All</Link></li>*/}
            <Link to="/gov/agricultureOffices"><li className="dropdown-list" >Agriculture Offices</li></Link>
            <Link to="/gov/communityhall"><li className="dropdown-list" >Community Hall</li></Link>
            <Link to="/gov/firestation"><li className="dropdown-list" >Fire Station</li></Link>
            <Link to="/gov/govartcollege"><li className="dropdown-list" >Government Art College</li></Link>
            <Link to="/gov/govschool"><li className="dropdown-list" >Government School</li></Link>
            <Link to="/gov/govsubsidizationprogramme"><li className="dropdown-list" >Government Subsidizition Program</li></Link>
            <Link to="/gov/libraries"><li className="dropdown-list" >Libraries</li></Link>
            <Link to="/gov/municipalityoffice"><li className="dropdown-list" >Municipality Office</li></Link>
            <Link to="/gov/policestation"><li className="dropdown-list" >Police Station</li></Link>
            <Link to="/gov/primaryhealthcenter"><li className="dropdown-list" >Primary Health Center</li></Link>
            <Link to="/gov/proposedmarketforfarmers"><li className="dropdown-list" >Proposed Market For Farmers</li></Link>
            <Link to="/gov/railwaystation"><li className="dropdown-list" >Railway Station</li></Link>
            <Link to="/gov/womenpolicestation"><li className="dropdown-list" >Women Police Station</li></Link>
          </ul>
        </div>
      )}
      {isSizeReduced && (
        <div>
          <div className='phone-menu'>
            <ul className="nav-l" type="none">
              <div onClick={handleSizeReduced}><ImCross className='cross2' /></div>
              <li className="l"><Link to="/">Home</Link></li>
              <li className="l"><Link to="/gis">GIS</Link></li>
              <li className="l" id="gov" onClick={handleSlider}>
                Service
              </li>
              {
                isSlider &&(
                  <li >
                <ol className='ol' type="1">
                  <Link to="/gov/all"><li className="dropdown-l" >All</li></Link>
                  <Link to="/gov/agricultureOffices"><li className="dropdown-l" >Agriculture Offices</li></Link>
                  <Link to="/gov/communityhall"><li className="dropdown-l" >Community Hall</li></Link>
                  <Link to="/gov/firestation"><li className="dropdown-l" >Fire Station</li></Link>
                  <Link to="/gov/govartcollege"><li className="dropdown-l" >Government Art College</li></Link>
                  <Link to="/gov/govschool"><li className="dropdown-l" >Government School</li></Link>
                  <Link to="/gov/govsubsidizationprogramme"><li className="dropdown-l" >Government Subsidizition Program</li></Link>
                  <Link to="/gov/libraries"><li className="dropdown-l" >Libraries</li></Link>
                  <Link to="/gov/municipalityoffice"><li className="dropdown-l" >Municipality Office</li></Link>
                  <Link to="/gov/policestation"><li className="dropdown-l" >Police Station</li></Link>
                  <Link to="/gov/primaryhealthcenter"><li className="dropdown-l" >Primary Health Center</li></Link>
                  <Link to="/gov/proposedmarketforfarmers"><li className="dropdown-l" >Proposed Market For Farmers</li></Link>
                  <Link to="/gov/railwaystation"><li className="dropdown-l" >Railway Station</li></Link>
                  <Link to="/gov/womenpolicestation"><li className="dropdown-l" >Women Police Station</li></Link>
                </ol>
              </li>
                )
              }
              <li className="l"><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
