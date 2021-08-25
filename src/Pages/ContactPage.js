import React from "react";
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import {
	faInstagram,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "../Components/CommentSection";
function ContactPage() {
	return (
		<div>
			<div className="title">
				<Title title={"Contact"} span={"Contact"} />
			</div>
			<div className="ContactPage">
				<ContactItem
					icon={phone}
					text1={"+918569919298"}
					text2={"+919467993938"}
					title={"Phone"}
				/>
				<ContactItem
					icon={email}
					text1={"anuj.dhillon.14@gmail.com"}
					text2={""}
					title={"Email"}
				/>
			</div>
			<div className="separator-text">
				<h2>Or Write Anonymously</h2>
			</div>
			<CommentSection />
			<div className="icons">
				<a
					href="https://www.instagram.com/_.anujdhillon._/"
					target="_blank"
					className="icon-holder"
				>
					<FontAwesomeIcon icon={faInstagram} className="icon ig" />
				</a>
				<a
					href="https://www.linkedin.com/in/anuj-dhillon-409212190/"
					target="_blank"
					className="icon-holder"
				>
					<FontAwesomeIcon icon={faLinkedin} className="icon li" />
				</a>
				<a
					href="https://github.com/anujdhillon"
					target="_blank"
					className="icon-holder"
				>
					<FontAwesomeIcon icon={faGithub} className="icon gh" />
				</a>
			</div>
		</div>
	);
}
export default ContactPage;
