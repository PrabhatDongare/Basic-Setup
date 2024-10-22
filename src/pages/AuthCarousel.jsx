import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        appendDots: (dots) => (
            <Box component="div" sx={dotsWrapperStyle}>
                <Typography variant="h6" component="p" >Let&apos;s see what we have new, check it out! So</Typography>
                <Typography variant="h6" component="p" marginBottom="32px" >maybe write here something more.</Typography>
                <Box component="ul" sx={dotsContainerStyle}>
                    {dots}
                </Box>
            </Box>
        ),
        customPaging: () => (
                <Box sx={customDotStyle} />
        ),
    };

    const dotsWrapperStyle = {
        position: "absolute",
        bottom: 10,
        width: "100%",
        height: "15vh",
        color:"#425466" 
    }

    const customDotStyle = {
        position: "absolute",
        right: -50,
        width: "120px",
        height: "8px",
        borderRadius: "10px",
        backgroundColor: "#CBD5E0",
        cursor: "pointer",
    };

    const dotsContainerStyle = {
        width:"50%",
        margin:"0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        gap: "120px",
        "& .slick-active div": {
            backgroundColor: "#4C6FFF",
        },
    };

    return (
        <Box className="slider-container" sx={{ position: "relative" }} >
            <Slider {...settings}>
                <Box bgcolor="red" height="200px" display="flex" justifyContent="center" alignItems="center">
                    <h3>1</h3>
                </Box>
                <Box bgcolor="yellow" height="200px" display="flex" justifyContent="center" alignItems="center">
                    <h3>2</h3>
                </Box>
                <Box bgcolor="green" height="200px" display="flex" justifyContent="center" alignItems="center">
                    <h3>3</h3>
                </Box>
            </Slider>
        </Box>
    );
}

export default SimpleSlider;



{/* <Slider {...settings}>
            <Box>
              <Box component="img" sx={{ height: "80%", width: "100%", objectFit: "cover" }} alt="carousel img"
                src={Carousel_image1} />
            </Box>
            <Box>
              <Box component="img" sx={{ height: "80%", width: "100%", objectFit: "cover" }} alt="carousel img"
                src={Carousel_image2} />
            </Box>
            <Box>
              <Box component="img" sx={{ height: "80%", width: "100%", objectFit: "cover" }} alt="carousel img"
                src={Carousel_image3} />
            </Box>
          </Slider> */}