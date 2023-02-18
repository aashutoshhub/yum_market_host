import React from 'react';
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';
import './footer.css';

function Footer() {
  return (
    <footer id='footer'>
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt='playStore'></img>
            <img src={appStore} alt='appStore'></img>
        </div>
        <div className='midFooter'>
           <h1>YUM MARKET</h1>
           <p>High Quality is our priority</p>
           <p>Copyrights 2023 &copy;yum_market</p>
        </div>
        <div className='rightFooter'>
          <h4>Follow Us</h4>
          <a href='https://www.instagram.com/aashutoshgupta20/' target="_blank">Instagram</a>
          <a href='https://www.linkedin.com/in/aashutosh-gupta-06a8b7210/' target="_blank">LinkedIn</a>
          <a href='https://www.facebook.com/91i27363632992i3bebebe' target="_blank">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer
