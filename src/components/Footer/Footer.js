import React from "react";
import "./Footer.css"; // Make sure to adjust the path accordingly

const Footer = () => {
  return (
    <footer>
      
        <div className="footer-title">Ooga Boga</div>
        <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
              <img
                src="https://i.pinimg.com/564x/98/a6/f8/98a6f8e87ab68528d9864bd65e62e09e.jpg"
                alt="youtube"
                className="img-youtube"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/600px-Spotify_App_Logo.svg.png"
                alt="spotify"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
