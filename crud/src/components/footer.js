import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Copyright © {new Date().getFullYear()}
        <a href="/"> My Website</a> All rights reserved.</p>
    </footer>
  );
};

export default Footer;