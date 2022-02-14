import React, { Component, useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import Testimonials from "../components/Common/Testimonials";
import { Wizard, Steps, Step } from "react-albus";
import { Input, Label, Row, Col } from "reactstrap";
const Index = ({}) => {
  const [show, setShow] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const answer1 = [
    { name: "Хэвийн", desc: " Тэнцвэртэй бөгөөд чийгшил сайтай" },
    { name: "Хуурай", desc: "Бага зэрэг нүхжилттэй" },
    {
      name: "Тослог",
      desc: "Нүхжилттэй тослог арьс",
    },
    { name: "Эмзэг", desc: "Амархан улайдаг, цочромтгой" },
    { name: "Холимог", desc: "Хуурай болон тослог" },
    // { name: "Мэдэхгүй", desc: "Сонгох" },
  ];
  const answer2 = [
    { name: "Тослогжилт" },
    { name: "Батгашилт" },
    { name: "Өнгөө алдах" },
    { name: "Хуурайшилт" },
    { name: "Эмзэгшилт" },
    { name: "Үрчлээс" },
    { name: "Нөсөө толбо" },
    { name: "Нүхжилт" },
    { name: "Хөгшрөлт" },
  ];
  const answer3 = [
    { name: "Бүх төрлийн ургамал" },
    { name: "Эмийн бодис" },
    { name: "Хүнс, хоол тэжээл" },
    { name: "Тоос, тоосонцор " },
    { name: "Хөгц" },
    { name: "Шавьж" },
    { name: "Амьтны үс, ноос" },
    { name: "Хэт ягаан туяа" },
    { name: "Агаарын бохирдол" },
    { name: "Хөрсний элэгдэл" },
    { name: "Агаарын хүйтэн" },
    { name: "Харшилгүй" },
  ];
  const prevQuestion = (val) => {
    setQuestionNumber(parseInt(questionNumber) - 1);
  };
  const nextQuestion = (val) => {
    setQuestionNumber(parseInt(questionNumber) + 1);
  };
  return (
    <>
      <Navbar />

      <Breadcrumb title="Skin AI" />
      <section className="about-area ptb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              {questionNumber === 0 ? (
                <div className="about-content">
                  <div className="text-center">
                    <h4>Таны арьсанд тохирсон гоо сайхны бүтээгдэхүүнийг</h4>
                    <h3>ХИЙМЭЛ ОЮУН УХААНД СУУРИЛСАН ЗӨВЛӨХ</h3>
                    <h4>санал болгоход бэлэн байна.</h4>
                    <p style={{ fontSize: 19 }}>
                      Та цөөн асуултад хариулж өөрийнхөө арьсанд таарсан
                      бүтээгдэхүүнийг 5 минутын дотор мэдэх болно.
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      style={{ width: 250 }}
                      class="btn btn-light m-2"
                      onClick={(e) => {
                        nextQuestion(e);
                      }}
                    >
                      эхэлцгээе
                    </button>
                  </div>
                </div>
              ) : parseInt(questionNumber) === 1 ? (
                <div className="about-content">
                  <div className="d-flex align-items-center">
                    <div className="col-1 text-center">
                      <i
                        className="fas fa-chevron-left click-hover"
                        onClick={(e) => {
                          prevQuestion(e);
                        }}
                      ></i>
                    </div>
                    <div>
                      <h4>Таны өөрийн арьсны төрлийг сонгоно уу?</h4>
                    </div>
                  </div>
                  <hr />
                  {answer1.map((ans) => {
                    return (
                      <button
                        style={{ width: 300 }}
                        class="btn-sm btn-light m-2"
                        onClick={(e) => {
                          nextQuestion(e);
                        }}
                        checked={true}
                      >
                        <h6 className="mb-0">{ans.name}</h6>
                        <p>{ans.desc}</p>
                      </button>
                    );
                  })}
                </div>
              ) : parseInt(questionNumber) === 2 ? (
                <div className="about-content">
                  <div className="d-flex align-items-center">
                    <div className="col-1 text-center">
                      <i
                        className="fas fa-chevron-left click-hover"
                        onClick={(e) => {
                          prevQuestion(e);
                        }}
                      ></i>
                    </div>
                    <div>
                      <h4>
                        Таны нүүрний арьсанд ямар нэгэн асуудал тулгарч байгаа
                        юу?
                      </h4>
                    </div>
                  </div>
                  <hr />
                  {answer2.map((ans) => {
                    return (
                      <button
                        style={{ width: 180 }}
                        class="btn-sm btn-light m-2"
                        onClick={(e) => {
                          nextQuestion(e);
                        }}
                      >
                        <h6 className="mb-0">{ans.name}</h6>
                        <p>{ans.desc}</p>
                      </button>
                    );
                  })}
                </div>
              ) : parseInt(questionNumber) === 3 ? (
                <div className="about-content">
                  <div className="d-flex align-items-center">
                    <div className="col-1 text-center">
                      <i
                        className="fas fa-chevron-left click-hover"
                        onClick={(e) => {
                          prevQuestion(e);
                        }}
                      ></i>
                    </div>
                    <div>
                      <h4>Та харшилтай юу?</h4>
                    </div>
                  </div>
                  <hr />

                  {answer3.map((ans) => {
                    return (
                      <button
                        style={{ width: 180 }}
                        class="btn-sm btn-light m-2"
                        onClick={(e) => {
                          nextQuestion(e);
                        }}
                      >
                        <h6 className="mb-0">{ans.name}</h6>
                        <p>{ans.desc}</p>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <button
                  onClick={(e) => {
                    prevQuestion(e);
                  }}
                >
                  bi omnoh
                </button>
              )}
              {/* <h5>Beauty skkin analysis AI</h5>
                <p>Beauty skkin analysis AI</p>
                <h3>Таны арьсанд тохирсон гоо сайхны бүтээгдэхүүнийг</h3>
                <p>Таны арьсанд тохирсон гоо сайхны бүтээгдэхүүнийг</p>
                {show && <h3>ХИЙМЭЛ ОЮУН УХААНД СУУРИЛСАН ЗӨВЛӨХ</h3>}
                <h3>санал болгоход бэлэн байна.</h3>
                <h5>
                  Та цөөн асуултад хариулж өөрийнхөө арьсанд таарсан
                  бүтээгдэхүүнийг 5 минутын дотор мэдэх болно.
                </h5>

                <div className="signature mb-0">
                  <button onClick={() => setShow((prev) => !prev)}>ffff</button>
                  <img src="/images/signature.png" alt="image" />
                </div> */}
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
};

export default Index;
