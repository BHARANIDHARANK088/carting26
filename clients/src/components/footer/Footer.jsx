import "./footer.css";

import { FaFacebook, FaTwitter, FaInstagram, FaPhoneSquareAlt, FaBuilding,  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
       <div className="fleft">
            <h1 className="logo">CART</h1>
             <p className="desc">DESC</p>
             <div className="socialCon">
                <div className="socialIcon">
                    <FaFacebook style={{color: "3B5999"}}></FaFacebook>
                </div>
                <div className="socialIcon">
                    <FaTwitter style={{color: "55ACEE"}}></FaTwitter>
                </div>
                <div className="socialIcon">
                    <FaInstagram style={{color: "E4405F"}}></FaInstagram>
                </div>
             </div>
       </div>
       <div className="fcenter">
           <h3 className="title">Useful Links</h3>
           <ul className="list">
             <li className="listItem">Home</li>
             <li className="listItem">Cart</li>
             <li className="listItem">Men Fashion</li>
             <li className="listItem">Woman Fashion</li>
             <li className="listItem">My Account</li>
             <li className="listItem">Wish List</li>
           </ul>
       </div>
       <div className="fright">
            <h3 className="title">
               Contact
            </h3>
            <div className="contactItem">
               <FaBuilding style={{marginRight: "10px", color: "darkblue"}}></FaBuilding> 622 Dixie Path , South Tobinchester 98336
            </div>
            <div className="contactItem">
               <FaPhoneSquareAlt style={{marginRight: "10px", color: "lightgreen"}}></FaPhoneSquareAlt> 999999955
            </div>
            <div className="contactItem">
               <BiLogoGmail style={{marginRight: "10px", color: "red"}}></BiLogoGmail> contact@gmail.com
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" style={{width: "50%"}} alt="" />
       </div>
    </div>
  )
}

export default Footer