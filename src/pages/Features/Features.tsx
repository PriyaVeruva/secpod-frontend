import React from "react";
import Slider from "react-slick";
import { HEADER_CONTENT_2, PARAGRAPH_CONTENT_2 } from "../../utils/cms";
import { carouselDataContent2 } from "../LandingPage/data";
import styles from "../LandingPage/LandingPage.module.css";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
function Features() {
	return (
		<div className={styles.bodyContent2} id="features">
			<div className={styles.bodyContentSection2}>
				<div className={styles.headerContent3}>
					{HEADER_CONTENT_2}
				</div>

				<div className={styles.paragraphContent}>
					{PARAGRAPH_CONTENT_2}
				</div>
			</div>

			<div className={styles.carouselSlider}>
				<CarouselComponent
					singleCarousel={true}
					carouselData={carouselDataContent2}
					carouselStyles={false}
				/>
			</div>
		</div>
	);
}

export default Features;
