import React from "react";
import styled from "styled-components";
import Video from "./video.mp4";
import Meme from "./meme.png";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b0b0b;
  padding: 0 30px;
  height: 90vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #0b0b0b;
`;

const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20%;
`;

const ContentH1 = styled(motion.h1)`
  display: flex;
  justify-content: flex-start;
  padding-left: 0 15px;
  font-size: 250%;
  margin-left: -5px;
`;

const ContentSvg = styled(motion.img)`
  display: flex;
  justify-content: flex-start;
  alig-items: center;
  border-radius: 1rem;
  margin-right: 5px;
  width: 25%;
  height: 35%;

  @media screen and (max-width: 760px) {
    margin-top: 10%;
    width: 40%;
    height: 50%;
  }
`;

function Pageone() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Container id="home">
      <Content>
        <Text>
          <ContentH1
            style={{ color: "#F5EDED" }}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
          >
            Hi 👋 ,
          </ContentH1>
          <ContentH1
            style={{ color: "#D72323" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            I am Nisarg.
          </ContentH1>
          <ContentH1
            style={{ color: "#F5EDED" }}
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4 }}
          >
            A Fellow Software Developer 👨‍💻.
          </ContentH1>
        </Text>
        <ContentSvg
          src={Meme}
          initial={{ opacity: 0 }}
          animate={{
            rotate: 1080,
            opacity: 1,
            transition: { duration: 3 },
          }}
        />
      </Content>
    </Container>
  );
}

export default Pageone;
