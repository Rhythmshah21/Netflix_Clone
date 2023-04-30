import React, {useState} from 'react';
import Navbar from "../components/Navbar";

export default function Netflix() {
  
 const [isScrolled, setScrolled] = useState(false);
 window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null);
  };
 
 return (
  <div>
      <h1> hshseh</h1>
      <button>dsbdbss</button>

      <Navbar isScrolled={isScrolled} />
    </div>
  )
}
