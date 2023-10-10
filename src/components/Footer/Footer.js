import React from "react";

import '../../styles/colors.css'; // Import your CSS file


const Footer = () => {
  return (
    <div className="footer flex footer-bg h-[10vh] w-full">
    <div className="flex align-center items-center justify-center w-full full-fit">
      <h3 className="h-fit footer-text font-helvetica-neue font-thin md:px-0 px-[10%]">
        © 2023 Iliya Binoski. All rights Reserved.
        {/* Add a line break on small devices */}
        <br className="md:hidden" />
        Developed by <a href="mailto:nikoloski.davorr@gmail.com" className="underline">Davor Nikoloski</a>
      </h3>
    </div>
  </div>
  
  );
};

export default Footer;
