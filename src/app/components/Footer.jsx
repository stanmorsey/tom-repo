import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><img src="/images/Tom Osborn L. Logo.png" alt="Tom Lee Logo" className="absolute transform -translate-x-10 -translate-y-3/4 top- +0.9 left- -0.9"
              width={200}
              height={200} /></span>
        <p className="text-slate-600">All rights reserved. 2024 &copy;.</p>
      </div>
    </footer>
  );
};

export default Footer;
