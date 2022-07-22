import React from "react";
import {FaGithub} from "react-icons/fa"
export default function Footer(){
 return (
  <div className="footer">
  <ul className="icons">
   <li className="twitter"><a href="#"><FaGithub/></a></li>
   <li className="facebook"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
   <li className="instagram"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
   <li className="github"><a href="#"><i class="fa-brands fa-github"></i></a></li>
  </ul>
  </div>
 )
}