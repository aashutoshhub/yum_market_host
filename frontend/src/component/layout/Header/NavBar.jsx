import React,{useState} from "react";
import "./NavBar.css";
import logo from "../Images/logo1.png";
import Cart from "../Images/cart.png";
import Profile from "../Images/profile.png"
import { useNavigate } from 'react-router-dom';
import MetaData from '../MetaData';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    
    const navigate=useNavigate();
    const[keyword,setKeyword]=useState("");

    const submitSearchHandler=(e)=>{
        <MetaData title="Search a product "/>
        e.preventDefault();
        if(keyword.trim()){
           navigate(`/products/${keyword}`);
        }else{
            navigate('/products');
        }
    }

//nav
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return(
        <>
        
      <nav className="main-nav">
        {/* 1st logo part  */}
        {/* <img src='' alt='sonuShastri_logo'/> */}
        
        <div className="logo">
          {/* <img src={logo} alt="logo"></img> */}
          <h2>
            <span>Y</span>um
            <span>M</span>arket
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a  href="/">Home</a>
            </li>
            <li>
            <a  href="/products">Products</a>
            </li>
            <li>
            <a  href="/contact">Contact</a>
            </li>
            <li>
            <a  href="/about">About</a>
            </li>
          </ul>
        </div>


        {/* 3rd social media links */}
        <div className="social-media">
        
          <input 
             type='text'
             placeholder='Search a Product....'
             onChange={(e)=>setKeyword(e.target.value)}
             />
               <button type='submit' className='searchBtn' value='Search' onClick={submitSearchHandler}>Search</button>
      
            
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="/#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

        {/* cart and profile  */}
        <div className='cartProfile'>
            <a href="/cart"><img src={Cart}  alt="cart"/></a>
            <a href="/login"><img src={Profile} alt="profile" /></a>
            </div>
            
      </nav>

      

        {/* <div className="navbar">
          <img src={logo} alt="logo"></img>

            <div className="navOption">

            <a  href="/">Home</a>
            <a  href="/products">Products</a>
            <a  href="/contact">Contact</a>
            <a  href="/about">About</a>

       
            <input 
             type='text'
             placeholder='Search a Product....'
             onChange={(e)=>setKeyword(e.target.value)}
             />
               <button type='submit' className='searchBtn' value='Search' onClick={submitSearchHandler}>Search</button>
      

            </div>
            
            <div id='search'>
            <input type="text" placeholder="Type here.."></input>
            </div>

        <div className='searchController'>
          <input 
           type='text'
           placeholder='Search a Product....'
           onChange={(e)=>setKeyword(e.target.value)}
           />
          <button type='submit' className='searchBtn' value='Search' onClick={submitSearchHandler}>Search</button>
          
        </div>

            <div className='cartProfile'>
            <a href="/cart"><img src={Cart}  alt="cart"/></a>
            <a href="/login"><img src={Profile} alt="profile" /></a>
            </div>

        </div> */}
        
        </>
    )
}
export default Navbar;