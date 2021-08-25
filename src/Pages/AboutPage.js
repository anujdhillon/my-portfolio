import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
function AboutPage() {
	return (
		<div style={{ paddingTop: "5rem" }} className="AboutPage">
			<Title title={"About Me"} span={"About Me"} />
			<ImageSection />
		</div>
	);
}
export default AboutPage;
