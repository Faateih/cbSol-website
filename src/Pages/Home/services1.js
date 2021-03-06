import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ServicesMain from "../../components/servicesmain";
import Mid from "../../components/mid";
import Service from '../../assets/images/Services-CbSol.jpg';
const Services1 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        techno = {Service}
        heading="Our Services"
        text="We build successful, long-lasting, profitable products for our clients." page = '&nbsp;Services'
      />
      <ServicesMain text="Services" />
      <Footer />
    </div>
  );
};
export default Services1;
