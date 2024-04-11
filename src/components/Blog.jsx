import React from "react";
import styled from "styled-components";
import images from "../images/img-12.png";
import Heading from "../ui/Heading";
import { UnderLineDiv } from "../ui/UnderLineDiv";
import { P } from "../ui/P";
import { GridView } from "../ui/GridView";
import { CardComponent } from "../ui/CardComponent";
import { ImgDiv } from "../ui/ImgDiv";
import { Imag } from "../ui/Imag";

const BlogingComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;
const Div = styled.div`
  margin-bottom: 5rem;
`;

function Blog() {
  return (
    <BlogingComponent>
      <Div>
        <Heading as="h1">OUR BLOG</Heading>
        <UnderLineDiv></UnderLineDiv>
        <P width="100%" $margin="2rem 0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page for the intertenment purpose{" "}
        </P>
      </Div>
      {/* CARD ITEMS START */}

      <GridView>
        <CardComponent $padding="0" $overflow='hidden'>
          <ImgDiv>
            <Imag width="100%" $borderRadius="0" src={images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h5">
            Distracted by the readable content of a
          </Heading>
          <P $margin="2rem 0" width="65%">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </P>
        </CardComponent>
        <CardComponent $padding="0" $overflow='hidden'>
          <ImgDiv>
            <Imag width="100%" $borderRadius="0" src={images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h5">
            Distracted by the readable content of a
          </Heading>
          <P $margin="2rem 0" width="65%">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </P>
        </CardComponent>
        <CardComponent $padding="0" $overflow='hidden'>
          <ImgDiv>
            <Imag width="100%" $borderRadius="0" src={images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h5">
            Distracted by the readable content of a
          </Heading>
          <P $margin="2rem 0" width="65%">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </P>
        </CardComponent>
      </GridView>
    </BlogingComponent>
  );
}

export default Blog;
