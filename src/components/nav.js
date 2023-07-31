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
            <li className="li"><Link to="/">Home</Link></li>
            <li className="li"><Link to="/gis">GIS</Link></li>
            <li className="li" id="gov" onClick={handleDropdownClick}>
              Service
            </li>
            <li className="li"><Link to="/about">About Us</Link></li>

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
            <li className="dropdown-list" ><Link to="/gov/agricultureOffices">Agriculture Offices</Link></li>
            <li className="dropdown-list" ><Link to="/gov/communityhall">Community Hall</Link></li>
            <li className="dropdown-list" ><Link to="/gov/firestation">Fire Station</Link></li>
            <li className="dropdown-list" ><Link to="/gov/govartcollege">Government Art College</Link></li>
            <li className="dropdown-list" ><Link to="/gov/govschool">Government School</Link></li>
            <li className="dropdown-list" ><Link to="/gov/govsubsidizationprogramme">Government Subsidizition Program</Link></li>
            <li className="dropdown-list" ><Link to="/gov/libraries">Libraries</Link></li>
            <li className="dropdown-list" ><Link to="/gov/municipalityoffice">Municipality Office</Link></li>
            <li className="dropdown-list" ><Link to="/gov/policestation">Police Station</Link></li>
            <li className="dropdown-list" ><Link to="/gov/primaryhealthcenter">Primary Health Center</Link></li>
            <li className="dropdown-list" ><Link to="/gov/proposedmarketforfarmers">Proposed Market For Farmers</Link></li>
            <li className="dropdown-list" ><Link to="/gov/railwaystation">Railway Station</Link></li>
            <li className="dropdown-list" ><Link to="/gov/womenpolicestation">Women Police Station</Link></li>
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
                  <li className="dropdown-l" ><Link to="/gov/all">All</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/agricultureOffices">Agriculture Offices</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/communityhall">Community Hall</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/firestation">Fire Station</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/govartcollege">Government Art College</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/govschool">Government School</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/govsubsidizationprogramme">Government Subsidizition Program</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/libraries">Libraries</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/municipalityoffice">Municipality Office</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/policestation">Police Station</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/primaryhealthcenter">Primary Health Center</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/proposedmarketforfarmers">Proposed Market For Farmers</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/railwaystation">Railway Station</Link></li>
                  <li className="dropdown-l" ><Link to="/gov/womenpolicestation">Women Police Station</Link></li>
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
