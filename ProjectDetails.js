import Pages from "../Page/Pages";
import Booking from "../../img/booking-info.svg";
import files3 from "../../img/files3.png";
// import Booking from "../../img/booking-info.svg";
import browser from "../../img/browser.svg";

import pdf from "../../img/pdf.png";
import ppt from "../../img/ppt.png";
import xls from "../../img/xls.png";
import doc from "../../img/doc.png";
import down1 from "../../img/down-arrow.svg";
import share1 from "../../img/share-arrow.svg";
import cardimage from "../../img/img.png";
import circle from "../../img/circle (1).png";
import arrow from "../../img/circle-arrow.svg";
import graph from "../../img/graph.png";
import imgs from "../../img/img.png";
import probr from "../../img/AA2.svg";
import appba from "../../img/Bitmap.svg";
import spec from "../../img/Bitmap1.svg";
import plan from "../../img/blueprint.svg";
import proinfo from "../../img/business-and-trade.svg";
import consult from "../../img/consultant.svg";
import proteam from "../../img/consultant1.svg";
import payment from "../../img/credit-card.svg";
import bookinfo from "../../img/google-forms.svg";
import media from "../../img/image.svg";
import calcu from "../../img/keys.svg";
import comm from "../../img/percentage.svg";
import pri from "../../img/tag.svg";

import cardimage1 from "../../img/img1.png";
import cardimage2 from "../../img/img2.png";
import image1 from "../../img/image.png";
import image2 from "../../img/image1.png";
import image3 from "../../img/image2.png";
import image4 from "../../img/image3.png";
// import circle from "../../img/circle.png";
import like from "../../img/like.svg";
import next from "../../img/next.svg";
import share from "../../img/share1.svg";
import attatchment from "../../img/attachment.svg";
import profile from "../../img/profileImage.png";
import build from "../../img/building.png";
import PendingSharpIcon from "@mui/icons-material/PendingSharp";

import defaultimage1 from "../../img/profile-images.png";
import golfimage from "../../img/golf.png";
import { Modal, Button } from "react-bootstrap";

