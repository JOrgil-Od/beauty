import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import Testimonials from "../components/Common/Testimonials";
import { Wizard, Steps, Step } from "react-albus";
import { Input, Label, Row, Col } from "reactstrap";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";
class Index extends Component {
  render() {
    console.log("end code bichijblno");
    const onClickNext = (goToNext, steps, step) => {
      step.isDone = true;
      if (steps.length - 1 <= steps.indexOf(step)) {
        return;
      }
      goToNext();
    };

    const onClickPrev = (goToPrev, steps, step) => {
      if (steps.indexOf(step) <= 0) {
        return;
      }
      goToPrev();
    };
    return (
      <>
        <Navbar />

        <Breadcrumb title="Skin AI" />
        <TopNavigation
          className="justify-content-center"
          disableNav={true}
          // topNavClick={topNavClick}
          topNavClick={false}
        />
        <Steps>
          <Step id="step1" name="step1" desc="step1">
            <Row>
              <Col xxs={12} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Label>Овог</Label>
                <Input />
              </Col>

              <Col xxs={12} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Label>Нэр</Label>
                <Input />
              </Col>
            </Row>
          </Step>
          <Step id="step2" name="step2" desc="step2">
            <Row>
              <Col xxs={12} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Label>Овог</Label>
                <Input />
              </Col>

              <Col xxs={12} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Label>Нэр</Label>
                <Input />
              </Col>
            </Row>
          </Step>
          <Step id="step3" name="3r " desc="3r alham">
            <Label className="mt-4">Төлөв</Label>
          </Step>
        </Steps>
        <BottomNavigation
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          size="xs"
          className="justify-content-center mt-3"
          prevLabel="omnoh"
          nextLabel="daraah"
        />
        <section className="about-area ptb-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h3>Таны арьсанд тохирсон гоо сайхны бүтээгдэхүүнийг</h3>
                  <h3>ХИЙМЭЛ ОЮУН УХААНД СУУРИЛСАН ЗӨВЛӨХ</h3>
                  <h3>санал болгоход бэлэн байна.</h3>
                  <h5>
                    Та цөөн асуултад хариулж өөрийнхөө арьсанд таарсан
                    бүтээгдэхүүнийг 5 минутын дотор мэдэх болно.
                  </h5>

                  <div className="signature mb-0">
                    <button></button>
                    {/* <img src="/images/signature.png" alt="image" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src="/images/about1.jpg"
                    className="about-img1"
                    alt="image"
                  />
                  <img
                    src="/images/about2.jpg"
                    className="about-img2"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Testimonials /> */}

        <Facility />

        <Footer />
      </>
    );
  }
}

export default Index;
