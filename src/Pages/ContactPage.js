import React from 'react';
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../Components/CommentSection';
function ContactPage(){
    
    return (
        <div>
            <div className = "title">
            <Title title={'Contact'} span = {'Contact'}/>
            </div>    
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.0506654565506!2d75.7374421903894!3d29.133695994973532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA4JzAxLjMiTiA3NcKwNDQnMTkuMCJF!5e0!3m2!1sen!2sin!4v1617134473161!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+918569919298'} text2={'+919467993938'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'anuj.dhillon.14@gmail.com'} text2={''} title={'Email'}/>
                    <ContactItem icon={location} text1={'1566, Sec-13, Hisar'} text2={'Haryana 125005'} title={'Address'}/>   
                </div>
            </div>
            <div className="separator-text">
                <h2>Or Write Anonymously</h2>
            </div>
            <CommentSection/>
            <div className="icons">
                    <a href="https://www.instagram.com/_.anujdhillon._/" target = "_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </a>
                    <a href="https://www.linkedin.com/in/anuj-dhillon-409212190/" target = "_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </a>
                    <a href="https://github.com/anujdhillon" target = "_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                </div>
        </div>
    )
}
export default ContactPage;