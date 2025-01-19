import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Properties from "../components/Layout/Properties";
import OurService from "../components/Layout/OurService";
import Testimonial from "../components/Layout/Testimonial";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <Properties />
      <OurService />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
