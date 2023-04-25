import TopNavBar from "../../components/TopNavBar/TopNavBar";
import styles from "./LandingPage.module.css";
import { ButtonContentData, carouselDataContent1, Logos } from "./data";
import React from "react";
import {
	HEADER_CONTENT,
	LEADING_ORGANIZATIONS_TITLE,
	PARAGRAPH_CONTENT,
	HEADER_CONTENT_4,
} from "../../utils/cms";
import image1 from "../../assets/images/image1.png";
import SignUpForm from "../SignUpFormik/SignUpForm";
import Footer from "../../components/Footer/Footer";
import "./slick.css";
import "./slick-theme.css";
import Features from "../Features/Features";
import Tools from "../Tools/Tools";
import Pricing from "../Pricing/Pricing";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import Carousel from "better-react-carousel";
function LandingPage() {
	type arrowDataType = {
		onClick?: () => void;
	};

	function NextArrow({ onClick }: arrowDataType): JSX.Element {
		return (
			<div
				className={`${styles.arrow} ${styles.right}`}
				onClick={onClick}
			>
				<AiOutlineRight />
			</div>
		);
	}

	function PrevArrow({ onClick }: arrowDataType): JSX.Element {
		return (
			<div
				className={`${styles.arrow} ${styles.left}`}
				onClick={onClick}
			>
				<AiOutlineLeft />
			</div>
		);
	}
	return (
		<>
			<TopNavBar />

			<div className={styles.pageContainer}>
				<div className={styles.bodyContent}>
					<div className={styles.bodyTextContents}>
						<div className={styles.headerContent}>
							{HEADER_CONTENT}
						</div>
						<div className={styles.paragraphContent}>
							{PARAGRAPH_CONTENT}
						</div>
					</div>

					<div className={styles.button}>
						{ButtonContentData.map((ele, i) => {
							return (
								<a
									key={i}
									href={ele.path}
									className={
										ele.type === "button1"
											? styles.buttonText1
											: styles.buttonText2
									}
								>
									{ele.name}
								</a>
							);
						})}
					</div>
				</div>

				<div className={styles.imageSection}>
					<img src={image1} alt="" />
				</div>
				<div className={styles.headerContent2}>
					{LEADING_ORGANIZATIONS_TITLE}
				</div>

				{/*carousel 1  */}
				<div className={styles.gridCarousel}>
					<Carousel
						cols={3}
						rows={2}
						loop
						autoplay={2000}
						arrowLeft={<PrevArrow />}
						arrowRight={<NextArrow />}
					>
						{Logos.map((ele, i) => {
							return (
								<Carousel.Item key={i}>
									<img src={ele.image} alt="" />
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>

				{/* carousel 2 */}

				<div className={styles.carouselContent}>
					<div className={styles.carouselContainer}>
						<CarouselComponent
							singleCarousel={true}
							carouselData={carouselDataContent1}
							carouselStyles={true}
						/>
					</div>
				</div>
				<div id="features">
					<Features />
				</div>

				<div id="tools">
					<Tools />
				</div>
				<div id="pricing">
					<Pricing />
				</div>
			</div>

			<div className={styles.signupFormContent}>
				<div className={styles.headerContent4}>
					{HEADER_CONTENT_4}
				</div>
				<div className={styles.signUpForm} id="getStarted">
					<SignUpForm />
				</div>
			</div>
			<div id="help">
				<Footer />
			</div>
		</>
	);
}

export default LandingPage;
