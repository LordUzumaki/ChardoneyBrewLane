import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 ChardoneyBrewLane. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://x.com"> X </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
