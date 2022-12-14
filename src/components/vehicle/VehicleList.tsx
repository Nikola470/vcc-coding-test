import type { FC } from "react";
import { Vehicle } from "../../models/Vehicle";
import { VehicleItem } from "./VehicleItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Flex, IconButton, View } from "vcc-ui";
import React from "react";

type VehicleListProps = {
  vehicles: Vehicle[];
};

export const VehicleList: FC<VehicleListProps> = ({ vehicles }) => {
  let settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    initialSlide: 0,
    autoplaySpeed: 3000,
    slidesToScroll: vehicles.length < 4 ? vehicles.length : 4,
    slidesToShow: vehicles.length < 4 ? vehicles.length : 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const sliderRef = React.useRef<Slider>(null);
  return (
    <View paddingLeft={5} paddingRight={5}>
      <Slider {...settings} ref={sliderRef}>
        {vehicles.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </Slider>
      <Flex
        extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "end",
          padding: "25px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Next slide"
            iconName="navigation-chevronback"
            onClick={() => sliderRef.current?.slickPrev()}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Previous slide"
            iconName="navigation-chevronforward"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </Flex>
    </View>
  );
};
