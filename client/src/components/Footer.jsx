import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2"> {/* Reduced padding */}
      <div className="container mx-auto flex justify-between items-center text-xs"> {/* Smaller font size */}
        <p>&copy; 2024 ChardoneyBrewLane. All rights reserved.</p>
        
        <nav className="flex-1 flex justify-center pr-5">
          <ul className="flex space-x-4">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
          </ul>
        </nav>
        
        <div className="social-media flex space-x-4 pr-5">
          <a href="https://facebook.com" className="hover:underline">Facebook</a>
          <a href="https://x.com" className="hover:underline">X</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
