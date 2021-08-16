import React from "react";
import Logo from "../../images/logo_company.svg";
import { AiFillFacebook,
     AiFillTwitterCircle,
     AiFillLinkedin,
     AiFillYoutube,
     AiFillGithub,
     AiOutlineBehanceSquare,
     } from "react-icons/ai";
     import { FaCcVisa,
        FaCcMastercard,
        FaCcDiscover,
        FaCcAmex } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
        
        <div class="footer">
            <div class="container">
            <div class="row ">
                <div class="col-12 col-md-3">
                    <div class="img">      
                    <img src={Logo} alt="company" />
                    </div>
                    <p class="para"><span class=" mr-3 fa fa-map-marker"></span>59 Street,NewYork City,Rose Town,05 Rive House</p>
                    <p class="para"><span class="mr-3 fa fa-phone"></span>+012 345 67890</p>
                </div>
                <div class=" flink col-12 col-md-3">
                    <h4>Information</h4>
                    <div class="hhr"><hr/></div>
                    <a class="link" href="#">About Us</a>
                    <a class="link" href="#">Latest Post</a>
                    <a class="link" href="#">Selling Tips</a>
                    <a class="link" href="#">Advertising</a>
                    <a class="link" href="#">Contact Us</a>

                </div>
                <div class=" flink col-12 col-md-3">
                    <h4>My Account</h4>
                    <div class="hhr"><hr/></div>
                    <a class="link" href="#">My Account</a>
                    <a class="link" href="#">Login/Register</a>
                    <a class="link" href="#">Cart</a>
                    <a class="link" href="#">Wishlist</a>
                    <a class="link" href="#">Order History</a>
                </div>
                <div class=" flink col-12 col-md-3">
                    <h4>Help & Support</h4>
                    <div class="hhr"><hr/></div>
                    <a class="link" href="#">How To Shop</a>
                    <a class="link" href="#">Payment</a>
                    <a class="link" href="#">Returns</a>
                    <a class="link" href="#">Delivery</a>
                    <a class="link" href="#">Privacy & Cookie Policy</a>
                </div>
            </div>
                    <hr/>
                    <div class="finalfooter">
            <div class="row ">
                <div class="col-12 col-md-5">
                    <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright  2021.</p>
                </div>
                <div class=" flink col-12 col-md-4">
                    <div class="links">
                        <a href="https://www.facebook.com/"><i><AiFillFacebook size={25}/></i></a>
                        <a href="https://www.twitter.com/"><i ><AiFillTwitterCircle size={25}/></i></a>
                        <a href="https://www.linkedin.com/"><i><AiFillLinkedin size={25}/></i></a>
                        <a href="https://www.youtube.com/"><i><AiFillYoutube size={25}/></i></a>
                        <a href="https://www.behance.com/"><i><AiOutlineBehanceSquare size={25}/></i></a>
                        <a href="https://www.github.com/"><i><AiFillGithub size={25}/></i></a>


                    </div>
                </div>
                <div class=" flink col-12 col-md-3">
                    <div class="links">
                        <a href="https://www.visa.com/"><i><FaCcVisa size={50}/></i></a>
                        <a href="https://www.mastercard.com/"><i><FaCcMastercard size={50}/></i></a>
                        <a href="https://www.discover.com/"><i><FaCcDiscover size={50}/></i></a>
                        <a href="https://www.amex.com/"><i><FaCcAmex size={50}/></i></a>
                       


                    </div>
                </div>
                
        </div> 
    </div>   
        </div>    
        
        </div>
    );
  }
}

export default Footer;
