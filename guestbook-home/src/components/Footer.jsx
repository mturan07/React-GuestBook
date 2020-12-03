import React from 'react';

function Footer() {

  const currentDate = new Date().getFullYear();

  return(
    <div className="reserved-bot">
        <p className="text-center">Copyright © {currentDate} <strong>Simple Guestbook App</strong> by Murat</p>
    </div>
  );
}

export default Footer;