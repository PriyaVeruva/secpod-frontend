import TopNavBar from "../../components/TopNavBar/TopNavBar";
import styles from "./LandingPage.module.css";
import { ButtonContentData, carouselDataContent1, Logos } from "./data";
import React from 'react'
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
import Slider from "react-slick";
import Features from "../Features/Features";
import Tools from "../Tools/Tools";
import Pricing from "../Pricing/Pricing";
// import Carousel from "react-grid-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function LandingPage() {
	const settings = {
		dots: true,
		infinite: true,
		arrow: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3,
		  slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2,
		  slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1,
		  slidesToSlide: 1 // optional, default to 1.
		}
	  };
	return (
		<>
			<TopNavBar />

			<div className={styles.pageContainer}>
				<div className={styles.bodyContent}>
					<div className={styles.headerContent}>
						{HEADER_CONTENT}
					</div>
					<div className={styles.paragraphContent}>
						{PARAGRAPH_CONTENT}
					</div>
					<div className={styles.button}>
						{ButtonContentData.map((ele, i) => {
							return (
								<a
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
  swipeable={false}
  draggable={false}
//   showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{Logos.map((ele, i) => {
							return (
								
									<div
										className={
											styles.imageSection2
										}
									>
										<img src={ele.image} alt="" />
									</div>
								
							)
						})}
</Carousel>;









					{/* <Carousel
						cols={6}
						rows={2}
						gap={10}
						responsiveLayout={[
							{
								breakpoint: 1440,
								cols: 4,
								gap: 5,
							},
							{
								breakpoint: 768,
								cols: 2,
							},
						]}
						mobileBreakpoint={670}
						loop={true}
						autoplay={1000}
					>
						{Logos.map((ele, i) => {
							return (
								<Carousel.Item>
									<div
										className={
											styles.imageSection2
										}
									>
										<img src={ele.image} alt="" />
									</div>
								</Carousel.Item>
							);
						})}
					</Carousel> */}
				</div>

				{/* carousel 2 */}

				<div className={styles.carouselContent}>
					<div className={styles.carouselContainer}>
						<Slider {...settings}>
							{carouselDataContent1.map((ele, i) => {
								return (
									<div className={styles.contains}>
										<img
											src={ele.image}
											alt=""
											className={
												styles.carouselImageSection
											}
										/>
										<div
											className={
												styles.carouselContentSection
											}
										>
											<div
												className={
													styles.carouselHeader
												}
											>
												{ele.header}
											</div>
											<div
												className={
													styles.carouselSubHeader
												}
											>
												{ele.subHeader}
											</div>
											<div
												className={
													styles.carouselParagraphContent
												}
											>
												{
													ele.paragraphContent
												}
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
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
