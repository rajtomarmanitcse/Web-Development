import React from "react";

function Footer() {
    const currentYear = new Date(); 
  return (
    <footer>
      <p>copyrightÂ© {currentYear.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