import React, { useEffect, useState, useLayoutEffect } from "react";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import "./style.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Axios from "../../Axios/Axios";
import { set } from "lodash";
const ProjectDetails = (props) => {
  const [data, setData] = useState([]);
  const [projetdata, setPojectData] = useState(null);
  console.log(projetdata);
  const [currentTab, setCurrentTab] = useState("projectInfo");
  const prms = useParams();
  const [ImagesShown, setImagesShown] = useState([]);
  useEffect(() => {
    setImagesShown([]);
  }, [currentTab]);
  // mediaGallery planLayout paymentPlans approvedBanks pricing calculationSheet bookingInfo commissionSlabs consultants specifications projectTeam crmTeam
  const [projectFields, setProjectFields] = useState({
    projectInfo: {
      projectInfo: [
        "brochure",
        "salesPresentation",
        "projectMap",
        "reraNumberFile",
        "projectTeaserImages",
      ],
      brochure: "",
      salesPresentation: "",
      projectMap: "",
      reraNumberFile: "",
      projectTeaserImages: "",
    },
    mediaGallery: {
      projectMedia: "",
      sampleFlatPics: "",
    },
    planLayout: {
      brochure: "",
      salesPresentation: "",
      projectMap: "",
      reraNumberFile: "",
      projectTeaserImages: "",
    },
    paymentPlans: {
      brochure: "",
      salesPresentation: "",
      projectMap: "",
      reraNumberFile: "",
      projectTeaserImages: "",
    },
    approvedBanks: {
      brochure: "",
      salesPresentation: "",
      projectMap: "",
      reraNumberFile: "",
      projectTeaserImages: "",
    },
    pricing: {
      brochure: "",
      salesPresentation: "",
      projectMap: "",
      reraNumberFile: "",
      projectTeaserImages: "",
    },
  });
  // const Bar = () => (
  //   <ProgressBar label="Arbitrary content">
  //     <CircularProgressbarWithChildren value={66}>
  //       <div>66%</div>
  //       <div style={{ fontSize: 12, marginTop: -5 }}>
  //         <strong>36%</strong> mate
  //       </div>
  //     </CircularProgressbarWithChildren>
  //   </ProgressBar>
  // );
  // function ProgressBar(props) {

  const onTabClick = (name) => (e) => {
    console.log(name);
    setCurrentTab(name);
    if (name === "projectInfo") {
      setImagesShown(projetdata);
    }
  };

  useLayoutEffect(() => {
    // console.log(prms);
    const getProjects = async () => {
      var config = {
        method: "get",
        url: `/project/${prms ? prms.id : 0}/detail`,
      };
      try {
        let { data } = await Axios(config);
        // console.log("project details",data);
        console.log(JSON.stringify(data));
        setPojectData(data.project);
        // setData(data.project.brochure);
        // alert(JSON.stringify(setData));
      } catch (err) {
        console.log("project details error", err);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {}, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    // alert(JSON.stringify(projetdata));

    var checkArray = [];
    if (item == "brochure") {
      setData([]);
      setData(projetdata.brochure ? projetdata.brochure : []);
      setShow(true);
    } else if (item == "projectMap") {
      setData([]);
      setData(projetdata.projectMap ? projetdata.projectMap : []);
      setShow(true);
    } else if (item == "salesPresentation") {
      setData([]);
      setData(projetdata.salesPresentation ? projetdata.salesPresentation : []);
      setShow(true);
    } else if (item == "reraNumberFile") {
      setData([]);
      setData(projetdata.reraNumberFile ? projetdata.reraNumberFile : []);
      setShow(true);
    } else if (item == "projectTeaserImages") {
      setData([]);
      setData(
        projetdata.projectTeaserImages ? projetdata.projectTeaserImages : []
      );
      setShow(true);
    }
  };

  if (!projetdata) {
    return <Pages></Pages>;
  } else {
    return (
      <Pages>
        {projetdata && projetdata && (
          <div class="content-wrapper" style={{ marginLeft: "0px" }}>
            <div class="container-full">
              <div class="content-header">
                <div class="d-flex align-items-center">
                  <div class="mr-auto">
                    <h2 class="re1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#1d7dea"
                        class="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      &nbsp;
                      <strong style={{ color: "#3b3b3b" }}>
                        RESIDENTIAL PROJECTS
                      </strong>
                    </h2>
                    <h3 class="page-title re2">
                      {" "}
                      <strong>{projetdata.name}</strong>(
                      {projetdata.projectStatus})
                      {/* <span className="harnumber">- HARERA/GGM/2019/34</span> */}
                      <span className="harnumber">
                        - {projetdata.reraNumber}
                      </span>
                    </h3>
                    <span> </span>
                  </div>
                  <div class="pull-right">
                    <img src={golfimage} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #cedbef",
                  marginLeft: "30px",
                  paddingBottom: "15px",
                }}
              ></div>

              <section class="content">
                <div class="row ">
                  <div class="col-lg-8">
                    {/* <div class="col-md-12 col-lg-12"> */}
                    <div class="card border-0 divCardDes">
                      <div className="card-body">
                        <div className="row ">
                          <div
                            className="col-lg-4 rowWidth"
                            style={{ borderRight: "1px solid #e0e0e0" }}
                          >
                            <CircularProgressbarWithChildren
                              value={66}
                              strokeWidth={11}
                            >
                              <div>
                                <p
                                  className="divBar"
                                  style={{ fontSize: "11px" }}
                                >
                                  Your Brokers
                                  <p style={{ paddingLeft: "4px" }}>
                                    <strong style={{ fontSize: "20px" }}>
                                      1619
                                    </strong>
                                  </p>
                                </p>
                              </div>
                            </CircularProgressbarWithChildren>
                            <h5 class="card-title tot hCard">
                              Total Brokers{" "}
                              <span class="font-weight-600 number">956</span>
                            </h5>
                          </div>
                          <div className="col-lg-8 col-8">
                            <div style={{ marginTop: "20px" }}>
                              <strong>Top Channel Partners</strong>
                            </div>

                            <div class="row " style={{ marginTop: "20px" }}>
                              <div class="col-lg-3 col-3">
                                <div>
                                  <img src={cardimage} className="cardImage" />
                                  <p className="cardImageColor">Gaurav Saini</p>
                                </div>
                              </div>
                              <div class="col-lg-3 col-3">
                                <div>
                                  <img src={cardimage1} className="cardImage" />
                                  <p className="cardImageColor">Rakesh Kumar</p>
                                </div>
                              </div>
                              <div class="col-lg-3 col-3">
                                <div>
                                  <img src={cardimage2} className="cardImage" />
                                  <p className="cardImageColor">Kishan jain</p>
                                </div>
                              </div>
                              <div class="col-lg-3 col-3">
                                <div>
                                  <img src={cardimage} className="cardImage" />
                                  <p className="cardImageColor">Vijay Kumar</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    <div class="row carmar">
                      <div class="col-md-4 col-lg-4 col-6">
                        <div class="card  cardhw1">
                          <div class="row">
                            <div class="col-lg-6">
                              {" "}
                              <h4 class="broadcast1">Total Broadcasts </h4>
                            </div>
                            <div class="col-lg-6">
                              <strong>
                                {" "}
                                <p class="nu1">1556</p>
                              </strong>
                            </div>
                          </div>
                          {/* <CircularProgressbarWithChildren
                          value={16}
                          strokeWidth={10}
                          styles={buildStyles({
                            pathColor: "#025dc9",
                          })}
                          styles={{ root: { height: 100 } }}
                        >
                          <div style={{ fontSize: 12, marginTop: -5 }}>
                            <p class="bar1">
                              Your <br />
                              Broadcasts
                              <br />
                              <strong className="NumberSize">217</strong>
                            </p>
                          </div>
                        </CircularProgressbarWithChildren> */}
                          <img src={circle} class="piegraph" />

                          <div class="row" style={{ paddingTop: "20px" }}>
                            <div
                              class="col-lg-4"
                              style={{ paddingLeft: "20px" }}
                            >
                              <p class="barp">General Update</p>
                              <p class="barper">
                                <strong>653</strong>
                                <span class="barrep">59%</span>{" "}
                              </p>
                            </div>
                            <div class="col-lg-4">
                              <p class="barp">
                                Offers
                                <br /> for Client
                              </p>
                              <p class="barper">
                                <strong>327</strong>
                                <span class="barrep">28%</span>{" "}
                              </p>{" "}
                            </div>
                            <div class="col-lg-4">
                              <p class="barp">
                                Offers <br />
                                for Cp
                              </p>{" "}
                              <p class="barper">
                                <strong>219</strong>
                                <span class="barrep">21%</span>{" "}
                              </p>
                            </div>
                          </div>
                          <hr class="hrc1" />
                          <div class="row">
                            <div
                              class="col-lg-4"
                              style={{ paddingLeft: "20px" }}
                            >
                              {" "}
                              <p class="barp">News Update</p>
                              <p class="barper">
                                <strong>86</strong>
                                <span class="barrep">11%</span>{" "}
                              </p>
                            </div>
                            <div class="col-lg-4">
                              {" "}
                              <p class="barp">Video Teasers</p>
                              <p class="barper">
                                <strong>165</strong>
                                <span class="barrep">9%</span>{" "}
                              </p>
                            </div>
                            <div class="col-lg-4">
                              <p class="barp">
                                Misc.
                                <br />.
                              </p>{" "}
                              <p class="barper">
                                <strong>58</strong>
                                <span class="barrep">3%</span>{" "}
                              </p>
                            </div>
                          </div>
                          <hr
                            style={{ color: "#dfdfdf", marginTop: "-10px" }}
                          />

                          <div class="row">
                            <div class="col-lg-8">
                              <p class="pbrokerbo1"> View All Broadcasts</p>
                            </div>
                            <div class="col-lg-4  cardF">
                              <img src={arrow} />
                            </div>
                          </div>
                        </div>
                        {/* <div class="card cardShadow text-center">
                        <div class="card-body rowWidth1">
                        
                          <CircularProgressbarWithChildren
                            value={66}
                            strokeWidth={10}
                            styles={buildStyles({
                              pathColor: "#E56452",
                            })}
                          >
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                              <p className="barSize">
                                Your <br />
                                Visits
                                <br />
                                <strong className="NumberSize">145</strong>
                              </p>
                            </div>
                          </CircularProgressbarWithChildren>

                          <h5
                            class="card-title tot hCard1"
                            // style={{ marginTop: "10px" }}
                          >
                            Total Visits{" "}
                            <span class="font-weight-600 number">956</span>
                          </h5>
                        </div>
                      </div> */}
                      </div>

                      <div class="col-md-4 col-lg-4 col-6">
                        {/* <div class="card cardShadow text-center">
                        <div class="card-body rowWidth1">
                          
                          <CircularProgressbarWithChildren
                            value={46}
                            strokeWidth={10}
                            styles={buildStyles({
                              pathColor: "#B564CC",
                            })}
                          >
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                              <p className="barSize">
                                Your <br />
                                Registration
                                <br />
                                <strong className="NumberSize">214</strong>
                              </p>
                            </div>
                          </CircularProgressbarWithChildren>
                          <h5
                            class="card-title tot hCard1"
                            style={{ marginTop: "10px" }}
                          >
                            Total Registrations
                            <span class="font-weight-600 number">346</span>
                          </h5>
                        </div>
                      </div> */}
                        <div class="card  cardhw1">
                          <div class="row">
                            <div class="col-lg-6">
                              {" "}
                              <h4 class="client1">Client Visits </h4>
                            </div>
                            <div class="col-lg-6">
                              <strong>
                                {" "}
                                <p class="nu2">298</p>
                              </strong>
                            </div>
                            {/* <CircularProgressbarWithChildren
                            value={16}
                            strokeWidth={10}
                            styles={buildStyles({
                              pathColor: "#025dc9",
                            })}
                            styles={{ root: { height: 100 } }}
                          >
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                              <p class="bar1">
                                Your <br />
                                Broadcasts
                                <br />
                                <strong className="NumberSize">217</strong>
                              </p>
                            </div>
                          </CircularProgressbarWithChildren> */}
                            <img src={graph} class="colugraph" />
                            <p class="clientp">TODAY AT 3:00 PM</p>
                            <div class="clientdi">
                              <strong>
                                <p>M3M MERLIN</p>
                              </strong>
                              <p class="clientp1">3BHK - 2322 sqft</p>
                            </div>
                            <div class="clientdi1">
                              <p>Client: Praveen Kumar</p>
                              <p class="clientp1">Broker: Vishal Mendiratta</p>
                            </div>
                          </div>
                          <hr style={{ color: "#dfdfdf", marginTop: "5px" }} />
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="pbrokerbo"> 14 Upcoming Visits</p>
                            </div>
                            <div class="col-lg-4 cardF">
                              <img src={arrow} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 col-lg-4 col-6">
                        {/* <div class="card cardShadow text-center">
                        <div class="card-body rowWidth1">
                        
                          <CircularProgressbarWithChildren
                            value={86}
                            strokeWidth={10}
                            styles={buildStyles({
                              pathColor: "#1AA9C1",
                            })}
                          >
                            <div style={{ fontSize: 12, marginTop: -5 }}>
                              <p className="barSize">
                                Your <br />
                                Bookings
                                <br />
                                <strong className="NumberSize">89</strong>
                              </p>
                            </div>
                          </CircularProgressbarWithChildren>
                          <h5
                            class="card-title tot hCard1"
                            style={{ marginTop: "10px" }}
                          >
                            Total Bookings
                            <span class="font-weight-600 number">234</span>
                          </h5>
                        </div>
                      </div> */}
                        <div class="card  cardhw1">
                          <div class="row">
                            <div class="col-lg-6">
                              {" "}
                              <h4 class="broker1">Total Brokers </h4>
                            </div>
                            <div class="col-lg-6">
                              <strong>
                                {" "}
                                <p class="nu3">956</p>
                              </strong>
                            </div>
                          </div>
                          <CircularProgressbarWithChildren
                            value={86}
                            strokeWidth={10}
                            styles={
                              (buildStyles({
                                pathColor: "#025dc9",
                              }),
                              { root: { height: 100 } })
                            }
                            // styles={{ root: { height: 100 } }}
                          >
                            <div class="brokerPro">
                              <p class="bar1">
                                Your <br />
                                Brokers
                                <br />
                                <strong className="NumberSize">145</strong>
                              </p>
                            </div>
                          </CircularProgressbarWithChildren>
                          <p class="pbroker">
                            Top Channel Partners of this Project
                          </p>
                          <div>
                            <div class="row">
                              <div class="col-lg-2 arrowimg">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-chevron-left"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                  />
                                </svg>
                              </div>
                              <div class="col-lg-5">
                                <img src={imgs} class="imgbro" />
                              </div>
                              <div class="col-lg-2 arrowimg1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="#067be9"
                                  class="bi bi-chevron-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </div>
                            </div>

                            <strong>
                              <p class="rakesh">Rakesh Roshan</p>
                            </strong>
                            <hr
                              style={{ color: "#dfdfdf", marginTop: "14px" }}
                            />
                          </div>
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="pbrokerbo"> View All Brokers</p>
                            </div>
                            <div class="col-lg-4  cardF">
                              <img src={arrow} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <div className="row">
                          {/* <div class="col-lg-12">
                          <div class="proBroa">
                            <img src={probr} />
                            <span class="spanbro">Project Broadcasts</span>
                          </div>
                        </div> */}
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={proinfo} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("projectInfo")}
                              >
                                Project Info
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={media} />

                              <span
                                class="spanbro"
                                onClick={onTabClick("mediaGallery")}
                              >
                                Media Gallery
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={plan} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("planLayout")}
                              >
                                Plan Layout
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={payment} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("paymentPlans")}
                              >
                                Payment Plans
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={appba} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("approvedBanks")}
                              >
                                Approved Banks
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={pri} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("pricing")}
                              >
                                Pricing
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={calcu} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("calculationSheet")}
                              >
                                Calculation Sheet
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={Booking} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("bookingInfo")}
                              >
                                Booking Info
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={comm} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("commissionSlabs")}
                              >
                                Commission Slabs
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={consult} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("consultants")}
                              >
                                Consultants
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={spec} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("specifications")}
                              >
                                Specifications
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa">
                              <img src={proteam} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("projectTeam")}
                              >
                                Project Team
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="proBroa proDetailsMa proDetailsMa1">
                              <img src={proteam} />
                              <span
                                class="spanbro"
                                onClick={onTabClick("crmTeam")}
                              >
                                CRM Team
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-9">
                        <div className="row">
                          {currentTab === "projectInfo" &&
                            projetdata &&
                            projectFields.projectInfo.projectInfo.map(
                              (item) => {
                                console.log(item);
                                console.log(projetdata.item);
                                return (
                                  <>
                                    <div class="col-lg-5">
                                      <div
                                        class="card text-center"
                                        onClick={() => {
                                          handleShow(item);
                                        }}
                                      >
                                        <div class="card-body ment">
                                          <img src={files3} class="w-80 mb-4" />
                                          <h5 class="card-title">{item}</h5>
                                          <p class="card-text last">
                                            Last updated on Dec 24, 2020
                                          </p>
                                          <div class="downl">
                                            <div class="row">
                                              <div class="col-lg-6 dow">
                                                <div class="d-flex align-items-center loa">
                                                  <span
                                                    class="eye"
                                                    style={{
                                                      marginLeft: "24px",
                                                    }}
                                                  >
                                                    <img src={down1} />
                                                  </span>
                                                  <div class="ml-10">
                                                    <h5 class="mb-0 lik text-primary">
                                                      <a
                                                        download={true}
                                                        href={projetdata.item}
                                                      >
                                                        Download
                                                      </a>
                                                    </h5>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="col-lg-6">
                                                <div class="d-flex align-items-center loa">
                                                  <span
                                                    class="eye"
                                                    style={{
                                                      marginLeft: "24px",
                                                    }}
                                                  >
                                                    <img src={share1} />
                                                  </span>
                                                  <div class="ml-10">
                                                    <h5 class="mb-0 lik text-primary">
                                                      Share
                                                    </h5>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              }
                            )}
                        </div>
                      </div>
                    </div>

                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>View Files</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div class="upload-area">
                          <div class="upload-area__drop-zoon drop-zoon">
                            {data.length ? (
                              <ul class="abc">
                                {data.map((im, index) => {
                                  return (
                                    <li>
                                      {im.split(".").pop() == "pdf" && (
                                        <img
                                          src={pdf}
                                          class="multiImage"
                                          href=""
                                        />
                                      )}
                                      {im.split(".").pop() == "png" && (
                                        <img src={im} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "jpeg" && (
                                        <img src={im} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "jpg" && (
                                        <img src={im} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "pptx" && (
                                        <img src={ppt} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "docx" && (
                                        <img src={doc} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "doc" && (
                                        <img src={doc} class="multiImage" />
                                      )}
                                      {im.split(".").pop() == "xlsx" && (
                                        <img src={xls} class="multiImage" />
                                      )}
                                      <p class="bascF">
                                        {JSON.stringify(
                                          im.replace(
                                            "https://builder-broadcast.s3.ap-south-1.amazonaws.com/",
                                            ""
                                          )
                                        )}
                                      </p>
                                      <a href={im}>Download</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button> */}
                      </Modal.Footer>
                    </Modal>

                    <div class="row">
                      <div class="col-md-3 col-lg-2 col-4 ral">
                        <div class="box-box">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              General <br />
                              Updates
                            </h4>
                          </div>
                          <div class="box-body num">
                            <p class="numb">1546</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-lg-2 col-4 ge">
                        <div class="box off">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              Offers for <br />
                              Brokers
                            </h4>
                          </div>

                          <div class="box-body num">
                            <p class="numb">355</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-lg-2 col-4 ge">
                        <div class="box buy">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              Offers for <br />
                              Buyers
                            </h4>
                          </div>

                          <div class="box-body num">
                            <p class="numb">567</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-lg-2 col-4 ge">
                        <div class="box upd">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              Project <br />
                              Updates
                            </h4>
                          </div>

                          <div class="box-body num">
                            <p class="numb">256</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-lg-2 col-4 ge">
                        <div class="box eve">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              Events & <br />
                              Polls
                            </h4>
                          </div>

                          <div class="box-body num">
                            <p class="numb">256</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 col-lg-2 col-4 gena">
                        <div class="box pp">
                          <div class="box-header gen">
                            <h4 class="box-title general">
                              <i
                                class="fa fa-plus-circle mr-15 broadcast"
                                aria-hidden="true"
                              ></i>
                              <br />
                              Add New <br />
                              Broadcast
                            </h4>
                          </div>

                          <div class="box-body num">
                            <p class="numb"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 col-lg-12 col-12 filter irrigation">
                        <div class="card card12">
                          <div class="card-header profile-header">
                            <div class="d-flex align-items-center">
                              <div class="icon bg-primary-light rounded-circle w-60 h-60 text-center">
                                <span class="font-size-30 icon-Bulb1">
                                  <img src={defaultimage1} />
                                </span>
                              </div>

                              <div class="ml-15">
                                <h5 class="mb-0">You</h5>
                                <p class="text-fade font-size-12 mb-0">
                                  23 mins ago
                                </p>
                              </div>
                            </div>
                            <div class="golf1 d-flex align-items-center sha">
                              <span className="eye">
                                <img src={like} />
                              </span>
                              <div className="ml-10">
                                <h5 class="mb-0 ">23 Likes</h5>
                              </div>
                            </div>
                          </div>

                          <div class="card-body view">
                            <div class="review-all">
                              <div class="row">
                                <div
                                  className="col-lg-8"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  <p className="cardp">
                                    321 Brokers have viewed this update
                                  </p>
                                </div>
                                <div className="col-lg-4">
                                  <div class="align-items-center">
                                    <span class="share1">
                                      <a href="#">
                                        <img src={share} />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h5 class="para cardp1">
                              Lorem ipsum dolor sit amet
                            </h5>
                            <p class="cura">
                              Curabitur porttitor tellus et libero dignissim,
                              commodo vulputate augue condimentum. Etiam id diam
                              elit.
                            </p>

                            <div class="col-lg-12 mb-25">
                              <div class="d-flex align-items-center sha">
                                <span class="attach">
                                  <img src={attatchment} />
                                </span>
                                <div class="ml-10">
                                  <h5 class="mb-0 lik">Update-Rate-List.xls</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 col-lg-12 col-12 filter irrigation">
                        <div class="card">
                          <div class="card-header profile-header">
                            <div class="d-flex align-items-center">
                              <div class="icon bg-primary-light rounded-circle w-60 h-60 text-center">
                                <span class="font-size-30 icon-Bulb1">
                                  <img src={profile} />
                                </span>
                              </div>

                              <div class="ml-15">
                                <h5 class="mb-0">Rakesh Kumar</h5>
                                <p class="text-fade font-size-12 mb-0">
                                  2 hours ago
                                </p>
                              </div>
                            </div>
                            <div class="golf1 d-flex align-items-center sha">
                              {/* <img src={golfimage} /> */}
                              <span className="eye">
                                <img src={like} />
                              </span>
                              <div className="ml-10">
                                <h5 class="mb-0 ">345 Likes</h5>
                              </div>
                            </div>
                          </div>

                          <div class="card-body view">
                            <div class="review-all1">
                              <div class="row">
                                <div
                                  className="col-lg-8"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  <p
                                    className="cardp"
                                    style={{ color: "#c9482a" }}
                                  >
                                    You have not shared this update yet
                                  </p>
                                </div>
                                <div className="col-lg-4">
                                  <div class="align-items-center">
                                    <span class="share1">
                                      <a href="#">
                                        <img src={share} />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="building mt-25">
                              <div class="row">
                                <div class="col-lg-3 col-3">
                                  <img src={build} class="card13" />
                                </div>

                                <div class="col-lg-3 col-3">
                                  <img src={build} class="card13" />
                                </div>

                                <div class="col-lg-3 col-3">
                                  <img src={build} class="card13" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-12 Side">
                    <a
                      href="#"
                      class="box"
                      style={{ backgroundColor: "#1d7dea" }}
                    >
                      <div class="box-body" style={{ paddingBottom: "0px" }}>
                        <div class="align-items-center">
                          <div class="ml-10">
                            <p class="text-white mb-2 upcom">
                              YOUR UPCOMING CLIENT VISIT
                            </p>
                            <div class="row ">
                              <div
                                class="col-lg-3 col-md-3"
                                style={{ paddingLeft: "0px" }}
                              >
                                <div
                                  class="card1"
                                  style={{ backgroundColor: "#0761c8" }}
                                >
                                  <div
                                    class="card-body"
                                    style={{ padding: "0" }}
                                  >
                                    <p
                                      className="cardToday"
                                      // style={{ fontSize: "12px", color: "#fcd34b" }}
                                    >
                                      TODAY <br />
                                      3:00 PM
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 col-md-7 cardBox">
                                <p className="cardSize">
                                  M3M - GOLFESTATE{" "}
                                  <span>
                                    {" "}
                                    <img src={next} className="next" />
                                  </span>{" "}
                                  <br />
                                  10:30 am - 11:30 am
                                </p>
                                <p className="cardSize">
                                  MR. MALIK <br />
                                  3BHK - 3452 sqft
                                </p>
                              </div>
                              <div className="col-lg-2 col-md-2 cardBox1">
                                <p className="cardIcon ">
                                  <PendingSharpIcon
                                    style={{ color: "white", fontSize: "30px" }}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="#" class="box upc">
                      <div class="box-body">
                        <div class="align-items-center">
                          <div class="ml-10">
                            <p class="text-white mb-2 upcom">UPCOMING EVENT</p>
                            <h5 class="text-white mb-2 gol">
                              Golf Estate Phase 2 Launch Party
                            </h5>
                            <p class="rad">
                              Radission, Sohna Road <br />
                              Dec 15, 2020 at 6 p.m
                              {/* <img
                            src="../images/circle-arrow.svg"
                            class="arrow-cir"
                          /> */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="white"
                                class="bi bi-arrow-right-circle-fill arrow-cir"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                              </svg>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="#" class="box run">
                      <div class="box-body">
                        <div class="align-items-center">
                          <div class="ml-10">
                            <p class="mb-2 runn">RUNNING POLL</p>
                            <h5 class="mb-2 what">
                              What should be the PLC charges fo....
                            </h5>
                            <p class="end">
                              End on: Dec 15, 2020
                              {/* <img
                            src="../images/circle-arrow.svg"
                            class="arrow-cir"
                          /> */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="white"
                                class="bi bi-arrow-right-circle-fill arrow-cir"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                              </svg>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* <div> */}
                    <div>
                      <h5 className="noti">
                        <strong> NOTIFCATION FOR THOS PROJECT</strong>{" "}
                        <span class="badge badge-secondary">5</span>
                      </h5>
                    </div>
                    <div class="bac">
                      <p class="text1">Today, October 16</p>
                    </div>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={image1} />
                      </div>
                      <div class="col-lg-9">
                        <p class="font1">
                          <strong>Mr. Rajneesh Kumar</strong> downloaded Project{" "}
                          <br />
                          Brochure.{" "}
                        </p>
                      </div>
                    </div>
                    <hr class="hrc" />
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={image2} />
                      </div>
                      <div class="col-lg-9">
                        <p className="font1">
                          <strong>Mr. Prateek Sharma</strong> accepted the event{" "}
                          <br />
                          innovation with + 1{" "}
                        </p>
                      </div>
                    </div>
                    <hr class="hrc" />
                    <div class="row gr">
                      <div class="col-lg-3">
                        <img src={image3} />
                      </div>
                      <div class="col-lg-9">
                        <p className="font1">
                          <strong>Mr. Rajneesh Kumar</strong> downloaded Update-{" "}
                          <br />
                          Rate.ixs.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="bac">
                      <p class="text1">October 15</p>
                    </div>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={image4} />
                      </div>
                      <div class="col-lg-9">
                        <p className="font1">
                          <strong>Mr. Rajneesh Kumar</strong> downloaded Project{" "}
                          <br />
                          Brochure.{" "}
                        </p>
                      </div>
                    </div>
                    <hr class="hrc" />
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={image2} />
                      </div>
                      <div class="col-lg-9">
                        <p className="font1">
                          <strong>Mr. Prateek Sharma</strong> accepted the event{" "}
                          <br />
                          innovation with + 1{" "}
                        </p>
                      </div>
                    </div>
                    <hr class="hrc" style={{ marginTop: "85px" }} />
                    {/* </div> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </Pages>
    );
  }
};

export default ProjectDetails;
