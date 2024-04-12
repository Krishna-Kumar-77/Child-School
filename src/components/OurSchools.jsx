import React from "react";
import Heading from "../ui/Heading";
import { UnderLineDiv } from "../ui/UnderLineDiv";
import styled from "styled-components";
import { ImgDiv } from "../ui/ImgDiv";
import { Imag } from "../ui/Imag";
import images from "../images/img-15.png";
import image1 from "../images/left-arrow.png";
import image2 from "../images/right-arrow.png";
import { P } from "../ui/P";
import { CardComponent } from "../ui/CardComponent";
import { GridView } from "../ui/GridView";
import { NavLink } from "react-router-dom";

const AboutOurSchool = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #000;
  gap: 2rem;
  padding: 3rem 4rem;
  margin-bottom: 10rem;
`;
const Div = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin: 10rem 0;
`;
const CircularButton = styled(NavLink)`
  display: flex;
  width: ${(props) => (props.width ? props.width : "6.5rem")};
  height: ${(props) => (props.height ? props.height : "6.5rem")};
  border-radius: 100%;
  background-color: ${(props) =>
    props.$backgroundcolor ? props.$backgroundcolor : "#fb6818"};
  justify-content: center;
  text-align: center;
  align-items: center;
  /* margin: auto; */
`;
const MyDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
const MyImage = styled(Imag)`
  position: relative;
  border-radius: 3px;
  top: -5rem;
`;
const MyHeading = styled(Heading)`
@media (max-width: 950px){
font-size: 2.2rem;
}
`
function OurSchools() {
  return (
    <AboutOurSchool>
      <Div>
        <div style={{ marginBottom: "5rem" }}>
          <div>
            <MyHeading as="h1" color="#ffffff" fontWeight="500">
              ABOUT OUR SCHOOL
            </MyHeading>
            <UnderLineDiv $backgroundcolor="#ffffff"></UnderLineDiv>
          </div>
          <P width="100%" color="#ffffff">
            It is a long established fact that a reader will be distracted by
            the readable content of a pageIt is a long established fact that a
            reader will be distracted by the readable content of a page
          </P>
        </div>
        <MyDiv>
          <CircularButton>
            <ImgDiv $margin="0">
              <Imag width="3rem" src={image1} alt="left-arrow"></Imag>
            </ImgDiv>
          </CircularButton>
          <CircularButton>
            <ImgDiv $margin="0">
              <Imag width="3rem" src={image2} alt="right-arrow"></Imag>
            </ImgDiv>
          </CircularButton>
        </MyDiv>
      </Div>
      {/* Card View Start */}
      <GridView $repeat={`repeat(2, 1fr)`} $margin="8rem 0 0 0" $gridGap="3rem">
        <div style={{ margin: "0 0 7rem 0 " }}>
          <CardComponent>
            <ImgDiv $margin='0'>
              <MyImage src={images} alt="Student-img" />
            </ImgDiv>
            <Heading as="h4">Hannery</Heading>
            <P width="100%" $margin="2rem 0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </P>
          </CardComponent>
        </div>
        <div style={{ margin: "7rem 0 0 0" }}>
          <CardComponent>
            <ImgDiv $margin='0'>
              <MyImage src={images} alt="Student-img" />
            </ImgDiv>
            <Heading as="h4">Hannery</Heading>
            <P width="100%" $margin="2rem 0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </P>
          </CardComponent>
        </div>
      </GridView>
    </AboutOurSchool>
  );
}

export default OurSchools;
