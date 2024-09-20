
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { ProductImages } from "../assets/Images";
import "@splidejs/splide/dist/css/splide.min.css";
import style from "../css/Zoom.module.css"
export class ThumbnailsExample extends React.Component {
  mainRef = React.createRef();
  thumbsRef = React.createRef();
  zoomOutputRef = React.createRef();
  overlayBoxRef = React.createRef();

  componentDidMount() {
    if (
      this.mainRef.current &&
      this.thumbsRef.current &&
      this.thumbsRef.current.splide
    ) {
      this.mainRef.current.sync(this.thumbsRef.current.splide);
    }
  }

  handleMouseMove = (e, imageSrc) => {
    const zoomOutput = this.zoomOutputRef.current;
    const overlayBox = this.overlayBoxRef.current;
    const zoomFactor = 2;

    // Get the main slider container dimensions
    const sliderRect = this.mainRef.current.splide.root.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = e.target;

    // Box dimensions
    const boxSize = 250; // Size of the box in pixels
    const boxWidth = boxSize;
    const boxHeight = boxSize;

    // Calculate the box position relative to the slider
    let left = offsetX - boxWidth / 2;
    let top = offsetY - boxHeight / 2;

    // Ensure the box stays within the slider bounds
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + boxWidth > sliderRect.width) left = sliderRect.width - boxWidth;
    if (top + boxHeight > sliderRect.height)
      top = sliderRect.height - boxHeight;

    // Update box style
    overlayBox.style.width = `${boxWidth}px`;
    overlayBox.style.height = `${boxHeight}px`;
    overlayBox.style.left = `calc(${left}px + 23%)`;
    overlayBox.style.top = `${top}px`;
    overlayBox.style.display = "block";

    // Update the zoomOutput div's background image and position
    const bgPosX = (offsetX / width) * 100;
    const bgPosY = (offsetY / height) * 100;

    zoomOutput.style.backgroundImage = `url(${imageSrc})`;
    zoomOutput.style.backgroundSize = `${width * zoomFactor}px ${
      height * zoomFactor
    }px`;
    zoomOutput.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    zoomOutput.style.display = "block";
  };

  handleMouseLeave = () => {
    const zoomOutput = this.zoomOutputRef.current;
    const overlayBox = this.overlayBoxRef.current;
    zoomOutput.style.backgroundImage = "none";
    zoomOutput.style.display = "none";
    overlayBox.style.display = "none";
  };

  handleMainSliderMouseEnter = () => {
    // const overlayBox = this.overlayBoxRef.current;
    // overlayBox.style.display = "block";
  };

  handleMainSliderMouseLeave = () => {
    // this.handleMouseLeave();
  };

  renderSlides() {
    return ProductImages.map((slide) =>
      React.createElement(
        SplideSlide,
        { key: slide.image },
        React.createElement("img", {
          src: slide.image,
          alt: slide.name,
          onMouseMove: (e) => this.handleMouseMove(e, slide.image),
          onMouseLeave: this.handleMouseLeave,
        })
      )
    );
  }

  render() {
    const mainOptions = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: "1rem",
      pagination: false,
      arrows: false,
      height: "auto",
      width: "100%",
    };

    const thumbsOptions = {
      type: "slide",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: "100%",
      fixedHeight: "25%",
      cover: true,
      focus: "center",
      isNavigation: true,
      arrows: false,
      // wheel: true,
      drag: true,
      direction: "ttb",
      height: "100%",
      breakpoints: {
        767: {
          direction: "ltr",
          fixedHeight: "140px",
          fixedWidth: "15%",
        },
      },
    };

    return (
      <div
        className="ZoomSlider grid md:grid-cols-[20%_80%] gap-5 relative overflow-visible"
        // className={`${style.ZoomSlider} grid md:grid-cols-[20%_80%] gap-5 relative overflow-visible`}
      >
        {/* Thumbnails Slider */}
        <Splide
          options={thumbsOptions}
          ref={this.thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
          className="order-2 md:order-1 *:*:shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px]"
        >
          {this.renderSlides()}
        </Splide>

        {/* Main Slider */}
        <Splide
          options={mainOptions}
          ref={this.mainRef}
          aria-labelledby="thumbnail-slider-example"
          className="order-1 md:order-2 shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px] rounded-xl overflow-hidden"
          onMouseEnter={this.handleMainSliderMouseEnter}
          onMouseLeave={this.handleMainSliderMouseLeave}
        >
          {this.renderSlides()}
        </Splide>

        {/* Zoom Output Div */}
        <div
          id="ImageZoomOutPut"
          ref={this.zoomOutputRef}
          className="absolute top-0 left-[calc(100%+60px)] w-[90%] min-1400:w-[500px] h-2/3 min-1400:h-[500px] border border-gray-300 z-[999] hidden lg:block"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "none",
          }}
        ></div>

        {/* Overlay Box */}
        <div
          ref={this.overlayBoxRef}
          className="absolute border border-gray-300 z-[998] ImageZoomOverLayBox hidden opacity-0 lg:opacity-100"
          style={{ pointerEvents: "none", position: "absolute" }}
        ></div>
      </div>
    );
  }
}